// @ts-check
import React from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../../config";
import { deepMergeLeft } from "../../../utils/deep-merge-left";
import { useBreakpoint } from "../../../utils/use-breakpoint";
import { defaultConfigCells } from "./config-cells";
import { gameTableRowPropTypes } from "./game-table-row";

const Root = styled.div`
  display: flex;
  gap: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  flex-wrap: nowrap;
  align-items: center;
`;

const Subtitle = styled.p`
  padding: 0;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const SubtitleChip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  border-radius: 1px;
  background-color: #d0d0d0;
  color: #484848;
  font-size: 12px;
  font-weight: bold;
  height: 18px;
`;

const isValidString = value =>
  typeof value === "string" && value.trim().length > 0;

export const Subtitles = ({
  // @ts-ignore
  game: gameUntyped,
  // @ts-ignore
  configCells: configCellsPartial,
}) => {
  /** @type {import("../../Game").Game} */
  const game = gameUntyped;

  /** @type {import("./config-cells").ConfigCells} */
  const configCells = deepMergeLeft(
    configCellsPartial ?? {},
    defaultConfigCells ?? {}
  );

  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);

  return (
    <Root
      style={{
        fontSize: isMobile ? "12px" : "16px",
        fontWeight:
          configCells?.cellTitle?.subtitleFontWeight === "bold"
            ? "bold"
            : "normal",
      }}
    >
      {configCells.cellTitle.includeSubtitleChip &&
        isValidString(game?.subtitleChip) && (
          <SubtitleChip>{game?.subtitleChip}</SubtitleChip>
        )}
      <Subtitle className="text-body-tertiary">{game?.time}</Subtitle>
      <Subtitle className="text-body-tertiary">{game?.venue}</Subtitle>
    </Root>
  );
};

// @ts-ignore
Subtitles.propTypes = gameTableRowPropTypes;
