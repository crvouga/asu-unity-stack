// @ts-check
import PropTypes from "prop-types";
import React, { forwardRef, useRef } from "react";
import styled from "styled-components";

import { Button } from "../../../../components-core/src";
import { APP_CONFIG } from "../../config";
import { trackGAEvent, TYPE_INTERNAL_LINK } from "../../track-ga-event";
import { useTrackChildrenClicks } from "../../track-ga-event-hooks";
import { ensureArray } from "../../utils/ensure-array";
import { stringToFontWeight } from "../../utils/font-weight";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { trackAdClickHandler } from "../Ads/ad-data-layers";
import { buttonPropTypes } from "../Button/button-prop";
import {
  stringToColor,
  stringToSize,
  stringToTarget,
} from "../Button/core-button-props";
import { Logo } from "./index.styles";
import { JoinTheConversation, socialPropType } from "./JoinTheConversation";
import { Tabs } from "./Tabs";

const Subtitle = styled.p`
  width: 100%;
  max-width: 588px;
  padding: 0;
  margin: 0;
  color: #191919;

  & > * {
    margin: 0;
    padding: 0;
  }
`;

const SponsorBlock = styled.a`
  color: #191919;
  text-decoration: none;
  width: fit-content;
`;

const HeaderBody = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 48px;
  padding-top: 12px;
  @media (max-width: ${APP_CONFIG.breakpointMobile}) {
    padding-top: 32px;
  }
`;

const SubtitleRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SubtitleButtons = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  padding-top: 16px;
`;

const SubtitleLinks = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
`;

const SubtitleLink = styled.a`
  cursor: pointer;
  max-width: fit-content;
  ${({ color }) => {
    if (color === "muted") {
      return `
        color: #191919;
        opacity: 0.6;
      `;
    }

    return "";
  }}

  ${({
    // @ts-ignore
    fontWeight,
  }) => {
    if (fontWeight) {
      return `
        font-weight: ${stringToFontWeight(fontWeight)};
      `;
    }

    return "";
  }}
`;

export const mapPropsSponsorBlock = props => {
  const sponsorBlock = props?.sponsorBlock;
  if (Array.isArray(sponsorBlock) && sponsorBlock?.[0]) {
    return {
      ...props,
      sponsorBlock: sponsorBlock?.[0],
    };
  }

  if (sponsorBlock) {
    return {
      ...props,
      sponsorBlock,
    };
  }

  // eslint-disable-next-line camelcase
  const sponsor_block = props?.sponsor_block;

  if (Array.isArray(sponsor_block) && sponsor_block?.[0]) {
    return {
      ...props,
      sponsorBlock: sponsor_block[0],
    };
  }

  return {
    ...props,
    sponsorBlock: sponsor_block,
  };
};

/**
 * Used for drupal integration. Drupal team sends weird props so we'll fix them here.
 */
export const mapSectionHeaderProps = props => {
  return mapPropsSponsorBlock(props);
};

const Title = styled.div`
  color: ${({
    // @ts-ignore
    darkMode,
  }) => (darkMode ? "#fff" : "#191919")};
  font-weight: bold;
  font-size: 40px;

  @media (max-width: ${APP_CONFIG.breakpointMobile}) {
    font-size: 24px;
  }
`;

const SponsorBlockTitle = styled.div`
  color: ${({
    // @ts-ignore
    darkMode,
  }) => (darkMode ? "#fff" : "#191919")};
  font-weight: bold;
  font-size: 16px;
  text-align: left;

  @media (max-width: ${APP_CONFIG.breakpointMobile}) {
    font-size: 12px;
  }

  white-space: nowrap;
