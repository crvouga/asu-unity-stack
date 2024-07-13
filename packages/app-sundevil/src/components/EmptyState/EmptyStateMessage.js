// @ts-check
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Root = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  margin: 0;
  padding: 0;
  color: #6c757d;
`;

export const EmptyStateMessage = ({ message }) => {
  if (typeof message !== "string") {
    return null;
  }
  return <Root>{message}</Root>;
};
EmptyStateMessage.propTypes = {
  message: PropTypes.string,
};
