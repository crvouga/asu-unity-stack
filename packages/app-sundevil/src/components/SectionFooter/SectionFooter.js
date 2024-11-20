// @ts-check
// @ts-ignore
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Button } from "../../../../components-core/src/components/Button";
import { trackGAEvent } from "../../track-ga/track-ga-event";
import { Icon } from "../Icon_";

const FooterBlock = styled.footer`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
`;

const FooterLink = styled.a`
  color: #8c1d40;
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: ${({
    // @ts-ignore
    disablePadding,
  }) => (disablePadding ? "" : "16px")};
`;

export const SectionFooter = ({
  disablePadding = false,
  footerButtons,
  footerLinks,
  style,
  sectionName,
}) => {
  const hasFooterButtons =
    Array.isArray(footerButtons) && footerButtons.length > 0;
  const hasFooterLinks = Array.isArray(footerLinks) && footerLinks.length > 0;
  const hasContent = hasFooterButtons || hasFooterLinks;
  if (!hasContent) {
    return null;
  }
  return (
    <Root
      // @ts-ignore
      disablePadding={disablePadding}
      style={style}
    >
      {footerButtons && footerButtons?.length > 0 && (
        <FooterBlock>
          {footerButtons.map(button => (
            <Button
              classes={[button?.class, button?.className]}
              key={button.label}
              color={button.color}
              label={button.label}
              size={button.size}
              href={button.href ?? button.link}
              target={button.target}
              cardTitle={sectionName}
              renderIcon={() =>
                button.icon ? (
                  <Icon style={{ marginRight: "0.5rem" }} icon={button.icon} />
                ) : null
              }
              renderEndIcon={() =>
                button.endIcon ? (
                  <Icon
                    style={{ marginLeft: "0.5rem" }}
                    icon={button.endIcon}
                  />
                ) : null
              }
            />
          ))}
        </FooterBlock>
      )}

      {footerLinks && footerLinks?.length > 0 && (
        <FooterBlock>
          {footerLinks.map(link => (
            <FooterLink
              key={link.label}
              href={link.href}
              className={link?.class ?? link?.className}
              onClick={() => {
                trackGAEvent({
                  event: "link",
                  action: "click",
                  name: "onclick",
                  type: "internal link",
                  region: "main content",
                  section: sectionName ?? " ",
                  text: link.label ?? " ",
                  component: "link",
                });
              }}
            >
              {link.label}
            </FooterLink>
          ))}
        </FooterBlock>
      )}
    </Root>
  );
};

/**
 * @typedef {Object} FooterButton
 * @property {string | null | undefined} [color]
 * @property {string | null | undefined} [label]
 * @property {string | null | undefined} [size]
 * @property {string | null | undefined} [href]
 * @property {string | null | undefined} [icon]
 * @property {string | null | undefined} [target]
 * @property {string | null | undefined} [class]
 * @property {string | null | undefined} [className]
 * @property {string | null | undefined} [link]
 *
 */

export const footerButtonPropTypes = PropTypes.shape({
  color: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  target: PropTypes.string,
  class: PropTypes.string,
  className: PropTypes.string,
});

/**
 * @typedef {Object} FooterLink
 * @property {string | null | undefined} [label]
 * @property {string | null | undefined} [href]
 * @property {string | null | undefined} [link]
 * @property {string | null | undefined} [class]
 * @property {string | null | undefined} [className]
 * @property {boolean | null | undefined} [disablePadding]
 */

export const footerLinkPropTypes = PropTypes.shape({
  label: PropTypes.string,
  href: PropTypes.string,
  class: PropTypes.string,
  className: PropTypes.string,
});

SectionFooter.propTypes = {
  disablePadding: PropTypes.bool,
  footerButtons: PropTypes.arrayOf(footerButtonPropTypes),
  footerLinks: PropTypes.arrayOf(footerLinkPropTypes),
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  sectionName: PropTypes.string,
};