`;

/**
 * @type {React.FC<SectionHeaderProps>}
 */
export const SectionHeader = forwardRef(
  (
    {
      title,
      subtitle,
      tabs,
      sponsorBlock,
      social,
      onTabItemClick,
      darkMode = false,
      subtitleFontWeight = "normal",
      subtitleLinks = [],
      subtitleButtons = [],
      style,
    },
    ref
  ) => {
    const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
    const hasContent = Boolean(
      title || subtitle || tabs || social || sponsorBlock
    );

    const hasSubtitle =
      Boolean(subtitle) ||
      Boolean(Array.isArray(subtitleLinks) && subtitleLinks.length > 0) ||
      Boolean(Array.isArray(subtitleButtons) && subtitleButtons.length > 0);

    const hasTabs = Boolean(tabs && tabs.length > 0);

    const hasSocial = Boolean(social && social.length > 0);

    const hasHeaderBody = hasSubtitle || hasTabs || hasSocial;

    const sectionName = title;

    /**
     * @type {React.MutableRefObject<HTMLElement | null>}
     */
    const subtitleRef = useRef(null);

    useTrackChildrenClicks({
      ref: subtitleRef,
      sectionName: sectionName ?? " ",
      type: TYPE_INTERNAL_LINK,
    });

    return (
      <div className="container" ref={ref} style={style}>
        {hasContent && (
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <div className="d-flex flex-row align-items-end justify-content-between gap-2 pt-2">
                <Title
                  // @ts-ignore
                  darkMode={darkMode}
                >
                  {title}
                </Title>
                <div className="mt-auto d-flex d-sm-flex d-md-none align-items-start justify-content-end">
                  {sponsorBlock?.logo && (
                    <SponsorBlock
                      href={sponsorBlock?.url}
                      className="d-flex flex-column flex-sm-column flex-md-row align-items-center gap-1"
                      onClick={trackAdClickHandler({
                        adId: sponsorBlock?.adId,
                        href: sponsorBlock?.url,
                      })}
                    >
                      <SponsorBlockTitle
                        // @ts-ignore
                        darkMode={darkMode}
                      >
                        {sponsorBlock?.text}
                      </SponsorBlockTitle>
                      <Logo
                        src={sponsorBlock?.logo}
                        alt={sponsorBlock?.name ?? " "}
                      />
                    </SponsorBlock>
                  )}
                </div>
              </div>
              {hasHeaderBody && (
                <HeaderBody>
                  <SubtitleRoot>
                    {subtitle && (
                      <Subtitle
                        // @ts-ignore
                        ref={subtitleRef}
                        style={{
                          fontWeight: stringToFontWeight(subtitleFontWeight),
                        }}
                        dangerouslySetInnerHTML={{ __html: subtitle }}
                      />
                    )}
                    {Array.isArray(subtitleLinks) &&
                      subtitleLinks.length > 0 && (
                        <SubtitleLinks>
                          {subtitleLinks.map((link, index) => {
                            const isLast = index === subtitleLinks.length - 1;
                            const key = link?.href ?? link?.url ?? link?.label;
                            return (
                              <>
                                <SubtitleLink
                                  key={key}
                                  href={link?.href ?? link?.url}
                                  // @ts-ignore
                                  fontWeight={link?.fontWeight}
                                  color={link?.color}
                                  onClick={() => {
                                    if (typeof link.onClick === "function") {
                                      link.onClick?.();
                                    }
                                    trackGAEvent({
                                      event: "link",
                                      action: "click",
                                      name: "onclick",
                                      type: "internal link",
                                      region: "main content",
                                      section: sectionName,
                                      text: link?.label,
                                      component: "text",
                                    });
                                  }}
                                >
                                  {link?.label}
                                </SubtitleLink>
                                {!isLast && (
                                  // https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=6146-13841&node-type=frame&t=hwMmzQHF1CbjJnXH-0
                                  <div
                                    key={[key, "divider"].join("-")}
                                    style={{
                                      width: "2px",
                                      height: "18px",
                                      backgroundColor: "#191919",
                                    }}
                                  />
                                )}
                              </>
                            );
                          })}
                        </SubtitleLinks>
                      )}

                    {Array.isArray(subtitleButtons) &&
                      subtitleButtons.length > 0 && (
                        <SubtitleButtons>
                          {subtitleButtons.map(button => (
                            <Button
                              {...button}
                              label={button.label}
                              icon={ensureArray(button.icon)}
                              color={stringToColor(button.color)}
                              size={stringToSize(button.size)}
                              target={stringToTarget(button.target)}
                              key={[button.label, button.link].join("-")}
                              cardTitle={sectionName}
                            />
                          ))}
                        </SubtitleButtons>
                      )}
                  </SubtitleRoot>

                  {tabs && tabs.length > 0 && (
                    <Tabs
                      tabs={tabs}
                      onTabItemClick={(tabId, tab) => {
                        if (typeof onTabItemClick === "function") {
                          onTabItemClick?.(tabId);
                        }

                        trackGAEvent({
                          event: "link",
                          action: "click",
                          name: "onclick",
                          type: "internal link",
                          region: "main content",
                          section: sectionName,
                          text: tab?.label?.toLowerCase() ?? "",
                          component: "text",
                        });
                      }}
                      stretch={isMobile}
                    />
                  )}
                  {social && social.length > 0 && (
                    <JoinTheConversation
                      sectionName={sectionName}
                      social={social}
                    />
                  )}
                </HeaderBody>
              )}
            </div>
            <div className="col-md-4 col-sm-0 mt-auto d-none d-sm-none d-md-flex justify-content-end">
              {sponsorBlock?.logo && (
                <SponsorBlock
                  href={sponsorBlock?.url}
                  className="d-flex flex-row align-items-center justify-content-end gap-2"
                  onClick={() => {
                    trackGAEvent({
                      event: "link",
                      action: "click",
                      name: "onclick",
                      type: "external link",
                      region: "main content",
                      section: sponsorBlock?.text ?? " ",
                      text: sponsorBlock?.name ?? " ",
                      component: "image",
                    });
                    trackAdClickHandler({
                      adId: sponsorBlock?.adId,
                      href: sponsorBlock?.url,
                    })();
                  }}
                >
                  <SponsorBlockTitle
                    // @ts-ignore
                    darkMode={darkMode}
                  >
                    {sponsorBlock?.text}
                  </SponsorBlockTitle>
                  <Logo
                    src={sponsorBlock?.logo}
                    alt={sponsorBlock?.name ?? " "}
                  />
                </SponsorBlock>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
);

/**
 * @typedef {Object} SectionHeaderProps
 * @property {string} [title]
 * @property {string} [subtitle]
 * @property {string} [subtitleFontWeight]
 * @property {Array<{ label: string, color?: string; onClick?: () => void; href?: string, fontWeight?: string; url?: string }>} [subtitleLinks]
 * @property {Array<import("../Button/button-prop").ButtonProp>} [subtitleButtons]
 * @property {Array<{ id: string, label: string, active: boolean }>} [tabs]
 * @property {Array<import("./JoinTheConversation").SocialProp>} [social]
 * @property {{name: string, logo: string, text: string, url: string, adId?: string | number}} [sponsorBlock]
 * @property {boolean} [darkMode]
 * @property {(...params: any[]) => void} [onTabItemClick]
 * @property {React.CSSProperties} [style]
 *
 */

const sponsorBlockPropTypes = PropTypes.shape({
  name: PropTypes.string,
  logo: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  adId: PropTypes.string,
});

export const sectionHeaderPropTypes = PropTypes.shape({
  title: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleFontWeight: PropTypes.string,
  subtitleLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
      fontWeight: PropTypes.string,
      url: PropTypes.string,
      color: PropTypes.string,
    })
  ),
  subtitleButtons: PropTypes.arrayOf(buttonPropTypes),
  sponsorBlock: sponsorBlockPropTypes,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      active: PropTypes.bool,
    })
  ),
  social: PropTypes.arrayOf(socialPropType),
  onTabItemClick: PropTypes.func,
  darkMode: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
});

// @ts-ignore
SectionHeader.propTypes = {
  ...sectionHeaderPropTypes,
};
