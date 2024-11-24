/* eslint-disable react/forbid-foreign-prop-types */
import PropTypes from "prop-types";

import { ASUHeader } from "../../../../component-header/src";
import { OfficialAthleticsSite } from "../OfficialAthleticsSite";
import { topBannerPropTypes } from "./TopBanner";

/**
 * @typedef {BaseHeaderProps['sponsorLogo'] & {
 * googleAdHead?: string;
 * googleAdBody?: string;
 * }} SponsorLogoProps
 * */

/** @typedef {import("../../../../component-header/src/header").HeaderProps} BaseHeaderProps */

/**
 * @typedef {BaseHeaderProps & {
 * officialSiteHref: string;
 * officialSiteHrefStyle?: Record<string, unknown>,
 * officialSite: import("../OfficialAthleticsSite").OfficialAthleticsSiteProps;
 * topBanner: import("./TopBanner").Props
 * sponsorLogo: SponsorLogoProps
 * }} HeaderProps
 * */

export const headerPropTypes = {
  ...ASUHeader.propTypes,
  officialSiteHref: PropTypes.string,
  officialSite: OfficialAthleticsSite.propTypes,
  topBanner: topBannerPropTypes,
};

export default {};
