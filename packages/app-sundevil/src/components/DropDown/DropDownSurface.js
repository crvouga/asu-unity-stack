import styled from "styled-components";

export const DropDownSurface = styled.div`
  border-radius: 0px;
  background-color: #fff !important;
  opacity: 1 !important;
  padding: 1.5rem 0;
  position: relative;
  z-index: 100 !important;
  color: #000; /* Ensure text color is not transparent */
  border: 1px solid #d0d0d0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
