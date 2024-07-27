import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { linkPropTypes } from "../Link/link-prop";

const Root = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 32px;
  width: 100%;
`;

const Label = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: #191919;
`;

const Link = styled.a`
  margin: 0;
  padding: 0;
  color: #747474;
  font-size: 14px;
`;

/**
 * https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4946-9137&t=npLkRT1OeHXVfTDe-0
 * @type {React.FC<Props>}
 */
export const ContactUsCTAFooter = ({ footerLinksLabel, footerLinks }) => {
  const hasFooterLabel =
    typeof footerLinksLabel === "string" && footerLinksLabel.trim().length > 0;
  const hasFooterLinks = Array.isArray(footerLinks) && footerLinks.length > 0;
  const hasFooter = hasFooterLabel || hasFooterLinks;

  if (!hasFooter) {
    return null;
  }
  return (
    <Root>
      {hasFooterLabel && <Label>{footerLinksLabel}</Label>}

      {footerLinks.map(link => (
        <Link key={link?.label} href={link?.href}>
          {link?.label}
        </Link>
      ))}
    </Root>
  );
};

/**
 * @typedef {{
 *  footerLinks: import("../Link/link-prop").LinkProp[];
 *  footerLinksLabel: string;
 * }} Props
 */

ContactUsCTAFooter.propTypes = {
  footerLinksLabel: PropTypes.string,
  footerLinks: PropTypes.arrayOf(linkPropTypes),
};
