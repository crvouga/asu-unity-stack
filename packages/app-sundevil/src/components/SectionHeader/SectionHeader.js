/* eslint-disable react/prop-types */
// @ts-check
import React, { forwardRef } from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../config";
import { trackGAEvent } from "../../track-ga/track-ga-event";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { JoinTheConversation } from "./JoinTheConversation";
import { SponsorBlock } from "./SponsorBlock";
import { SubtitleSection } from "./SubtitleSection";
import { Tabs } from "./Tabs";

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
                <SubtitleSection {...props} />

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
