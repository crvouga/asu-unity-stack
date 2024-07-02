import PropTypes from "prop-types";
import React, { useRef } from "react";
import styled from "styled-components";

import { RenderReact } from "../../utils/react-render";
import { useElementPosition } from "../../utils/use-element-position";
import { SectionHeader } from "../SectionHeader";
import { SocialMediaPostCarousel } from "./SocialMediaPostCarousel";

const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const SocialMediaSection = ({ sectionHeader, postCarousel }) => {
  const sectionHeaderRef = useRef();
  const sectionHeaderPosition = useElementPosition(sectionHeaderRef);
  const shouldPreventJitter = sectionHeaderPosition.left > 0;

  return (
    <Root>
      <SectionHeader {...sectionHeader} ref={sectionHeaderRef} />

      {shouldPreventJitter && (
        <SocialMediaPostCarousel
          {...postCarousel}
          loop
          slidesOffsetBefore={sectionHeaderPosition.left}
          initialSlide={postCarousel.posts.length}
        />
      )}
    </Root>
  );
};

SocialMediaSection.propTypes = {
  sectionHeader: PropTypes.shape(SectionHeader.propTypes),
  postCarousel: PropTypes.shape(SocialMediaPostCarousel.propTypes),
};

export const initSocialMediaSection = ({ targetSelector, props }) => {
  RenderReact(
    SocialMediaSection,
    props,
    document.querySelector(targetSelector)
  );
};
