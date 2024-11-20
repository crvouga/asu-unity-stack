/* eslint-disable react/prop-types */
// @ts-check
import React from "react";

import { isSponsorBlockStatic, isSponsorGoogleAd } from "./props";
import { VariantGoogleAd } from "./VariantGoogleAd";
import { VariantStatic } from "./VariantStatic";

/**
 * @type {React.FC<import("../props").SectionHeaderProps >}
 */
export const Variant = props => {
  const { sponsorBlock } = props;
  if (isSponsorBlockStatic(sponsorBlock)) {
    return <VariantStatic {...props} />;
  }
  if (isSponsorGoogleAd(sponsorBlock)) {
    return <VariantGoogleAd {...props} />;
  }
  return <VariantStatic {...props} />;
};
