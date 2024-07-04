// @ts-check
// @ts-ignore
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Button } from "../../../../components-core/src/components/Button";
import { gameSchema } from "../Game/game";
import { Skeleton } from "../Skeleton";
import { GameTableRow } from "./GameTableRow/GameTableRow";
import { Footer } from "./index.styles";

const EmptyStateMessage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  font-bold: 700;
  height: 400px;
  margin: 0;
  padding: 0;
`;

const Table = styled.table`
  max-width: 100%;
  width: 100%;
  overflow: hidden;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid #d0d0d0;

  tr {
    border-bottom: 1px solid #d0d0d0;

    &:last-child {
      border-bottom: none;
    }

    &:nth-child(even) {
      background-color: #fafafa;
    }

    &:nth-child(odd) {
      background-color: transparent;
    }

    td {
      border-right: 1px solid #d0d0d0;

      &:last-child {
        border-right: none;
      }
    }
  }
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  flex-wrap: nowrap;
`;

const ROW_HEIGHT = "96px";

// @ts-ignore
const GameTable = ({
  skeleton,
  games,
  footerButtons,
  emptyStateMessage,
  maxRowCount = 5,
  footerLinks,
}) => {
  // const skeleton = true;
  const gamesSliced = games.slice(0, maxRowCount);

  const showEmptyState =
    typeof emptyStateMessage === "string" &&
    !skeleton &&
    gamesSliced.length === 0;

  return (
    <Root>
      {skeleton ? (
        <div>
          {Array.from({ length: maxRowCount }).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Skeleton key={index} skeleton>
              <div style={{ width: "100%", height: ROW_HEIGHT }} />
            </Skeleton>
          ))}
        </div>
      ) : (
        <Table>
          <tbody>
            {gamesSliced.map(game => (
              <GameTableRow
                key={game.id}
                game={game}
                style={{ width: "100%", height: ROW_HEIGHT }}
              />
            ))}
          </tbody>
        </Table>
      )}
      {showEmptyState && (
        <EmptyStateMessage>
          <p>{emptyStateMessage}</p>
        </EmptyStateMessage>
      )}
      {footerButtons && footerButtons?.length > 0 && (
        <Footer style={{ gap: "8px", paddingTop: "32px" }}>
          {footerButtons.map(button => (
            <Button
              key={button.label}
              color={button.color}
              label={button.label}
              size={button.size}
              onClick={() => {
                window.open(button.link, "_blank");
              }}
            />
          ))}
        </Footer>
      )}
      {footerLinks && footerLinks?.length > 0 && (
        <Footer style={{ gap: "8px" }}>
          {footerLinks.map(link => (
            <a key={link.label} href={link.href} style={{ color: "#8c1d40" }}>
              {link.label}
            </a>
          ))}
        </Footer>
      )}
    </Root>
  );
};

export const gameTableFooterButtonSchema = PropTypes.shape({
  color: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
});

export const gameTableFooterLinkSchema = PropTypes.shape({
  label: PropTypes.string,
  href: PropTypes.string,
});

GameTable.propTypes = {
  games: PropTypes.arrayOf(gameSchema.isRequired).isRequired,
  skeleton: PropTypes.bool,
  maxRowCount: PropTypes.number,
  footerButtons: PropTypes.arrayOf(gameTableFooterButtonSchema).isRequired,
  footerLinks: PropTypes.arrayOf(gameTableFooterLinkSchema),
  emptyStateMessage: PropTypes.string,
};

export { GameTable };
