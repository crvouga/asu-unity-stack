/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React from "react";

import { isNonEmptyArray } from "../../../../../../utils/is-non-empty-array";
import { Chip } from "../../Chip";
import { STYLES_TRUNCATE } from "../shared";

/**
 * @type {import("../shared").CellComponent}
 */
export const Chips = props => {
  const { game } = props;

  return (
    isNonEmptyArray(game?.chips) && (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "8px",
          // IMPORTANT to use margin to overflowing chips are cutoff correctly
          margin: "0px 0px 16px 16px",
          ...STYLES_TRUNCATE,
        }}
      >
        {game?.chips?.map(chip => (
          <Chip key={chip.label} chip={chip} />
        ))}
      </div>
    )
  );
};
