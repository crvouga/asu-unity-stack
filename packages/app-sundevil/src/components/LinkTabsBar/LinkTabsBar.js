// https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4946-10174&t=GryWYEeDobWHRTpE-0
// https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=7278-6895&t=GryWYEeDobWHRTpE-0
// https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=2913-15764&t=GryWYEeDobWHRTpE-0
// @ts-check
import React, { forwardRef, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

import { APP_CONFIG } from "../../config";
import { isOverlapping } from "../../utils/is-overlapping";
import { querySelectorSafe } from "../../utils/query-selector-safe";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { linkTabsBarPropTypes } from "./link-tab-bar";
import { LinkTabsBarDesktop } from "./LinkTabsBarDesktop/LinkTabsBarDesktop";
import { LinkTabsBarMobile } from "./LinkTabsBarMobile/LinkTabsBarMobile";
import { useShowPortalElement } from "./use-show-portal-element";

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

/**
 * This will highlight section links on scroll
 */
const useLinks = ({ links = [], linkTabsRef }) => {
  const getLinks = () => {
    return links.reduce((acc, link) => {
      const section = querySelectorSafe(link.href);

      if (isOverlapping(linkTabsRef.current, section)) {
        return [
          ...acc.map(accLink => ({ ...accLink, active: false })),
          {
            ...link,
            active: true,
          },
        ];
      }

      return [...acc, { ...link, active: false }];
    }, []);
  };

  const [alteredLinks, setAlteredLinks] = useState(getLinks);

  useEffect(() => {
    const onScroll = () => {
      setAlteredLinks(getLinks());
    };
    window.addEventListener("scroll", onScroll, {
      passive: true,
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return alteredLinks;
};

export const LinkTabsBar = props => {
  const { stickyPosition } = props;

  /** @type {React.MutableRefObject<HTMLDivElement | null>} */
  const linkTabsRef = useRef(null);
  const links = useLinks({ ...props, linkTabsRef });

  const showPortalElement = useShowPortalElement(stickyPosition);

  const navbarPortal = querySelectorSafe(stickyPosition?.navbarPortalSelector);

  const showPortal = Boolean(showPortalElement && navbarPortal);

  return (
    <Root>
      <LinkTabsBarResponsive
        {...props}
        style={{ opacity: showPortal ? 0 : 1 }}
        links={links}
      />
      {showPortal ? (
        createPortal(
          <LinkTabsBarResponsive {...props} links={links} ref={linkTabsRef} />,
          navbarPortal
        )
      ) : (
        <></>
      )}
    </Root>
  );
};
LinkTabsBar.propTypes = linkTabsBarPropTypes;
