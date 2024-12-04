/* eslint-disable react/forbid-foreign-prop-types */
import PropTypes from "prop-types";

import { officialAthleticsSitePropTypes } from "../OfficialAthleticsSite";
import { basePropTypes } from "./base-props";
import { topBannerPropTypes } from "./TopBanner";

/**
 * @typedef {import("./base-props").BaseHeaderProps & {
 * officialSiteHref: string;
 * officialSiteHrefStyle?: Record<string, unknown>,
 * officialSite: import("../OfficialAthleticsSite").OfficialAthleticsSiteProps;
 * topBanner: import("./TopBanner").Props
 * sponsorLogo: import("./SponsorLogo/props").SponsorLogoProps
 * }} HeaderProps
 * */

export const headerPropTypes = {
  ...basePropTypes,
  officialSiteHref: PropTypes.string,
  officialSite: officialAthleticsSitePropTypes,
  topBanner: topBannerPropTypes,
};

export default {};
