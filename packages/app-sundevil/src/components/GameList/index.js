// @ts-check
import React, { useEffect } from "react";

import { GameNavigation } from "../GameNavigation";
import { GameTable } from "../GameTable";
import { SectionHeader } from "../SectionHeader";

const GameList = ({ ...props }) => {
  const [allSports, setAllSports] = React.useState([]);
  const [gamesSchedule, setGamesSchedule] = React.useState([]);
  const [navigationTabs, setNavigationTabs] = React.useState([]);

  useEffect(() => {
    setAllSports(props.sports);
  }, []);

  useEffect(() => {
    setGamesSchedule(props.games);
  }, []);

  useEffect(() => {
    setNavigationTabs(props.tabs);
  }, []);

  function onSportItemClick(sportId) {
    return () => {
      const newSports = allSports.map(sport => {
        // @ts-ignore
        if (sport.id === sportId) {
          return {
            // @ts-ignore
            ...sport,
            active: true,
          };
        }
        return {
          // @ts-ignore
          ...sport,
          active: false,
        };
      });
      // @ts-ignore
      setAllSports(newSports);
      if (sportId === "all") {
        setGamesSchedule(props.games);
        return;
      }
      const newSchedule = props.games.filter(game => {
        if (game?.sport?.name) {
          return game.sport.name.toLowerCase() === sportId;
        }
        return false;
      });
      setGamesSchedule(newSchedule);
    };
  }

  function onNavigationTabItemClick(tabId) {
    return () => {
      const newTabs = navigationTabs.map(tab => {
        // @ts-ignore
        if (tab.id === tabId) {
          return {
            // @ts-ignore
            ...tab,
            active: true,
          };
        }
        return {
          // @ts-ignore
          ...tab,
          active: false,
        };
      });
      // @ts-ignore
      setNavigationTabs(newTabs);
      if (tabId === "all") {
        setGamesSchedule(props.games);
        return;
      }
      const filteredGames = props.games.filter(game => {
        if (game?.gameType) {
          return game.gameType?.toLowerCase() === tabId;
        }
        return false;
      });
      setGamesSchedule(filteredGames);
    };
  }

  return (
    <>
      <SectionHeader
        {...{ ...props }}
        // @ts-ignore
        tabs={navigationTabs}
        /* eslint-disable-next-line react/jsx-no-bind */
        onTabItemClick={onNavigationTabItemClick}
      />
      <div style={{ marginTop: "48px" }} />
      <GameNavigation
        {...{ ...props }}
        sports={allSports}
        /* eslint-disable-next-line react/jsx-no-bind */
        onSportItemClick={onSportItemClick}
      />
      {/* @ts-ignore */}
      <GameTable {...{ ...props }} games={gamesSchedule} />
    </>
  );
};

GameList.propTypes = SectionHeader.propTypes;
GameList.propTypes = GameNavigation.propTypes;
GameList.propTypes = GameTable.propTypes;

export { GameList };
