// @ts-check
import PropTypes from "prop-types";
import React, { useMemo, useRef } from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../config";
import { deepMergeLeft } from "../../utils/deep-merge-left";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { useElementContentDimensions } from "../../utils/use-element-position";
import { findManyInputPropTypes } from "../Game/game-data-source";
import {
  buildGameDataSource,
  gameDataSourcePropTypes,
} from "../Game/game-data-source/game-data-source-impl";
import { GameDataSourceProvider } from "../Game/GameDataSourceContext";
import { useGameDataSourceLoader } from "../Game/use-game-data-source-loader";
import { GameTable } from "../GameTable/GameTable";
import {
  LoadMoreButton,
  loadMorePropTypes,
} from "../LoadMoreButton/LoadMoreButton";
import { SectionFooter } from "../SectionFooter";
import { mapSectionHeaderProps, SectionHeader } from "../SectionHeader";
import { stringToSportId } from "../Sport/sport-id";
import { useUrlSportId } from "../Sport/use-url-sport-id";
import { SportsTabsDesktop, SportsTabsMobile } from "../SportsTabs";
import { sportWithFooterPropTypes } from "../SportsTabs/sports-tabs";
import { configInputsPropTypes, defaultConfigInputs } from "./config-inputs";
import { configLayoutPropTypes, defaultConfigLayout } from "./config-layout";
import { ConfigOverlap, configOverlapPropTypes } from "./config-overlap";
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

  useUrlSportId(urlSportId => {
    if (props.disableUrlSportId) return;
    gameSearchForm.update({ sportId: urlSportId ?? "all" });
  });

  const gameDataSourceLoader = useGameDataSourceLoader({
    limit: 5,
    searchQuery: gameSearchForm.debouncedSearchQuery,
    ...gameSearchForm,
    ...props.gameDataSourceLoader,
  });

  const sports = props.sports?.map(sport => ({
    ...sport,
    active:
      stringToSportId(sport.id) === stringToSportId(gameSearchForm.sportId),
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
  const hasFooter = footerButtons.length > 0 || footerLinks.length > 0;

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
        configCells={props.gameTable?.configCells}
        configLayout={props.gameTable?.configLayout}
        games={gameDataSourceLoader.rows}
        skeletonRowCount={gameDataSourceLoader.limit}
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

        {hasFooter && (
          <SectionFooter
            style={{ paddingTop: "48px" }}
            footerButtons={footerButtons}
            footerLinks={footerLinks}
          />
        )}
      </div>
    </>
  );
};

GameTableSectionInner.propTypes = {
  ...SectionHeader.propTypes,
  ...GameTable.propTypes,
  disableUrlSportId: PropTypes.bool,
  sports: PropTypes.arrayOf(sportWithFooterPropTypes),
  loadMore: loadMorePropTypes,
  configLayout: configLayoutPropTypes,
  configInputs: configInputsPropTypes,
  configOverlap: configOverlapPropTypes,
  variant: PropTypes.oneOf(["default", "hero"]),
  gameTable: GameTable.propTypes,
  sectionHeader: SectionHeader.propTypes,
  configGameTableForm: PropTypes.shape({
    title: PropTypes.string,
    enableUrlState: PropTypes.bool,
  }),
  gameDataSourceLoader: findManyInputPropTypes,
  gameDataSource: gameDataSourcePropTypes,
};

//
//
//
//
//
//
//
//

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
