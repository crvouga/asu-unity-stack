// @ts-check
import { useEffect, useState } from "react";

import * as Result from "../../utils/result";
import { useNewsStoryDataSource } from "./NewsDataSourceContext";

/**
 * @typedef {Result.RemoteResult<string, import("./news-story-data-source/news-story-data-source").FindManyOutput>} QueryState
 */

/** @type {() => QueryState} */
const initQueryState = () => {
  return Result.NotAsked;
};

/** @type {() => {[queryKey:string]: QueryState}} */
const initState = () => {
  return {};
};

const DEFAULT_LIMIT = 6;

/**
 * @param {import("./news-story-data-source/news-story-data-source").FindManyInput} input
 * @returns {string}
 */
const toQueryKey = input => {
  return btoa(JSON.stringify([input.sportId, input.limit]));
};

/** @type {() => string[]} */
const initAllSportIds = () => {
  return [];
};

/**
 * @type {(newsStoryDataSource: import("./news-story-data-source/news-story-data-source").INewsStoryDataSource) => Promise<string[]>}
 */
const getAllSportIds = async newsStoryDataSource => {
  const result = await Result.attempt(() =>
    newsStoryDataSource.findMany({
      limit: Infinity,
      offset: 0,
      sportId: null,
    })
  );
  const newsStories = Result.withDefault(
    Result.mapOk(result, pagination => pagination.rows),
    []
  );
  const sportIds = Array.from(
    new Set(newsStories.map(newsStory => newsStory.sportId ?? "all"))
  );
  return sportIds;
};

/**
 * @param {import("./news-story-data-source/news-story-data-source").FindManyInput} input
 */
export const useNewsStoryLoader = input => {
  const newsStoryDataSource = useNewsStoryDataSource();
  const [state, setState] = useState(initState);
  const queryKey = toQueryKey(input);
  const queryState = state[queryKey] ?? initQueryState();
  const [allSportIds, setAllSportIds] = useState(initAllSportIds);

  const load = async () => {
    if (queryState.t === "loading" || queryState.t === "ok") {
      return;
    }

    setState(statePrev => ({
      ...statePrev,
      [queryKey]: statePrev[queryKey] ?? Result.Loading,
    }));

    const result = await Result.attempt(() =>
      newsStoryDataSource.findMany({
        limit: DEFAULT_LIMIT,
        offset: 0,
        ...input,
      })
    );

    if (allSportIds.length === 0) {
      const sportIds = await getAllSportIds(newsStoryDataSource);
      setAllSportIds(sportIds);
    }

    setState(statePrev => ({
      ...statePrev,
      [queryKey]: result,
    }));
  };

  useEffect(() => {
    load();
  }, [queryKey]);

  const newsStories = queryState.t === "ok" ? queryState.value.rows : [];
  const isLoading = queryState.t === "not-asked" || queryState.t === "loading";

  return {
    allSportIds,
    newsStories,
    isLoading,
  };
};
