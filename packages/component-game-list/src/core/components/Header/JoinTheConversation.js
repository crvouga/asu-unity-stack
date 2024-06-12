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

export const JoinTheConversation = ({ social }) => {
  return (
    <Root id="social-media">
      <Title>Join the Conversation:</Title>
      <SocialMediaIconsRoot>
        {social.map(socialItem => (
          <SocialMediaIconButton key={socialItem.label} href={socialItem.url}>
            <SocialMediaIcon name={socialItem.label.trim().toLowerCase()} />
          </SocialMediaIconButton>
        ))}
      </SocialMediaIconsRoot>
    </Root>
  );
};
JoinTheConversation.propTypes = {
  social: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};
