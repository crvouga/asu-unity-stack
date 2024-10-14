/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React from "react";
import styled from "styled-components";

import { CollapseIcon } from "../../../../CollapseIcon/CollapseIcon";

const Root = styled.button`
  outline: none;
  border: none;
  background: transparent;
  box-shadow: none;
  &:focus {
    outline: none !important;
    box-shadow: none !important;
    border: 2px solid black;
  }
`;

export const CellCollapseButton = (
  /**
   * @type {{ open: boolean; onClick: () => void; }}
   */
  { open, onClick }
) => {
  return (
    <Root
      type="button"
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "6px",
        width: "48px",
        height: "100%",
        flexDirection: "column",
        background: "transparent",
        cursor: "pointer",
      }}
      aria-label={open ? "Collapse" : "Expand"}
      aria-expanded={open}
      aria-controls="collapse"
    >
      <CollapseIcon open={open} />
    </Root>
  );
};
