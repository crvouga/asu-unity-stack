// @ts-check
// @ts-ignore
import React from "react";

import { useIsMobile } from "../../../../../component-header/src/core/hooks/isMobile";
import { APP_CONFIG } from "../../../config";
import { gameTableRowPropTypes } from "./game-table-row";
import { GameTableRowDesktop } from "./GameTableRowDesktop";
import { GameTableRowMobile } from "./GameTableRowMobile";

export const GameTableRow = props => {
  const isMobile = useIsMobile(APP_CONFIG.breakpointMobile);
  if (isMobile) {
    return <GameTableRowMobile {...props} />;
  }
  return <GameTableRowDesktop {...props} />;
};

GameTableRow.propTypes = gameTableRowPropTypes;
