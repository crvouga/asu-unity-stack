/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import PropTypes from "prop-types";
import React, { useRef } from "react";

import { useScrollCollapse } from "./use-scroll-collapse";

export const topBannerPropTypes = PropTypes.shape({
  html: PropTypes.string,
});

/**
 * @typedef {{
 * html: string;
 * height: number;
 * }} Props
 */

/**
 * @type {React.FC<Props>}
 */
export const TopBanner = ({ html, height } = {}) => {
  const ref = useRef(null);

  useScrollCollapse({
    ref,
    height,
  });

  if (!html) {
    return null;
  }

  return (
    <div
      ref={ref}
      style={{
        overflow: "hidden",
        width: "100%",
        height,
      }}
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    />
  );
};
