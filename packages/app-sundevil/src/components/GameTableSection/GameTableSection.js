// @ts-check
import PropTypes from "prop-types";
import React, { useMemo, useRef } from "react";
import styled from "styled-components";

import { useIsMobile } from "../../../../component-header/src/core/hooks/isMobile";
import { APP_CONFIG } from "../../config";
import { deepMergeLeft } from "../../utils/deep-merge-left";
import { useDebouncedValue } from "../../utils/use-debounced-value";
import { useElementContentDimensions } from "../../utils/use-element-position";
import { GameDataSourceSortByColumnId } from "../Game/game-data-source";
import {
  buildGameDataSource,
  gameDataSourceSchema,
} from "../Game/game-data-source/game-data-source-impl";
import { GameDataSourceProvider } from "../Game/GameDataSourceContext";
import { useGameLoader } from "../Game/use-game-loader";
import { GameNavigation } from "../GameNavigation";
import { GameTable, gameTableFooterButtonSchema } from "../GameTable";
import {
  GameTableLoadMoreButton,
  gameTableLoadMorePropTypes,
} from "../GameTable/GameTableLoadMoreButton";
import { mapSectionHeaderProps, SectionHeader } from "../SectionHeader";
import { Select } from "../Select/Select";
import { SportsTabsDesktop, SportsTabsMobile } from "../SportsTabs";
import { sportSchema } from "../SportsTabs/sports-tabs";
import { TextField } from "../TextField/TextField";
import {
  GAME_TABLE_FORM_DEBOUNCE_MS,
  useGameTableForm,
} from "./game-table-form";
import { defaultInputsConfig, inputsConfigSchema } from "./inputs-config";
import { defaultLayoutConfig, layoutConfigSchema } from "./layout-config";

const GameTableRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

const InputsRoot = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 1rem;
  gap: 1rem;
  flex-wrap: wrap;
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
  const {
    sportId,
    gameType,
    venueId,
    searchQuery,
    sortByColumnId,
    sortByDesc,
  } = gameTableForm;

  const debouncedSearchQuery = useDebouncedValue(
    searchQuery,
    GAME_TABLE_FORM_DEBOUNCE_MS
  );

  const { games, showLoadNextPage, isLoading, isLoadingInitial, loadNextPage } =
    useGameLoader({
      gameType: gameType === "all" ? null : gameType,
      sportId: sportId === "all" ? null : sportId,
      searchQuery: debouncedSearchQuery,
      sortByColumnId,
      venueId,
      sortByDesc,
      limit: 5,
    });

  const sports = props.sports?.map(sport => ({
    ...sport,
    active: sport.id === sportId,
  }));

  const tabs = props.tabs?.map(tab => ({
    ...tab,
    active: tab.id === gameType,
  }));

  const onSportItemClick = clickedSportId => () =>
    gameTableForm.update({ sportId: clickedSportId });

  const onTabItemClick = clickedGameType => () =>
    gameTableForm.update({ gameType: clickedGameType });

  const activeSport = sports?.find(sport => Boolean(sport?.active));
  const footerButtons =
    activeSport?.footerButtons ?? props?.footerButtons ?? [];
  const footerLinks = activeSport?.footerLinks ?? props?.footerLinks ?? [];

  const isMobile = useIsMobile(APP_CONFIG.breakpointMobile);
  const isDesktop = !isMobile;

  /** @type {React.MutableRefObject<HTMLDivElement | null>} */
  const headerRef = useRef(null);
  const headerDimensions = useElementContentDimensions(headerRef);

  const allVenues = [];

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
            // @ts-ignore
            tabs={tabs}
            onTabItemClick={onTabItemClick}
          />
        </div>

        <InputsRoot className="container">
          {layoutConfig.includeInputSearch && (
            <TextField
              style={{ flex: 2 }}
              label={inputsConfig?.searchInput?.label ?? ""}
              placeholder={inputsConfig?.searchInput?.placeholder ?? ""}
              value={searchQuery}
              onChange={inputtedSearchQuery =>
                gameTableForm.update({ searchQuery: inputtedSearchQuery })
              }
              renderEndIcon={({ style }) => (
                <i
                  style={style}
                  className="fa fas fa-solid fa-magnifying-glass"
                />
              )}
            />
          )}

          {layoutConfig.includeInputSportType && (
            <Select
              style={{ flex: 1 }}
              label={inputsConfig.sportTypeSelect?.label ?? ""}
              placeholder={inputsConfig.sportTypeSelect?.placeholder ?? ""}
              onChange={option =>
                gameTableForm.update({
                  sportId: option.id === sportId ? "all" : option.id,
                })
              }
              options={sports.map(sport => ({
                label: sport.name,
                id: sport.id,
                active: sport.active,
              }))}
            />
          )}

          {layoutConfig.includeInputVenueSelect && (
            <Select
              style={{ flex: 1 }}
              label={inputsConfig.venueSelect?.label ?? ""}
              placeholder={inputsConfig.venueSelect?.placeholder ?? ""}
              onChange={option =>
                gameTableForm.update({
                  venueId: option.id === venueId ? null : option.id,
                })
              }
              options={allVenues.map(venueOption => ({
                label: venueOption,
                id: venueOption,
                active: venueOption === venueId,
              }))}
            />
          )}

          {layoutConfig.includeInputHomeOrAwaySelect && (
            <Select
              style={{ flex: 1 }}
              label={inputsConfig.homeOrAwaySelect?.label ?? ""}
              placeholder={inputsConfig.homeOrAwaySelect?.placeholder ?? ""}
              onChange={option =>
                gameTableForm.update({
                  gameType: option.id === gameType ? null : option.id,
                })
              }
              options={[
                {
                  id: "home",
                  label: "Home",
                  active: gameType === "home",
                },
                {
                  id: "away",
                  label: "Away",
                  active: gameType === "away",
                },
              ]}
            />
          )}

          {layoutConfig.includeSortBySelect && (
            <Select
              style={{ flex: 1 }}
              label={inputsConfig.sortBySelect?.label ?? ""}
              placeholder={inputsConfig.sortBySelect?.placeholder ?? ""}
              onChange={option => {
                gameTableForm.update({
                  sortByDesc:
                    option.payload.desc === sortByDesc
                      ? true
                      : option.payload.desc,
                  sortByColumnId:
                    option.payload.columnId === sortByColumnId
                      ? GameDataSourceSortByColumnId.DATE
                      : option.payload.columnId,
                });
              }}
              options={[
                {
                  id: "date",
                  label: "Date",
                  active: sortByColumnId === GameDataSourceSortByColumnId.DATE,
                  payload: {
                    columnId: GameDataSourceSortByColumnId.DATE,
                    desc: true,
                  },
                },
                {
                  id: "event-name",
                  label: "Event Name",
                  active: sortByColumnId === GameDataSourceSortByColumnId.NAME,
                  payload: {
                    columnId: GameDataSourceSortByColumnId.NAME,
                    desc: true,
                  },
                },
              ]}
            />
          )}
        </InputsRoot>

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
          games={games}
          footerButtons={footerButtons}
          footerLinks={footerLinks}
          skeleton={isLoadingInitial}
          //
        />

        {props.loadMore && showLoadNextPage && (
          <GameTableLoadMoreButton
            {...props.loadMore}
            onClick={loadNextPage}
            loading={isLoading}
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
