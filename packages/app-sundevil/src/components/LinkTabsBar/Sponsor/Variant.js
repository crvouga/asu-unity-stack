/* eslint-disable react/prop-types */
import React, { forwardRef } from "react";

import { isGoogleAd, isStaticAd } from "./props";
import { VariantGoogleAd } from "./VariantGoogleAd";
import { VariantStatic } from "./VariantStatic";

/**
 * @type {React.FC<import("./props").SponsorProps>}
 */
export const Variant = forwardRef((props, ref) => {
  if (isGoogleAd(props)) {
    return <VariantGoogleAd {...props} ref={ref} />;
  }
  if (isStaticAd(props)) {
    return <VariantStatic {...props} ref={ref} />;
  }
  return <VariantStatic {...props} ref={ref} />;
});
