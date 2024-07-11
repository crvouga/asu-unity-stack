// @ts-check
import { useEffect, useMemo, useState } from "react";

import * as Result from "../../utils/result";
import { WithFiltering } from "./game-data-source";
import { useGameDataSource } from "./GameDataSourceContext";

/** @type {() => Result.RemoteResult<string, import('./game').Game[]>} */
const initState = () => {
  return Result.NotAsked;
};

/**
 * @param {import("./game-data-source/game-data-source").FindManyInput} input
 * @returns {string}
 */
const toQueryKey = input => {
  return btoa(JSON.stringify(input));
};

/**
 * @param {import("./game-data-source/game-data-source").FindManyInput} input
 */
export const useGameLoader = input => {
  const gameAPI = useGameDataSource();
  const gameAPIWithFiltering = useMemo(
    () => new WithFiltering(gameAPI),
    [gameAPI]
  );
  const [queries, setQueries] = useState({});
  const queryKey = toQueryKey(input);
  const query = queries[queryKey] || initState();
  const load = async () => {
    if (query.t === "loading" || query.t === "ok") {
      return;
    }
    const result = await Result.attempt(() =>
      gameAPIWithFiltering.findMany(input)
    );
    setQueries(queriesPrev => ({
      ...queriesPrev,
      [queryKey]: result,
    }));
  };
  useEffect(() => {
    load();
  }, [queryKey]);

  return query;
};
