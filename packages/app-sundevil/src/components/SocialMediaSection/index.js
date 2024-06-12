import React, { useRef } from "react";
import styled from "styled-components";

import { useElementPosition } from "../../utils/use-element-position";
import { SectionHeader } from "../SectionHeader";
import { SocialMediaPostCarousel } from "../SocialMediaPostCarousel";

const propTypes = {
  // eslint-disable-next-line react/forbid-foreign-prop-types
  sectionHeader: SectionHeader.propTypes,
  // eslint-disable-next-line react/forbid-foreign-prop-types
  socialMediaPostCarousel: SocialMediaPostCarousel.propTypes,
};

const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const SocialMediaSection = ({
  sectionHeader,
  socialMediaPostCarousel,
}) => {
  const sectionHeaderRef = useRef();
  const sectionHeaderPosition = useElementPosition(sectionHeaderRef);
  return (
    <Root>
      <SectionHeader {...sectionHeader} ref={sectionHeaderRef} />

      <SocialMediaPostCarousel
        {...socialMediaPostCarousel}
        loop
        slidesOffsetBefore={sectionHeaderPosition.left}
        initialSlide={socialMediaPostCarousel.posts.length}
      />
    </Root>
  );
};

SocialMediaSection.propTypes = propTypes;
