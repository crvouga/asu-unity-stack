// @ts-check
import PropTypes from "prop-types";

/**
 * @typedef {{
 * id: string;
 * href?: string | null;
 * title: string;
 * newsType?: string | null;
 * imageSrc?: string | null;
 * imageAlt?: string | null;
 * sportId?: string | null;
 * sportName?: string | null;
 * sportIconFaClassName?: string | null;
 * showNewsType?: boolean | null;
 * showSportName?: boolean | null;
 * youtubeVideoUrl?: string | null;
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
