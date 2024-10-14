/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React from "react";

import { Chip } from "../Chip";

/**
 * @typedef {React.FC<import("../../game-table-row").GameTableRowProps>} Component
 */

/**
 * @type {import("./shared").RowComponent}
 */
export const RowChips = props => {
  const { game } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "8px",
        padding: "16px 0",
      }}
    >
      {game?.chips.map(chip => (
        <Chip key={chip.label} chip={chip} />
      ))}
    </div>
  );
};
