/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import PropTypes from "prop-types";
import React, { useRef } from "react";

import { useBreakpoint } from "../../utils/use-breakpoint";
import { useScrollCollapse } from "./use-scroll-collapse";

export const topBannerSpacingPropTypes = PropTypes.shape({
  enabled: PropTypes.bool,
  maxWidthBreakpoint: PropTypes.string,
  heightAbove: PropTypes.string,
  heightBelow: PropTypes.string,
});

/**
 * @typedef {{
 * enabled?: boolean;
 * maxWidthBreakpoint?: string;
 * heightAbove?: string;
 * heightBelow?: string;
 * }} Props
 */

/**
 * @type {React.FC<Props>}
 */
export const TopBannerSpacing = ({
  enabled = true,
  heightAbove = "131px",
  heightBelow = "115px",
  maxWidthBreakpoint = "992px",
} = {}) => {
  const ref = useRef(null);
  const breakpoint = useBreakpoint(maxWidthBreakpoint);
  const bannerHeight = breakpoint ? heightBelow : heightAbove;
  useScrollCollapse({
    ref,
    height: bannerHeight,
  });

  if (!enabled) {
    return null;
  }

  return (
    <div
      ref={ref}
      style={{
        overflow: "hidden",
        width: "100%",
        pointerEvents: "none",
        userSelect: "none",
        height: bannerHeight,
      }}
    />
  );
};
