// @ts-check
// @ts-ignore
import React, { forwardRef } from "react";

import { APP_CONFIG } from "../../../../config";
import { useBreakpoint } from "../../../../utils/use-breakpoint";
import { GameTableRowDesktop } from "./GameTableRowDesktop";
import { GameTableRowMobile } from "./GameTableRowMobile";

export const GameTableRow = forwardRef(
  (
    /**
     * @type {import("../game-table-row").GameTableRowProps}
     */
    props,
    ref
  ) => {
    const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
    if (isMobile) {
      return <GameTableRowMobile {...props} ref={ref} />;
    }
    return <GameTableRowDesktop {...props} ref={ref} />;
  }
);
