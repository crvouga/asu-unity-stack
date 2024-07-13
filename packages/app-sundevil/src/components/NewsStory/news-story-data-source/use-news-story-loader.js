// @ts-check
import { useEffect, useState } from "react";

import * as Result from "../../../utils/result";
import { useNewsStoryDataSource } from "./news-story-data-source-provider";

/** @type {() => Result.RemoteResult<string, import("./news-story-data-source").FindManyOutput>} */
const initState = () => {
  return Result.NotAsked;
};

export const useNewsStoryLoader = () => {
  const newsStoryAPI = useNewsStoryDataSource();
  const [state, setState] = useState(initState);

  const load = async () => {
    setState(Result.Loading);
    const result = await Result.attempt(() => newsStoryAPI.findMany({}));
    setState(result);
  };

  useEffect(() => {
    load();
  }, []);

  const newsStories = state.t === "ok" ? state.value.rows : [];
  const isLoading = state.t === "not-asked" || state.t === "loading";
  return {
    newsStories,
    isLoading,
  };
};
