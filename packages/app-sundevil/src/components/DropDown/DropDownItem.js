import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

/**
 *
 * @typedef {{
 * label: string;
 * onClick: () => void;
 * active?: boolean;
 * as?: string;
 * }} Props
 */

const propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  as: PropTypes.string,
};

const Root = styled.button`
  background-color: ${props => (props.active ? "#191919" : "transparent")};
  color: ${props => (props.active ? "#fafafa" : "#191919")};
  min-width: 260px;
  padding: 0.5rem 1.5rem;
  text-align: left;
  outline: none !important;
  border: none !important;
  text-decoration: none;
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
    &:focus {
      background-color: rgba(25, 25, 25, 0.1);
    }
  }
  &.active {
    background-color: #191919;
    color: #fafafa;
  }
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

/**
 *
 * @type {React.FC<Props>}
 */
export const DropDownItem = ({ active, label, onClick, as, ...props }) => {
  const className = active ? "active" : "inactive";
  return (
    <Root
      onClick={onClick}
      active={active}
      className={className}
      as={as}
      {...props}
    >
      {label}
    </Root>
  );
};
DropDownItem.propTypes = propTypes;
