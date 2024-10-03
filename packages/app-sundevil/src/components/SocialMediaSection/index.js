import PropTypes from "prop-types";
import React, { useRef } from "react";
import styled from "styled-components";

import { useElementXPosition } from "../../utils/use-element-x-position";
import { mapSectionHeaderProps, SectionHeader } from "../SectionHeader";
import { SocialMediaPostCarousel } from "./SocialMediaPostCarousel";

const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

export const SocialMediaSection = ({ sectionHeader, postCarousel }) => {
  const sectionHeaderRef = useRef();
  const sectionHeaderPosition = useElementXPosition(sectionHeaderRef);
  const shouldPreventJitter = sectionHeaderPosition.left > 0;

  const sectionHeaderProps = mapSectionHeaderProps(sectionHeader);
  const sectionName = sectionHeaderProps?.title ?? " ";

  return (
    <Root>
      <SectionHeader {...sectionHeaderProps} ref={sectionHeaderRef} />

      {shouldPreventJitter && (
        <SocialMediaPostCarousel
          {...postCarousel}
          loop
          slidesOffsetBefore={sectionHeaderPosition.left}
          initialSlide={postCarousel.posts.length}
          sectionName={sectionName}
        />
      )}
    </Root>
  );
};

SocialMediaSection.propTypes = {
  sectionHeader: PropTypes.shape(SectionHeader.propTypes),
  postCarousel: PropTypes.shape(SocialMediaPostCarousel.propTypes),
};
