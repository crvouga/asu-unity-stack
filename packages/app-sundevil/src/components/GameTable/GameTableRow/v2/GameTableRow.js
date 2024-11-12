// @ts-check
// @ts-ignore
import React, { forwardRef } from "react";

import { APP_CONFIG } from "../../../../config";
import { useBreakpoint } from "../../../../utils/use-breakpoint";
import { gameTableRowPropTypes } from "../game-table-row";
import { GameTableRowDesktop } from "./desktop";
import { GameTableRowMobile } from "./mobile";

export const GameTableRow = forwardRef(
  (
    /**  @type {import("../game-table-row").GameTableRowProps} */
    props,
    ref
  ) => {
    const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
    const isDesktopSmall = useBreakpoint(APP_CONFIG.breakpointDesktopSmall);
    if (isMobile) {
      return <GameTableRowMobile {...props} ref={ref} />;
    }
    if (isDesktopSmall) {
      return <GameTableRowMobile {...props} ref={ref} />;
    }
    return <GameTableRowDesktop {...props} ref={ref} />;
  }
);

// @ts-ignore
GameTableRow.propTypes = gameTableRowPropTypes;
