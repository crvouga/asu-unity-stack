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
 * version: "v1" | "v2",
 * }} GameTableRowProps
 */

export const gameTableRowPropTypes = {
  version: PropTypes.oneOf(["v1", "v2"]).isRequired,
  game: gamePropTypes,
  style: PropTypes.object,
  skeleton: PropTypes.bool,
  empty: PropTypes.bool,
  configCells: configCellsPropTypes,
  configLayout: configLayoutPropTypes,
  mobileRowVariant: PropTypes.oneOf(["divided", "bordered"]),
};
