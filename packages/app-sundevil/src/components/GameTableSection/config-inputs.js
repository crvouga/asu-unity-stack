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
 * active?:boolean;
 * value?: string | number | null | undefined;
 * }} SelectOption
 */

export const configInputsPropTypes = PropTypes.shape({
  searchInput: PropTypes.shape({
    label: PropTypes.string,
    placeholder: PropTypes.string,
  }),
  sportTypeSelect: PropTypes.shape({
    label: PropTypes.string,
    placeholder: PropTypes.string,
  }),
  homeOrAwaySelect: PropTypes.shape({
    label: PropTypes.string,
    placeholder: PropTypes.string,
  }),
  venueSelect: PropTypes.shape({
    label: PropTypes.string,
    placeholder: PropTypes.string,
  }),
  sortBySelect: PropTypes.shape({
    label: PropTypes.string,
    placeholder: PropTypes.string,
  }),
  eventTypeSelect: PropTypes.shape({
    label: PropTypes.string,
    placeholder: PropTypes.string,
    options: selectOptionPropTypes,
  }),
  maxAdmissionCostSelect: PropTypes.shape({
    label: PropTypes.string,
    placeholder: PropTypes.string,
    options: selectOptionPropTypes,
  }),
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
 *  sportTypeSelect?: ConfigInput,
 *  homeOrAwaySelect?: ConfigInput,
 *  venueSelect?: ConfigInput,
 *  sortBySelect?: ConfigInput,
 *  sportTypeCheckboxList?: ConfigInput,
 *  eventTypeSelect?: ConfigSelectInput,
 *  maxAdmissionCostSelect?: ConfigSelectInput,
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
  eventTypeSelect: {
    label: "Event Type",
    placeholder: "Select one",
  },
};
