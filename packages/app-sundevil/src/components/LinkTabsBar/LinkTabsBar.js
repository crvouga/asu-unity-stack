// @ts-check
import React from "react";

import { APP_CONFIG } from "../../config";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { useCurrentUrl } from "../../utils/use-current-url";
import { linkTabsBarPropTypes } from "./link-tab-bar";
import { LinkTabsBarDesktop } from "./LinkTabsBarDesktop/LinkTabsBarDesktop";
import { LinkTabsBarMobile } from "./LinkTabsBarMobile/LinkTabsBarMobile";

/**
 *
 * @param {URL} currentUrl
 * @param {string} href
 * @returns  {boolean}
 */
const isCurrentHref = (currentUrl, href) => {
  // Special case for href = "#"
  if (href.startsWith("#")) {
    return currentUrl.hash === href;
  }

  const targetUrl = new URL(href, currentUrl.origin);

  return (
    currentUrl.href === targetUrl.href ||
    currentUrl.pathname === targetUrl.pathname
  );
};

const mapActiveLinkFromUrl = (currentUrl, links) => {
  if (!Array.isArray(links)) {
    return [];
  }

  return links.map(link => ({
    ...link,
    active: isCurrentHref(currentUrl, link.href),
  }));
};

export const LinkTabsBar = props => {
  const { links, disableActiveFromUrl } = props;
  const currentUrl = useCurrentUrl();
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const mappedLinks = disableActiveFromUrl
    ? links
    : mapActiveLinkFromUrl(currentUrl, links);

  if (isMobile) {
    const linksMobile = mappedLinks.map(link => ({
      ...link,
      label: link.mobileLabel ?? link.label,
    }));
    return <LinkTabsBarMobile {...props} links={linksMobile} />;
  }

  return <LinkTabsBarDesktop {...props} links={mappedLinks} />;
};
LinkTabsBar.propTypes = linkTabsBarPropTypes;
