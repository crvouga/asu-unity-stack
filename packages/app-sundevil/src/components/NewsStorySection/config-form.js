import PropTypes from "prop-types";

export const configFormPropTypes = PropTypes.shape({
  title: PropTypes.string,
});

/**
 * @typedef {{
 * title?: string;
 * }} ConfigForm
 */

/**
 * @type {ConfigForm}
 */
export const defaultConfigForm = {};
