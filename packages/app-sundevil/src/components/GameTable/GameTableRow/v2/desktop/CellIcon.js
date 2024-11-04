/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React from "react";

import { Icon } from "../../../../Icon_";
import { Cell, isCleanString } from "./shared";

/**
 * @typedef {React.FC<import("../../game-table-row").GameTableRowProps>} Component
 */

/**
 * @type {import("./shared").CellComponent}
 */
export const CellIcon = props => {
  const { game, configLayout } = props;

  // const hasContent = game?.sportIcon || game?.sportName;

  return configLayout?.includeCellIcon ? (
    <Cell
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "6px",
        width: "120px",
        height: "120px",
        flexDirection: "column",
        flexShrink: 0,
        padding: "12px",
      }}
    >
      {game?.sportIcon && (
        <Icon icon={game?.sportIcon} style={{ width: "18px" }} />
      )}
      {isCleanString(game?.sportName) && (
        <div
          style={{
            fontWeight: "bold",
            fontSize: "16px",
            textAlign: "center",
          }}
        >
          {game?.sportName}
        </div>
      )}
    </Cell>
  ) : null;
};
