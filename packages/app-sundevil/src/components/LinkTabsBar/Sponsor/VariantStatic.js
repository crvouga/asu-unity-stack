/* eslint-disable react/prop-types */
import React, { forwardRef } from "react";
import styled from "styled-components";

import { trackGAEvent } from "../../../track-ga/track-ga-event";
import { trackAdClickHandler } from "../../Ads/ad-data-layers";

const Root = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  height: 100%;
  padding: 12px 16px;
  flex-shrink: 0;
`;

const SponsorImage = styled.img`
  max-height: 100%;
  object-fit: cover;
`;

/**
 * @type {React.FC<import("./props").SponsorProps>}
 */
export const VariantStatic = forwardRef((props, ref) => {
  const {
    sponsorHref,
    sponsorAdId,
    sponsorLogoSrc,
    sponsorLogoAlt,
    borderLeft,
    style,
  } = props;
  return (
    typeof sponsorLogoSrc === "string" &&
    sponsorLogoSrc.trim().length > 0 && (
      <Root
        style={style}
        ref={ref}
        href={sponsorHref}
        borderLeft={borderLeft}
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
      </Root>
    )
  );
});
