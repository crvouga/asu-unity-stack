// @ts-check
import PropTypes from "prop-types";

export const configInputsSchema = PropTypes.shape({
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
});

/**
 * @typedef {{
 *  label?: string;
 *  placeholder?: string;
 * }} ConfigInput
 */

/**
 * @typedef {{
 *  searchInput?: ConfigInput,
 *  sportTypeSelect?: ConfigInput,
 *  homeOrAwaySelect?: ConfigInput,
 *  venueSelect?: ConfigInput,
 *  sortBySelect?: ConfigInput,
 *  sportTypeCheckboxList?: ConfigInput,
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
};
