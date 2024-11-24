/* eslint-disable react/prop-types */
// @ts-check
import React, { forwardRef } from "react";
import styled from "styled-components";

const Root = styled.img`
  max-height: 40px;
`;

/**
 * @type {React.FC<import("../props").SectionHeaderProps >}
 */
export const VariantStatic = forwardRef(({ sponsorBlock }, ref) => {
  return (
    <Root src={sponsorBlock?.logo} alt={sponsorBlock?.name ?? " "} ref={ref} />
  );
});
