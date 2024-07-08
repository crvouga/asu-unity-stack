// @ts-check
// @ts-ignore
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Button } from "../../../../components-core/src/components/Button";
import { gameSchema } from "../Game/game";
import { GameTableRow } from "./GameTableRow/GameTableRow";

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const EmptyStateMessage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin: 0;
  padding: 0;
  color: #6c757d;
`;

const Table = styled.div`
  width: 100%;
  border: 1px solid #d0d0d0;
  position: relative;
`;

const AlternateBackground = styled.div`
  width: 100%;
  & > div:nth-child(even) {
    background-color: #fafafa;
  }
  & > *:not(:last-child) {
    border-bottom: 1px solid #d0d0d0;
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

const range = end => Array.from({ length: end }, (_, index) => index);

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

  const isSkeleton = skeleton && gamesSliced.length === 0;

  const isEmpty =
    typeof emptyStateMessage === "string" &&
    !skeleton &&
    gamesSliced.length === 0;

  const isRow = !isSkeleton && gamesSliced.length > 0;

  return (
    <Root>
      <Table>
        {isSkeleton &&
          range(maxRowCount).map(index => (
            <GameTableRow key={index} skeleton />
          ))}

        {isRow && (
          <AlternateBackground>
            {gamesSliced.map(game => (
              <GameTableRow key={game.id} game={game} />
            ))}
          </AlternateBackground>
        )}

        {isEmpty && (
          <>
            {range(maxRowCount).map(index => (
              <GameTableRow key={index} empty />
            ))}
            <EmptyStateMessage>{emptyStateMessage}</EmptyStateMessage>
          </>
        )}
      </Table>

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
        <Footer style={{ gap: "8px", paddingTop: "24px" }}>
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
  games: PropTypes.arrayOf(gameSchema),
  skeleton: PropTypes.bool,
  maxRowCount: PropTypes.number,
  footerButtons: PropTypes.arrayOf(gameTableFooterButtonSchema),
  footerLinks: PropTypes.arrayOf(gameTableFooterLinkSchema),
  emptyStateMessage: PropTypes.string,
};

export { GameTable };
