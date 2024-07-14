// @ts-check
import PropTypes from "prop-types";
import React, { useMemo, useRef } from "react";
import styled from "styled-components";

import { useIsMobile } from "../../../../component-header/src/core/hooks/isMobile";
import { APP_CONFIG } from "../../config";
import { deepMergeLeft } from "../../utils/deep-merge-left";
import { useElementContentDimensions } from "../../utils/use-element-position";
import {
  buildGameDataSource,
  gameDataSourceSchema,
} from "../Game/game-data-source/game-data-source-impl";
import { GameDataSourceProvider } from "../Game/GameDataSourceContext";
import { useGameLoader } from "../Game/use-game-loader";
import { GameTable, gameTableFooterButtonSchema } from "../GameTable/GameTable";
import {
  GameTableLoadMoreButton,
  gameTableLoadMorePropTypes,
} from "../GameTable/GameTableLoadMoreButton";
import { mapSectionHeaderProps, SectionHeader } from "../SectionHeader";
import { SportsTabsDesktop, SportsTabsMobile } from "../SportsTabs";
import { sportSchema } from "../SportsTabs/sports-tabs";
import { configInputsSchema, defaultConfigInputs } from "./config-inputs";
import { configLayoutSchema, defaultConfigLayout } from "./config-layout";
import { ConfigOverlap, configOverlapSchema } from "./config-overlap";
import { useGameTableForm } from "./GameTableForm/game-table-form";
import { GameTableForm } from "./GameTableForm/GameTableForm";
import { GameTableHero } from "./GameTableHero/GameTableHero";

const GameTableRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

const GameTableSectionInner = ({ ...props }) => {
  const variant = props.variant ?? "default";

  /** @type {import("./config-layout").ConfigLayout} */
  const configLayout = props.configLayout ?? defaultConfigLayout;

  /** @type {import("./config-inputs").ConfigInputs} */
  const configInputs = deepMergeLeft(
    props.configInputs ?? {},
    defaultConfigInputs
  );

  const gameTableForm = useGameTableForm({
    gameType: props?.tabs?.find(tab => tab?.active)?.gameType ?? "all",
    sportId: props?.sports?.find(sport => sport?.active)?.id ?? "all",
  });

  const gameLoader = useGameLoader({
    gameType: gameTableForm.gameType === "all" ? null : gameTableForm.gameType,
    sportId: gameTableForm.sportId === "all" ? null : gameTableForm.sportId,
    searchQuery: gameTableForm.debouncedSearchQuery,
    sortBy: gameTableForm.sortBy,
    venueId: gameTableForm.venueId,
    limit: 5,
  });

  const sports = props.sports?.map(sport => ({
    ...sport,
    active: sport.id === gameTableForm.sportId,
  }));

  const tabs = props.tabs?.map(tab => ({
    ...tab,
    active: tab.id === gameTableForm.gameType,
  }));

  const onSportItemClick = clickedSportId => () =>
    gameTableForm.update({ sportId: clickedSportId });

  const activeSport = sports?.find(sport => Boolean(sport?.active));
  const footerButtons =
    activeSport?.footerButtons ?? props?.footerButtons ?? [];
  const footerLinks = activeSport?.footerLinks ?? props?.footerLinks ?? [];

  const isMobile = useIsMobile(APP_CONFIG.breakpointMobile);
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
                gameTableForm.update({ gameType: clickedGameType })}
              style={{ paddingBottom: "48px" }}
            />
          )}

          <GameTableForm
            className="container"
            gameTableForm={gameTableForm}
            configInputs={configInputs}
            configLayout={configLayout}
            sports={sports}
            darkMode={props.darkMode}
          />

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

        <GameTableRoot className={isDesktop ? "container" : ""}>
          <GameTable
            {...props}
            games={gameLoader.games}
            footerButtons={footerButtons}
            footerLinks={footerLinks}
            skeleton={gameLoader.isLoadingInitial}
            setFirstRowRef={ref => {
              gameTableFirstRowRef.current = ref;
            }}
          />

          {configLayout.includeLoadMore && gameLoader.showLoadNextPage && (
            <GameTableLoadMoreButton
              {...props.loadMore}
              onClick={gameLoader.loadNextPage}
              loading={gameLoader.isLoading}
            />
          )}
        </GameTableRoot>
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
  loadMore: gameTableLoadMorePropTypes,
  configLayout: configLayoutSchema,
  configInputs: configInputsSchema,
  configOverlap: configOverlapSchema,
  variant: PropTypes.oneOf(["default", "hero"]),
  gameTable: GameTable.propTypes,
  sectionHeader: SectionHeader.propTypes,
};

const GameTableSection = ({
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

GameTableSection.propTypes = {
  ...GameTableSectionInner.propTypes,
  gameDataSource: gameDataSourceSchema,
};

export { GameTableSection };
