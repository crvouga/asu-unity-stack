/* eslint-disable react/prop-types */
import React, { forwardRef } from "react";

import { deepMergeLeft } from "../../../utils/deep-merge-left";
import { defaultConfigCells } from "./config-cells";
import { defaultConfigLayout } from "./config-layout";
import { GameTableRow as GameTableRowV1 } from "./v1/GameTableRow";
import { GameTableRow as GameTableRowV2 } from "./v2/GameTableRow";

export const GameTableRow = forwardRef(
  (
    /**
     * @type {import("./game-table-row").GameTableRowProps}
     */
    props,
    ref
  ) => {
    const {
      configLayout: configLayoutPartial,
      configCells: configCellsPartial,
    } = props;

    /** @type {import("../config-layout").ConfigLayout} */
    const configLayout = deepMergeLeft(
      configLayoutPartial ?? {},
      defaultConfigLayout ?? {}
    );

    /** @type {import("../config-cells").ConfigCells} */
    const configCells = deepMergeLeft(
      configCellsPartial ?? {},
      defaultConfigCells ?? {}
    );

    /**
     * @type {import("./game-table-row").GameTableRowProps}
     */
    const propsNew = {
      ...props,
      configLayout,
      configCells,
    };

    if (props?.version === "v2") {
      return <GameTableRowV2 {...propsNew} ref={ref} />;
    }
    return <GameTableRowV1 {...propsNew} ref={ref} />;
  }
);
