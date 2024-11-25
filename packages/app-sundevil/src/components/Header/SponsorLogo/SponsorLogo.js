/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { GoogleAd } from "../../../google-ads/GoogleAd";

const Root = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
`;

/**
 * @type {React.FC<import("./props").SponsorLogoProps>}
 */
export const SponsorLogo = props => {
  const { googleAdBody, googleAdHead } = props;
  /**
   * @type {React.RefObject<HTMLDivElement | undefined>}
   */
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      const parent = ref.current.parentElement;
      const parentHeight = parent.clientHeight;
      ref.current.style.height = `${parentHeight}px`;
    }
  }, []);
  return (
    <Root ref={ref}>
      <GoogleAd googleAdBody={googleAdBody} googleAdHead={googleAdHead} />
    </Root>
  );
};
