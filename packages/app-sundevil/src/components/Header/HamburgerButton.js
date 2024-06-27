import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { IconHamburgerSearch } from "./IconHamburgerSearch";

const Root = styled.button`
  border-radius: 100%;
  overflow: hidden;
  display: ${({ hidden }) => (hidden ? "none" : "flex")}
  align-items: center;
  justify-content: center;
  background-color: ${({ open }) => (open ? "#e8e7e8" : "transparent")};
  width: 42px;
  height: 42px;
  border: ${({ open }) => (open ? "1px solid #d0cfd0" : "none")};
`;

const IconClose = styled.i`
  width: 20px;
  height: 20px;
  color: #4d4d4d;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const IconHamburger = styled(IconHamburgerSearch)`
  width: 24px;
  height: 24px;
  color: #4d4d4d;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

/**
 * @type {React.FC<{open: boolean, onClick: () => void, hidden: boolean}>}
 */
export const HamburgerButton = ({ open, onClick, hidden }) => {
  // eslint-disable-next-line no-nested-ternary
  const key = hidden ? "hidden" : open ? "open" : "close";
  return (
    <Root key={key} onClick={onClick} open={open} hidden={hidden}>
      {open ? (
        <IconClose key="open" className="fa fas fa-close" />
      ) : (
        <IconHamburger key="close" width="24px" height="24px" />
      )}
    </Root>
  );
};
HamburgerButton.propTypes = {
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  hidden: PropTypes.bool,
};
