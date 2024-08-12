import React, { useState } from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../../config";
import { useBreakpoint } from "../../../utils/use-breakpoint";
import { Skeleton } from "../../Skeleton";
import { Avatar } from "./Avatar";
import * as SocialMediaPost from "./social-media-post";

const Root = styled.a`
  display: flex;
  flex-direction: column;
  width: 282px;
  height: 534px;
  position: relative;
  @media (max-width: 768px) {
    width: 158px;
    height: 300px;
    font-size: 43.97%;
  }
`;

const ImageSkeletonWrapper = styled(Skeleton)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
`;

const BackdropRoot = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  max-width: 100%;
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
  with: 100%;
  max-width: 100%;
  @media (max-width: ${APP_CONFIG.breakpointMobile}) {
    gap: 5px;
  }
`;

const Username = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 12px;
  @media (max-width: ${APP_CONFIG.breakpointMobile}) {
    font-size: 6px;
  }
`;

const Caption = styled.p`
  margin: 0;
  font-size: 12px;
  @media (max-width: ${APP_CONFIG.breakpointMobile}) {
    font-size: 6px;
  }
`;

/** @typedef {React.FC<{socialMediaPost: SocialMediaPost.SocialMediaPost }>} */
export const SocialMediaPostCardTall = ({ socialMediaPost }) => {
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const avatarSize = isMobile ? "sm" : "lg";
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <Root href={socialMediaPost.href}>
      <ImageSkeletonWrapper skeleton={!isImageLoaded}>
        <Image
          src={socialMediaPost.imageSrc}
          alt=" "
          onLoad={() => setIsImageLoaded(true)}
        />
      </ImageSkeletonWrapper>
      <BackdropRoot>
        <ContentRoot>
          <Avatar
            src={socialMediaPost.avatarSrc}
            alt="Avatar"
            size={avatarSize}
          />
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
  socialMediaPost: SocialMediaPost.socialMediaPostPropTypes.isRequired,
};
