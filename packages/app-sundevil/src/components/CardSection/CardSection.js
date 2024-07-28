import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Root = styled.div``;

/**
 * @type {React.Fc<Props>}
 */
export const CardSection = ({ foo }) => {
  return <Root>{foo}</Root>;
};

/**
 * @typedef {{
 * foo: string
 * }} Props
 */

CardSection.propTypes = {
  foo: PropTypes.string.isRequired,
};
