import styled from "styled-components";

export const DropDownSurface = styled.div`
  border-radius: 8px;
  background-color: #fff !important;
  opacity: 1 !important;
  padding: 0.5rem 0;
  position: relative;
  z-index: 99999 !important;
  color: #000; /* Ensure text color is not transparent */
  border: 1px solid #000; /* Ensure border color is not transparent */
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
