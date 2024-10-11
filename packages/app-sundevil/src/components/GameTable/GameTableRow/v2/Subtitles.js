// @ts-check
import React from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../../../config";
import { formatTimeAmPm } from "../../../../utils/formatTime";
import { useBreakpoint } from "../../../../utils/use-breakpoint";
import { gameTableRowPropTypes } from "../game-table-row";

const Root = styled.div`
  display: flex;
  gap: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  flex-wrap: nowrap;
  align-items: center;
  @media (max-width: ${APP_CONFIG.breakpointMobile}) {
    gap: 12px;
  }
`;

const Subtitle = styled.p`
  padding: 0;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex-shrink: 1;
  /* color: #747474 */
  color: rgb(116, 116, 116);
  min-width: 60px;
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

export const Subtitles = (
  /**
   * @type {import("../game-table-row").GameTableRowProps}
   */
  props
) => {
  const { game, configCells } = props;
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
      {configCells?.cellTitle.includeSubtitleChip &&
        isValidString(game?.subtitleChip) && (
          <SubtitleChip
            dangerouslySetInnerHTML={{ __html: game?.subtitleChip ?? "" }}
          />
        )}
      {Array.isArray(game?.subtitles) &&
        game?.subtitles.length > 0 &&
        game?.subtitles?.map(
          subtitle =>
            typeof subtitle === "string" &&
            subtitle.trim().length > 0 && (
              <Subtitle
                key={subtitle}
                style={game?.subtitleStyle}
                dangerouslySetInnerHTML={{ __html: subtitle }}
              />
            )
        )}
      {game?.time && (
        <Subtitle
          style={{ minWidth: "60px" }}
          dangerouslySetInnerHTML={{
            __html: formatTimeAmPm(game?.time),
          }}
        />
      )}
      {game?.venue && (
        <Subtitle dangerouslySetInnerHTML={{ __html: game?.venue }} />
      )}
    </Root>
  );
};

Subtitles.propTypes = gameTableRowPropTypes;
