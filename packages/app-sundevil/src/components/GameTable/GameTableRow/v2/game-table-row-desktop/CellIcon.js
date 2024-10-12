/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React from "react";

import { Icon } from "../../../../Icon_";
import { Cell } from "./shared";

/**
 * @typedef {React.FC<import("../../game-table-row").GameTableRowProps>} Component
 */

/**
 * @type {import("./shared").CellComponent}
 */
export const CellIcon = props => {
  const { game, configLayout } = props;

  return (
    configLayout?.includeCellIcon && (
      <Cell
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          width: "120px",
          height: "120px",
          flexDirection: "column",
        }}
      >
        <Icon icon={game?.sportIcon} style={{ width: "16px" }} />
        <div style={{ fontWeight: "bold", fontSize: "16px" }}>
          {game?.sportName}
        </div>
      </Cell>
    )
  );
};
