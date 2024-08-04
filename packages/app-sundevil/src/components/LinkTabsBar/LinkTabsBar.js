// https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4946-10174&t=GryWYEeDobWHRTpE-0
// https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=7278-6895&t=GryWYEeDobWHRTpE-0
// https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=2913-15764&t=GryWYEeDobWHRTpE-0
// @ts-check
import React, { forwardRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import { APP_CONFIG } from "../../config";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { useCurrentUrl } from "../../utils/use-current-url";
import { linkTabsBarPropTypes } from "./link-tab-bar";
import { LinkTabsBarDesktop } from "./LinkTabsBarDesktop/LinkTabsBarDesktop";
import { LinkTabsBarMobile } from "./LinkTabsBarMobile/LinkTabsBarMobile";
import { useShowPortalElement } from "./use-show-portal-element";

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

const LinkTabsBarResponsive = forwardRef((props, ref) => {
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);

  if (isMobile) {
    // @ts-ignore
    const linksMobile = props.links.map(link => ({
      ...link,
      label: link.mobileLabel ?? link.label,
    }));
    // @ts-ignore
    return <LinkTabsBarMobile {...props} links={linksMobile} ref={ref} />;
  }

  // @ts-ignore
  return <LinkTabsBarDesktop {...props} links={props.links} ref={ref} />;
});
// @ts-ignore
LinkTabsBarResponsive.propTypes = linkTabsBarPropTypes;

const Root = styled.div`
  width: 100%;
  background-color: #fff;
`;

const safeQuerySelector = (selector, defaultValue = null) => {
  try {
    return document.querySelector(selector) ?? defaultValue;
  } catch (error) {
    return defaultValue;
  }
};

export const LinkTabsBar = props => {
  const { links, disableActiveFromUrl, stickyPosition } = props;
  const currentUrl = useCurrentUrl();
  const mappedLinks = disableActiveFromUrl
    ? links
    : mapActiveLinkFromUrl(currentUrl, links);

  const showPortalElement = useShowPortalElement(stickyPosition);

  const navbarPortal = safeQuerySelector(
    stickyPosition.navbarPortalSelector,
    null
  );

  return (
    <Root>
      <LinkTabsBarResponsive {...props} links={mappedLinks} />
      {showPortalElement &&
        navbarPortal &&
        createPortal(
          <LinkTabsBarResponsive {...props} links={mappedLinks} />,
          navbarPortal
        )}
    </Root>
  );
};
LinkTabsBar.propTypes = linkTabsBarPropTypes;
