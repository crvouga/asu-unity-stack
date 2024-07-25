// @ts-check
// @ts-ignore
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Button } from "../../../../components-core/src/components/Button";

const FooterBlock = styled.footer`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const FooterLink = styled.a`
  color: #8c1d40;
`;

export const SectionFooter = ({ footerButtons, footerLinks }) => {
  return (
    <>
      {footerButtons && footerButtons?.length > 0 && (
        <FooterBlock style={{ gap: "8px", paddingTop: "32px" }}>
          {footerButtons.map(button => (
            <Button
              classes={[button?.class, button?.className]}
              key={button.label}
              color={button.color}
              label={button.label}
              size={button.size}
              href={button.href ?? button.link}
              target={button.target}
            />
          ))}
        </FooterBlock>
      )}

      {footerLinks && footerLinks?.length > 0 && (
        <FooterBlock style={{ gap: "8px", paddingTop: "24px" }}>
          {footerLinks.map(link => (
            <FooterLink
              key={link.label}
              href={link.href}
              className={link?.class ?? link?.className}
            >
              {link.label}
            </FooterLink>
          ))}
        </FooterBlock>
      )}
    </>
  );
};

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

export const footerLinkPropTypes = PropTypes.shape({
  label: PropTypes.string,
  href: PropTypes.string,
  class: PropTypes.string,
  className: PropTypes.string,
});

SectionFooter.propTypes = {
  footerButtons: PropTypes.arrayOf(footerButtonPropTypes),
  footerLinks: PropTypes.arrayOf(footerLinkPropTypes),
};
