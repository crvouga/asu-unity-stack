// @ts-check
import PropTypes from "prop-types";

import { sportSchema } from "../Navigation";

/**
 * @typedef {{
 * href: string;
 * title: string;
 * category: string;
 * imageSrc: string;
 * sportName: string;
 * sportIconFaClassName: string;
 * showCategory?: boolean;
 * showSportName?: boolean;
 * }} NewsStory
 */

export const newsStorySchema = PropTypes.shape({
  href: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  sportName: PropTypes.string.isRequired,
  sportIconFaClassName: PropTypes.string.isRequired,
  showCategory: PropTypes.bool,
  showSportName: PropTypes.bool,
});

/**
 * @typedef {import("../Navigation").Sport} Sport
 */

/**
 * @typedef {Sport & { newsStories: NewsStory[]} } SportWithNewsStories
 */

export const sportWithNewsStoriesSchema = PropTypes.shape({
  ...sportSchema,
  newsStories: PropTypes.arrayOf(newsStorySchema).isRequired,
});
