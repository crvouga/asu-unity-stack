// @ts-check
import PropTypes from "prop-types";
import React, { useMemo, useRef } from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../config";
import { deepMergeLeft } from "../../utils/deep-merge-left";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { useElementContentDimensions } from "../../utils/use-element-position";
import {
  buildGameDataSource,
  gameDataSourceSchema,
} from "../Game/game-data-source/game-data-source-impl";
import { GameDataSourceProvider } from "../Game/GameDataSourceContext";
import { useGameDataSourceLoader } from "../Game/use-game-data-source-loader";
import { GameTable, gameTableFooterButtonSchema } from "../GameTable/GameTable";
import {
  LoadMoreButton,
  loadMorePropTypes,
} from "../LoadMoreButton/LoadMoreButton";
import { mapSectionHeaderProps, SectionHeader } from "../SectionHeader";
import { SportsTabsDesktop, SportsTabsMobile } from "../SportsTabs";
import { sportSchema } from "../SportsTabs/sports-tabs";
import { configInputsSchema, defaultConfigInputs } from "./config-inputs";
import { configLayoutSchema, defaultConfigLayout } from "./config-layout";
import { ConfigOverlap, configOverlapSchema } from "./config-overlap";
import { GameSearchFormSidebar } from "./GameSearchForm/GameSearchFormSidebar";
import { GameSearchFormTopbar } from "./GameSearchForm/GameSearchFormTopbar";
import { useGameSearchForm } from "./GameSearchForm/use-game-search-form";
import { GameTableHero } from "./GameTableHero/GameTableHero";
import { SidebarLayout } from "./SidebarLayout";

const GameTableRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  flex: 1;
  width: 100%;
