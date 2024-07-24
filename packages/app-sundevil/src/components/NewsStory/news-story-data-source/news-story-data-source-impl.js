// @ts-check
import PropTypes from "prop-types";

import { newsStoryPropTypes } from "../news-story";
import { INewsStoryDataSource } from "./news-story-data-source";
import { NewsStoryDataSourceAsuNews } from "./news-story-data-source-impl-asu-news";
import { NewsStoryDataSourceMock } from "./news-story-data-source-impl-mock";
import { NewsStoryDataSourceStatic } from "./news-story-data-source-impl-static";

export const newsStoryDataSourcePropTypes = PropTypes.oneOfType([
  PropTypes.shape({
    type: PropTypes.oneOf(["asu-news"]),
    url: PropTypes.string,
    timeout: PropTypes.number,
  }),
  PropTypes.shape({
    type: PropTypes.oneOf(["mock"]),
  }),
  PropTypes.shape({
    type: PropTypes.oneOf(["static"]),
    newsStories: PropTypes.arrayOf(newsStoryPropTypes),
  }),
  PropTypes.shape({
    type: PropTypes.oneOf(["custom"]),
    newsStoryDataSource: PropTypes.instanceOf(INewsStoryDataSource),
  }),
]);

/**
 * @type {(input: any) => import("./news-story-data-source").INewsStoryDataSource}
 */
export const buildNewsStoryDataSource = input => {
  switch (input?.type) {
    case "asu-news": {
      return new NewsStoryDataSourceAsuNews(input);
    }
    case "mock": {
      return new NewsStoryDataSourceMock();
    }
    case "static": {
      return new NewsStoryDataSourceStatic(input);
    }
    case "custom": {
      return input.newsStoryDataSource;
    }
    default: {
      return new NewsStoryDataSourceMock();
    }
  }
};

// @ts-ignore
window.buildNewsStoryDataSource = buildNewsStoryDataSource;
