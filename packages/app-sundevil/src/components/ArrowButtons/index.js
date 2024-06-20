import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { IconArrowLeft } from "./IconArrowLeft";
import { IconArrowRight } from "./IconArrowRight";
import { IconButton } from "./IconButton";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ArrowButtons = ({ onLeft, onRight }) => {
  return (
    <Root>
      <IconButton onClick={onLeft} label="Go to previous">
        <IconArrowLeft />
      </IconButton>
      <IconButton onClick={onRight} label="Go to next">
        <IconArrowRight />
      </IconButton>
    </Root>
  );
};
ArrowButtons.propTypes = {
  onLeft: PropTypes.func.isRequired,
  onRight: PropTypes.func.isRequired,
};
