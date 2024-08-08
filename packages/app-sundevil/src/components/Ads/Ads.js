import PropTypes from "prop-types";
import React from "react";

import { adPropTypes } from "./ad";
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
    <a href={ad.href} style={{ width: "fit-content", height: "fit-content" }}>
      <img
        src={ad.imageSrc}
        alt={ad.imageAlt}
        width={ad.width ?? width ?? "100%"}
        height={ad.height ?? height ?? "auto"}
        style={{
          width: ad.width ?? width ?? "100%",
          height: ad.height ?? height ?? "auto",
          overflow: "hidden",
          objectFit: "cover",
        }}
      />
    </a>
  );
};

/**
 * @typedef {{
 * width?: number | string | null;
 * height?: number | string | null;
 * storageKey?: string;
 * storage?: Storage;
 * ads: Array<import("./ad").Ad>
 * }} Props
 */

Ads.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ads: PropTypes.arrayOf(adPropTypes),
  storageKey: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  storage: PropTypes.object,
};
