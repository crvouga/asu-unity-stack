import PropTypes from "prop-types";
import React, { useEffect } from "react";

import { pushDataLayer } from "../../data-layers";
import { Ad, adPropTypes } from "./ad";
import { useCycleIndexOnLoad } from "./use-cycle-index-on-load";

function useDataLayers({ ad, onMount }) {
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

    pushDataLayer({
      event: "ad_impression",
      ad_id: ad?.id,
    });

    return () => {
      //
    };
  }, [ad]);

  const onClickAd = () => {
    pushDataLayer({
      event: "ad_click",
      ad_id: ad?.id,
    });
  };

  return {
    onClickAd,
  };
}

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
  onClickAd: propsOnClickAd,
}) => {
  const currentIndex = useCycleIndexOnLoad({
    storageKey,
    storage,
    length: ads.length,
  });

  const ad = Array.isArray(ads) ? ads[currentIndex] : null;

  const { onClickAd } = useDataLayers({ ad, onMount });

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
      <Ad
        onClick={propsOnClickAd ?? onClickAd}
        ad={ad}
        width={width}
        height={height}
        target={target}
      />
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
 * onMount?: (payload: unknown) => void;
 * onClickAd?: (payload: unknown) => void
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
  onClickAd: PropTypes.func,
};
