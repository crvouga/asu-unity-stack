// @ts-check
import React from "react";
import styled from "styled-components";

import { gameTableRowPropTypes } from "./game-table-row";

const RowTitle = styled.h3`
  padding: 0;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const RowTitleWrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100%;
  flex: 1;
`;

const Row = styled.tr`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  flex-wrap: nowrap;
  max-width: 100%;
`;

const Cell = styled.td`
  max-width: 100%;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const GameTableRowMobile = ({ game, style }) => {
  return (
    <Row style={style}>
      <Cell className="py-3 px-2 d-flex align-items-start flex-row gap-1">
        <div className="">
          <h5 className="m-0 f">{`${game.date.month}. ${game.date.day}`}</h5>
        </div>
        <div>
          <RowTitleWrapper>
            <RowTitle>{game.title}</RowTitle>
          </RowTitleWrapper>
          <div className="d-flex gap-3">
            <span className="text-body-tertiary">{game.time}</span>
            <span className="text-body-tertiary">{game.venue}</span>
          </div>
        </div>
        <div>
          <button
            type="button"
            aria-label={game.ticketText}
            onClick={() => {
              window.open(game.ticketLink, "_blank");
            }}
          >
            <i className="fa fa-fas fa-ticket" />
          </button>
        </div>
      </Cell>
    </Row>
  );
};
GameTableRowMobile.propTypes = gameTableRowPropTypes;
