/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React from "react";

import { Cell, isCleanString, STYLES_TRUNCATE } from "./shared";

/**
 * @type {import("./shared").CellComponent}
 */
export const CellTeamLogo = props => {
  const { game, configLayout } = props;

  const hasContent = isCleanString(game?.teamLogoSrc);

  return configLayout?.includeCellTitle && hasContent ? (
    <Cell
      style={{
        ...STYLES_TRUNCATE,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        flexShrink: 0,
        minWidth: "0",
        width: "48px",
      }}
    >
      <a href={game?.teamLogoHref}>
        <img
          width="100%"
          height="100%"
          src={game?.teamLogoSrc}
          alt={game?.teamLogoAlt ?? " "}
        />
      </a>
    </Cell>
  ) : null;
};
