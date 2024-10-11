import React, { forwardRef } from "react";

import { gameTableRowPropTypes } from "../game-table-row";
import { GameTableRowMobileBordered } from "./GameTableRowMobileBordered";
import { GameTableRowMobileDivided } from "./GameTableRowMobileDivided";

export const GameTableRowMobile = forwardRef((props, ref) => {
  switch (props.mobileRowVariant) {
    case "bordered": {
      return <GameTableRowMobileBordered {...props} ref={ref} />;
    }
    case "divided": {
      return <GameTableRowMobileDivided {...props} ref={ref} />;
    }
    default: {
      return <GameTableRowMobileDivided {...props} ref={ref} />;
    }
  }
});
GameTableRowMobile.propTypes = gameTableRowPropTypes;
