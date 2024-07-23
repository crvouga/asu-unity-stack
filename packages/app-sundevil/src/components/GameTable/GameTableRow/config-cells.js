// @ts-check
import PropTypes from "prop-types";

/**
 * @typedef {{
 * cellTitle: {
 *  subtitleFontWeight: "normal" | "bold";
 *  includeSubtitleChip?: boolean;
 * }
 * }} ConfigCells
 */

export const configCellsSchema = PropTypes.shape({
  cellTitle: PropTypes.shape({
    subtitleFontWeight: PropTypes.oneOf(["normal", "bold"]),
    includeSubtitleChip: PropTypes.bool,
  }),
});

/**
 * @type {ConfigCells}
 */
export const defaultConfigCells = {
  cellTitle: {
    subtitleFontWeight: "normal",
    includeSubtitleChip: true,
  },
};
