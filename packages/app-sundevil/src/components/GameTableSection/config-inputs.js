// @ts-check
import PropTypes from "prop-types";

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

const configInputPropTypes = PropTypes.shape({
  label: PropTypes.string,
  placeholder: PropTypes.string,
});

const configSelectInputPropTypes = PropTypes.shape({
  label: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(selectOptionPropTypes),
});

export const configInputsPropTypes = PropTypes.shape({
  searchInput: configInputPropTypes,
  sportTypeSelect: configSelectInputPropTypes,
  homeOrAwaySelect: configSelectInputPropTypes,
  venueSelect: configSelectInputPropTypes,
  sortBySelect: configSelectInputPropTypes,
  eventTypeSelect: configSelectInputPropTypes,
  maxAdmissionCostSelect: configSelectInputPropTypes,
  admissionCostSelect: configSelectInputPropTypes,
});

/**
 * @typedef {{
 *  label?: string;
 *  placeholder?: string;
 * }} ConfigInput
 */

/**
 * @typedef {ConfigInput & {options?: SelectOption[]}} ConfigSelectInput
 */

/**
 * @typedef {{
 *  searchInput?: ConfigInput,
 *  sportTypeSelect?: ConfigSelectInput,
 *  homeOrAwaySelect?: ConfigSelectInput,
 *  venueSelect?: ConfigSelectInput,
 *  sortBySelect?: ConfigSelectInput,
 *  sportTypeCheckboxList?: ConfigSelectInput,
 *  eventTypeSelect?: ConfigSelectInput,
 *  maxAdmissionCostSelect?: ConfigSelectInput,
 *  admissionCostSelect?: ConfigSelectInput,
 * }} ConfigInputs
 */

/**
 * @type {ConfigInputs}
 */
export const defaultConfigInputs = {
  searchInput: {
    label: "Search by Event Name",
    placeholder: "Sun Devils vs. BYU, Season Tickets, Rose Bowl",
  },
  sportTypeSelect: {
    label: "Sport Type",
    placeholder: "Select one",
  },
  homeOrAwaySelect: {
    label: "Home or away",
    placeholder: "Select one",
  },
  venueSelect: {
    label: "Venue",
    placeholder: "Select one",
  },
  sortBySelect: {
    label: "Sort By:",
    placeholder: "Select one",
  },
  sportTypeCheckboxList: {
    label: "Sport Type",
    placeholder: "Select one",
  },
  maxAdmissionCostSelect: {
    label: "Cost of admission",
    placeholder: "Select one",
  },
  admissionCostSelect: {
    label: "Cost of admission",
    placeholder: "Select",
  },
  eventTypeSelect: {
    label: "Event Type",
    placeholder: "Select one",
  },
};
