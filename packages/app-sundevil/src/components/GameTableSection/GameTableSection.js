// @ts-check
import PropTypes from "prop-types";
import React, { useMemo, useRef, useState } from "react";

import { useIsMobile } from "../../../../component-header/src/core/hooks/isMobile";
import { APP_CONFIG } from "../../config";
import { useElementContentDimensions } from "../../utils/use-element-position";
import {
  buildGameDataSource,
  gameDataSourceSchema,
} from "../Game/game-api/game-api-impl";
import { GameAPIProvider } from "../Game/GameAPIContext";
import { useGameLoader } from "../Game/use-game-api";
import { GameNavigation } from "../GameNavigation";
import { GameTable, gameTableFooterButtonSchema } from "../GameTable";
import { Header } from "../SectionHeader";
import { SportsTabsDesktop, SportsTabsMobile } from "../SportsTabs";
import { sportSchema } from "../SportsTabs/sports-tabs";

const GameTableSectionInner = ({ ...props }) => {
  const [selectedSportId, setSelectedSportId] = useState(
    props?.sports?.find(sport => sport?.active)?.id ?? "all"
  );

  const [selectedGameType, setSelectedGameType] = useState(
    props?.tabs?.find(tab => tab?.active)?.gameType ?? "all"
  );

  const result = useGameLoader({
    gameType: selectedGameType === "all" ? null : selectedGameType,
    sportId: selectedSportId === "all" ? null : selectedSportId,
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

  const skeleton = result.t !== "ok" && !props?.disableSkeleton;
  const games = result.t === "ok" ? result.value : [];

  const activeSport = sports?.find(sport => Boolean(sport?.active));
  const footerButtons =
    activeSport?.footerButtons ?? props?.footerButtons ?? [];
  const footerLinks = activeSport?.footerLinks ?? props?.footerLinks ?? [];

  const isMobile = useIsMobile(APP_CONFIG.breakpoint);
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
        <div style={{ paddingBottom: "20px" }}>
          <Header
            {...props}
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

      <div className={isDesktop ? "container" : ""}>
        <GameTable
          {...props}
          games={games}
          footerButtons={footerButtons}
          footerLinks={footerLinks}
          skeleton={skeleton}
          //
        />
      </div>
    </div>
  );
};

const sportSchemaGameTable = PropTypes.shape({
  ...sportSchema,
  footerButtons: PropTypes.arrayOf(gameTableFooterButtonSchema),
  footerLinks: PropTypes.arrayOf(PropTypes.string),
});

GameTableSectionInner.propTypes = {
  ...Header.propTypes,
  ...GameNavigation.propTypes,
  ...GameTable.propTypes,
  applyNegativeMarginForOverlap: PropTypes.bool,
  sports: PropTypes.arrayOf(sportSchemaGameTable),
};

const GameTableSection = ({ gameDataSource, ...props }) => {
  const gameAPI = useMemo(
    () => buildGameDataSource(gameDataSource),
    [gameDataSource]
  );
  return (
    <GameAPIProvider gameAPI={gameAPI}>
      <GameTableSectionInner {...props} />
    </GameAPIProvider>
  );
};

GameTableSection.propTypes = {
  ...GameTableSectionInner.propTypes,
  gameDataSource: gameDataSourceSchema,
  disableSkeleton: PropTypes.bool,
};

export { GameTableSection };
