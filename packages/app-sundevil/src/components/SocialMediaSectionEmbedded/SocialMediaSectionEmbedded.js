import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { EmbeddedCode } from "../../utils/embed-code";
import { SectionHeader } from "../SectionHeader";

const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SocialMediaSectionEmbedded = ({ sectionHeader, embedCode }) => {
  return (
    <Root>
      <SectionHeader {...sectionHeader} />
      <EmbeddedCode embedCode={embedCode} />
    </Root>
  );
};

SocialMediaSectionEmbedded.propTypes = {
  sectionHeader: PropTypes.shape(SectionHeader.propTypes),
  embedCode: PropTypes.string,
};
