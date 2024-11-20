/* eslint-disable react/prop-types */
// @ts-check
import React from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../config";
import { trackGAEvent } from "../../track-ga/track-ga-event";
import { trackAdClickHandler } from "../Ads/ad-data-layers";

const Root = styled.a`
  color: #191919;
  text-decoration: none;
  width: fit-content;
`;

const Logo = styled.img`
  max-height: 40px;
`;

const Title = styled.div`
  color: ${({
    // @ts-ignore
    darkMode,
  }) => (darkMode ? "#fff" : "#191919")};
  font-weight: bold;
  font-size: 16px;
  text-align: left;

  @media (max-width: ${APP_CONFIG.breakpointMobile}) {
    font-size: 12px;
  }

  white-space: nowrap;
`;

/**
 * @type {React.FC<import("./props").SectionHeaderProps>}
 */
export const SponsorBlock = ({ sponsorBlock, darkMode = false }) => {
  return (
    <Root
      href={sponsorBlock?.url}
      className="d-flex flex-row align-items-center justify-content-end gap-2"
      onClick={() => {
        trackGAEvent({
          event: "link",
          action: "click",
          name: "onclick",
          type: "external link",
          region: "main content",
          section: sponsorBlock?.text ?? " ",
          text: sponsorBlock?.name ?? " ",
          component: "image",
        });
        trackAdClickHandler({
          adId: sponsorBlock?.adId,
          href: sponsorBlock?.url,
        })();
      }}
    >
      <Title
        // @ts-ignore
        darkMode={darkMode}
      >
        {sponsorBlock?.text}
      </Title>
      <Logo src={sponsorBlock?.logo} alt={sponsorBlock?.name ?? " "} />
    </Root>
  );
};
