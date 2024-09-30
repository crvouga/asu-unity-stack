import { trackGAEvent } from "../../track-ga-event";

export const trackAdImpression = adId => {
  if (typeof adId !== "string" || adId.trim().length === 0) {
    // eslint-disable-next-line no-console
    console.warn(
      "trackAdImpression: adId is not a string or adId is an empty string",
      adId
    );
    return;
  }

  trackGAEvent({
    event: "ad_impression",
    ad_id: adId,
  });
};

export const trackAdClick = adId => {
  if (typeof adId !== "string" || adId.trim().length === 0) {
    // eslint-disable-next-line no-console
    console.warn(
      "trackAdClick: adId is not a string or adId is an empty string",
      adId
    );
    return;
  }

  trackGAEvent({
    event: "ad_click",
    ad_id: adId,
  });
};

/**
 * @type {(input?: {adId?: unknown, href?: unknown, target?: unknown}) => any}
 */
export const trackAdClickHandler =
  ({ adId = undefined, href = undefined, target: _target = undefined } = {}) =>
  e => {
    if (typeof e?.preventDefault === "function") {
      e.preventDefault();
    }

    trackAdClick(adId);

    const finalHref = href ?? e?.currentTarget?.href;

    window.location.href = finalHref;
  };
