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
    configLayout?.includeCellIcon &&
    game?.sportIcon && (
      <Cell
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          width: "48px",
          height: "100%",
          flexDirection: "column",
          flexShrink: 0,
        }}
      >
        <Icon icon={game?.sportIcon} style={{ width: "12px" }} />
      </Cell>
    )
  );
};
