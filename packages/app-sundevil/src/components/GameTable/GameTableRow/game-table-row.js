// @ts-check
// @ts-ignore
import PropTypes from "prop-types";

import { gamePropTypes } from "../../Game/game";
import { configCellsPropTypes } from "./config-cells";
import { configLayoutPropTypes } from "./config-layout";

export const gameTableRowPropTypes = {
  game: gamePropTypes,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  skeleton: PropTypes.bool,
  empty: PropTypes.bool,
  configCells: configCellsPropTypes,
  configLayout: configLayoutPropTypes,
};
