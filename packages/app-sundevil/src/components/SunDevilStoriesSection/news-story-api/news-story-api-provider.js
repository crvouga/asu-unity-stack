import PropTypes from "prop-types";
import React from "react";

import { buildNewsStoryAPI } from "./news-story-api-impl";

/** @type {React.Context<import("./news-story-api").INewsStoryAPI | null>} */
const NewsStoryAPIContext = React.createContext(null);

export const NewsStoryAPIProvider = ({ children, newsStoryAPI }) => {
  return (
    <NewsStoryAPIContext.Provider value={newsStoryAPI}>
      {children}
    </NewsStoryAPIContext.Provider>
  );
};
NewsStoryAPIProvider.propTypes = {
  children: PropTypes.node.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  newsStoryAPI: PropTypes.object.isRequired,
};

/** @type {() => import("./news-story-api").INewsStoryAPI} */
export const useNewsStoryAPI = () => {
  const newsStoryAPI = React.useContext(NewsStoryAPIContext);
  if (!newsStoryAPI) {
    return buildNewsStoryAPI({ apiUrl: "", apiImpl: "mock" });
  }
  return newsStoryAPI;
};
