// https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=9390-8911&t=9KB3qdXSus394DaN-4
/* eslint-disable react/prop-types */
// @ts-check
import React, { forwardRef } from "react";
import styled from "styled-components";

import { Skeleton } from "../../../../Skeleton";
import { CellButtons } from "./CellButtons";
import { CellDate } from "./CellDate";
import { CellIcon } from "./CellIcon";
import { CellSportName } from "./CellSportName";
import { CellTeamLogo } from "./CellTeamLogo";
import { CellTitle } from "./CellTitle/CellTitle";

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 120px;
  max-height: 120px;
  overflow: hidden;
  justify-content: center;
  align-items: stretch;
  & > *:not(:last-child) {
    border-right: 1px solid #d0d0d0;
  }
  .flex-1 {
    flex: 1;
    min-width: 0;
  }
`;

/**
 * @typedef {React.FC<import("../../game-table-row").GameTableRowProps>} Component
 */

export const GameTableRowDesktop = forwardRef(
  (
    /**  @type {import("../../game-table-row").GameTableRowProps} */
    props,
    ref
  ) => {
    const { skeleton, empty } = props;

    return (
      <Skeleton
        skeleton={skeleton}
        ref={ref}
        style={{ height: "120px", maxHeight: "120px" }}
      >
        <Root
          aria-hidden={empty}
          style={empty ? { opacity: 0, userSelect: "none" } : {}}
        >
          <CellIcon {...props} />
          <CellDate {...props} />
          <CellSportName {...props} />
          <CellTitle {...props} />
          <CellTeamLogo {...props} />
          <CellButtons {...props} />
        </Root>
      </Skeleton>
    );
  }
);
