/* eslint-disable react/prop-types */
import React, { forwardRef } from "react";

import { GoogleAd } from "../../../google-ads/GoogleAd";

/**
 * @type {React.FC<import("./props").SponsorProps>}
 */
export const VariantGoogleAd = forwardRef((props, ref) => {
  return (
    <GoogleAd
      style={props.style}
      ref={ref}
      googleAdBody={props.sponsorGoogleAdBody}
      googleAdHead={props.sponsorGoogleAdHead}
    />
  );
});
