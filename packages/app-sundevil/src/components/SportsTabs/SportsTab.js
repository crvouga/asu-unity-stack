import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { AspectRatioSquare } from "./AspectRatioSquare";

const Root = styled.div`
  flex: 1;
  &.inactive {
    background-color: transparent;
    color: inherit;
  }
  &.active {
    background-color: #191919;
    color: #fafafa;
  }
  outline: none !important;
  border: none !important;
  &:focus {
    outline: none !important;
    box-shadow: none !important;
  }
  cursor: pointer;
`;

const Content = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  font-weight: bold;
  font-size: 12px;
`;

const propsSchema = {
  active: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

/**
 * @typedef {{
 * children: React.ReactNode;
 * active?: boolean;
 * onClick: () => void;
 * }} Props
 */

/**
 * @type {React.FC<Props>}
 */
export const SportsTab = React.forwardRef(
  ({ children, active, onClick }, ref) => {
    const className = active ? "active" : "inactive";
    return (
      <Root
        onClick={onClick}
        className={className}
        role="button"
        tabIndex={0}
        ref={ref}
        onKeyDown={e => {
          if (e.key === "Enter") {
            onClick();
          }
          if (e.key === " ") {
            e.preventDefault();
            onClick();
          }
        }}
      >
        <AspectRatioSquare>
          <Content>{children}</Content>
        </AspectRatioSquare>
      </Root>
    );
  }
);

SportsTab.propTypes = propsSchema;
