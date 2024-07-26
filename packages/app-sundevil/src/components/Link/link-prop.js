import PropTypes from "prop-types";

/**
 * @typedef {Object} LinkProp
 * @property {string | null | undefined} [label]
 * @property {string | null | undefined} [href]
 * @property {string | null | undefined} [link]
 * @property {string | null | undefined} [class]
 * @property {string | null | undefined} [className]
 */

export const linkPropTypes = PropTypes.shape({
  label: PropTypes.string,
  href: PropTypes.string,
  class: PropTypes.string,
  className: PropTypes.string,
});
