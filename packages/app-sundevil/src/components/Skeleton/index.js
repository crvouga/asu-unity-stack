import PropTypes from "prop-types";
import React, { forwardRef, useEffect, useRef } from "react";
import styled from "styled-components";

const Root = styled.div`
  ${({ as }) => (as === "tr" ? "display: table-row;" : "display: flex;")}
  justify-content: center;
  align-items: center;
  ${({ fitContent }) =>
    fitContent &&
    `
    height: fit-content;
    width: fit-content;
    max-width: fit-content;
    max-height: fit-content;
    `}

  ${({ skeleton }) =>
    skeleton &&
    `
    background-color: #f3f3f3;
    color: transparent;
    /** shimmer animation */
    background-image: linear-gradient(
      to right,
      #f3f3f3 0%,
      #e9e9e9 20%,
      #f3f3f3 40%,
      #f3f3f3 100%
    );
    background-size: 800px 100%;
    background-repeat: no-repeat;
    user-select: none;
    pointer-events: none;

    animation: shimmer 1s infinite linear;
    @keyframes shimmer {
      0% {
        background-position: -800px 0;
      }
      100% {
        background-position: 800px 0;
      }
    }
    & > * {
      visibility: hidden;
      pointer-events: none;
    }
  `}
  width: 100%;
  height: 100%;
`;

export const Skeleton = forwardRef(
  (
    { skeleton, children, className, style, fitContent, component = "div" },
    ref
  ) => {
    const rootRef = useRef(null);

    useEffect(() => {
      if (rootRef.current && rootRef.current.firstChild) {
        const childStyle = getComputedStyle(rootRef.current.firstChild);
        const { borderRadius } = childStyle;
        rootRef.current.style.borderRadius = borderRadius;
      }
    }, [children]);

    return (
      <Root
        as={component}
        skeleton={Boolean(skeleton)}
        className={className}
        style={style}
        fitContent={fitContent}
        ref={node => {
          rootRef.current = node;
          if (typeof ref === "function") {
            ref(node);
          } else if (ref) {
            // eslint-disable-next-line no-param-reassign
            ref.current = node;
          }
        }}
        aria-hidden={skeleton}
      >
        {children}
      </Root>
    );
  }
);

Skeleton.propTypes = {
  children: PropTypes.node,
  skeleton: PropTypes.bool,
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  fitContent: PropTypes.bool,
  component: PropTypes.elementType,
};
