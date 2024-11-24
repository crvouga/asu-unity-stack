/* eslint-disable react/forbid-foreign-prop-types */
import PropTypes from "prop-types";

import { OfficialAthleticsSite } from "../OfficialAthleticsSite";
import { basePropTypes } from "./base-props";
import { topBannerPropTypes } from "./TopBanner";

/**
 * @typedef {import("./base-props").BaseHeaderProps & {
 * officialSiteHref: string;
 * officialSiteHrefStyle?: Record<string, unknown>,
 * officialSite: import("../OfficialAthleticsSite").OfficialAthleticsSiteProps;
 * topBanner: import("./TopBanner").Props
 * sponsorLogo: import("./sponsor-logo/props").SponsorLogoProps
 * }} HeaderProps
 * */

export const headerPropTypes = {
  ...basePropTypes,
  officialSiteHref: PropTypes.string,
  officialSite: OfficialAthleticsSite.propTypes,
  topBanner: topBannerPropTypes,
};

export default {};
