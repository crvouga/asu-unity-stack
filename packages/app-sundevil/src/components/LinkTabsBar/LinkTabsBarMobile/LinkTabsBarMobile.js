import React, { forwardRef } from "react";
import styled from "styled-components";

import { trackGAEvent } from "../../../track-ga/track-ga-event";
import { trackAdClickHandler } from "../../Ads/ad-data-layers";
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
  margin: 0;
  height: 100%;
  padding: 12px 12px 12px 16px;
  border-left: 1px solid #d0d0d0;
  flex-shrink: 1;
`;

const LinkTabsRoot = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  min-width: 0;
  flex: 1;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const LinkTabsBarMobile = forwardRef(
  (
    {
      links = [],
      sponsorAdId,
      sponsorHref,
      sponsorLogoSrc,
      sponsorLogoAlt,
      style,
    },
    ref
  ) => {
    return (
      <Root ref={ref}>
        <Content style={style}>
          <LinkTabsRoot>
            <div
              style={{
                width: "100%",
                height: "100%",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              <LinkTabsBarDropDown links={links} />
            </div>
          </LinkTabsRoot>
          {typeof sponsorLogoSrc === "string" &&
            sponsorLogoSrc.trim().length > 0 && (
              <SponsorRoot
                href={sponsorHref}
                onClick={() => {
                  trackAdClickHandler({
                    adId: sponsorAdId,
                    href: sponsorHref,
                  })();
                  trackGAEvent({
                    event: "link",
                    action: "click",
                    name: "onclick",
                    type: "internal link",
                    region: "main content",
                    section: "sticky navbar",
                    text: sponsorLogoAlt ?? " ",
                    component: "image",
                  });
                }}
              >
                <SponsorImage
                  src={sponsorLogoSrc}
                  alt={sponsorLogoAlt ?? " "}
                />
              </SponsorRoot>
            )}
        </Content>
      </Root>
    );
  }
);
LinkTabsBarMobile.propTypes = linkTabsBarPropTypes;
