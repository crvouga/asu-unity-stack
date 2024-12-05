/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */

import React, { forwardRef } from "react";
import styled from "styled-components";

import { Store, useStore } from "../../../../../utils/store";
import { Skeleton } from "../../../../Skeleton";
import { CellCollapseButton } from "./CellCollapseButton";
import { CellDate } from "./CellDate";
import { CellIcon } from "./CellIcon";
import { CellTeamLogo } from "./CellTeamLogo";
import { CellTitle } from "./CellTitle";
import { RowButtons } from "./RowButtons";
import { RowChips } from "./RowChips";
import { RowDate } from "./RowDate";
import { RowIcon } from "./RowIcon";
import { RowSupplementalLinks } from "./RowSupplementalLinks";
import { Surface } from "./Surface";

const Root = styled.div`
  & > *:not(:last-child) {
    border-right: 1px solid #d0d0d0;
  }
`;

const store = Store({
  openId: null,
});

export const GameTableRowMobile = forwardRef(
  (
    /**
     * @type {import("../../game-table-row").GameTableRowProps}
     */
    propsInput,
    ref
  ) => {
    /**
     * @type {import("./shared").Props}
     */
    const props = {
      ...propsInput,
      sectionName: propsInput?.game?.title,
    };
    const { skeleton, empty } = props;
    const id = props.game?.id;

    const state = useStore(store);

    const open = state.openId === id;
    const toggleOpen = () => {
      store.setState(prevState => ({ ...prevState, openId: open ? null : id }));
    };

    const isOpen = open && !empty && !skeleton;

    return (
      <Skeleton
        skeleton={skeleton}
        ref={ref}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Root
          aria-hidden={empty}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            flexWrap: "nowrap",
            maxWidth: "100%",
            height: "54px",
            maxHeight: "54px",
            opacity: empty ? 0 : 1,
            userSelect: empty ? "none" : "auto",
            overflow: "hidden",
          }}
        >
          <CellIcon {...props} />
          <CellDate {...props} />
          <CellTitle {...props} />
          <CellTeamLogo {...props} />
          <CellCollapseButton open={open} onClick={toggleOpen} />
        </Root>
        {isOpen && (
          <Surface>
            <RowIcon {...props} />
            <RowDate {...props} />
            <RowChips {...props} />
            <RowSupplementalLinks {...props} />
            <RowButtons {...props} />
          </Surface>
        )}
      </Skeleton>
    );
  }
);
