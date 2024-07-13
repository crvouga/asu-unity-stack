// @ts-check
import PropTypes from "prop-types";

import { sportSchema } from "../Navigation";

/**
 * @typedef {{
 * id: string;
 * href?: string;
 * title: string;
 * category?: string;
 * imageSrc?: string;
 * sportName?: string;
 * sportIconFaClassName?: string;
 * showCategory?: boolean;
 * showSportName?: boolean;
 * youtubeVideoUrl?: string;
 * }} NewsStory
 */

export const newsStorySchema = PropTypes.shape({
  id: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  imageSrc: PropTypes.string,
  sportName: PropTypes.string,
  sportIconFaClassName: PropTypes.string,
  showCategory: PropTypes.bool,
  showSportName: PropTypes.bool,
  youtubeVideoUrl: PropTypes.string,
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
