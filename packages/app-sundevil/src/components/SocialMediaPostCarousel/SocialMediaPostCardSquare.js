import React from "react";
import styled from "styled-components";

import * as SocialMediaPost from "./social-media-post";

const Root = styled.a`
  display: flex;
  flex-direction: column;
  width: 282px;
  height: 282px;
  position: relative;
  @media (max-width: 768px) {
    width: 158px;
    height: 158px;
  }
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
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8),
    transparent
  ); /* Apply linear gradient */
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
`;

const ContentTextRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  gap: 10px;
  color: #fafafa;
  padding: 24px;
`;

const Username = styled.p`
  font-size: 1rem;
  margin: 0;
  font-weight: bold;
  font-size: 12px;
  line-height: 14.4px;
`;

/** @typedef {React.FC<{socialMediaPost: SocialMediaPost.SocialMediaPost }>} */
export const SocialMediaPostCardSquare = ({ socialMediaPost }) => {
  return (
    <Root href={socialMediaPost.href}>
      <Image src={socialMediaPost.imageSrc} alt="Post Image" />
      <BackdropRoot>
        <ContentTextRoot>
          <Username>{socialMediaPost.username}</Username>
        </ContentTextRoot>
      </BackdropRoot>
    </Root>
  );
};

SocialMediaPostCardSquare.propTypes = {
  socialMediaPost: SocialMediaPost.socialMediaPostSchema.isRequired,
};
