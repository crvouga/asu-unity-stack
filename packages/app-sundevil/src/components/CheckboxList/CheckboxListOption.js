import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Checkbox } from "../Checkbox/Checkbox";

/**
 *
 * @typedef {{
 * label: string;
 * onClick: () => void;
 * active?: boolean;
 * renderStart?: () => React.ReactNode;
 * }} Props
 */

const propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  renderStart: PropTypes.func,
};

const Root = styled.button`
  background-color: transparent;
  color: #191919;
  min-width: 260px;
  padding: 1rem 0;
  gap: 1rem;
  text-align: left;
  outline: none !important;
  border: none;
  &:focus {
    outline: none !important;
    box-shadow: none !important;
    border: none;
    border-bottom: 1px solid #d0d0d0;
  }
  &:active {
    outline: none !important;
    box-shadow: none !important;
    border: none;
    border-bottom: 1px solid #d0d0d0;
  }
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #d0d0d0;
`;

/**
 *
 * @type {React.FC<Props>}
 */
export const CheckboxListOption = ({ active, label, onClick, renderStart }) => {
  const className = active ? "active" : "inactive";
  return (
    <Root onClick={onClick} active={active} className={className}>
      <Checkbox active={active} />
      {renderStart?.({ style: {} })}
      {label}
    </Root>
  );
};
CheckboxListOption.propTypes = propTypes;
