import React from "react";
import styled from "styled-components";

import { UniversalNavbarSearch } from "../../../../component-header/src/components/UniversalNavbar/Search";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.8rem;
  background-color: #e8e7e8;
  width: 100%;
`;

const IconSearchEnd = styled.i`
  width: 12px;
  height: 12px;
  padding-right: 16px;
  display: ${({ show }) => (show ? "block" : "none")};
  position: absolute !important;
  top: 50% !important;
  left: calc(100% - 1rem - 6px) !important;
  transform: translate(0, -50%) !important;
`;

export const MobileSearchBar = () => {
  return (
    <Root>
      <UniversalNavbarSearch
        disableDataLayers
        disablePadding
        placeholder="Search Sun Devil Athletics"
        renderIconEnd={({ inputValue }) => (
          <span key={inputValue}>
            <IconSearchEnd
              key={inputValue}
              show={inputValue.length === 0}
              className="fa fas fa-arrow-right"
            />
          </span>
        )}
      />
    </Root>
  );
};
