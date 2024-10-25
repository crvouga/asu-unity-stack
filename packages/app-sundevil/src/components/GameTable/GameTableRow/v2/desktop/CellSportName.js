/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React from "react";

import { idToLabel } from "../../../../../utils/id-to-label";
import { Icon } from "../../../../Icon_";
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

  const hasContent =
    game?.sportIcon || game?.sportName || isCleanString(game?.sportId);

  return configLayout?.includeCellSportName && hasContent ? (
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
      {game?.sportIcon ? (
        <Icon icon={game?.sportIcon} />
      ) : (
        <SportIcon sportName={stringToClosestSportName(game?.sportId ?? "")} />
      )}

      {game?.sportName ||
        (idToLabel(game?.sportId) && (
          <p
            className="m-0"
            dangerouslySetInnerHTML={{
              __html: game?.sportName ?? idToLabel(game?.sportId),
            }}
          />
        ))}
    </Cell>
  ) : null;
};
