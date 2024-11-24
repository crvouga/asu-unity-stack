/* eslint-disable react/prop-types */
import React, { forwardRef, useRef } from "react";
import styled from "styled-components";

import { useHideAdProps } from "../../../google-ads/use-should-hide-ad";
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
export const Sponsor = forwardRef((props, propsRef) => {
  const { sponsorHref, sponsorAdId, sponsorLogoAlt, borderLeft } = props;
  /**
   * @type {React.MutableRefObject<HTMLElement | undefined>}
   */
  const componentRef = useRef();
  /**
   * @type {React.MutableRefObject<HTMLElement | undefined>}
   */
  const ref = propsRef ?? componentRef;

  const hideProps = useHideAdProps({
    ref,
  });

  return (
    <Root
      style={hideProps.style}
      tabIndex={hideProps.tabIndex}
      aria-hidden={hideProps["aria-hidden"]}
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
