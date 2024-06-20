import PropTypes from "prop-types";
import React from "react";

import { useIsMobile } from "../../../../../component-header/src/core/hooks/isMobile";
import { APP_CONFIG } from "../../../config";
import { newsStorySchema } from "./NewsStoryCard";
import { NewsStoryCardGridDesktop } from "./NewsStoryCardGridDesktop";
import { NewsStoryCardGridMobile } from "./NewsStoryCardGridMobile";

/** @typedef {import("./NewsStoryCard").NewsStory} */

/** @type {React.FC<{newsStories: NewsStory[]}>} */
export const NewsStoryCardGrid = ({ newsStories }) => {
  const isMobile = useIsMobile(APP_CONFIG.breakpoint);
  if (isMobile) {
    return <NewsStoryCardGridMobile newsStories={newsStories} />;
  }
  return <NewsStoryCardGridDesktop newsStories={newsStories} />;
};
NewsStoryCardGrid.propTypes = {
  newsStories: PropTypes.arrayOf(newsStorySchema).isRequired,
};
