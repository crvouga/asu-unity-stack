/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React from "react";

import { Cell, STYLES_TRUNCATE } from "../shared";
import { Chips } from "./Chips";
import { SupplementalLinks } from "./SupplementalLinks";
import { Title } from "./Title";

/**
 * @type {React.FC<import("../shared").CellProps>}
 */
export const CellTitle = props => {
  const { configLayout } = props;

  return (
    configLayout?.includeCellTitle && (
      <Cell
        style={{
          ...STYLES_TRUNCATE,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "row",
          flex: 1,
          flexShrink: 0,
          gap: "6px",
          minWidth: "0",
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
            flex: 1,
            gap: "14px",
            flexShrink: 0,
            ...STYLES_TRUNCATE,
          }}
        >
          <Title {...props} />

          <Chips {...props} />
        </div>

        <SupplementalLinks {...props} />
      </Cell>
    )
  );
};
