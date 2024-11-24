/* eslint-disable react/prop-types */
import React, { forwardRef } from "react";
import styled from "styled-components";

import { trackGAEvent } from "../../../track-ga/track-ga-event";
import { trackAdClickHandler } from "../../Ads/ad-data-layers";
import { Variant } from "./Variant";

const Root = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  height: 100%;
  padding: 12px 16px;
  flex-shrink: 0;
  ${({ borderLeft }) => borderLeft && "border-left: 1px solid #d0d0d0;"}
`;

const isCleanString = str => typeof str === "string" && str.trim().length > 0;

/**
 * @type {React.FC<import("./props").SponsorProps>}
 */
export const Sponsor = forwardRef((props, ref) => {
  const { sponsorHref, sponsorAdId, sponsorLogoAlt, borderLeft } = props;
  return (
    <Root
      href={sponsorHref}
      borderLeft={borderLeft}
      onClick={() => {
        if (isCleanString(sponsorAdId) && isCleanString(sponsorHref)) {
          trackAdClickHandler({
            adId: sponsorAdId,
            href: sponsorHref,
          })();
        }
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
      <Variant {...props} ref={ref} />
    </Root>
  );
});
