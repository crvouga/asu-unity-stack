// @ts-check
import PropTypes from "prop-types";

/**
 * @typedef {{
 * id: string;
 * href?: string;
 * title: string;
 * category?: string;
 * imageSrc?: string;
 * imageAlt?: string;
 * sportId?: string;
 * sportName?: string;
 * sportIconFaClassName?: string;
 * showCategory?: boolean;
 * showSportName?: boolean;
 * youtubeVideoUrl?: string;
 * }} NewsStory
 */

export const newsStoryPropTypes = PropTypes.shape({
  id: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string.isRequired,
  category: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  sportId: PropTypes.string,
  sportName: PropTypes.string,
  sportIconFaClassName: PropTypes.string,
  showCategory: PropTypes.bool,
  showSportName: PropTypes.bool,
  youtubeVideoUrl: PropTypes.string,
});

/**
 * @typedef {import("../Navigation").Sport} Sport
 */
