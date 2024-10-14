/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  overflow: hidden;
  flex-wrap: nowrap;
  border-top: 1px solid #d0d0d0;
  & > *:not(:last-child) {
    border-bottom: 1px solid #d0d0d0;
  }
  padding: 0 18px;
  background-color: #e8e8e8;
`;

export const Surface = ({ children }) => {
  return <Root>{children}</Root>;
};
