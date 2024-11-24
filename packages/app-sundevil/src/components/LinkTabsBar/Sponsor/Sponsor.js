/* eslint-disable react/prop-types */
import React, { forwardRef } from "react";

import { isGoogleAd, isStaticAd } from "./props";
import { VariantGoogleAd } from "./VariantGoogleAd";
import { VariantStatic } from "./VariantStatic";

/**
 * @type {React.FC<import("./props").SponsorProps>}
 */
export const Sponsor = forwardRef((props, ref) => {
  /**
   * @type {React.CSSProperties}
   */
  const style = props.borderLeft
    ? {
        borderLeft: "1px solid #d0d0d0",
      }
    : {};
  if (isGoogleAd(props)) {
    return <VariantGoogleAd {...props} ref={ref} style={style} />;
  }
  if (isStaticAd(props)) {
    return <VariantStatic {...props} ref={ref} style={style} />;
  }
  return <VariantStatic {...props} ref={ref} style={style} />;
});
