/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React, { useEffect, useState } from "react";

import { Cell, isCleanString, STYLES_TRUNCATE } from "./shared";

export const CELL_TEAM_LOGO_WIDTH = 112;

/**
 * @type {React.FC<import("./shared").CellProps & {onHasContent: (val: boolean) => void}>}
 */
export const CellTeamLogo = props => {
  const { game, configLayout, onHasContent } = props;

  const [err, setErr] = useState(false);

  const hasContent = Boolean(
    !err && configLayout?.includeCellTitle && isCleanString(game?.teamLogoSrc)
  );

  useEffect(() => {
    onHasContent(hasContent);
  }, [hasContent]);

  return hasContent ? (
    <Cell
      style={{
        ...STYLES_TRUNCATE,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flexShrink: 0,
        minWidth: "0",
        width: `${CELL_TEAM_LOGO_WIDTH}px`,
      }}
    >
      <a
        href={game?.teamLogoHref}
        style={{
          height: "80px",
          width: "80px",
        }}
      >
        <img
          width="100%"
          height="100%"
          style={{
            backgroundColor: "transparent",
            objectFit: "contain",
          }}
          onError={() => setErr(true)}
          src={game?.teamLogoSrc}
          alt={game?.teamLogoAlt ?? " "}
        />
      </a>
    </Cell>
  ) : null;
};
