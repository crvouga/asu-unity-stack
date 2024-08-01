import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Icon, iconPropType } from "../Icon_";
import { SocialMediaIcon } from "./SocialMediaIcon";
import { SocialMediaIconButton } from "./SocialMediaIconButton";

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

const SocialMediaIconsRoot = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 16px;
`;

/**
 * @typedef {{
 * label: string,
 * url: string,
 * faClassName: string,
 * icon: import("../Icon_").Icon
 * }} SocialProp
 */

export const socialPropType = PropTypes.shape({
  label: PropTypes.string,
  url: PropTypes.string.isRequired,
  faClassName: PropTypes.string,
  icon: iconPropType,
});

const SocialIcon = ({ social, className }) => {
  if (social?.icon) {
    return <Icon className={className} icon={social.icon} />;
  }

  return (
    <SocialMediaIcon
      className={className}
      name={social.label.trim().toLowerCase()}
    />
  );
};
SocialIcon.propTypes = {
  social: socialPropType,
  className: PropTypes.string,
};

const StyledSocialIcon = styled(SocialIcon)`
  width: 22px;
  height: 22px;
  font-size: 22px;
  color: #fff !important;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const JoinTheConversation = ({ social }) => {
  return (
    <Root id="social-media">
      <Title>Join the conversation:</Title>
      <SocialMediaIconsRoot>
        {social.map((socialItem, index) => (
          <SocialMediaIconButton
            key={socialItem.label ?? social.faClassName ?? index}
            href={socialItem.url}
          >
            <StyledSocialIcon social={socialItem} />
          </SocialMediaIconButton>
        ))}
      </SocialMediaIconsRoot>
    </Root>
  );
};
JoinTheConversation.propTypes = {
  social: PropTypes.arrayOf(socialPropType),
};
