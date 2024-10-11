// @ts-check
import PropTypes from "prop-types";

/**
 * @typedef {{
 *  includeCellIcon: boolean
 *  includeCellDate: boolean
 *  includeCellSportName: boolean
 *  includeCellVersus: boolean
 *  includeCellTitle: boolean
 *  includeCellTickets: boolean
 * }} ConfigLayout
 */

export const configLayoutPropTypes = PropTypes.shape({
  includeCellDate: PropTypes.bool,
  includeCellSportName: PropTypes.bool,
  includeCellVersus: PropTypes.bool,
  includeCellTitle: PropTypes.bool,
  includeCellTickets: PropTypes.bool,
});

/**
 * @type {ConfigLayout}
 */
export const defaultConfigLayout = {
  includeCellIcon: true,
  includeCellDate: true,
  includeCellSportName: false,
  includeCellVersus: false,
  includeCellTitle: true,
  includeCellTickets: true,
};
