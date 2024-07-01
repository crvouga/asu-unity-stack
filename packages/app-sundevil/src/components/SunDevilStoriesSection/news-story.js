// @ts-check
import PropTypes from "prop-types";
import { sportSchema } from "../../../../component-game-list/src/core/components/Navigation";

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
 * @typedef {import("../../../../component-game-list/src/core/components/Navigation").Sport} Sport
 */

/**
 * @typedef {Sport & { newsStories: NewsStory[]} } SportWithNewsStories
 */

export const sportWithNewsStoriesSchema = PropTypes.shape({
  ...sportSchema,
  newsStories: PropTypes.arrayOf(newsStorySchema).isRequired,
});
