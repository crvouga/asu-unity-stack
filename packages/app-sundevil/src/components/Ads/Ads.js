import PropTypes from "prop-types";
import React, { useEffect } from "react";

import { Ad, adPropTypes } from "./ad";
import { useCycleIndexOnLoad } from "./use-cycle-index-on-load";

const useDataLayers = ({ ad, onMount }) => {
  useEffect(() => {
    if (typeof onMount === "function") {
      const maybeCleanUp = onMount?.({
        ad,
        adId: ad?.id,
      });
      return () => {
        if (typeof maybeCleanUp === "function") {
          maybeCleanUp?.();
        }
      };
    }

    if (
      typeof window !== "undefined" &&
      typeof window.dataLayer !== "undefined" &&
      typeof window.dataLayer.push === "function" &&
      typeof ad?.id === "string"
    ) {
      window.dataLayer.push({
        event: "Pageview",
        ad_id: ad?.id,
      });
    } else {
      // eslint-disable-next-line no-console
      console.warn(
        "pushing data layer event for Ad component failed. window.dataLayer.push is not a function or ad.id is not a string"
      );
    }

    return () => {
      //
    };
  }, [ad]);
};

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
  id,
  onMount,
}) => {
  const currentIndex = useCycleIndexOnLoad({
    storageKey,
    storage,
    length: ads.length,
  });

  const ad = Array.isArray(ads) ? ads[currentIndex] : null;

  useDataLayers({ ad, onMount });

  if (!ad) {
    return null;
  }

  return (
    <div
      id={id}
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
 * id?: string;
 * onMount?: () => void;
 * }} Props
 */

Ads.propTypes = {
  id: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ads: PropTypes.arrayOf(adPropTypes),
  storageKey: PropTypes.string,
  target: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  storage: PropTypes.object,
  onMount: PropTypes.func,
};
