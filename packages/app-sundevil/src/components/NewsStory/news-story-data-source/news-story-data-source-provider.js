import PropTypes from "prop-types";
import React from "react";

import { INewsStoryDataSource } from "./news-story-data-source";
import { buildNewsStoryDataSource } from "./news-story-data-source-impl";

/** @type {React.Context<import("./news-story-data-source").INewsStoryDataSource | null>} */
const NewsStoryDataSourceContext = React.createContext(null);

export const NewsStoryDataSourceProvider = ({
  children,
  newsStoryDataSource,
}) => {
  return (
    <NewsStoryDataSourceContext.Provider value={newsStoryDataSource}>
      {children}
    </NewsStoryDataSourceContext.Provider>
  );
};
NewsStoryDataSourceProvider.propTypes = {
  children: PropTypes.node.isRequired,
  newsStoryDataSource: PropTypes.instanceOf(INewsStoryDataSource).isRequired,
};

/** @type {() => import("./news-story-data-source").INewsStoryDataSource} */
export const useNewsStoryDataSource = () => {
  const newsStoryAPI = React.useContext(NewsStoryDataSourceContext);
  if (!newsStoryAPI) {
    return buildNewsStoryDataSource({ apiUrl: "", apiImpl: "mock" });
  }
  return newsStoryAPI;
};
