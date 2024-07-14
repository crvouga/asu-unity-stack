// @ts-check
// @ts-ignore
import PropTypes from "prop-types";

import { gameSchema } from "../../Game/game";
import { configCellsSchema } from "./config-cells";
import { configLayoutSchema } from "./config-layout";

export const gameTableRowPropTypes = {
  game: gameSchema,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  skeleton: PropTypes.bool,
  empty: PropTypes.bool,
  configCells: configCellsSchema,
  configLayout: configLayoutSchema,
};
