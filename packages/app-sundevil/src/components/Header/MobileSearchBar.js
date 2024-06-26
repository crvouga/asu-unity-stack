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
  padding-right: 1rem;
`;

export const MobileSearchBar = () => {
  return (
    <Root>
      <UniversalNavbarSearch
        disablePadding
        renderIconEnd={({ inputValue = "" } = {}) =>
          inputValue.length === 0 && (
            <IconSearchEnd className="fa fas fa-arrow-right" />
          )
        }
      />
    </Root>
  );
};
