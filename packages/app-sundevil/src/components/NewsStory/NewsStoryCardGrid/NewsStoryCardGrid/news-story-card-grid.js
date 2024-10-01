import PropTypes from "prop-types";

import * as NewsStory from "../../news-story";

/**
 * @typedef {{
 * newsStories: (import("../../news-story").NewsStory)[];
 * skeleton?: boolean;
 * skeletonCount?: number;
 * empty?: boolean;
 * emptyStateMessage?: string;
 * columns?: number; sectionName: string
 * }} Props
 */

export const propTypes = {
  newsStories: PropTypes.arrayOf(NewsStory.newsStoryPropTypes).isRequired,
  skeleton: PropTypes.bool,
  skeletonCount: PropTypes.number,
  emptyStateMessage: PropTypes.string,
  empty: PropTypes.bool,
  columns: PropTypes.number,
  sectionName: PropTypes.string.isRequired,
};
