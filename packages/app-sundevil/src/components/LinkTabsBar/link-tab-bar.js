import PropTypes from "prop-types";

import { linkTabPropType } from "./link";
import { maxLinkCountBreakpointsPropType } from "./max-link-count";

export const linkTabsBarPropTypes = PropTypes.shape({
  links: PropTypes.arrayOf(linkTabPropType),
  moreTabLabel: PropTypes.string,
  sponsorHref: PropTypes.string,
  sponsorLogoSrc: PropTypes.string,
  sponsorLogoAlt: PropTypes.string,
  maxLinkCountBreakpoints: maxLinkCountBreakpointsPropType,
});
