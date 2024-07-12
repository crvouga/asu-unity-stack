// @ts-check
import PropTypes from "prop-types";
import React, { useMemo, useRef, useState } from "react";
import styled from "styled-components";

import { useIsMobile } from "../../../../component-header/src/core/hooks/isMobile";
import { APP_CONFIG } from "../../config";
import { useElementContentDimensions } from "../../utils/use-element-position";
import {
  buildGameDataSource,
  gameDataSourceSchema,
} from "../Game/game-data-source/game-data-source-impl";
import { GameDataSourceProvider } from "../Game/GameDataSourceContext";
import { useGameLoader } from "../Game/use-game-data-source";
import { GameNavigation } from "../GameNavigation";
import { GameTable, gameTableFooterButtonSchema } from "../GameTable";
import { mapSectionHeaderProps, SectionHeader } from "../SectionHeader";
import { SportsTabsDesktop, SportsTabsMobile } from "../SportsTabs";
import { sportSchema } from "../SportsTabs/sports-tabs";
import {
  GameTableLoadMoreButton,
  gameTableLoadMorePropTypes,
} from "./GameTableLoadMoreButton";

const GameTableRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

const GameTableSectionInner = ({ ...props }) => {
  const [selectedSportId, setSelectedSportId] = useState(
    props?.sports?.find(sport => sport?.active)?.id ?? "all"
  );

  const [selectedGameType, setSelectedGameType] = useState(
    props?.tabs?.find(tab => tab?.active)?.gameType ?? "all"
  );

  const { games, showLoadNextPage, isLoading, isLoadingInitial, loadNextPage } =
    useGameLoader({
      gameType: selectedGameType === "all" ? null : selectedGameType,
      sportId: selectedSportId === "all" ? null : selectedSportId,
      limit: 5,
    });

  const sports = props.sports?.map(sport => ({
    ...sport,
    active: sport.id === selectedSportId,
  }));

  const tabs = props.tabs?.map(tab => ({
    ...tab,
    active: tab.id === selectedGameType,
  }));

  const onSportItemClick = sportId => () => setSelectedSportId(sportId);

  const onTabItemClick = tabId => () => setSelectedGameType(tabId);

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
            // @ts-ignore
            tabs={tabs}
            onTabItemClick={onTabItemClick}
          />
        </div>

        {isDesktop && (
          <div className="container">
            <SportsTabsDesktop
              {...props}
              sports={sports}
              onSportItemClick={onSportItemClick}
            />
          </div>
        )}
      </div>

      {isMobile && (
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
