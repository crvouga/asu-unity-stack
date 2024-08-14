// @ts-check
import { useEffect, useState } from "react";

import { ALL_ID } from "../../select-all-option";
import * as Result from "../../utils/result";
import { useNewsStoryDataSource } from "./NewsDataSourceContext";

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
    new Set(newsStories.map(newsStory => newsStory.sportId ?? ALL_ID))
  );
  return sportIds;
};

export const useSportIdsLoader = () => {
  const newsStoryDataSource = useNewsStoryDataSource();

  const [allSportIds, setAllSportIds] = useState(initAllSportIds);

  const load = async () => {
    const sportIds = await getAllSportIds(newsStoryDataSource);
    setAllSportIds(sportIds);
  };

  useEffect(() => {
    load();
  }, []);

  return {
    allSportIds,
  };
};
