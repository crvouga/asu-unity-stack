import React from "react";

import { APP_CONFIG } from "../../config";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { linkTabsBarPropTypes } from "./link-tab-bar";
import { LinkTabsBarDesktop } from "./LinkTabsBarDesktop/LinkTabsBarDesktop";
import { LinkTabsBarMobile } from "./LinkTabsBarMobile/LinkTabsBarMobile";

export const LinkTabsBar = props => {
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);

  if (isMobile) {
    return <LinkTabsBarMobile {...props} />;
  }

  return <LinkTabsBarDesktop {...props} />;
};
LinkTabsBar.propTypes = linkTabsBarPropTypes;
