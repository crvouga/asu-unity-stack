// @ts-check
import PropTypes from "prop-types";
import React, { useMemo, useRef } from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../config";
import { deepMergeLeft } from "../../utils/deep-merge-left";
import { ensureObject } from "../../utils/ensure-object";
import { firstCleanString } from "../../utils/first-clean-string";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { useElementContentDimensions } from "../../utils/use-element-content-dimensions";
import { ALL_ID, findManyInputPropTypes } from "../Game/game-data-source";
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
import {
  configNoDataPropTypes,
  defaultConfigNoData,
  useNoDataState,
} from "./config-no-data";
import {
  configOverlapPropTypes,
  getHeroOverlapStyles,
  getOverlapStyles,
} from "./config-overlap";
import { GameSearchFormSidebar } from "./GameSearchForm/GameSearchFormSidebar";
import { GameSearchFormTopbar } from "./GameSearchForm/GameSearchFormTopbar";
import {
  gameSearchFormStatePropTypes,
  useGameSearchForm,
} from "./GameSearchForm/use-game-search-form";
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

const Root = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  width: 100%;
  /*
  DO NOT ADD THIS. It will break overlap styles.
  overflow: hidden;
  */
`;

const GameTableSectionInner = ({ ...props }) => {
  // eslint-disable-next-line no-console
  const log = props.shouldLog ? console.log : () => {};

  const configGameTableForm = props.configGameTableForm ?? {};

  const variant = props.variant ?? "default";

  /** @type {import("./config-layout").ConfigLayout} */
  const configLayout = deepMergeLeft(
    ensureObject(props.configLayout),
    defaultConfigLayout
  );

  /** @type {import("./config-inputs").ConfigInputs} */
  const configInputs = deepMergeLeft(
    ensureObject(props.configInputs),
    defaultConfigInputs
  );

  /** @type {import("./config-no-data").ConfigNoData} */
  const configNoData = deepMergeLeft(
    ensureObject(props.configNoData),
    defaultConfigNoData
  );

  const gameSearchForm = useGameSearchForm({
    enableUrlState: configGameTableForm?.enableUrlState ?? false,
    initialState: {
      gameType: props?.tabs?.find(tab => tab?.active)?.gameType ?? ALL_ID,
      sportId: props?.sports?.find(sport => sport?.active)?.id ?? ALL_ID,
      admissionCost:
        configInputs.admissionCostSelect?.options?.find(option => option.active)
          ?.value ?? null,
      eventType:
        configInputs.eventTypeSelect?.options?.find(option => option.active)
          ?.value ?? null,
      maxAdmissionCost: Number(
        configInputs.maxAdmissionCostSelect?.options?.find(
          option => option.active
        )?.value ?? null
      ),
      ...(props?.gameSearchForm?.initialState ?? {}),
    },
  });

  useUrlSportId(urlSportId => {
    if (props.disableUrlSportId) {
      return;
    }
    if (props.shouldLog) {
      log({
        urlSportId,
        message: "sport id from url log",
      });
    }
    gameSearchForm.update({
      sportId:
        urlSportId ?? props?.gameSearchForm?.initialState?.sportId ?? ALL_ID,
    });
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

  const noDataMessage = firstCleanString(
    // TODO: move to only support props.configNoData?.message
    configNoData?.message,
    // Deprecated prop. Use configNoData.message instead.
    props.gameTable?.emptyStateMessage,
    // Deprecated prop. Use configNoData.message instead.
    props?.emptyStateMessage,
    "No games found"
  );

  const { shouldHide } = useNoDataState({
    configNoData,
    shouldLog: props.shouldLog,
  });

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
        setFirstRowRef={node => {
          if (gameTableFirstRowRef.current) {
            gameTableFirstRowRef.current = null;
          }
          gameTableFirstRowRef.current = node;
        }}
        emptyStateMessage={noDataMessage}
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
    <Root
      style={{
        display: shouldHide ? "none" : undefined,
      }}
    >
      {variant === "hero" && (
        <GameTableHero
          title={props.title}
          subtitle={props.subtitle}
          subtitleLinks={props.subtitleLinks}
          style={getHeroOverlapStyles({
            configOverlap: props.configOverlap,
            headerDimensions,
            gameTableFirstRowDimensions,
          })}
          darkMode={props.darkMode}
        />
      )}

      <div
        style={getOverlapStyles({
          configOverlap: props.configOverlap,
          headerDimensions,
          gameTableFirstRowDimensions,
        })}
      >
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
    </Root>
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
  gameSearchForm: PropTypes.shape({
    initialState: gameSearchFormStatePropTypes,
  }),
  configNoData: configNoDataPropTypes,
  shouldLog: PropTypes.bool,
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
