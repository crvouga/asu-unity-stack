/* eslint-disable react/prop-types */
// @ts-check
import React, { useRef } from "react";
import styled from "styled-components";

import { Button } from "../../../../components-core/src";
import {
  trackGAEvent,
  TYPE_INTERNAL_LINK,
} from "../../track-ga/track-ga-event";
import { useTrackChildrenClicks } from "../../track-ga/track-ga-event-hooks";
import { ensureArray } from "../../utils/ensure-array";
import { stringToFontWeight } from "../../utils/font-weight";
import {
  stringToColor,
  stringToSize,
  stringToTarget,
} from "../Button/core-button-props";

const Subtitle = styled.p`
  width: 100%;
  max-width: 588px;
  padding: 0;
  margin: 0;
  color: #191919;

  & > * {
    margin: 0;
    padding: 0;
  }
`;

const SubtitleRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SubtitleButtons = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  padding-top: 16px;
`;

const SubtitleLinks = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
`;

const SubtitleLink = styled.a`
  cursor: pointer;
  max-width: fit-content;
  ${({ color }) => {
    if (color === "muted") {
      return `
        color: #191919;
        opacity: 0.6;
      `;
    }

    return "";
  }}

  ${({
    // @ts-ignore
    fontWeight,
  }) => {
    if (fontWeight) {
      return `
        font-weight: ${stringToFontWeight(fontWeight)};
      `;
    }

    return "";
  }}
`;

/**
 * @type {React.FC<import("./props").SectionHeaderProps>}
 */
export const SubtitleSection = props => {
  const {
    title,
    subtitle,
    subtitleFontWeight = "normal",
    subtitleLinks = [],
    subtitleButtons = [],
  } = props;

  const sectionName = title;

  /**
   * @type {React.MutableRefObject<HTMLElement | null>}
   */
  const subtitleRef = useRef(null);

  useTrackChildrenClicks({
    ref: subtitleRef,
    sectionName: sectionName ?? " ",
    type: TYPE_INTERNAL_LINK,
  });

  return (
    <SubtitleRoot>
      {subtitle && (
        <Subtitle
          // @ts-ignore
          ref={subtitleRef}
          style={{
            fontWeight: stringToFontWeight(subtitleFontWeight),
          }}
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      )}

      {Array.isArray(subtitleLinks) && subtitleLinks.length > 0 && (
        <SubtitleLinks>
          {subtitleLinks.map((link, index) => {
            const isLast = index === subtitleLinks.length - 1;
            const key = [link?.href, link?.url, link?.label].join("-");
            return (
              <>
                <SubtitleLink
                  key={key}
                  href={link?.href ?? link?.url}
                  // @ts-ignore
                  fontWeight={link?.fontWeight}
                  color={link?.color}
                  onClick={() => {
                    if (typeof link.onClick === "function") {
                      link.onClick?.();
                    }
                    trackGAEvent({
                      event: "link",
                      action: "click",
                      name: "onclick",
                      type: "internal link",
                      region: "main content",
                      section: sectionName,
                      text: link?.label,
                      component: "text",
                    });
                  }}
                >
                  {link?.label}
                </SubtitleLink>
                {!isLast && (
                  // https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=6146-13841&node-type=frame&t=hwMmzQHF1CbjJnXH-0
                  <div
                    key={[key, "divider"].join("-")}
                    style={{
                      width: "2px",
                      height: "18px",
                      backgroundColor: "#191919",
                    }}
                  />
                )}
              </>
            );
          })}
        </SubtitleLinks>
      )}

      {Array.isArray(subtitleButtons) && subtitleButtons.length > 0 && (
        <SubtitleButtons>
          {subtitleButtons.map(button => (
            <Button
              {...button}
              label={button.label}
              icon={ensureArray(button.icon)}
              color={stringToColor(button.color)}
              size={stringToSize(button.size)}
              target={stringToTarget(button.target)}
              key={[button.label, button.link].join("-")}
              cardTitle={sectionName}
            />
          ))}
        </SubtitleButtons>
      )}
    </SubtitleRoot>
  );
};
