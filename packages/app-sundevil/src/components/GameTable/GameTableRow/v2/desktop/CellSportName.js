/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React from "react";

import { idToLabel } from "../../../../../utils/id-to-label";
import { SportIcon } from "../../../../SportIcon";
import { stringToClosestSportName } from "../../../../SportIcon/sport-name";
import { Cell, isCleanString } from "./shared";

/**
 * @typedef {React.FC<import("../../game-table-row").GameTableRowProps>} Component
 */

/**
 * @type {import("./shared").CellComponent}
 */
export const CellSportName = props => {
  const { game, configLayout } = props;

  return (
    configLayout?.includeCellSportName && (
      <Cell
        style={{
          width: "120px",
          height: "120px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          padding: "1rem",
          fontSize: "12px",
          fontWeight: "bold",
          gap: "0.2rem",
          flexShrink: 0,
        }}
      >
        {isCleanString(game?.sportId) && (
          <>
            <SportIcon
              sportName={stringToClosestSportName(game?.sportId ?? "")}
            />
            <p
              className="m-0"
              dangerouslySetInnerHTML={{
                __html: idToLabel(game?.sportId),
              }}
            />
          </>
        )}
      </Cell>
    )
  );
};
