import styled from "styled-components";

const GRAY = "#747474";
const GRAY_HOVER = "#191919";
// const MAROON = "#8c1d40";

export const LinkBase = styled.a`
  color: ${GRAY} !important;
  &:hover {
    color: ${GRAY_HOVER} !important;
  }
`;
