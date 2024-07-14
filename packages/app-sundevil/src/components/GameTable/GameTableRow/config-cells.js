// @ts-check
import PropTypes from "prop-types";

/**
 * @typedef {{
 * cellTitle: {
 *  subtitleFontWeight: "normal" | "bold";
 * }
 * }} ConfigCells
 */

export const configCellsSchema = PropTypes.shape({
  cellTitle: PropTypes.shape({
    subtitleFontWeight: PropTypes.oneOf(["normal", "bold"]),
  }),
});

/**
 * @type {ConfigCells}
 */
export const defaultConfigCells = {
  cellTitle: {
    subtitleFontWeight: "bold",
  },
};
