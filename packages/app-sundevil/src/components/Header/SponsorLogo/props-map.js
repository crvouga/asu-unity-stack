// @ts-check
import React from "react";

import { trackGAEvent } from "../../../track-ga/track-ga-event";
import { trackAdClickHandler } from "../../Ads/ad-data-layers";
import { isGoogleAd } from "./props";
import { SponsorLogo } from "./SponsorLogo";

/** @type {(props: import("./props").SponsorLogoProps) => import("./props").SponsorLogoProps}  */
export const mapSponsorLogoProps = props => {
  return {
    ...props,
    onClick: trackAdClickHandler({
      adId: props?.adId,
      href: props?.brandLink,
    }),
    onFocus: () => {
      trackGAEvent({
        event: "link",
        action: "click",
        name: "onclick",
        type: "external link",
        region: "navbar",
        section: "main navbar",
        text: props?.alt ?? "sponsor logo",
        component: "image",
      });
    },
    render: isGoogleAd(props) ? () => <SponsorLogo {...props} /> : undefined,
  };
};
