// @ts-check
import PropTypes from "prop-types";

/**
 * @typedef {{
 *  includeInputSearch: boolean
 *  includeInputSportType: boolean
 *  includeInputHomeOrAwaySelect: boolean
 *  includeInputVenueSelect: boolean
 *  includeSportsTabs: boolean
 *  includeInputSortBySelect: boolean
 *  includeLoadMore: boolean
 * }} ConfigLayout
 */

export const configLayoutSchema = PropTypes.shape({
  includeInputSearch: PropTypes.bool,
  includeInputSportType: PropTypes.bool,
  includeInputHomeOrAwaySelect: PropTypes.bool,
  includeLoadMore: PropTypes.bool,
  includeInputVenueSelect: PropTypes.bool,
  includeSportsTabs: PropTypes.bool,
  includeInputSortBySelect: PropTypes.bool,
});

/**
 * @type {ConfigLayout}
 */
export const defaultConfigLayout = {
  includeInputSearch: false,
  includeInputSportType: false,
  includeInputHomeOrAwaySelect: false,
  includeInputVenueSelect: false,
  includeSportsTabs: true,
  includeLoadMore: false,
  includeInputSortBySelect: false,
};
