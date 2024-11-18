import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../../config";
import { throttle } from "../../../utils/throttle";
import { useElementContentDimensions } from "../../../utils/use-element-content-dimensions";
import { propTypes } from "./drop-down-props";

const StyledDropdownContent = styled.div`
  /* Scrollbar styles for WebKit browsers */
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
  }

  /* Scrollbar styles for Firefox */
  scrollbar-width: thin;

  /* Other styles */
  position: absolute;
  display: ${props => (props.open ? "block" : "none")};
  z-index: 20;
  ${props =>
    props.position.startsWith("bottom") ? "top: 100%;" : "bottom: 100%;"}
  ${props => (props.position.endsWith("end") ? "right: 0;" : "left: 0;")}
  max-height: ${props =>
    props.maxHeight ? `${Math.min(props.maxHeight, 600)}px` : "80dvh"};
  overflow-y: auto;
  border: 1px solid #d0d0d0;
  background-color: #fff;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${props => {
    switch (props.width) {
      case "screen": {
        return `
          width: 100vw;
          max-width: ${APP_CONFIG.breakpointMobile};
        `;
      }

      case "content":
      default: {
        return `
          max-width: 100vw;
        `;
      }
    }
  }}
`;

/**
 * @type {React.FC<import("./drop-down-props").Props>}
 */
export const DropDownSimple = ({
  open,
  position = "bottom-end",
  onClose,
  renderContent,
  renderReference,
  style,
  width,
}) => {
  const containerRef = useRef(null);
  const dropdownRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(null);

  const updateMaxHeight = () => {
    if (dropdownRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const viewportHeight =
        window.visualViewport?.height || window.innerHeight;
      let availableHeight;

      if (position.startsWith("bottom")) {
        availableHeight = viewportHeight - containerRect.bottom;
      } else {
        availableHeight = containerRect.top;
      }

      const PADDING = 16;

      setMaxHeight(availableHeight - PADDING);
    }
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    const handleFocusOutside = event => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        onClose();
      }
    };

    const updateMaxHeightThrottled = throttle(updateMaxHeight, 250);

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("focusin", handleFocusOutside);
      updateMaxHeight();
      window.addEventListener("resize", updateMaxHeightThrottled);
      window.addEventListener("scroll", updateMaxHeightThrottled, {
        capture: true,
        passive: true,
      });
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("focusin", handleFocusOutside);
      window.removeEventListener("resize", updateMaxHeightThrottled);
      window.removeEventListener("scroll", updateMaxHeightThrottled, {
        capture: true,
        passive: true,
      });
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("focusin", handleFocusOutside);
      window.removeEventListener("resize", updateMaxHeightThrottled);
      window.removeEventListener("scroll", updateMaxHeightThrottled);
    };
  }, [open, onClose]);

  const containerStyle = {
    ...style,
    position: "relative",
  };

  const containerDimensions = useElementContentDimensions(containerRef);

  return (
    <div ref={containerRef} style={containerStyle}>
      {renderReference({ open })}
      <StyledDropdownContent
        ref={dropdownRef}
        open={open}
        position={position}
        maxHeight={maxHeight}
        width={width}
      >
        {open &&
          renderContent({
            referenceWidth: containerDimensions.width,
          })}
      </StyledDropdownContent>
    </div>
  );
};

DropDownSimple.propTypes = propTypes;
