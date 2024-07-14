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
import { GameNavigation } from "../GameNavigation";
import { GameTable, gameTableFooterButtonSchema } from "../GameTable/GameTable";
import {
  GameTableLoadMoreButton,
  gameTableLoadMorePropTypes,
} from "../GameTable/GameTableLoadMoreButton";
import { mapSectionHeaderProps, SectionHeader } from "../SectionHeader";
import { SportsTabsDesktop, SportsTabsMobile } from "../SportsTabs";
import { sportSchema } from "../SportsTabs/sports-tabs";
import { useGameTableForm } from "./GameTableForm/game-table-form";
import { GameTableForm } from "./GameTableForm/GameTableForm";
import { defaultInputsConfig, inputsConfigSchema } from "./inputs-config";
import { defaultLayoutConfig, layoutConfigSchema } from "./layout-config";

const GameTableRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

const GameTableSectionInner = ({ ...props }) => {
  /** @type {import("./layout-config").LayoutConfig} */
  const layoutConfig = props.layoutConfig ?? defaultLayoutConfig;

  /** @type {import("./inputs-config").InputsConfig} */
  const inputsConfig = deepMergeLeft(
    props.inputsConfig ?? {},
    defaultInputsConfig
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

  /** @type {React.MutableRefObject<HTMLDivElement | null>} */
  const headerRef = useRef(null);
  const headerDimensions = useElementContentDimensions(headerRef);

  return (
    <div
      style={{
        marginTop: props.applyNegativeMarginForOverlap
          ? -headerDimensions.height
          : 0,
      }}
    >
      <div ref={headerRef}>
        <div style={{ paddingBottom: "48px" }}>
          <SectionHeader
            {...mapSectionHeaderProps(props)}
            tabs={tabs}
            onTabItemClick={clickedGameType => () =>
              gameTableForm.update({ gameType: clickedGameType })}
          />
        </div>

        <GameTableForm
          className="container"
          gameTableForm={gameTableForm}
          inputsConfig={inputsConfig}
          layoutConfig={layoutConfig}
          sports={sports}
        />

        {isDesktop && layoutConfig.includeSportsTabs && (
          <div className="container">
            <SportsTabsDesktop
              {...props}
              sports={sports}
              onSportItemClick={onSportItemClick}
            />
          </div>
        )}
      </div>

      {isMobile && layoutConfig.includeSportsTabs && (
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
          //
        />

        {layoutConfig.includeLoadMore && gameLoader.showLoadNextPage && (
          <GameTableLoadMoreButton
            {...props.loadMore}
            onClick={gameLoader.loadNextPage}
            loading={gameLoader.isLoading}
          />
        )}
      </GameTableRoot>
    </div>
  );
};

const sportSchemaGameTable = PropTypes.shape({
  ...sportSchema,
  footerButtons: PropTypes.arrayOf(gameTableFooterButtonSchema),
  footerLinks: PropTypes.arrayOf(PropTypes.string),
});

GameTableSectionInner.propTypes = {
  ...SectionHeader.propTypes,
  ...GameNavigation.propTypes,
  ...GameTable.propTypes,
  applyNegativeMarginForOverlap: PropTypes.bool,
  sports: PropTypes.arrayOf(sportSchemaGameTable),
  loadMore: gameTableLoadMorePropTypes,
  layoutConfig: layoutConfigSchema,
  inputsConfig: inputsConfigSchema,
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
  disableSkeleton: PropTypes.bool,
};

export { GameTableSection };
