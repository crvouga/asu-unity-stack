// @ts-check
import PropTypes from "prop-types";

/**
 * @typedef {{
 *  variant: "sidebar" | "default"
 *  includeInputSearch: boolean
 *  includeInputSportType: boolean
 *  includeInputHomeOrAwaySelect: boolean
 *  includeInputVenueSelect: boolean
 *  includeSportsTabs: boolean
 *  includeInputSortBySelect: boolean
 *  includeLoadMore: boolean
 *  includeSportTypeCheckboxList: boolean
 * }} ConfigLayout
 */

export const configLayoutSchema = PropTypes.shape({
  variant: PropTypes.oneOf(["sidebar", "default"]),
  includeInputSearch: PropTypes.bool,
  includeInputSportType: PropTypes.bool,
  includeInputHomeOrAwaySelect: PropTypes.bool,
  includeLoadMore: PropTypes.bool,
  includeInputVenueSelect: PropTypes.bool,
  includeSportsTabs: PropTypes.bool,
  includeInputSortBySelect: PropTypes.bool,
  includeSportTypeCheckboxList: PropTypes.bool,
});

/**
 * @type {ConfigLayout}
 */
export const defaultConfigLayout = {
  variant: "default",
  includeInputSearch: false,
  includeInputSportType: false,
  includeInputHomeOrAwaySelect: false,
  includeInputVenueSelect: false,
  includeSportsTabs: true,
  includeLoadMore: false,
  includeInputSortBySelect: false,
  includeSportTypeCheckboxList: false,
};
