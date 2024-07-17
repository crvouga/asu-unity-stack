import PropTypes from "prop-types";

import { APP_CONFIG } from "../../config";
import { useBreakpoint } from "../../utils/use-breakpoint";

export const maxLinkCountBreakpointsPropType = PropTypes.shape({
  mobile: PropTypes.number,
  tablet: PropTypes.number,
  smallDesktop: PropTypes.number,
  desktop: PropTypes.number,
});

export const DEFAULT_MAX_LINK_COUNT_BREAKPOINTS = {
  mobile: 2,
  tablet: 4,
  smallDesktop: 6,
  desktop: 8,
};

export const useMaxLinkCount = maxLinkCountBreakpoints => {
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const isTablet = useBreakpoint(APP_CONFIG.breakpointTablet);
  const isSmallDesktop = useBreakpoint(APP_CONFIG.breakpointDesktopSmall);
  const isDesktop = !isMobile && !isTablet && !isSmallDesktop;

  if (isMobile) {
    return (
      maxLinkCountBreakpoints?.mobile ??
      DEFAULT_MAX_LINK_COUNT_BREAKPOINTS.mobile
    );
  }

  if (isTablet) {
    return (
      maxLinkCountBreakpoints?.tablet ??
      DEFAULT_MAX_LINK_COUNT_BREAKPOINTS.tablet
    );
  }

  if (isSmallDesktop) {
    return (
      maxLinkCountBreakpoints?.smallDesktop ??
      DEFAULT_MAX_LINK_COUNT_BREAKPOINTS.smallDesktop
    );
  }

  if (isDesktop) {
    return (
      maxLinkCountBreakpoints?.desktop ??
      DEFAULT_MAX_LINK_COUNT_BREAKPOINTS.desktop
    );
  }

  return (
    maxLinkCountBreakpoints?.desktop ??
    DEFAULT_MAX_LINK_COUNT_BREAKPOINTS.desktop
  );
};
