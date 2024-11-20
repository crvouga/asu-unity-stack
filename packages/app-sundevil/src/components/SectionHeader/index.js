/* eslint-disable react/prop-types */
// @ts-check
import React, { forwardRef, useRef } from "react";
import styled from "styled-components";

import { Button } from "../../../../components-core/src";
import { APP_CONFIG } from "../../config";
import {
  trackGAEvent,
  TYPE_INTERNAL_LINK,
} from "../../track-ga/track-ga-event";
import { useTrackChildrenClicks } from "../../track-ga/track-ga-event-hooks";
import { ensureArray } from "../../utils/ensure-array";
import { stringToFontWeight } from "../../utils/font-weight";
import { useBreakpoint } from "../../utils/use-breakpoint";
import {
  stringToColor,
  stringToSize,
  stringToTarget,
} from "../Button/core-button-props";
import { JoinTheConversation } from "./JoinTheConversation";
import { SponsorBlock } from "./SponsorBlock";
import { Tabs } from "./Tabs";

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

const HeaderBody = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 48px;
  padding-top: 12px;
  @media (max-width: ${APP_CONFIG.breakpointMobile}) {
    padding-top: 32px;
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

const Title = styled.div`
  color: ${({
    // @ts-ignore
    darkMode,
  }) => (darkMode ? "#fff" : "#191919")};
  font-weight: bold;
  font-size: 40px;

  @media (max-width: ${APP_CONFIG.breakpointMobile}) {
    font-size: 24px;
  }
`;

export const mapPropsSponsorBlock = props => {
  const sponsorBlock = props?.sponsorBlock;
  if (Array.isArray(sponsorBlock) && sponsorBlock?.[0]) {
    return {
      ...props,
      sponsorBlock: sponsorBlock?.[0],
    };
  }

  if (sponsorBlock) {
    return {
      ...props,
      sponsorBlock,
    };
  }

  // eslint-disable-next-line camelcase
  const sponsor_block = props?.sponsor_block;

  if (Array.isArray(sponsor_block) && sponsor_block?.[0]) {
    return {
      ...props,
      sponsorBlock: sponsor_block[0],
    };
  }

  return {
    ...props,
    sponsorBlock: sponsor_block,
  };
};

/**
 * Used for drupal integration. Drupal team sends weird props so we'll fix them here.
 */
export const mapSectionHeaderProps = props => {
  return mapPropsSponsorBlock(props);
};

/**
 * @type {React.FC<import("./props").SectionHeaderProps>}
 */
export const SectionHeader = forwardRef((props, ref) => {
  const {
    title,
    subtitle,
    tabs,
    sponsorBlock,
    social,
    onTabItemClick,
    darkMode = false,
    subtitleFontWeight = "normal",
    subtitleLinks = [],
    subtitleButtons = [],
    style,
  } = props;

  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const hasContent = Boolean(
    title || subtitle || tabs || social || sponsorBlock
  );

  const hasSubtitle =
    Boolean(subtitle) ||
    Boolean(Array.isArray(subtitleLinks) && subtitleLinks.length > 0) ||
    Boolean(Array.isArray(subtitleButtons) && subtitleButtons.length > 0);

  const hasTabs = Boolean(tabs && tabs.length > 0);

  const hasSocial = Boolean(social && social.length > 0);

  const hasHeaderBody = hasSubtitle || hasTabs || hasSocial;

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
    <div className="container" ref={ref} style={style}>
      {hasContent && (
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <div className="d-flex flex-row align-items-end justify-content-between gap-2 pt-2">
              <Title
                // @ts-ignore
                darkMode={darkMode}
              >
                {title}
              </Title>
              <div className="mt-auto d-flex d-sm-flex d-md-none align-items-start justify-content-end">
                {sponsorBlock?.logo && <SponsorBlock mobile {...props} />}
              </div>
            </div>
            {hasHeaderBody && (
              <HeaderBody>
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
                        const key = link?.href ?? link?.url ?? link?.label;
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

                  {Array.isArray(subtitleButtons) &&
                    subtitleButtons.length > 0 && (
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

                {tabs && tabs.length > 0 && (
                  <Tabs
                    tabs={tabs}
                    onTabItemClick={(tabId, tab) => {
                      if (typeof onTabItemClick === "function") {
                        onTabItemClick?.(tabId);
                      }

                      trackGAEvent({
                        event: "link",
                        action: "click",
                        name: "onclick",
                        type: "internal link",
                        region: "main content",
                        section: sectionName,
                        text: tab?.label?.toLowerCase() ?? "",
                        component: "text",
                      });
                    }}
                    stretch={isMobile}
                  />
                )}
                {social && social.length > 0 && (
                  <JoinTheConversation
                    sectionName={sectionName}
                    social={social}
                  />
                )}
              </HeaderBody>
            )}
          </div>
          <div className="col-md-4 col-sm-0 mt-auto d-none d-sm-none d-md-flex justify-content-end">
            {sponsorBlock?.logo && <SponsorBlock mobile={false} {...props} />}
          </div>
        </div>
      )}
    </div>
  );
});
