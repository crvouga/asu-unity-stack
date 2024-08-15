import PropTypes from "prop-types";
import React from "react";

import { Ad, adPropTypes } from "./ad";
import { useCycleIndexOnLoad } from "./use-cycle-index-on-load";

/**
 * @type {React.Fc<Props>}
 */
export const Ads = ({
  width,
  height,
  ads,
  storageKey = "sun-devils-ads/current-index",
  storage = window.localStorage,
  target,
}) => {
  const currentIndex = useCycleIndexOnLoad({
    storageKey,
    storage,
    length: ads.length,
  });

  const ad = Array.isArray(ads) ? ads[currentIndex] : null;

  if (!ad) {
    return null;
  }

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Ad ad={ad} width={width} height={height} target={target} />
    </div>
  );
};

/**
 * @typedef {{
 * width?: number | string | null;
 * height?: number | string | null;
 * storageKey?: string;
 * storage?: Storage;
 * ads: Array<import("./ad").Ad>
 * target?: string;
 * }} Props
 */

Ads.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ads: PropTypes.arrayOf(adPropTypes),
  storageKey: PropTypes.string,
  target: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  storage: PropTypes.object,
};
