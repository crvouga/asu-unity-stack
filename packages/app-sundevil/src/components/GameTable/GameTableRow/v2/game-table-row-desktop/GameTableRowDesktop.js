/* eslint-disable react/prop-types */
// @ts-check
import React, { forwardRef } from "react";
import styled from "styled-components";

import { Skeleton } from "../../../../Skeleton";
import { CellDate } from "./CellDate";
import { CellIcon } from "./CellIcon";
import { CellSportName } from "./CellSportName";
import { CellTickets } from "./CellTickets";
import { CellTitle } from "./CellTitle";

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
          <CellTickets {...props} />
        </Root>
      </Skeleton>
    );
  }
);
