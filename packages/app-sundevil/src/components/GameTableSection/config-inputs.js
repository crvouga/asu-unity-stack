// @ts-check
import PropTypes from "prop-types";

const selectOptionPropTypes = PropTypes.shape({
  label: PropTypes.string,
  id: PropTypes.string,
  active: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  includeAllOption: PropTypes.bool,
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
  includeAllOption: PropTypes.bool,
  filterOptionsAvailableInDataSource: PropTypes.bool,
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
 * @typedef {ConfigInput & {options?: SelectOption[]; includeAllOption?: boolean; filterOptionsAvailableInDataSource?: boolean}} ConfigSelectInput
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
    label: "Search by event name",
    placeholder: "Sun Devils vs. BYU, Season Tickets, Rose Bowl",
  },
  sportTypeSelect: {
    label: "Sport type",
    placeholder: "Select one",
    includeAllOption: true,
    filterOptionsAvailableInDataSource: false,
  },
  homeOrAwaySelect: {
    label: "Home or away",
    placeholder: "Select one",
    includeAllOption: true,
  },
  venueSelect: {
    label: "Venue",
    placeholder: "Select one",
    includeAllOption: true,
  },
  sortBySelect: {
    label: "Sort By:",
    placeholder: "Select one",
    includeAllOption: true,
  },
  sportTypeCheckboxList: {
    label: "Sport type",
    placeholder: "Select one",
    includeAllOption: true,
  },
  maxAdmissionCostSelect: {
    label: "Max cost of admission",
    placeholder: "Select one",
    includeAllOption: true,
  },
  admissionCostSelect: {
    label: "Cost of admission",
    placeholder: "Select",
    includeAllOption: true,
  },
  eventTypeSelect: {
    label: "Event type",
    placeholder: "Select one",
    includeAllOption: true,
  },
};
