// @ts-check
import { useEffect, useState } from "react";

import { updateAtIndex } from "../../utils/array";
import * as Result from "../../utils/result";
import { useGameDataSource } from "./GameDataSourceContext";

/**
 * @typedef {{
 * pages: Result.RemoteResult<string, Awaited<ReturnType<import("./game-data-source").IGameDataSource['findMany']>>>[]
 * }} QueryState
 */

/** @type {() => QueryState} */
const initQueryState = () => {
  return {
    pages: [Result.NotAsked],
  };
};

/**
 * @typedef {{
 * [queryKey: string]: QueryState
 * }} State
 */

/** @type {State} */
const initState = {};

/**
 * @param {import("./game-data-source/game-data-source").FindManyInput} input
 * @returns {string}
 */
const toQueryKey = input => {
  return btoa(JSON.stringify([input.gameType, input.sportId, input.limit]));
};

/**
 * @param {import("./game-data-source/game-data-source").FindManyInput} input
 */
export const useGameLoader = input => {
  const gameDataSource = useGameDataSource();

  const [state, setState] = useState(initState);
  const currentQueryKey = toQueryKey(input);
  const currentQueryState = state[currentQueryKey] || initQueryState();
  const currentPageIndex = (currentQueryState?.pages.length ?? 0) - 1;
  const limit = input.limit ?? 5;
  const offset = currentPageIndex * limit;
  const currentPageState =
    currentQueryState?.pages[currentPageIndex] ?? Result.NotAsked;

  const games = currentQueryState?.pages.flatMap(pageResult =>
    pageResult.t === "ok" ? pageResult.value.rows : []
  );

  const isLoading =
    currentPageState.t === "loading" || currentPageState.t === "not-asked";
  const isLoadingInitial = isLoading && currentPageIndex === 0;
  const hasNextPage =
    currentPageState.t === "ok" && currentPageState.value.total > games.length;
  const showLoadNextPage = (hasNextPage || isLoading) && !isLoadingInitial;

  const loadPage = async () => {
    if (currentPageState.t === "loading" || currentPageState.t === "ok") {
      return;
    }

    const result = await Result.attempt(() =>
      gameDataSource.findMany({ ...input, offset, limit })
    );
    setState(statePrev => ({
      ...statePrev,
      [currentQueryKey]: {
        ...(statePrev[currentQueryKey] ?? initQueryState()),
        pages: updateAtIndex(
          statePrev[currentQueryKey]?.pages ?? initQueryState().pages,
          currentPageIndex,
          result
        ),
      },
    }));
  };

  useEffect(() => {
    loadPage();
  }, [currentQueryKey, currentPageIndex]);

  const loadNextPage = async () => {
    setState(statePrev => ({
      ...statePrev,
      [currentQueryKey]: {
        ...statePrev[currentQueryKey],
        pages: [...statePrev[currentQueryKey].pages, Result.NotAsked],
      },
    }));
  };

  return {
    loadNextPage,
    showLoadNextPage,
    isLoading,
    isLoadingInitial,
    games,
  };
};
