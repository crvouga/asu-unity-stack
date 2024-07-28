import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../config";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { buttonPropTypes } from "../Button/button-prop";
import { linkPropTypes } from "../Link/link-prop";
import { ContactUsCTACard } from "./contact-us-cta-card";
import { ContactUsCTAFooter } from "./ContactUsCTAFooter";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  gap: 28px;
`;

/**
 * https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4946-9137&t=npLkRT1OeHXVfTDe-0
 * @type {React.FC<Props>}
 */
export const ContactUsCTA = ({
  title,
  body,
  buttons,
  footerLinksLabel,
  footerLinks,
  imageAlt,
  imageSrc,
  hideFooterMobile = true,
}) => {
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const hideFooter = Boolean(isMobile && hideFooterMobile);
  return (
    <Root>
      <ContactUsCTACard
        body={body}
        buttons={buttons}
        imageAlt={imageAlt}
        imageSrc={imageSrc}
        title={title}
      />
      {!hideFooter && (
        <ContactUsCTAFooter
          footerLinks={footerLinks}
          footerLinksLabel={footerLinksLabel}
        />
      )}
    </Root>
  );
};

/**
 * @typedef {{
 *  imageSrc: string;
 *  imageAlt: string;
 *  title: string;
 *  body: string;
 *  buttons: import("../Button/button-prop").ButtonProp[];
 *  footerLinks: import("../Link/link-prop").LinkProp[];
 *  footerLinksLabel: string;
 * }} Props
 */

ContactUsCTA.propTypes = {
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  buttons: PropTypes.arrayOf(buttonPropTypes),
  footerLinksLabel: PropTypes.string,
  footerLinks: PropTypes.arrayOf(linkPropTypes),
  hideFooterMobile: PropTypes.bool,
};
