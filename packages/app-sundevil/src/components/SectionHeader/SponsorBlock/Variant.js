/* eslint-disable react/prop-types */
// @ts-check
import React, { forwardRef } from "react";

import { isSponsorBlockStatic, isSponsorGoogleAd } from "./props";
import { VariantGoogleAd } from "./VariantGoogleAd";
import { VariantStatic } from "./VariantStatic";

/**
 * @type {React.FC<import("../props").SectionHeaderProps >}
 */
export const Variant = forwardRef((props, ref) => {
  const { sponsorBlock } = props;
  if (isSponsorGoogleAd(sponsorBlock)) {
    return (
      <VariantGoogleAd
        {...props}
        // @ts-ignore
        ref={ref}
      />
    );
  }

  if (isSponsorBlockStatic(sponsorBlock)) {
    return (
      <VariantStatic
        {...props}
        // @ts-ignore
        ref={ref}
      />
    );
  }

  return (
    <VariantStatic
      {...props}
      // @ts-ignore
      ref={ref}
    />
  );
});
