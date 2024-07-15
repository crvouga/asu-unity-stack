import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

/** *
 * @typedef {{
 * label: string;
 * }} Props
 */

const propTypes = {
  label: PropTypes.string.isRequired,
};

const Root = styled.div`
  font-style: italic;
  background-color: transparent;
  color: #191919;
  opacity: 0.5;
  min-width: 260px;
  padding: 0.5rem 1rem;
  text-align: left;
  outline: none !important;
  border: none !important;
`;

/**
 *
 * @type {React.FC<Props>}
 */
export const CheckboxListOptionEmpty = ({ label }) => {
  return <Root>{label}</Root>;
};
CheckboxListOptionEmpty.propTypes = propTypes;
