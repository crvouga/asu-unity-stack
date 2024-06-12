import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

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

export const IconButton = ({ children, onClick, label }) => {
  return (
    <Root type="button" onClick={onClick} aria-label={label}>
      {children}
    </Root>
  );
};

IconButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
