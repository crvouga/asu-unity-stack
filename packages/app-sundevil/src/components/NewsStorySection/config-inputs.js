import PropTypes from "prop-types";

const configInputPropTypes = PropTypes.shape({
  label: PropTypes.string,
  placeholder: PropTypes.string,
});

export const configInputsPropTypes = PropTypes.shape({
  search: configInputPropTypes,
  newsType: configInputPropTypes,
  sportType: configInputPropTypes,
});

/**
 * @typedef {{
 * label: string;
 * placeholder: string;
 * }}ConfigInput
 */

/**
 * @typedef {{
 *  search: ConfigInput;
 *  newsType: ConfigInput;
 *  sportType: ConfigInput;
 * }} ConfigInputs
 */

/**
 * @type {ConfigInputs}
 */
export const defaultConfigInputs = {
  newsType: {
    label: "News Type",
    placeholder: "Select one",
  },
  sportType: {
    label: "Sport Type",
    placeholder: "Select one",
  },
  search: {
    label: "Search",
    placeholder: "Search for stories",
  },
};
