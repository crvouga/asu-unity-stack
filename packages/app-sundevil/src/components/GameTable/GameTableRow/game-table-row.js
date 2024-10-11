// @ts-check
// @ts-ignore
import PropTypes from "prop-types";

import { gamePropTypes } from "../../Game/game";
import { configCellsPropTypes } from "./config-cells";
import { configLayoutPropTypes } from "./config-layout";

/**
 * @typedef {{
 * game?: import("../../Game/game").Game,
 * style?: React.CSSProperties,
 * skeleton?: boolean,
 * empty?: boolean,
 * configCells?: import("./config-cells").ConfigCells,
 * configLayout?: import("./config-layout").ConfigLayout,
 * mobileRowVariant?: string,
 * }} GameTableRowProps
 */

export const gameTableRowPropTypes = {
  game: gamePropTypes,
  style: PropTypes.object,
  skeleton: PropTypes.bool,
  empty: PropTypes.bool,
  configCells: configCellsPropTypes,
  configLayout: configLayoutPropTypes,
  mobileRowVariant: PropTypes.oneOf(["divided", "bordered"]),
};
