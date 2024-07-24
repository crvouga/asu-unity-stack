// @ts-check
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { AspectRatioSquare } from "../AspectRatio/AspectRatioSquare";

const Root = styled.div`
  flex: 1;

  &.inactive {
    background-color: transparent;

    &:hover {
      background-color: ${({
        // @ts-ignore
        darkMode,
      }) => (darkMode ? "rgba(250, 250, 250, 0.1)" : "rgba(25, 25, 25, 0.1)")};
    }

    color: ${({
      // @ts-ignore
      darkMode,
      color,
    }) => {
      if (darkMode) {
        return color === "muted" ? "#fafafa" : "#fafafa";
      }
      return color === "muted" ? "#6c757d" : "#191919";
    }};

    &:focus {
      background-color: ${({
        // @ts-ignore
        darkMode,
      }) => (darkMode ? "rgba(250, 250, 250, 0.1)" : "rgba(25, 25, 25, 0.1)")};
    }
  }

  &.active {
    background-color: ${({
      // @ts-ignore
      darkMode,
    }) => (darkMode ? "#fff" : "#191919")};
    color: ${({
      // @ts-ignore
      darkMode,
    }) => {
      if (darkMode) {
        return "#191919";
      }
      return "#fff";
    }};
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
  flex-direction: ${({
    // @ts-ignore
    orientation,
  }) => (orientation === "horizontal" ? "row-reverse" : "column")};
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0.5rem;
  font-weight: bold;
  font-size: 12px;
`;

const propsPropTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  color: PropTypes.oneOf(["default", "muted"]),
  darkMode: PropTypes.bool,
  empty: PropTypes.bool,
  className: PropTypes.string,
};

/**
 * @typedef {{
 * children?: React.ReactNode;
 * active?: boolean;
 * onClick?: () => void;
 * orientation?: "horizontal" | "vertical";
 * color?: "default" | "muted";
 * darkMode?: boolean;
 * empty?: boolean;
 * className?: string;
 * }} Props
 */

/**
 * @type {React.FC<Props>}
 */
export const SportsTab = React.forwardRef(
  (
    {
      children,
      active,
      onClick,
      empty,
      orientation,
      color,
      darkMode = false,
      className,
    },
    ref
  ) => {
    const classNameFinal = [className, active ? "active" : "inactive"]
      .filter(Boolean)
      .join(" ");
    return (
      <Root
        onClick={onClick}
        className={classNameFinal}
        role="button"
        tabIndex={0}
        ref={ref}
        color={color}
        // @ts-ignore
        darkMode={darkMode}
        aria-hidden={empty}
        style={
          empty
            ? {
                pointerEvents: "none",
                opacity: 0,
                userSelect: "none",
              }
            : {}
        }
        onKeyDown={e => {
          if (e.key === "Enter") {
            onClick?.();
          }
          if (e.key === " ") {
            e.preventDefault();
            onClick?.();
          }
        }}
      >
        <AspectRatioSquare>
          <Content
            // @ts-ignore
            orientation={orientation}
          >
            {children}
          </Content>
        </AspectRatioSquare>
      </Root>
    );
  }
);

// @ts-ignore
SportsTab.propTypes = propsPropTypes;
