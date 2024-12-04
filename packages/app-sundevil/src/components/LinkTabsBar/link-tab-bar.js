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
  sponsorGoogleAdHead: PropTypes.string,
  sponsorGoogleAdBody: PropTypes.string,
  sponsorGoogleAdHeadSticky: PropTypes.string,
  sponsorGoogleAdBodySticky: PropTypes.string,
  maxLinkCountBreakpoints: maxLinkCountBreakpointsPropType,
  disableActiveFromUrl: PropTypes.bool,
  stickyPosition: PropTypes.shape({
    navbarPortalSelector: PropTypes.string,
    stickyElementSelector: PropTypes.string,
    scrollTarget: PropTypes.instanceOf(HTMLElement),
  }),
  alignment: alignmentPropTypes,
  anchorTitle: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  highlightOffset: PropTypes.number,
});
