import PropTypes from "prop-types";

import * as NewsStory from "../../news-story";

/**
 * @typedef {{newsStories: (import("../../news-story").NewsStory)[]; skeleton?: boolean}} Props
 */

export const propTypes = {
  newsStories: PropTypes.arrayOf(NewsStory.newsStorySchema).isRequired,
  skeleton: PropTypes.bool,
  emptyStateMessage: PropTypes.string,
};
