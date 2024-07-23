import React, { forwardRef } from "react";
import styled from "styled-components";

import { deepMergeLeft } from "../../../utils/deep-merge-left";
import { Skeleton } from "../../Skeleton";
import { defaultConfigCells } from "./config-cells";
import { defaultConfigLayout } from "./config-layout";
import { gameTableRowPropTypes } from "./game-table-row";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  flex-wrap: nowrap;
  max-width: 100%;
  height: 64px;
  max-height: 64px;
  gap: 1rem;
  & > *:not(:last-child) {
    border-right: 1px solid #d0d0d0;
  }
`;

const Title = styled.p`
  padding: 0;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
`;

const Subtitles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  overflow: hidden;
`;

const Subtitle = styled.p`
  padding: 0;
  margin: 0;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CellDate = styled.div`
  padding: 0;
  margin: 0;
  font-size: 12px;
  font-weight: bold;
  height: 100%;
  height: 64px;
  width: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TicketButton = styled.button`
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #000;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`;

const CellTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-center;
  overflow: hidden;
  flex: 1;
  height: 100%;
  min-width: 0;
`;

const CellTicketButton = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 64px;
  width: 64px;
`;

const DateDay = styled.p`
  margin: 0;
  padding: 0;
  font-size: 24px;
  font-weight: bold;
`;

const DateMonth = styled.p`
  margin: 0;
  margin-bottom: -8px;
  padding: 0;
  font-size: 12px;
  font-weight: bold;
`;
export const GameTableRowMobileDivided = forwardRef(
  (
    {
      game,
      skeleton,
      empty,
      configLayout: configLayoutPartial,
      configCells: configCellsPartial,
    },
    ref
  ) => {
    /** @type {import("./config-layout").ConfigLayout} */
    const configLayout = deepMergeLeft(
      configLayoutPartial ?? {},
      defaultConfigLayout
    );
    /** @type {import("./config-cells").ConfigCells} */
    // eslint-disable-next-line no-unused-vars
    const configCells = deepMergeLeft(
      configCellsPartial ?? {},
      defaultConfigCells
    );

    return (
      <Skeleton skeleton={skeleton} ref={ref}>
        <Root
          aria-hidden={empty}
          style={empty ? { opacity: 0, userSelect: "none" } : {}}
        >
          {configLayout.includeCellDate && (
            <CellDate>
              <DateMonth>{game?.dateMonth}.</DateMonth>
              <DateDay>{game?.dateDay}</DateDay>
            </CellDate>
          )}
          {configLayout.includeCellTitle && (
            <CellTitle>
              <Title>{game?.title}</Title>
              <Subtitles>
                <Subtitle className="text-body-tertiary">{game?.time}</Subtitle>
                <Subtitle className="text-body-tertiary">
                  {game?.venue}
                </Subtitle>
              </Subtitles>
            </CellTitle>
          )}
          {configLayout.includeCellTickets && (
            <CellTicketButton>
              <TicketButton
                type="button"
                aria-label={game?.ticketText}
                onClick={() => {
                  window.open(game?.ticketLink, "_blank");
                }}
              >
                <i className="fa fa-fas fa-ticket" />
              </TicketButton>
            </CellTicketButton>
          )}
        </Root>
      </Skeleton>
    );
  }
);

GameTableRowMobileDivided.propTypes = gameTableRowPropTypes;
