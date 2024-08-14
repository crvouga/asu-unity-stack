import PropTypes from "prop-types";

/**
 * @typedef {{
 * imageSrc: string;
 * imageAlt: string;
 * href: string;
 * target?: string;
 * width?: string | number | null | undefined;
 * height?: string | number | null | undefined;
 * }} Ad
 */

export const adPropTypes = PropTypes.shape({
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
});
