// @ts-check
import React, { forwardRef, useRef } from "react";
import styled from "styled-components";

import { Button } from "../../../../../components-core/src/components/Button";
import { deepMergeLeft } from "../../../utils/deep-merge-left";
import { useElementSetMaxDimensions } from "../../../utils/use-element-set-max-dimensions";
import { Skeleton } from "../../Skeleton";
import { defaultConfigCells } from "./config-cells";
import { defaultConfigLayout } from "./config-layout";
import { gameTableRowPropTypes } from "./game-table-row";

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 96px;
  max-height: 96px;
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

const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const CellDate = styled.div`
  width: 96px;
  height: 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding: 1rem;
`;

const CellTitle = styled.div`
  padding: 0 1.5rem;
  line-height: 28.8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
`;

const Title = styled.a`
  color: #000 !important;
  text-decoration: none !important;
  font-size: 24px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
  width: fit-content;
  max-width: 100%;
`;

const Subtitles = styled.div`
  display: flex;
  gap: 24px;
  font-weight: bold;
`;

export const GameTableRowDesktop = forwardRef(
  (
    {
      // @ts-ignore
      game,
      // @ts-ignore
      skeleton,
      // @ts-ignore
      empty,
      // @ts-ignore
      configLayout: configLayoutPartial,
      // @ts-ignore
      configCells: configCellsPartial,
    },
    ref
  ) => {
    /** @type {import("./config-layout").ConfigLayout} */
    const configLayout = deepMergeLeft(
      configLayoutPartial,
      defaultConfigLayout
    );
    /** @type {import("./config-cells").ConfigCells} */
    const configCells = deepMergeLeft(configCellsPartial, defaultConfigCells);

    const buttonCellRef = useRef(null);
    const buttonCellMaxDimensions = useElementSetMaxDimensions({
      elementRef: buttonCellRef,
      elementSetId: "button-cell",
    });
    return (
      // @ts-ignore
      <Skeleton skeleton={skeleton} ref={ref}>
        <Root
          aria-hidden={empty}
          style={empty ? { opacity: 0, userSelect: "none" } : {}}
        >
          {configLayout.includeCellDate && (
            <Cell>
              <CellDate>
                <h5 className="m-0 lh-1">{game?.date.month}.</h5>
                <h2 className="m-0">{game?.date.day}</h2>
              </CellDate>
            </Cell>
          )}
          {configLayout.includeCellTitle && (
            <Cell className="flex-1">
              <CellTitle>
                <Title href={game?.titleHref}>{game?.title}</Title>
                <Subtitles
                  style={{
                    fontWeight:
                      configCells?.cellTitle?.subtitleFontWeight === "bold"
                        ? "bold"
                        : undefined,
                  }}
                >
                  <span className="text-body-tertiary">{game?.time}</span>
                  <span className="text-body-tertiary">{game?.venue}</span>
                </Subtitles>
              </CellTitle>
            </Cell>
          )}
          {configLayout.includeCellTickets && (
            <Cell
              className="btn-ticket text-center align-middle px-2"
              ref={buttonCellRef}
              style={{ minWidth: buttonCellMaxDimensions.width }}
            >
              <Button
                label={game?.ticketText}
                color="dark"
                size="small"
                renderIcon={() => (
                  <i
                    className="fa fa-fas fa-ticket"
                    style={{ paddingRight: "10px" }}
                  />
                )}
                onClick={() => {
                  window.open(game?.ticketLink, "_blank");
                }}
              />
            </Cell>
          )}
        </Root>
      </Skeleton>
    );
  }
);

// @ts-ignore
GameTableRowDesktop.propTypes = gameTableRowPropTypes;
