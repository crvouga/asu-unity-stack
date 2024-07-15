import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid #d0d0d0;
  background-color: ${({ active }) => (active ? "#000" : "#fff")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
`;

const IconCheckMark = styled.i`
  color: inherit;
`;

export const Checkbox = ({ active }) => {
  return (
    <Root active={active}>
      {active && <IconCheckMark className="fa fas fa-solid fa-check" />}
    </Root>
  );
};
Checkbox.propTypes = {
  active: PropTypes.bool,
};
