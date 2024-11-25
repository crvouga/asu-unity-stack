/**
 * @typedef {import("../base-props").BaseHeaderProps['sponsorLogo'] & {
 * googleAdHead?: string;
 * googleAdBody?: string;
 * }} SponsorLogoProps
 * */

import { isCleanString } from "../../../utils/is-clean-string";

/**
 * @type {(props: SponsorLogoProps) => boolean}
 */
export const isGoogleAd = props => {
  return isCleanString(props.googleAdHead) && isCleanString(props.googleAdBody);
};

export const isStaticAd = props => {
  return !isGoogleAd(props);
};

export default {};
