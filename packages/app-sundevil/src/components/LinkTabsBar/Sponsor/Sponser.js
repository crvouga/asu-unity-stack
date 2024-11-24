/* eslint-disable react/prop-types */
import React, { forwardRef } from "react";
import styled from "styled-components";

import { trackGAEvent } from "../../../track-ga/track-ga-event";
import { trackAdClickHandler } from "../../Ads/ad-data-layers";

export const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 62px;
  max-height: 62px;
  border-bottom: 1px solid #d0d0d0;
  background-color: #fff;
`;

const SponsorImage = styled.img`
  max-height: 100%;
  object-fit: cover;
`;

const SponsorRoot = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  height: 100%;
  padding: 12px 16px;
  flex-shrink: 0;
`;

export const Sponsor = forwardRef(
  ({ sponsorHref, sponsorAdId, sponsorLogoSrc, sponsorLogoAlt }) => {
    return (
      typeof sponsorLogoSrc === "string" &&
      sponsorLogoSrc.trim().length > 0 && (
        <SponsorRoot
          href={sponsorHref}
          onClick={() => {
            trackAdClickHandler({
              adId: sponsorAdId,
              href: sponsorHref,
            })();
            trackGAEvent({
              event: "link",
              action: "click",
              name: "onclick",
              type: "internal link",
              region: "main content",
              section: "sticky navbar",
              text: sponsorLogoAlt ?? " ",
              component: "image",
            });
          }}
        >
          <SponsorImage src={sponsorLogoSrc} alt={sponsorLogoAlt ?? " "} />
        </SponsorRoot>
      )
    );
  }
);
