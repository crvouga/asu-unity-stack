import React, { forwardRef } from "react";
import styled from "styled-components";

import { deepMergeLeft } from "../../../utils/deep-merge-left";
import { isGameTicketed } from "../../Game/game";
import { Icon } from "../../Icon_";
import { Skeleton } from "../../Skeleton";
import { defaultConfigLayout } from "./config-layout";
import { gameTableRowPropTypes } from "./game-table-row";
import { INFO_ICON_CLASS_NAME, TICKET_ICON_CLASS_NAME } from "./icon";
import { Subtitles } from "./Subtitles";

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
  & > *:not(:last-child) {
    border-right: 1px solid #d0d0d0;
  }
`;

const Title = styled.a`
  padding: 0;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  color: #191919 !important;
  text-decoration: none !important;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
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

const CellDateContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: fit-content;
`;

const TicketButton = styled.a`
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
  text-decoration: none !important;
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
  padding: 0 1rem;
`;

const CellTicketButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  min-width: 64px;
  flex-shrink: 0;
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
export const GameTableRowMobileDivided = forwardRef((props, ref) => {
  const { game, skeleton, empty, configLayout: configLayoutPartial } = props;

  /** @type {import("./config-layout").ConfigLayout} */
  const configLayout = deepMergeLeft(
    configLayoutPartial ?? {},
    defaultConfigLayout
  );

  return (
    <Skeleton
      skeleton={skeleton}
      ref={ref}
      style={{
        height: "64px,",
        maxHeight: "64px",
      }}
    >
      <div className="container">
        <Root
          aria-hidden={empty}
          style={empty ? { opacity: 0, userSelect: "none" } : {}}
        >
          {configLayout.includeCellDate && (
            <CellDate>
              <CellDateContent>
                <DateMonth>{game?.dateMonth}.</DateMonth>
                <DateDay>{game?.dateDay}</DateDay>
              </CellDateContent>
            </CellDate>
          )}
          {configLayout.includeCellTitle && (
            <CellTitle>
              <Title
                href={game?.titleHref}
                dangerouslySetInnerHTML={{ __html: game?.title }}
              />
              <Subtitles {...props} />
            </CellTitle>
          )}
          {configLayout.includeCellTickets && (
            <CellTicketButton>
              <TicketButton
                aria-label={game?.ticketText}
                title={game?.ticketText}
                href={game?.ticketLink}
                style={{ textDecoration: "none !important" }}
              >
                {/* eslint-disable-next-line no-nested-ternary */}
                {game?.buttonIcon ? (
                  <Icon
                    style={{ textDecoration: "none !important" }}
                    icon={game?.buttonIcon}
                  />
                ) : isGameTicketed(game) ? (
                  <i
                    style={{ textDecoration: "none !important" }}
                    className={TICKET_ICON_CLASS_NAME}
                  />
                ) : (
                  <i
                    style={{ textDecoration: "none !important" }}
                    className={INFO_ICON_CLASS_NAME}
                  />
                )}
              </TicketButton>
            </CellTicketButton>
          )}
        </Root>
      </div>
    </Skeleton>
  );
});

GameTableRowMobileDivided.propTypes = gameTableRowPropTypes;
