// @ts-check
import { useEffect, useState } from "react";

import * as Result from "../../utils/result";
import { useNewsStoryDataSource } from "./NewsDataSourceContext";

/** @type {() => string[]} */
const initAllNewsTypes = () => {
  return [];
};

/**
 * @type {(newsStoryDataSource: import("./news-story-data-source/news-story-data-source").INewsStoryDataSource) => Promise<string[]>}
 */
const getAllNewsTypes = async newsStoryDataSource => {
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
  const newsTypes = Array.from(
    new Set(newsStories.flatMap(newsStory => newsStory.newsType ?? []))
  );
  return newsTypes;
};

export const useNewsTypesLoader = () => {
  const newsStoryDataSource = useNewsStoryDataSource();

  const [allNewsTypes, setAllNewsTypes] = useState(initAllNewsTypes);

  const load = async () => {
    const sportIds = await getAllNewsTypes(newsStoryDataSource);
    setAllNewsTypes(sportIds);
  };

  useEffect(() => {
    load();
  }, []);

  return {
    allNewsTypes,
  };
};
