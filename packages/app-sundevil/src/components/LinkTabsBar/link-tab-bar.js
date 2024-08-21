import PropTypes from "prop-types";

import { alignmentPropTypes } from "./alignment";
import { linkTabPropType } from "./link";
import { maxLinkCountBreakpointsPropType } from "./max-link-count";

export const linkTabsBarPropTypes = PropTypes.shape({
  links: PropTypes.arrayOf(linkTabPropType),
  moreTabLabel: PropTypes.string,
  sponsorHref: PropTypes.string,
  sponsorLogoSrc: PropTypes.string,
  sponsorLogoAlt: PropTypes.string,
  sponsorAdId: PropTypes.string,
  maxLinkCountBreakpoints: maxLinkCountBreakpointsPropType,
  disableActiveFromUrl: PropTypes.bool,
  stickyPosition: PropTypes.shape({
    navbarPortalSelector: PropTypes.string,
    stickyElementSelector: PropTypes.string,
  }),
  alignment: alignmentPropTypes,
  anchorTitle: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
});
