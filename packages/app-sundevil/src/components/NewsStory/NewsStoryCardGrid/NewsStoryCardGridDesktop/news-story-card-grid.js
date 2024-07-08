import PropTypes from "prop-types";

import * as NewsStory from "../../news-story";

/** @typedef {import("../NewsStoryCard").NewsStory} */

/**
 * @typedef {{newsStories: NewsStory[]; skeleton?: boolean}} Props
 */

export const propTypes = {
  newsStories: PropTypes.arrayOf(NewsStory.newsStorySchema).isRequired,
  skeleton: PropTypes.bool,
};
