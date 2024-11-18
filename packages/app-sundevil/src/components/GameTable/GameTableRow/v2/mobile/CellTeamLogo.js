/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React, { useState } from "react";

import { Anchor } from "../../Anchor";
import { Cell, isCleanString, STYLES_TRUNCATE, toTeamLogoAlt } from "./shared";

/**
 * @type {import("./shared").CellComponent}
 */
export const CellTeamLogo = props => {
  const { game, configLayout } = props;
  const [err, setErr] = useState(false);

  const hasContent = isCleanString(game?.teamLogoSrc);

  if (err) {
    return null;
  }

  return configLayout?.includeCellTitle && hasContent ? (
    <Cell
      style={{
        ...STYLES_TRUNCATE,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        flexShrink: 0,
        minWidth: "0",
        width: "48px",
      }}
    >
      <Anchor
        href={game?.teamLogoHref}
        style={{
          height: "40px",
          width: "40px",
        }}
      >
        <img
          onError={() => setErr(true)}
          width="100%"
          height="100%"
          style={{
            backgroundColor: "transparent",
            objectFit: "contain",
          }}
          src={game?.teamLogoSrc}
          alt={toTeamLogoAlt(props)}
        />
      </Anchor>
    </Cell>
  ) : null;
};
