// @ts-check
import PropTypes from "prop-types";

import { buttonPropTypes } from "../../Button/button-prop";

/**
 * @typedef {{
 * cellTitle: {
 *  subtitleFontWeight: "normal" | "bold";
 *  includeSubtitleChip?: boolean;
 * }
 * cellTicketButton: {
 *  label?: string | null;
 *  autoTicketIcon?: boolean | null;
 *  button?: import("../../Button/button-prop").ButtonProp | null;
 * },
 * }} ConfigCells
 */

export const configCellsPropTypes = PropTypes.shape({
  cellTitle: PropTypes.shape({
    subtitleFontWeight: PropTypes.oneOf(["normal", "bold"]),
    includeSubtitleChip: PropTypes.bool,
  }),
  cellTicketButton: PropTypes.shape({
    label: PropTypes.string,
    autoTicketIcon: PropTypes.bool,
    button: buttonPropTypes,
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
  cellTicketButton: {
    label: null,
    autoTicketIcon: true,
    button: {
      color: "dark",
      size: "small",
      // target: "_blank", // Rule: By default links should open in the same tab
    },
  },
};
