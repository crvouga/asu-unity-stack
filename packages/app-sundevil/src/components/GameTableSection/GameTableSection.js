// @ts-check
import PropTypes from "prop-types";
import React, { useMemo, useState } from "react";

import {
  buildGameDataSource,
  gameDataSourceSchema,
} from "../Game/game-api/game-api-impl";
import { GameAPIProvider } from "../Game/GameAPIContext";
import { useGameLoader } from "../Game/use-game-api";
import { GameNavigation } from "../GameNavigation";
import { GameTable, gameTableFooterButtonSchema } from "../GameTable";
import { Header } from "../SectionHeader";
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

  const onNavigationTabItemClick = tabId => () => setSelectedGameType(tabId);

  const skeleton = result.t !== "ok";
  const games = result.t === "ok" ? result.value : [];

  const activeSport = sports?.find(sport => Boolean(sport?.active));
  const footerButtons =
    activeSport?.footerButtons ?? props?.footerButtons ?? [];
  const footerLinks = activeSport?.footerLinks ?? props?.footerLinks ?? [];

  return (
    <>
      <Header
        {...props}
        // @ts-ignore
        tabs={tabs}
        onTabItemClick={onNavigationTabItemClick}
        //
      />
      <div className="container" style={{ marginTop: "48px" }}>
        <GameNavigation
          {...props}
          sports={sports}
          onSportItemClick={onSportItemClick}
          //
        />

        <GameTable
          {...props}
          games={games}
          footerButtons={footerButtons}
          footerLinks={footerLinks}
          skeleton={skeleton}
          //
        />
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
  ...Header.propTypes,
  ...GameNavigation.propTypes,
  ...GameTable.propTypes,
  sports: PropTypes.arrayOf(sportSchemaGameTable),
};

export const GameTableSection = ({ gameDataSource, ...props }) => {
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
};
