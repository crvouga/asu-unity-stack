import { useEffect, useState } from "react";

import { useGameDataSource } from "./GameDataSourceContext";

/** @type {string[]} */
const initState = [];
export const useGameVenuesLoader = () => {
  const [allVenues, setAllVenues] = useState(initState);
  const gameDataSource = useGameDataSource();

  const load = async () => {
    const found = await gameDataSource.findMany({
      offset: 0,
      limit: Infinity,
    });

    const allVenuesNew = Array.from(new Set(found.rows.map(game => game.venue)))
      .filter(venue => typeof venue === "string")
      .map(venue => venue.trim())
      .filter(venue => venue.length > 0);

    setAllVenues(allVenuesNew);
  };

  useEffect(() => {
    load();
  }, []);
  return {
    allVenues,
  };
};
