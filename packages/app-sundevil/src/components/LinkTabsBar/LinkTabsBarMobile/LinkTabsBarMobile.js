import React, { forwardRef } from "react";
import styled from "styled-components";

import { linkTabsBarPropTypes } from "../link-tab-bar";
import { LinkTabsBarDropDown } from "./LinkTabsBarDropDown";

export const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 62px;
  max-height: 62px;
  border-bottom: 1px solid #d0d0d0;
  background-color: #fff;
`;

const SponsorImage = styled.img`
  max-height: 100%;
  max-width: 100%;
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
  padding-left: 0;
  border-left: 1px solid #d0d0d0;
  flex-shrink: 1;
`;

const LinkTabsRoot = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  flex: 1;
  overflow: hidden;
  flex-shrink: 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const LinkTabsBarMobile = forwardRef(
  ({ links = [], sponsorHref, sponsorLogoSrc, sponsorLogoAlt, style }, ref) => {
    return (
      <Root ref={ref}>
        <Content className="container" style={style}>
          <LinkTabsRoot>
            <LinkTabsBarDropDown links={links} />
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
LinkTabsBarMobile.propTypes = linkTabsBarPropTypes;
