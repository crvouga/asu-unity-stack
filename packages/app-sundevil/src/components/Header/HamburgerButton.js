import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { IconHamburgerSearch } from "./IconHamburgerSearch";

const Root = styled.button`
  border-radius: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ open }) => (open ? "#e8e7e8" : "transparent")};
  width: 42px;
  height: 42px;
  border: ${({ open }) => (open ? "1px solid #d0cfd0" : "none")};
`;

const IconClose = styled.i`
  width: 24px;
  height: 24px;
  color: #4d4d4d;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconHamburger = styled(IconHamburgerSearch)`
  width: 24px;
  height: 24px;
  color: #4d4d4d;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/**
 * @type {React.FC<{open: boolean, onClick: () => void}>}
 */
export const HamburgerButton = ({ open, onClick }) => {
  return (
    <Root onClick={onClick} open={open}>
      {open ? (
        <IconClose className="fa fas fa-close" />
      ) : (
        <IconHamburger width="24px" height="24px" />
      )}
    </Root>
  );
};
HamburgerButton.propTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
