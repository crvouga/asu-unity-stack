import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

/**
 *
 * @typedef {{
 * label: string;
 * onClick: () => void;
 * active?: boolean;
 * }} Props
 */

const propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

const Root = styled.button`
  background-color: ${props => (props.active ? "#191919" : "transparent")};
  color: ${props => (props.active ? "#fafafa" : "#191919")};
  min-width: 260px;
  padding: 0.5rem 1rem;
  text-align: left;
  outline: none !important;
  border: none !important;
  &:focus {
    outline: none !important;
    box-shadow: none !important;
    border: none !important;
  }
  &:active {
    outline: none !important;
    box-shadow: none !important;
    border: none !important;
  }
  &.inactive {
    background-color: transparent;
    color: #191919;
    &:hover {
      background-color: rgba(25, 25, 25, 0.1);
    }
  }
  &.active {
    background-color: #191919;
    color: #fafafa;
  }
`;

/**
 *
 * @type {React.FC<Props>}
 */
export const SportsTabDropDownItem = ({ active, label, onClick }) => {
  const className = active ? "active" : "inactive";
  return (
    <Root onClick={onClick} active={active} className={className}>
      {label}
    </Root>
  );
};
SportsTabDropDownItem.propTypes = propTypes;
