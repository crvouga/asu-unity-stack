import { useEffect, useState } from "react";

import * as Result from "../../../utils/result";
import { useNewsStoryAPI } from "./news-story-api-provider";

/** @type {() => Result.RemoteResult<string, NewsStory[]>} */
const initState = () => {
  return Result.NotAsked;
};

export const useNewsStoryAPILoader = () => {
  const newsStoryAPI = useNewsStoryAPI();
  const [state, setState] = useState(initState);

  const load = async () => {
    setState(Result.Loading);
    const result = await newsStoryAPI.findMany();
    setState(result);
  };

  useEffect(() => {
    load();
  }, []);
  return state;
};
