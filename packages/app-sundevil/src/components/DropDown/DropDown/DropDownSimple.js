import React, { useEffect, useRef, useState } from "react";

import { propTypes } from "./drop-down-props";

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
}) => {
  const containerRef = useRef(null);
  const dropdownRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState(null);

  const updateMaxHeight = () => {
    if (dropdownRef.current && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      let availableHeight;

      if (position.startsWith("bottom")) {
        availableHeight = viewportHeight - containerRect.bottom;
      } else {
        availableHeight = containerRect.top;
      }

      setMaxHeight(availableHeight - 10); // Subtract 10px for some padding
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

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      updateMaxHeight();
      window.addEventListener("resize", updateMaxHeight);
      window.addEventListener("scroll", updateMaxHeight, {
        capture: true,
        passive: true,
      });
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", updateMaxHeight);
      window.removeEventListener("scroll", updateMaxHeight);
    };
  }, [open, onClose]);

  const containerStyle = {
    ...style,
    position: "relative",
  };

  /** @type {React.CSSProperties} */
  const dropdownStyle = {
    position: "absolute",
    display: open ? "block" : "none",
    zIndex: 20,
    ...(position.startsWith("bottom") ? { top: "100%" } : { bottom: "100%" }),
    ...(position.endsWith("end") ? { right: 0 } : { left: 0 }),
    maxHeight: maxHeight ? `${maxHeight}px` : "none",
    overflowY: "auto",
    boxSizing: "border-box",
  };

  return (
    <div ref={containerRef} style={containerStyle}>
      {renderReference({ open })}
      <div ref={dropdownRef} style={dropdownStyle}>
        {open &&
          renderContent({
            referenceWidth: containerRef.current?.getBoundingClientRect().width,
          })}
      </div>
    </div>
  );
};

DropDownSimple.propTypes = propTypes;
