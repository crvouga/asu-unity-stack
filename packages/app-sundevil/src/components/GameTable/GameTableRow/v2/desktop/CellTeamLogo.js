/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React, { useState } from "react";

import { APP_CONFIG } from "../../../../../config";
import { useBreakpoint } from "../../../../../utils/use-breakpoint";
import { Cell, isCleanString, STYLES_TRUNCATE } from "./shared";

/**
 * @type {import("./shared").CellComponent}
 */
export const CellTeamLogo = props => {
  const { game, configLayout } = props;
  const isTablet = useBreakpoint(APP_CONFIG.breakpointTablet);
  const [err, setErr] = useState(false);

  if (isTablet) {
    return null;
  }

  if (err) {
    return null;
  }

  return (
    configLayout?.includeCellTitle &&
    isCleanString(game?.teamLogoSrc) && (
      <Cell
        style={{
          ...STYLES_TRUNCATE,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          flexShrink: 0,
          minWidth: "0",
          width: "112px",
        }}
      >
        <a href={game?.teamLogoHref}>
          <img
            width="100%"
            height="100%"
            onError={() => setErr(true)}
            src={game?.teamLogoSrc}
            alt={game?.teamLogoAlt ?? " "}
          />
        </a>
      </Cell>
    )
  );
};
