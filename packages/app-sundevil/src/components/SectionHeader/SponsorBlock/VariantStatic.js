/* eslint-disable react/prop-types */
// @ts-check
import React from "react";
import styled from "styled-components";

const Root = styled.img`
  max-height: 40px;
`;

/**
 * @type {React.FC<import("../props").SectionHeaderProps >}
 */
export const VariantStatic = ({ sponsorBlock }) => {
  return <Root src={sponsorBlock?.logo} alt={sponsorBlock?.name ?? " "} />;
};
