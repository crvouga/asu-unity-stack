// @ts-check
import React, { useEffect } from "react";

import { Header } from "../../core/components/Header";
import { SportsTable } from "../../core/components/Table";
import { GameNavigation } from "../GameNavigation";

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
        if (sport.id === sportId) {
          return {
            ...sport,
            active: true,
          };
        }
        return {
          ...sport,
          active: false,
        };
      });
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
        if (tab.id === tabId) {
          return {
            ...tab,
            active: true,
          };
        }
        return {
          ...tab,
          active: false,
        };
      });
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
      <Header
        {...{ ...props }}
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
      <SportsTable {...{ ...props }} games={gamesSchedule} />
    </>
  );
};

GameList.propTypes = Header.propTypes;
GameList.propTypes = GameNavigation.propTypes;
GameList.propTypes = SportsTable.propTypes;

export { GameList };
