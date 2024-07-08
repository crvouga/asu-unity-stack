import React from "react";

import { useIsMobile } from "../../../../../component-header/src/core/hooks/isMobile";
import { APP_CONFIG } from "../../../config";
import { NewsStoryCardGridDesktop } from "./NewsStoryCardGridDesktop";
import { NewsStoryCardGridMobile } from "./NewsStoryCardGridMobile";

/** @typedef {import("./NewsStoryCard").NewsStory} */

/**
 * @typedef {import("./NewsStoryCardGridMobile").Props} Props
 */

/** @type {React.FC<Props>} */
export const NewsStoryCardGrid = ({ newsStories, ...props }) => {
  const isMobile = useIsMobile(APP_CONFIG.breakpoint);
  if (isMobile) {
    return <NewsStoryCardGridMobile newsStories={newsStories} {...props} />;
  }
  return <NewsStoryCardGridDesktop newsStories={newsStories} />;
};
NewsStoryCardGrid.propTypes = NewsStoryCardGridMobile.propTypes;
