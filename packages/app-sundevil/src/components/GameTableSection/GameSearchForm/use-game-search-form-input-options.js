import { useEffect, useState } from "react";

import { useGameDataSource } from "../../Game/GameDataSourceContext";
import { stringToSportId } from "../../Sport/sport-id";

const toCleanUniqueStrings = strings => {
  if (!Array.isArray(strings)) {
    return [];
  }

  const cleaned = strings
    .filter(str => typeof str === "string")
    .map(str => str.trim())
    .filter(str => str.length > 0);

  const unique = Array.from(new Set(cleaned));

  const sorted = unique.sort();

  return sorted;
};

/**
 * @typedef {{
 *  allVenues: string[];
 *  allGameTypes: string[];
 *  allEventTypes: string[];
 *  allAdmissionCost: string[];
 *  allSportId: string[];
 * }} GameSearchFormInputOptions
 */

/**
 * @type {GameSearchFormInputOptions}
 */
export const initGameSearchFormInputOptions = {
  allEventTypes: [],
  allGameTypes: [],
  allVenues: [],
  allAdmissionCost: [],
  allSportId: [],
};

/**
 *
 * @param {import("../../Game/game").Game[]} games
 * @returns {typeof initGameSearchFormInputOptions}
 */
const gamesToState = games => {
  if (!Array.isArray(games)) {
    return initGameSearchFormInputOptions;
  }

  const allVenues = toCleanUniqueStrings(games.map(game => game.venue));
  const allGameTypes = toCleanUniqueStrings(games.map(game => game.gameType));
  const allEventTypes = toCleanUniqueStrings(games.map(game => game.eventType));
  const allAdmissionCost = toCleanUniqueStrings(
    games.map(game => game.admissionCost)
  );
  const allSportId = toCleanUniqueStrings(
    games.map(game => stringToSportId(game.sportId))
  );
  return {
    allAdmissionCost,
    allEventTypes,
    allGameTypes,
    allSportId,
    allVenues,
  };
};

export const useGameSearchFormInputOptions = () => {
  const gameDataSource = useGameDataSource();
  const [state, setState] = useState(initGameSearchFormInputOptions);

  const load = async () => {
    const found = await gameDataSource.findMany({
      offset: 0,
      limit: Infinity,
    });

    const stateNew = gamesToState(found.rows);

    setState(statePrev => ({ ...statePrev, ...stateNew }));
  };

  useEffect(() => {
    load();
  }, []);

  return state;
};