`;

const GameTableSectionInner = ({ ...props }) => {
  const limit = props?.gameDataSourceLoader?.limit ?? 5;

  const configGameTableForm = props.configGameTableForm ?? {};

  const variant = props.variant ?? "default";

  /** @type {import("./config-layout").ConfigLayout} */
  const configLayout = deepMergeLeft(
    props.configLayout ?? {},
    defaultConfigLayout
  );

  /** @type {import("./config-inputs").ConfigInputs} */
  const configInputs = deepMergeLeft(
    props.configInputs ?? {},
    defaultConfigInputs
  );

  const gameSearchForm = useGameSearchForm({
    enableUrlState: configGameTableForm?.enableUrlState ?? false,
    gameType: props?.tabs?.find(tab => tab?.active)?.gameType ?? "all",
    sportId: props?.sports?.find(sport => sport?.active)?.id ?? "all",
  });

  const gameDataSourceLoader = useGameDataSourceLoader({
    gameType:
      gameSearchForm.gameType === "all" ? null : gameSearchForm.gameType,
    sportId: gameSearchForm.sportId === "all" ? null : gameSearchForm.sportId,
    searchQuery: gameSearchForm.debouncedSearchQuery,
    sortBy: gameSearchForm.sortBy,
    venueId: gameSearchForm.venueId,
    maxAdmissionCost: gameSearchForm.maxAdmissionCost,
    eventType: gameSearchForm.eventType,
    limit,
  });

  const sports = props.sports?.map(sport => ({
    ...sport,
    active: sport.id === gameSearchForm.sportId,
  }));

  const tabs = props.tabs?.map(tab => ({
    ...tab,
    active: tab.id === gameSearchForm.gameType,
  }));

  const onSportItemClick = clickedSportId => () =>
    gameSearchForm.update({ sportId: clickedSportId });

  const activeSport = sports?.find(sport => Boolean(sport?.active));
  const footerButtons =
    activeSport?.footerButtons ?? props?.footerButtons ?? [];
  const footerLinks = activeSport?.footerLinks ?? props?.footerLinks ?? [];

  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const isDesktop = !isMobile;

  //
  //
  //
  //
  //

  /** @type {React.MutableRefObject<HTMLElement | null>} */
  const gameTableFirstRowRef = useRef(null);
  const gameTableFirstRowDimensions =
    useElementContentDimensions(gameTableFirstRowRef);

  /** @type {React.MutableRefObject<HTMLDivElement | null>} */
  const headerRef = useRef(null);
  const headerDimensions = useElementContentDimensions(headerRef);

  const getOverlapStyles = () => {
    switch (props?.configOverlap) {
      case ConfigOverlap["first-row-with-hero"]: {
        return {
          marginTop:
            (headerDimensions.height + gameTableFirstRowDimensions.height) * -1,
        };
      }
      case ConfigOverlap["sport-tabs-with-hero"]: {
        return {
          marginTop: -headerDimensions.height,
        };
      }
      default: {
        return {};
      }
    }
  };

  const getHeroOverlapStyles = () => {
    switch (props?.configOverlap) {
      case ConfigOverlap["first-row-with-hero"]: {
        return {
          paddingBottom:
            headerDimensions.height + gameTableFirstRowDimensions.height,
        };
      }
      case ConfigOverlap["sport-tabs-with-hero"]: {
        return {
          paddingBottom: headerDimensions.height,
        };
      }
      default: {
        return {};
      }
    }
  };

  const renderGameTable = ({ className = "" } = {}) => (
    <GameTableRoot className={className}>
      <GameTable
        {...props}
        {...props.gameTable}
        games={gameDataSourceLoader.rows}
        footerButtons={footerButtons}
        footerLinks={footerLinks}
        skeletonRowCount={limit}
        skeleton={gameDataSourceLoader.isLoadingInitial}
        setFirstRowRef={ref => {
          gameTableFirstRowRef.current = ref;
        }}
      />

      {configLayout.includeLoadMore &&
        gameDataSourceLoader.showLoadNextPage && (
          <LoadMoreButton
            {...props.loadMore}
            onClick={gameDataSourceLoader.loadNextPage}
            loading={gameDataSourceLoader.isLoading}
          />
        )}
    </GameTableRoot>
  );

  return (
    <>
      {variant === "hero" && (
        <GameTableHero
          title={props.title}
          subtitle={props.subtitle}
          subtitleLinks={props.subtitleLinks}
          style={getHeroOverlapStyles()}
          darkMode={props.darkMode}
        />
      )}

      <div style={getOverlapStyles()}>
        <div ref={headerRef}>
          {variant === "default" && (
            <SectionHeader
              {...mapSectionHeaderProps(props)}
              tabs={tabs}
              onTabItemClick={clickedGameType => () =>
                gameSearchForm.update({ gameType: clickedGameType })}
              style={{ paddingBottom: "32px" }}
            />
          )}

          {configLayout.variant === "default" && (
            <GameSearchFormTopbar
              className="container"
              gameSearchForm={gameSearchForm}
              configInputs={configInputs}
              configLayout={configLayout}
              sports={sports}
              configGameTableForm={configGameTableForm}
              darkMode={props.darkMode}
            />
          )}

          {isDesktop && configLayout.includeSportsTabs && (
            <div className="container">
              <SportsTabsDesktop
                {...props}
                sports={sports}
                onSportItemClick={onSportItemClick}
              />
            </div>
          )}
        </div>

        {isMobile && configLayout.includeSportsTabs && (
          <div className="container">
            <SportsTabsMobile
              {...props}
              className="container"
              sports={sports}
              onSportItemClick={onSportItemClick}
              variant="borderless"
            />
          </div>
        )}

        {configLayout.variant === "sidebar" && (
          <SidebarLayout
            className="container"
            renderSidebar={() => (
              <GameSearchFormSidebar
                configGameTableForm={configGameTableForm}
                gameSearchForm={gameSearchForm}
                configInputs={configInputs}
                configLayout={configLayout}
                sports={sports}
                darkMode={props.darkMode}
              />
            )}
            renderContent={() => renderGameTable()}
          />
        )}

        {configLayout.variant === "default" &&
          isDesktop &&
          renderGameTable({ className: "container" })}

        {configLayout.variant === "default" &&
          isMobile &&
          renderGameTable({ className: "" })}
      </div>
    </>
  );
};

const sportSchemaGameTable = PropTypes.shape({
  ...sportSchema,
  footerButtons: PropTypes.arrayOf(gameTableFooterButtonSchema),
  footerLinks: PropTypes.arrayOf(PropTypes.string),
});

GameTableSectionInner.propTypes = {
  ...SectionHeader.propTypes,
  ...GameTable.propTypes,
  sports: PropTypes.arrayOf(sportSchemaGameTable),
  loadMore: loadMorePropTypes,
  configLayout: configLayoutSchema,
  configInputs: configInputsSchema,
  configOverlap: configOverlapSchema,
  variant: PropTypes.oneOf(["default", "hero"]),
  gameTable: GameTable.propTypes,
  sectionHeader: SectionHeader.propTypes,
  configGameTableForm: PropTypes.shape({
    title: PropTypes.string,
    enableUrlState: PropTypes.bool,
  }),
  gameDataSourceLoader: PropTypes.shape({
    limit: PropTypes.number,
  }),
  gameDataSource: gameDataSourceSchema,
};

export const GameTableSection = ({
  gameDataSource: gameDataSourceConfig,
  ...props
}) => {
  const gameDataSource = useMemo(
    () => buildGameDataSource(gameDataSourceConfig),
    [gameDataSourceConfig]
  );
  return (
    <GameDataSourceProvider gameDataSource={gameDataSource}>
      <GameTableSectionInner {...props} />
    </GameDataSourceProvider>
  );
};

GameTableSection.propTypes = GameTableSectionInner.propTypes;
