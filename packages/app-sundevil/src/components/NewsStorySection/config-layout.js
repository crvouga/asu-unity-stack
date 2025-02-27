import PropTypes from "prop-types";

export const configLayoutPropTypes = PropTypes.shape({
  includeSportsTabs: PropTypes.bool,
  includeInputSearch: PropTypes.bool,
  includeInputNewsType: PropTypes.bool,
  includeInputSportType: PropTypes.bool,
  includeLoadMore: PropTypes.bool,
});

/**
 * @typedef {{
 *  includeSportsTabs: boolean;
 *  includeInputSearch: boolean;
 *  includeInputNewsType: boolean;
 *  includeInputSportType :boolean;
 *  includeLoadMore: boolean;
 * }} ConfigLayout
 */

/**
 * @type {ConfigLayout}
 */
export const defaultConfigLayout = {
  includeSportsTabs: false,
  includeInputSearch: false,
  includeInputNewsType: false,
  includeInputSportType: false,
  includeLoadMore: false,
};
