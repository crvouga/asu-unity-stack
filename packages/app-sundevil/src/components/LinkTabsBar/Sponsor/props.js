/**
 * @typedef {{
 *  sponsorHref?: string,
 *  sponsorAdId?: string,
 *  sponsorLogoSrc?: string,
 *  sponsorLogoAlt?: string,
 *  borderLeft?: boolean
 *  sponsorGoogleAdHead?: string,
 *  sponsorGoogleAdBody?: string
 *  style?: React.CSSProperties
 * }} SponsorProps
 */

const isCleanString = str => typeof str === "string" && str.trim().length > 0;

/**
 * @type {(props: SponsorProps) => boolean}
 */
export const isGoogleAd = props => {
  return (
    isCleanString(props?.sponsorGoogleAdHead) &&
    isCleanString(props?.sponsorGoogleAdBody)
  );
};

/**
 * @type {(props: SponsorProps) => boolean}
 */
export const isStaticAd = props => {
  return isCleanString(props?.sponsorLogoSrc);
};

export default {};
