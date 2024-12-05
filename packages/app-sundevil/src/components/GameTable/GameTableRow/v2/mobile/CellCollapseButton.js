/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React from "react";
import styled from "styled-components";

import { trackGAEvent } from "../../../../../track-ga/track-ga-event";
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
   * @type {{ sectionName:string, open: boolean; onClick: () => void; }}
   */
  { open, onClick, sectionName }
) => {
  return (
    <Root
      type="button"
      onClick={() => {
        if (typeof onClick === "function") {
          onClick?.();
          const openNew = !open;
          trackGAEvent({
            event: "collapse",
            action: openNew ? "open" : "close",
            name: "onclick",
            type: "click",
            region: "main content",
            section: sectionName,
            text: "collapse",
            component: "text",
          });
        }
      }}
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
      key={open ? "collapse" : "expand"}
    >
      <CollapseIcon open={open} key={open ? "collapse" : "expand"} />
    </Root>
  );
};
