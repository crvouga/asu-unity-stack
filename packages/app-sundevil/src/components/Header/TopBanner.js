/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import PropTypes from "prop-types";
import React, { useRef } from "react";

import { useBreakpoint } from "../../utils/use-breakpoint";
import { useScrollCollapse } from "./use-scroll-collapse";

export const topBannerPropTypes = PropTypes.shape({
  html: PropTypes.string,
  heightAbove: PropTypes.string,
  height: PropTypes.string,
  maxWidthBreakpoint: PropTypes.string,
  heightBelow: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  contentStyles: PropTypes.object,
});

/**
 * @typedef {{
 * html: string;
 * height: string;
 * heightAbove: string;
 * maxWidthBreakpoint: string;
 * heightBelow: string;
 * contentStyles: { [key: string]: string | number };
 * }} Props
 */

/**
 * @type {React.FC<Props>}
 */
export const TopBanner = ({
  // html,
  height,
  heightAbove,
  heightBelow,
  maxWidthBreakpoint,
  contentStyles,
} = {}) => {
  const ref = useRef(null);

  const breakpoint = useBreakpoint(maxWidthBreakpoint);

  const heightAboveFinal = heightAbove || height;

  const heightFinal = breakpoint ? heightBelow : heightAboveFinal;

  useScrollCollapse({
    ref,
    height: heightFinal,
  });

  const html = `
  <div class="text-center">
      <div class="d-lg-block d-md-none d-none">
          <!-- /23203588234/FY25_SDA_all_ads_970x66_universal_nav -->
          <div style="min-height:66px;min-width:970px;" id="div-gpt-ad-1729113360808-0">
              <script>
                googletag.cmd.push(function() { googletag.display("div-gpt-ad-1729113360808-0"); });
              </script>
          </div>
      </div>
      <div class="d-lg-none d-md-block d-block">
          <!-- /23203588234/FY25_SDA_all_ads_320x50_universal-nav -->
          <div style="min-height:50px;min-width:300px;" id="div-gpt-ad-1729113295920-0">
              <script>
                googletag.cmd.push(function() { googletag.display("div-gpt-ad-1729113295920-0"); });
              </script>
          </div>
      </div>
  </div>
  `;

  if (!html) {
    return null;
  }

  return (
    <div
      ref={ref}
      style={{
        overflow: "hidden",
        width: "100%",
        height: heightFinal,
      }}
    >
      <div
        style={{
          width: "100%",
          backgroundColor: "#E8E8E8",
          borderBottom: "1px solid #d0d0d0",
          padding: "32px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
          ...(contentStyles ?? {}),
        }}
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    </div>
  );
};
