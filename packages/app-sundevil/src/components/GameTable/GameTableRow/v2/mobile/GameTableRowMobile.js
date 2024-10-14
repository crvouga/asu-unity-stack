/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */

import React, { forwardRef } from "react";
import styled from "styled-components";

import { Skeleton } from "../../../../Skeleton";
import { CellCollapseButton } from "./CellCollapseButton";
import { CellDate } from "./CellDate";
import { CellIcon } from "./CellIcon";
import { CellTeamLogo } from "./CellTeamLogo";
import { CellTitle } from "./CellTitle";

const Root = styled.div`
  & > *:not(:last-child) {
    border-right: 1px solid #d0d0d0;
  }
`;

export const GameTableRowMobile = forwardRef(
  (
    /**
     * @type {import("../../game-table-row").GameTableRowProps}
     */
    props,
    ref
  ) => {
    const { skeleton, empty } = props;

    return (
      <Skeleton
        skeleton={skeleton}
        ref={ref}
        style={{
          height: "54px",
          maxHeight: "54px",
        }}
      >
        <Root
          aria-hidden={empty}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            overflow: "hidden",
            flexWrap: "nowrap",
            maxWidth: "100%",
            height: "54px",
            maxHeight: "54px",
            opacity: empty ? 0 : 1,
            userSelect: empty ? "none" : "auto",
          }}
        >
          <CellIcon {...props} />
          <CellDate {...props} />
          <CellTitle {...props} />
          <CellTeamLogo {...props} />
          <CellCollapseButton {...props} />
        </Root>
      </Skeleton>
    );
  }
);
