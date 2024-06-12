import React, { useRef } from "react";
import styled from "styled-components";

import { RenderReact } from "../../utils/react-render";
import { useElementPosition } from "../../utils/use-element-position";
import { SectionHeader } from "../SectionHeader";
import { SocialMediaPostCarousel } from "../SocialMediaPostCarousel";

const propTypes = {
  // eslint-disable-next-line react/forbid-foreign-prop-types
  sectionHeader: SectionHeader.propTypes,
  // eslint-disable-next-line react/forbid-foreign-prop-types
  postCarousel: SocialMediaPostCarousel.propTypes,
};

const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const SocialMediaSection = ({ sectionHeader, postCarousel }) => {
  const sectionHeaderRef = useRef();
  const sectionHeaderPosition = useElementPosition(sectionHeaderRef);
  return (
    <Root>
      <SectionHeader {...sectionHeader} ref={sectionHeaderRef} />

      <SocialMediaPostCarousel
        {...postCarousel}
        loop
        slidesOffsetBefore={sectionHeaderPosition.left}
        initialSlide={postCarousel.posts.length}
      />
    </Root>
  );
};

SocialMediaSection.propTypes = propTypes;

export const initSocialMediaSection = ({ targetSelector, props }) => {
  RenderReact(
    SocialMediaSection,
    props,
    document.querySelector(targetSelector)
  );
};
