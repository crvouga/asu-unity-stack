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
 *  includeInputEventTypeSelect: boolean
 *  includeMaxAdmissionCostSelect: boolean
 *  includeAdmissionCostSelect: boolean
 * }} ConfigLayout
 */

export const configLayoutPropTypes = PropTypes.shape({
  variant: PropTypes.oneOf(["sidebar", "default"]),
  includeInputSearch: PropTypes.bool,
  includeInputSportType: PropTypes.bool,
  includeInputHomeOrAwaySelect: PropTypes.bool,
  includeLoadMore: PropTypes.bool,
  includeInputVenueSelect: PropTypes.bool,
  includeSportsTabs: PropTypes.bool,
  includeInputSortBySelect: PropTypes.bool,
  includeSportTypeCheckboxList: PropTypes.bool,
  includeInputEventTypeSelect: PropTypes.bool,
  includeMaxAdmissionCostSelect: PropTypes.bool,
  includeAdmissionCostSelect: PropTypes.bool,
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
  includeSportsTabs: false,
  includeLoadMore: false,
  includeInputSortBySelect: false,
  includeSportTypeCheckboxList: false,
  includeInputEventTypeSelect: false,
  includeMaxAdmissionCostSelect: false,
  includeAdmissionCostSelect: false,
};

/**
 * @param {ConfigLayout} configLayout
 * @returns {boolean}
 */
export const shouldIncludeForm = configLayout => {
  return (
    configLayout.includeInputSearch ||
    configLayout.includeInputSportType ||
    configLayout.includeInputVenueSelect ||
    configLayout.includeInputHomeOrAwaySelect ||
    configLayout.includeInputSortBySelect ||
    configLayout.includeInputEventTypeSelect ||
    configLayout.includeMaxAdmissionCostSelect ||
    configLayout.includeAdmissionCostSelect
  );
};
