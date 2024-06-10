import React from "react";
import styled from "styled-components";

import { Avatar } from "./Avatar";
import * as SocialMediaPost from "./social-media-post";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 282px;
  height: 534px;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BackdropRoot = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  padding: 16px;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.7),
    transparent
  ); /* Apply linear gradient */
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
`;

const ContentRoot = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 10px;
`;

const ContentTextRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  color: #fafafa;
`;

const Username = styled.p`
  font-size: 1rem;
  margin: 0;
  font-weight: bold;
  font-size: 12px;
  line-height: 14.4px;
`;

const Caption = styled.p`
  font-size: 12px;
  line-height: 16.8px;
  margin: 0;
`;

/** @typedef {React.FC<{socialMediaPost: SocialMediaPost.SocialMediaPost }>} */
export const SocialMediaPostCardTall = ({ socialMediaPost }) => {
  return (
    <Root>
      <Image src={socialMediaPost.imageSrc} alt="Post Image" />
      <BackdropRoot>
        <ContentRoot>
          <Avatar src={socialMediaPost.avatarSrc} alt="Avatar" />
          <ContentTextRoot>
            <Username>{socialMediaPost.username}</Username>
            {socialMediaPost.caption && (
              <Caption>{socialMediaPost.caption}</Caption>
            )}
          </ContentTextRoot>
        </ContentRoot>
      </BackdropRoot>
    </Root>
  );
};

SocialMediaPostCardTall.propTypes = {
  socialMediaPost: SocialMediaPost.socialMediaPostSchema.isRequired,
};
