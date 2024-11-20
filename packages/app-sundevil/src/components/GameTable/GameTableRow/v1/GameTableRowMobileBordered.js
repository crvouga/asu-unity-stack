import React, { forwardRef } from "react";
import styled from "styled-components";

import { trackGAEvent } from "../../../../track-ga/track-ga-event";
import { deepMergeLeft } from "../../../../utils/deep-merge-left";
import { formatTimeAmPm } from "../../../../utils/formatTime";
import { isGameTicketed } from "../../../Game/game";
import { Icon } from "../../../Icon_";
import { Skeleton } from "../../../Skeleton";
import { defaultConfigCells } from "../config-cells";
import { defaultConfigLayout } from "../config-layout";
import { gameTableRowPropTypes } from "../game-table-row";
import { INFO_ICON_CLASS_NAME, TICKET_ICON_CLASS_NAME } from "./icon";

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
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
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
  color: #747474;
`;

const Date = styled.p`
  padding: 0;
  margin: 0;
  font-size: 12px;
  font-weight: bold;
  padding-bottom: 18px;
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

const TitleRoot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  flex: 1;
  min-width: 0;
`;

export const GameTableRowMobileBordered = forwardRef(
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
    /** @type {import("../config-layout").ConfigLayout} */
    const configLayout = deepMergeLeft(
      configLayoutPartial ?? {},
      defaultConfigLayout
    );
    /** @type {import("../config-cells").ConfigCells} */
    // eslint-disable-next-line no-unused-vars
    const configCells = deepMergeLeft(
      configCellsPartial ?? {},
      defaultConfigCells
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
              <Date>{`${game?.dateMonth}. ${game?.dateDay}`}</Date>
            )}

            {configLayout.includeCellTitle && (
              <TitleRoot>
                <Title
                  href={game?.titleHref}
                  dangerouslySetInnerHTML={{ __html: game?.title }}
                />
                <Subtitles>
                  <Subtitle
                    dangerouslySetInnerHTML={{
                      __html: formatTimeAmPm(game?.time),
                    }}
                  />
                  <Subtitle dangerouslySetInnerHTML={{ __html: game?.venue }} />
                </Subtitles>
              </TitleRoot>
            )}

            {configLayout.includeCellTickets && (
              <TicketButton
                aria-label={game?.ticketText}
                title={game?.ticketText}
                href={game?.ticketLink}
                style={{ textDecoration: "none !important" }}
                onClick={() => {
                  trackGAEvent({
                    event: "link",
                    action: "click",
                    name: "onclick",
                    type: "internal link",
                    region: "main content",
                    section: game?.title ?? " ",
                    text: game?.ticketText ?? " ",
                    component: "button",
                  });
                }}
              >
                {/* eslint-disable-next-line no-nested-ternary */}
                {game?.buttonIcon ? (
                  <Icon
                    icon={game?.buttonIcon}
                    style={{ textDecoration: "none !important" }}
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
            )}
          </Root>
        </div>
      </Skeleton>
    );
  }
);

GameTableRowMobileBordered.propTypes = gameTableRowPropTypes;
