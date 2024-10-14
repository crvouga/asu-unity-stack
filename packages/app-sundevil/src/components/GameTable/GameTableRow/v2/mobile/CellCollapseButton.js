/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React from "react";
import styled from "styled-components";

import { trackGAEvent } from "../../../../../track-ga-event";
import { isGameTicketed } from "../../../../Game/game";
import { Icon } from "../../../../Icon_";
import { INFO_ICON_CLASS_NAME, TICKET_ICON_CLASS_NAME } from "../icon";

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

const CellTicketButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  width: 64px;
  min-width: 64px;
  flex-shrink: 0;
`;

/**
 * @type {import("./shared").CellComponent}
 */
export const CellCollapseButton = props => {
  const { game, configLayout } = props;

  return (
    configLayout.includeCellTickets && (
      <CellTicketButton>
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
    )
  );
};
