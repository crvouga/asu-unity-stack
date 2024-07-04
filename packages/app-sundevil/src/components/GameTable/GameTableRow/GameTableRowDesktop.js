// @ts-check
// @ts-ignore
import React from "react";
import styled from "styled-components";

import { Button } from "../../../../../components-core/src/components/Button";
import { Skeleton } from "../../Skeleton";
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
  }
`;

const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  padding: 1.5rem;
  gap: 0.25rem;
  line-height: 28.8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Title = styled.h3`
  font-size: 24px;
  padding: 0;
  margin: 0;
`;

const Subtitles = styled.div`
  display: flex;
  gap: 1rem;
`;

export const GameTableRowDesktop = ({ game, skeleton, empty }) => {
  return (
    <Skeleton skeleton={skeleton}>
      <Root style={empty ? { opacity: 0 } : {}}>
        <Cell>
          <CellDate>
            <h5 className="m-0 lh-1">{game?.date.month}.</h5>
            <h2 className="m-0">{game?.date.day}</h2>
          </CellDate>
        </Cell>
        <Cell className="flex-1">
          <CellTitle>
            <Title>{game?.title}</Title>
            <Subtitles>
              <span className="text-body-tertiary">{game?.time}</span>
              <span className="text-body-tertiary">{game?.venue}</span>
            </Subtitles>
          </CellTitle>
        </Cell>
        <Cell className="btn-ticket text-center align-middle px-2">
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
      </Root>
    </Skeleton>
  );
};
GameTableRowDesktop.propTypes = gameTableRowPropTypes;
