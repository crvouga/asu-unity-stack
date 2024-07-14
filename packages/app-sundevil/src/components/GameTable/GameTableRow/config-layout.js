// @ts-check
import PropTypes from "prop-types";

/**
 * @typedef {{
 *  includeCellDate: boolean
 *  includeCellSportName: boolean
 *  includeCellVersus: boolean
 *  includeCellTitle: boolean
 *  includeCellTickets: boolean
 * }} ConfigLayout
 */

export const configLayoutSchema = PropTypes.shape({
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
  includeCellDate: true,
  includeCellSportName: false,
  includeCellVersus: false,
  includeCellTitle: true,
  includeCellTickets: true,
};
