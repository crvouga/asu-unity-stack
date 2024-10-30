// https://docs.google.com/presentation/d/1BdLFyVy-C2Yf7uqnfNIuO6EwzWIjn7gngE-N4UrkTRA/edit#slide=id.g307e47f5282_0_37
// @ts-check
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../config";
import { range } from "../../utils/range";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { ElementSetMaxDimensionsProvider } from "../../utils/use-element-set-max-dimensions";
import { EmptyStateMessage } from "../EmptyState/EmptyStateMessage";
import { gamePropTypes } from "../Game/game";
import { configCellsPropTypes } from "./GameTableRow/config-cells";
import { configLayoutPropTypes } from "./GameTableRow/config-layout";
import { GameTableRow } from "./GameTableRow/GameTableRow";

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

const Background = styled.div`
  width: 100%;
  & > *:not(:last-child) {
    border-bottom: 1px solid #d0d0d0;
  }
  background-color: #fff;
  ${props => {
    // @ts-ignore
    if (props.alternatingBackground) {
      return `
      & > div:nth-child(even) {
        background-color: #fafafa;
      }
      `;
    }
    return "";
  }}
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

export const GameTable = ({
  skeleton,
  games,
  emptyStateMessage,
  skeletonRowCount = 5,
  emptyStateRowCount = 5,
  setFirstRowRef,
  configLayout,
  configCells,
  mobileRowVariant = "divided",
  version,
}) => {
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const isDesktop = !isMobile;

  const isSkeleton = skeleton && games.length === 0;

  const isEmpty =
    typeof emptyStateMessage === "string" && !skeleton && games.length === 0;

  const isRow = !isSkeleton && games.length > 0;

  return (
    <ElementSetMaxDimensionsProvider>
      <Root>
        <Table className={isMobile ? "content-box" : "border-box"}>
          {isSkeleton && (
            <BorderBottom>
              {range(skeletonRowCount).map(index => (
                <GameTableRow
                  version={version}
                  key={index}
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
            <Background
              // @ts-ignore
              alternatingBackground={isDesktop}
            >
              {games.map((game, index) => (
                <GameTableRow
                  version={version}
                  key={game.id}
                  game={game}
                  ref={index === 0 ? setFirstRowRef : null}
                  configLayout={configLayout}
                  configCells={configCells}
                  mobileRowVariant={mobileRowVariant}
                />
              ))}
            </Background>
          )}

          {isEmpty && (
            <>
              {range(emptyStateRowCount).map(index => (
                <GameTableRow
                  key={index}
                  version={version}
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
      </Root>
    </ElementSetMaxDimensionsProvider>
  );
};

GameTable.propTypes = {
  mobileRowVariant: PropTypes.oneOf(["divided", "bordered"]),
  games: PropTypes.arrayOf(gamePropTypes),
  skeleton: PropTypes.bool,
  skeletonRowCount: PropTypes.number,
  emptyStateMessage: PropTypes.string,
  emptyStateRowCount: PropTypes.number,
  setFirstRowRef: PropTypes.func,
  configLayout: configLayoutPropTypes,
  configCells: configCellsPropTypes,
  version: PropTypes.oneOf(["v1", "v2"]).isRequired,
};
