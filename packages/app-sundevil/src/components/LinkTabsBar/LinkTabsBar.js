import React from "react";

import { APP_CONFIG } from "../../config";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { linkTabsBarPropTypes } from "./link-tab-bar";
import { LinkTabsBarDesktop } from "./LinkTabsBarDesktop/LinkTabsBarDesktop";
import { LinkTabsBarMobile } from "./LinkTabsBarMobile/LinkTabsBarMobile";

export const LinkTabsBar = props => {
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);

  if (isMobile) {
    const { links } = props;
    const linksMobile = links.map(link => ({
      ...link,
      label: link.mobileLabel ?? link.label,
    }));
    return <LinkTabsBarMobile {...props} links={linksMobile} />;
  }

  return <LinkTabsBarDesktop {...props} />;
};
LinkTabsBar.propTypes = linkTabsBarPropTypes;
