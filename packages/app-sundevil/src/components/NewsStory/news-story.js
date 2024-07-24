// @ts-check
import PropTypes from "prop-types";

/**
 * @typedef {{
 * id: string;
 * href?: string;
 * title: string;
 * newsType?: string;
 * imageSrc?: string;
 * imageAlt?: string;
 * sportId?: string;
 * sportName?: string;
 * sportIconFaClassName?: string;
 * showNewsType?: boolean;
 * showSportName?: boolean;
 * youtubeVideoUrl?: string;
 * }} NewsStory
 */

export const newsStoryPropTypes = PropTypes.shape({
  id: PropTypes.string,
  href: PropTypes.string,
  title: PropTypes.string.isRequired,
  newsType: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  sportId: PropTypes.string,
  sportName: PropTypes.string,
  sportIconFaClassName: PropTypes.string,
  showNewsType: PropTypes.bool,
  showSportName: PropTypes.bool,
  youtubeVideoUrl: PropTypes.string,
});

/**
 * @typedef {import("../Navigation").Sport} Sport
 */
