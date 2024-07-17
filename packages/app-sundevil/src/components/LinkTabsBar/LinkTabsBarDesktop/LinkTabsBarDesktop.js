import React, { useRef } from "react";
import styled from "styled-components";

import { linkTabsBarPropTypes } from "../link-tab-bar";
import { useMaxLinkCount } from "../max-link-count";
import { LinkTabs } from "./LinkTabs";

export const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 62px;
  max-height: 62px;
  border-bottom: 1px solid #d0d0d0;
`;

const SponsorImage = styled.img`
  max-height: 100%;
  object-fit: cover;
`;

const SponsorRoot = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  height: 100%;
  overflow: hidden;
  padding: 12px;
  flex-shrink: 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LinkTabsRoot = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  flex: 1;
  overflow: hidden;
`;

export const LinkTabsBarDesktop = ({
  links = [],
  sponsorHref,
  sponsorLogoSrc,
  sponsorLogoAlt,
  maxLinkCountBreakpoints,
  moreTabLabel,
}) => {
  const containerRef = useRef(null);
  const maxLinkCount = useMaxLinkCount(maxLinkCountBreakpoints);
  return (
    <Root>
      <Content className="container">
        <LinkTabsRoot ref={containerRef}>
          <LinkTabs
            links={links}
            maxLinkCount={maxLinkCount}
            moreTabLabel={moreTabLabel}
          />
        </LinkTabsRoot>
        <SponsorRoot href={sponsorHref}>
          <SponsorImage
            href={sponsorHref}
            src={sponsorLogoSrc}
            alt={sponsorLogoAlt}
          />
        </SponsorRoot>
      </Content>
    </Root>
  );
};
LinkTabsBarDesktop.propTypes = linkTabsBarPropTypes;
