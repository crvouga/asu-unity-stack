// @ts-check
import PropTypes from "prop-types";
import React, { useMemo, useRef } from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../config";
import { ALL_ID } from "../../select-all-option";
import { deepMergeLeft } from "../../utils/deep-merge-left";
import { ensureArray } from "../../utils/ensure-array";
import { ensureObject } from "../../utils/ensure-object";
import { firstCleanString } from "../../utils/first-clean-string";
import { isEqual } from "../../utils/is-equal";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { useElementContentDimensions } from "../../utils/use-element-content-dimensions";
import { findManyInputPropTypes } from "../Game/game-data-source";
import {
  buildGameDataSource,
  gameDataSourcePropTypes,
} from "../Game/game-data-source/game-data-source-impl";
import {
  GameDataSourceProvider,
  useGameDataSource,
} from "../Game/GameDataSourceContext";
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
import {
  addAddToCalendarToSectionHeaderProps,
  configAddToCalendarPropTypes,
} from "./config-add-to-calendar";
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
import {
  configFormPropTypes,
  defaultConfigForm,
} from "./GameTableForm/config-form";
import { GameTableFormSidebar } from "./GameTableForm/GameTableFormSidebar";
import { GameTableFormTopbar } from "./GameTableForm/GameTableFormTopbar";
import { useGameTableForm } from "./GameTableForm/use-game-table-form";
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

  const variant = props.variant ?? "default";

  /** @type {import("./GameTableForm/config-form").ConfigForm} */
  const configGameTableForm = deepMergeLeft(
    ensureObject(props.configGameTableForm),
    defaultConfigForm
  );

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

  const gameTableForm = useGameTableForm({
    enableUrlState: configGameTableForm?.enableUrlState ?? false,
    initialState: {
      gameType:
        configGameTableForm?.initialState?.gameType ??
        props?.tabs?.find(tab => tab?.active)?.gameType ??
        ALL_ID,

      sportId:
        configGameTableForm?.initialState?.sportId ??
        props?.sports?.find(sport => sport?.active)?.id ??
        ALL_ID,

      admissionCost:
        configGameTableForm?.initialState?.admissionCost ??
        configInputs.admissionCostSelect?.options?.find(
          option => option?.active
        )?.value ??
        ALL_ID,

      eventType:
        configGameTableForm?.initialState?.eventType ??
        configInputs.eventTypeSelect?.options?.find(option => option?.active)
          ?.value ??
        ALL_ID,

      venueId:
        configGameTableForm?.initialState?.venueId ??
        configInputs.venueSelect?.options?.find(option => option?.active)
          ?.value ??
        ALL_ID,

      maxAdmissionCost:
        configGameTableForm?.initialState?.maxAdmissionCost ??
        Number(
          configInputs.maxAdmissionCostSelect?.options?.find(
            option => option?.active
          )?.value ?? null
        ),
    },
  });

  // TODO: Move this out of component. Make caller responsible for initial state from url
  useUrlSportId(urlSportId => {
    if (props?.disableUrlSportId) {
      return;
    }

    if (props.shouldLog) {
      log({
        urlSportId,
        message: "sport id from url log",
      });
    }

    gameTableForm.update({
      sportId:
        urlSportId ?? configGameTableForm?.initialState?.sportId ?? ALL_ID,
    });
  });

  /**
   * @type {import("../Game/game-data-source/game-data-source").FindManyInput}
   */
  const gameDataSourceFindManyInput = {
    limit: 5,
    ...gameTableForm,
    ...props.gameDataSourceLoader,
  };
  const gameDataSourceLoader = useGameDataSourceLoader(
    gameDataSourceFindManyInput
  );

  const sports = props.sports?.map(sport => ({
    ...sport,
    active: isEqual(stringToSportId, sport.id, gameTableForm.sportId),
  }));

  const onSportItemClick = clickedSportId => {
    gameTableForm.update({ sportId: clickedSportId });
  };

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
    configNoData?.message, // TODO: move to only support props.configNoData?.message
    props.gameTable?.emptyStateMessage, // TODO: Deprecated prop. Use configNoData.message instead.
    props?.emptyStateMessage, // TODO: Deprecated prop. Use configNoData.message instead.
    "No games found"
  );

  if (typeof props.gameTable?.emptyStateMessage === "string") {
    // eslint-disable-next-line no-console
    console.warn(
      "GameTableSection: The prop `gameTable.emptyStateMessage` is deprecated. Use `props.configNoData.message` instead."
    );
  }

  if (typeof props.emptyStateMessage === "string") {
    // eslint-disable-next-line no-console
    console.warn(
      "GameTableSection: The prop `emptyStateMessage` is deprecated. Use `props.configNoData.message` instead."
    );
  }

  const { shouldHide } = useNoDataState({
    configNoData,
    shouldLog: props.shouldLog,
  });

  const gameDataSource = useGameDataSource();
  const sectionHeaderProps = addAddToCalendarToSectionHeaderProps({
    configAddToCalender: props.configAddToCalender,
    isMobile,
    sectionHeaderProps: mapSectionHeaderProps({
      ...props?.sectionHeader,
      ...props,
    }),
    gameDataSource,
    gameDataSourceFindManyInput,
    gameTableForm,
  });
  const tabs = ensureArray(sectionHeaderProps?.tabs)?.map(tab => ({
    ...tab,
    active: tab.id === gameTableForm.gameType,
  }));

  const sectionName = sectionHeaderProps?.title;

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
            sectionName={sectionName}
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
          title={sectionHeaderProps.title}
          subtitle={sectionHeaderProps.subtitle}
          subtitleLinks={sectionHeaderProps.subtitleLinks}
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
              {...sectionHeaderProps}
              tabs={tabs}
              onTabItemClick={clickedGameType => {
                gameTableForm.update({ gameType: clickedGameType });
              }}
              style={{ paddingBottom: "32px" }}
            />
          )}

          {configLayout.variant === "default" && (
            <GameTableFormTopbar
              sectionName={sectionName}
              className="container"
              gameDataSourceLoader={props.gameDataSourceLoader ?? {}}
              gameTableForm={gameTableForm}
              configInputs={configInputs}
              configLayout={configLayout}
              sports={sports}
              darkMode={props.darkMode}
              // @ts-ignore
              configGameTableForm={configGameTableForm}
            />
          )}

          {isDesktop && configLayout.includeSportsTabs && (
            <div className="container">
              <SportsTabsDesktop
                {...props}
                {...props.sportTabsDesktop}
                sports={sports}
                onSportItemClick={onSportItemClick}
                sectionName={sectionName}
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
              sectionName={sectionName ?? " "}
            />
          </div>
        )}

        {configLayout.variant === "sidebar" && (
          <SidebarLayout
            className="container"
            renderSidebar={() => (
              <GameTableFormSidebar
                sectionName={sectionName}
                gameDataSourceLoader={props.gameDataSourceLoader ?? {}}
                gameTableForm={gameTableForm}
                configInputs={configInputs}
                configLayout={configLayout}
                sports={sports}
                darkMode={props.darkMode}
                // @ts-ignore
                configGameTableForm={configGameTableForm}
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
            sectionName={sectionName}
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
  ...SectionHeader.propTypes, // TODO remove spread props. Use sectionHeader prop instead
  ...GameTable.propTypes, // TODO remove spread props. Use gameTable prop instead
  sportTabsDesktop: SportsTabsDesktop.propTypes,
  disableUrlSportId: PropTypes.bool,
  sports: PropTypes.arrayOf(sportWithFooterPropTypes),
  loadMore: loadMorePropTypes,
  configLayout: configLayoutPropTypes,
  configInputs: configInputsPropTypes,
  configOverlap: configOverlapPropTypes,
  variant: PropTypes.oneOf(["default", "hero"]),
  gameTable: GameTable.propTypes,
  sectionHeader: SectionHeader.propTypes,
  configGameTableForm: configFormPropTypes,
  gameDataSourceLoader: findManyInputPropTypes,
  gameDataSource: gameDataSourcePropTypes,
  configNoData: configNoDataPropTypes,
  shouldLog: PropTypes.bool,
  configAddToCalender: configAddToCalendarPropTypes,
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
