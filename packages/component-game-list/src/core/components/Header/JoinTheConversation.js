import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { SocialMediaIcon } from "./SocialMediaIcon";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  gap: 8px;
  max-width: 520px;
`;

const Title = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
`;

const SocialMediaIconButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  max-width: 48px;
  max-height: 48px;
  flex-shrink: 0;
  flex-grow: 0;
  border-radius: 50%;
  background-color: #191919;
  color: #fff;
  text-decoration: none;
`;

const SocialMediaIconsRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`;

export const socialPropType = PropTypes.shape({
  label: PropTypes.string,
  url: PropTypes.string.isRequired,
  faClassName: PropTypes.string,
});

const iconStyle = {
  width: "22px",
  height: "22px",
  fontSize: "22px",
};

const SocialIcon = ({ social }) => {
  if (typeof social.faClassName === "string") {
    return <i className={social.faClassName} style={iconStyle} />;
  }
  return (
    <SocialMediaIcon
      name={social.label.trim().toLowerCase()}
      style={iconStyle}
    />
  );
};

SocialIcon.propTypes = {
  social: socialPropType,
};

export const JoinTheConversation = ({ social }) => {
  return (
    <Root id="social-media">
      <Title>Join the Conversation:</Title>
      <SocialMediaIconsRoot>
        {social.map((socialItem, index) => (
          <SocialMediaIconButton
            key={socialItem.label ?? social.faClassName ?? index}
            href={socialItem.url}
          >
            <SocialIcon social={socialItem} />
          </SocialMediaIconButton>
        ))}
      </SocialMediaIconsRoot>
    </Root>
  );
};
JoinTheConversation.propTypes = {
  social: PropTypes.arrayOf(socialPropType),
};
