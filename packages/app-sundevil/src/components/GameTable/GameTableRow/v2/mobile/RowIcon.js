/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React from "react";

import { Icon } from "../../../../Icon_";

/**
 * @typedef {React.FC<import("../../game-table-row").GameTableRowProps>} Component
 */

/**
 * @type {import("./shared").RowComponent}
 */
export const RowIcon = props => {
  const { game } = props;

  const hasContent = game?.sportIcon || game?.sportName;

  return (
    hasContent && (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "12px",
          width: "100%",
          padding: "12px 0",
          fontSize: "12px",
          fontWeight: "bold",
        }}
      >
        {game?.sportIcon && (
          <Icon icon={game?.sportIcon} style={{ width: "12px" }} />
        )}
        {game?.sportName}
      </div>
    )
  );
};
