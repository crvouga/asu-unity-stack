/* eslint-disable react/prop-types */
// @ts-check
import React, { forwardRef } from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../config";
import { SocialSection } from "./SocialSection";
import { isSponsorBlockValid } from "./SponsorBlock";
import { SponsorBlock } from "./SponsorBlock/SponsorBlock";
import { SubtitleSection } from "./SubtitleSection";
import { TabsSection } from "./TabsSection";

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
    darkMode = false,
    subtitleLinks = [],
    subtitleButtons = [],
    style,
  } = props;

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
                {isSponsorBlockValid(sponsorBlock) && (
                  <SponsorBlock mobile {...props} />
                )}
              </div>
            </div>

            {hasHeaderBody && (
              <HeaderBody>
                <SubtitleSection {...props} />

                {tabs && tabs.length > 0 && <TabsSection {...props} />}

                {social && social.length > 0 && (
                  <SocialSection sectionName={sectionName} social={social} />
                )}
              </HeaderBody>
            )}
          </div>
          <div className="col-md-4 col-sm-0 mt-auto d-none d-sm-none d-md-flex justify-content-end">
            {isSponsorBlockValid(sponsorBlock) && (
              <SponsorBlock mobile={false} {...props} />
            )}
          </div>
        </div>
      )}
    </div>
  );
});
