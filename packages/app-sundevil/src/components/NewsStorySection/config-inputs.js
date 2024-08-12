import PropTypes from "prop-types";

/**
 * @typedef {{
 * label: string;
 * placeholder: string;
 * }}ConfigInput
 */

const selectOptionPropTypes = PropTypes.shape({
  label: PropTypes.string,
  id: PropTypes.string,
  active: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
});

/**
 * @typedef {{
 * id: string;
 * label?: string;
 * placeholder?: string;
 * active?: boolean;
 * value?: string | number | null | undefined;
 * }} SelectOption
 */

/**
 * @typedef {ConfigInput & {options?: SelectOption[]}} ConfigSelectInput
 */

/**
 * @typedef {{
 *  search: ConfigInput;
 *  newsType: ConfigInput;
 *  sportType: ConfigInput;
 * }} ConfigInputs
 */

const configInputPropTypes = PropTypes.shape({
  label: PropTypes.string,
  placeholder: PropTypes.string,
});

const configSelectInputPropTypes = PropTypes.shape({
  label: PropTypes.string,
  placeholder: PropTypes.string,
  initialValueId: PropTypes.string,
  options: PropTypes.arrayOf(selectOptionPropTypes),
});

export const configInputsPropTypes = PropTypes.shape({
  search: configInputPropTypes,
  newsType: configSelectInputPropTypes,
  sportType: configInputPropTypes,
});

/**
 * @type {ConfigInputs}
 */
export const defaultConfigInputs = {
  newsType: {
    label: "News type",
    placeholder: "Select one",
  },
  sportType: {
    label: "Sport type",
    placeholder: "Select one",
  },
  search: {
    label: "Search",
    placeholder: "Search for stories",
  },
};
