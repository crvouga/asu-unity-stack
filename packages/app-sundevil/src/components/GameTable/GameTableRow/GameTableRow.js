// @ts-check
// @ts-ignore
import React, { forwardRef } from "react";

import { useIsMobile } from "../../../../../component-header/src/core/hooks/isMobile";
import { APP_CONFIG } from "../../../config";
import { gameTableRowPropTypes } from "./game-table-row";
import { GameTableRowDesktop } from "./GameTableRowDesktop";
import { GameTableRowMobile } from "./GameTableRowMobile";

export const GameTableRow = forwardRef((props, ref) => {
  const isMobile = useIsMobile(APP_CONFIG.breakpointMobile);
  if (isMobile) {
    return <GameTableRowMobile {...props} ref={ref} />;
  }
  return <GameTableRowDesktop {...props} ref={ref} />;
});

// @ts-ignore
GameTableRow.propTypes = gameTableRowPropTypes;
