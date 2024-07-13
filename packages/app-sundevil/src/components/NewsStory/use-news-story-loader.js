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

/**
 * @param {import("./news-story-data-source/news-story-data-source").FindManyInput} input
 */
export const useNewsStoryLoader = input => {
  const newsStoryAPI = useNewsStoryDataSource();
  const [state, setState] = useState(initState);
  const queryKey = toQueryKey(input);
  const queryState = state[queryKey] ?? initQueryState();

  const load = async () => {
    if (queryState.t === "loading" || queryState.t === "ok") {
      return;
    }

    setState(statePrev => ({
      ...statePrev,
      [queryKey]: statePrev[queryKey] ?? Result.Loading,
    }));

    const result = await Result.attempt(() =>
      newsStoryAPI.findMany({
        limit: DEFAULT_LIMIT,
        offset: 0,
        ...input,
      })
    );

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
    newsStories,
    isLoading,
  };
};
