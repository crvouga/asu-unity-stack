// @ts-check
// @ts-ignore
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Button } from "../../../../components-core/src/components/Button";
import { APP_CONFIG } from "../../config";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { EmptyStateMessage } from "../EmptyState/EmptyStateMessage";
import { gameSchema } from "../Game/game";
import { configCellsSchema } from "./GameTableRow/config-cells";
import { configLayoutSchema } from "./GameTableRow/config-layout";
import { GameTableRow } from "./GameTableRow/GameTableRow";

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Table = styled.div`
  width: 100%;
  position: relative;
  background-color: #fff;
  border: 1px solid #d0d0d0;
`;

// Even if this transparent it ensures no layout shift when the skeleton is replaced with the actual content
const BorderBottom = styled.div`
  & > *:not(:last-child) {
    border-bottom: 1px solid transparent;
  }
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

  .border-box {
    box-sizing: border-box;
  }

  .content-box {
    box-sizing: content-box;
  }
`;

const range = end => Array.from({ length: end }, (_, index) => index);

const GameTable = ({
  skeleton,
  games,
  footerButtons,
  emptyStateMessage,
  skeletonRowCount = 5,
  emptyStateRowCount = 5,
  footerLinks,
  setFirstRowRef,
  configLayout,
  configCells,
  mobileRowVariant = "divided",
}) => {
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);

  const isSkeleton = skeleton && games.length === 0;

  const isEmpty =
    typeof emptyStateMessage === "string" && !skeleton && games.length === 0;

  const isRow = !isSkeleton && games.length > 0;

  return (
    <Root>
      <Table className={isMobile ? "content-box" : "border-box"}>
        {isSkeleton && (
          <BorderBottom>
            {range(skeletonRowCount).map(index => (
              <GameTableRow
                key={index}
                // @ts-ignore
                skeleton
                ref={index === 0 ? setFirstRowRef : null}
                configLayout={configLayout}
                configCells={configCells}
                mobileRowVariant={mobileRowVariant}
              />
            ))}
          </BorderBottom>
        )}

        {isRow && (
          <AlternateBackground>
            {games.map((game, index) => (
              <GameTableRow
                key={game.id}
                // @ts-ignore
                game={game}
                ref={index === 0 ? setFirstRowRef : null}
                configLayout={configLayout}
                configCells={configCells}
                mobileRowVariant={mobileRowVariant}
              />
            ))}
          </AlternateBackground>
        )}

        {isEmpty && (
          <>
            {range(emptyStateRowCount).map(index => (
              <GameTableRow
                key={index}
                // @ts-ignore
                empty
                ref={index === 0 ? setFirstRowRef : null}
                configLayout={configLayout}
                configCells={configCells}
                mobileRowVariant={mobileRowVariant}
              />
            ))}
            <EmptyStateMessage message={emptyStateMessage} />
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
  mobileRowVariant: PropTypes.oneOf(["divided", "bordered"]),
  games: PropTypes.arrayOf(gameSchema),
  skeleton: PropTypes.bool,
  skeletonRowCount: PropTypes.number,
  footerButtons: PropTypes.arrayOf(gameTableFooterButtonSchema),
  footerLinks: PropTypes.arrayOf(gameTableFooterLinkSchema),
  emptyStateMessage: PropTypes.string,
  emptyStateRowCount: PropTypes.number,
  setFirstRowRef: PropTypes.func,
  configLayout: configLayoutSchema,
  configCells: configCellsSchema,
};

export { GameTable };
