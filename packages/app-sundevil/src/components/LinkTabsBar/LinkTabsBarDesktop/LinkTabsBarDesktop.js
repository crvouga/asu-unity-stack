import React, { forwardRef, useRef } from "react";
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
  background-color: #fff;
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
  width: 100%;
`;

export const LinkTabsBarDesktop = forwardRef(
  (
    {
      links = [],
      sponsorHref,
      sponsorLogoSrc,
      sponsorLogoAlt,
      maxLinkCountBreakpoints,
      moreTabLabel,
      alignment,
      title,
      style,
    },
    ref
  ) => {
    const containerRef = useRef(null);
    const maxLinkCount = useMaxLinkCount(maxLinkCountBreakpoints);
    return (
      <Root ref={ref} alignment={alignment} style={style}>
        <Content className="container">
          <LinkTabsRoot ref={containerRef}>
            <LinkTabs
              title={title}
              links={links}
              maxLinkCount={maxLinkCount}
              moreTabLabel={moreTabLabel}
              alignment={alignment}
            />
          </LinkTabsRoot>

          {typeof sponsorLogoSrc === "string" &&
            sponsorLogoSrc.trim().length > 0 && (
              <SponsorRoot href={sponsorHref}>
                <SponsorImage src={sponsorLogoSrc} alt={sponsorLogoAlt} />
              </SponsorRoot>
            )}
        </Content>
      </Root>
    );
  }
);
LinkTabsBarDesktop.propTypes = linkTabsBarPropTypes;
