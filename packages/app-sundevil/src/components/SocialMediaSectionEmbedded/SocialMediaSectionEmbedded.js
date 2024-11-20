import PropTypes from "prop-types";
import React, { useRef } from "react";
import styled from "styled-components";

import { useTrackChildrenClicksDynamic } from "../../track-ga/track-ga-event-hooks";
import { EmbeddedCode } from "../../utils/embed-code";
import { mapSectionHeaderProps, SectionHeader } from "../SectionHeader";

const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SocialMediaSectionEmbedded = ({ sectionHeader, embedCode }) => {
  const sectionHeaderProps = mapSectionHeaderProps(sectionHeader);
  const sectionName = sectionHeaderProps.title;
  const embedCodeRef = useRef();
  useTrackChildrenClicksDynamic({
    ref: embedCodeRef,
    sectionName,
  });
  return (
    <Root>
      <SectionHeader {...sectionHeaderProps} />
      <EmbeddedCode ref={embedCodeRef} embedCode={embedCode} />
    </Root>
  );
};

SocialMediaSectionEmbedded.propTypes = {
  sectionHeader: PropTypes.shape(SectionHeader.propTypes),
  embedCode: PropTypes.string,
};
