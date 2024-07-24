// @ts-check
import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../config";
import { stringToFontWeight } from "../../utils/font-weight";
import { useBreakpoint } from "../../utils/use-breakpoint";
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
`;

const SubtitleRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SubtitleLink = styled.a`
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

const SectionHeader = forwardRef(
  // @ts-ignore
  (
    {
      // @ts-ignore
      title,
      // @ts-ignore
      subtitle,
      // @ts-ignore
      tabs,
      // @ts-ignore
      sponsorBlock,
      // @ts-ignore
      social,
      // @ts-ignore
      onTabItemClick,
      // @ts-ignore
      darkMode = false,
      //  @ts-ignore
      subtitleFontWeight = "normal",
      //  @ts-ignore
      subtitleLinks = [],
      // @ts-ignore
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
      Boolean(Array.isArray(subtitleLinks) && subtitleLinks.length > 0);

    const hasTabs = Boolean(tabs && tabs.length > 0);

    const hasSocial = Boolean(social && social.length > 0);

    const hasHeaderBody = hasSubtitle || hasTabs || hasSocial;

    return (
      <div className="container" ref={ref} style={style}>
        {hasContent && (
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <div className="d-flex flex-row align-items-end justify-content-between gap-2 pt-2">
                <h2 className={`m-0 ${darkMode ? "text-white" : "text-black"}`}>
                  {title}
                </h2>
                <div className="mt-auto d-flex d-sm-flex d-md-none justify-content-end">
                  <SponsorBlock
                    href={sponsorBlock?.url}
                    className="d-flex flex-column flex-sm-column flex-md-row align-items-center gap-1"
                  >
                    <h5
                      className={`m-0 ${
                        darkMode ? "text-white" : "text-black"
                      }`}
                    >
                      {sponsorBlock?.text}
                    </h5>
                    <Logo src={sponsorBlock?.logo} alt={sponsorBlock?.name} />
                  </SponsorBlock>
                </div>
              </div>
              {hasHeaderBody && (
                <HeaderBody>
                  <SubtitleRoot>
                    {subtitle && (
                      <Subtitle
                        style={{
                          fontWeight: stringToFontWeight(subtitleFontWeight),
                        }}
                        dangerouslySetInnerHTML={{ __html: subtitle }}
                      />
                    )}
                    {Array.isArray(subtitleLinks) &&
                      subtitleLinks.length > 0 && (
                        <>
                          {subtitleLinks.map(link => (
                            <SubtitleLink
                              key={link?.href ?? link?.url ?? link?.label}
                              href={link?.href ?? link?.url}
                              // @ts-ignore
                              fontWeight={link?.fontWeight}
                              color={link?.color}
                            >
                              {link?.label}
                            </SubtitleLink>
                          ))}
                        </>
                      )}
                  </SubtitleRoot>

                  {tabs && tabs.length > 0 && (
                    <Tabs
                      tabs={tabs}
                      onTabItemClick={onTabItemClick}
                      stretch={isMobile}
                    />
                  )}
                  {social && social.length > 0 && (
                    <JoinTheConversation social={social} />
                  )}
                </HeaderBody>
              )}
            </div>
            <div className="col-md-4 col-sm-0 mt-auto d-none d-sm-none d-md-flex justify-content-end">
              <SponsorBlock
                href={sponsorBlock?.url}
                className="d-flex flex-row align-items-center justify-content-end gap-2"
              >
                <h5 className={`m-0 ${darkMode ? "text-white" : "text-black"}`}>
                  {sponsorBlock?.text}
                </h5>
                <Logo src={sponsorBlock?.logo} alt={sponsorBlock?.name} />
              </SponsorBlock>
            </div>
          </div>
        )}
      </div>
    );
  }
);

const sponsorBlockPropTypes = PropTypes.shape({
  name: PropTypes.string,
  logo: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
});

SectionHeader.propTypes = {
  // @ts-ignore
  title: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleFontWeight: PropTypes.string,
  subtitleLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
      fontWeight: PropTypes.string,
    })
  ),
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
};

export { SectionHeader };
//
