import PropTypes from "prop-types";

export const buttonSchema = PropTypes.shape({
  color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
  label: PropTypes.string,
  size: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
});

/**
 * @typedef {Object} ButtonProp
 * @property {string} [color] Button background color
 * @property {string} [label] Button label
 * @property {string} [size] Button size
 * @property {string} [href] Button href
 * @property {string} [icon] Button icon
 */
