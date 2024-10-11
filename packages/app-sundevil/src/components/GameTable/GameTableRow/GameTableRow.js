import React, { forwardRef } from "react";

import { GameTableRow as GameTableRowV1 } from "./v1/GameTableRow";
import { GameTableRow as GameTableRowV2 } from "./v2/GameTableRow";

const USE_V2 = true;

export const GameTableRow = forwardRef((props, ref) => {
  if (USE_V2) {
    return <GameTableRowV2 {...props} ref={ref} />;
  }
  return <GameTableRowV1 {...props} ref={ref} />;
});
