import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Skeleton } from "../Skeleton";

const Root = styled.button`
  display: flex:
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 50%;
  border: 1.5px solid #000;
  width: 48px;
  height: 48px;
  background-color: transparent;
`;

export const IconButton = ({ children, onClick, label, skeleton }) => {
  return (
    <Skeleton fitContent skeleton={skeleton}>
      <Root type="button" onClick={onClick} aria-label={label}>
        {children}
      </Root>
    </Skeleton>
  );
};

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  skeleton: PropTypes.bool,
};
