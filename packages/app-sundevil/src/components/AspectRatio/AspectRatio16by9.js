import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Root = styled.div`
  padding-top: 56.25%;
  position: relative;
  height: 0;
  aspect-ratio: 16 / 9;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  aspect-ratio: 16 / 9;
`;

const propsSchema = {
  children: PropTypes.node,
};

/**
 * @typedef {{
 * children: React.ReactNode;
 * active: boolean;
 * onClick: () => void;
 * }} Props
 */

/**
 * @type {React.FC<Props>}
 */
export const AspectRatio16by9 = ({ children }) => {
  return (
    <Root>
      <Content>{children}</Content>
    </Root>
  );
};
AspectRatio16by9.propTypes = propsSchema;
