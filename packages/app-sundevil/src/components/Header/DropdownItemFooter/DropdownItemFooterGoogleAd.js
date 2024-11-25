/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import styled from "styled-components";

import { GoogleAd } from "../../../google-ads/GoogleAd";
import { useHideAdProps } from "../../../google-ads/use-should-hide-ad";

const Root = styled.div`
  display: flex;
  width: 100%;
  background-color: #191919;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  min-width: 100%;
  padding: 1.5rem 24px;
`;

export const DropdownItemFooterGoogleAd = ({ googleAdHead, googleAdBody }) => {
  /**
   * @type {React.RefObject<HTMLDivElement>}
   */
  const ref = useRef();
  const hideAdProps = useHideAdProps({
    ref,
  });
  return (
    <Root ref={ref} style={hideAdProps.style}>
      <GoogleAd googleAdBody={googleAdBody} googleAdHead={googleAdHead} />
    </Root>
  );
};
