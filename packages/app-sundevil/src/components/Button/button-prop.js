import PropTypes from "prop-types";

export const buttonPropTypes = PropTypes.shape({
  color: PropTypes.oneOf(["gold", "maroon", "gray", "dark"]),
  class: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  endIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  target: PropTypes.string,
  className: PropTypes.string,
  link: PropTypes.string,
  onClick: PropTypes.func,
});

/**
 * @typedef {Object} ButtonProp
 * @property {string} [color] Button background color
 * @property {string} [label] Button label
 * @property {string} [size] Button size
 * @property {string} [href] Button href
 * @property {string} [icon] Button icon
 * @property {string} [endIcon] Button end icon
 * @property {string} [target] Button target
 * @property {string} [class] Button class
 * @property {string} [className] Button class name
 * @property {string} [link] Button link
 * @property {() => void} [onClick] Button on click
 */

export const isValidButtonProp = buttonProp => {
  return typeof buttonProp?.label === 'string' && buttonProp.label.trim().length > 0;
};
