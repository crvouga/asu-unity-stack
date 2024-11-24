/* eslint-disable react/prop-types */
import React, { forwardRef } from "react";
import styled from "styled-components";

const Root = styled.img`
  max-height: 100%;
  object-fit: cover;
`;

/**
 * @type {React.FC<import("./props").SponsorProps>}
 */
export const VariantStatic = forwardRef((props, ref) => {
  const { sponsorLogoSrc, sponsorLogoAlt } = props;
  return (
    typeof sponsorLogoSrc === "string" &&
    sponsorLogoSrc.trim().length > 0 && (
      <Root ref={ref} src={sponsorLogoSrc} alt={sponsorLogoAlt ?? " "} />
    )
  );
});
