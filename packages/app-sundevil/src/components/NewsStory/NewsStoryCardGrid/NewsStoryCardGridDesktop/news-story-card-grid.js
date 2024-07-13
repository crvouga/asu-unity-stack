import PropTypes from "prop-types";

import * as NewsStory from "../../news-story";

/** @typedef {import("../../news-story").NewsStory} */

/**
 * @typedef {{newsStories: NewsStory[]; skeleton?: boolean}} Props
 */

export const propTypes = {
  newsStories: PropTypes.arrayOf(NewsStory.newsStorySchema).isRequired,
  skeleton: PropTypes.bool,
};
