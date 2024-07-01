import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  flex-direction: column;
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

export const Skeleton = ({
  skeleton,
  children,
  className,
  style,
  fitContent,
}) => {
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
      key="skeleton"
      skeleton={skeleton}
      className={className}
      style={style}
      fitContent={fitContent}
      ref={rootRef}
    >
      {children}
    </Root>
  );
};

Skeleton.propTypes = {
  children: PropTypes.node.isRequired,
  skeleton: PropTypes.bool,
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  fitContent: PropTypes.bool,
};
