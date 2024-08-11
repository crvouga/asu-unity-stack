import React, { useEffect, useRef } from "react";

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
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onClose]);

  const containerStyle = {
    ...style,
    position: "relative",
  };

  const dropdownStyle = {
    position: "absolute",
    display: open ? "block" : "none",
    zIndex: 20,
    ...(position.startsWith("bottom") ? { top: "100%" } : { bottom: "100%" }),
    ...(position.endsWith("end") ? { right: 0 } : { left: 0 }),
  };

  return (
    <div ref={containerRef} style={containerStyle}>
      {renderReference({ open })}
      <div style={dropdownStyle}>
        {open &&
          renderContent({
            referenceWidth: containerRef.current?.getBoundingClientRect().width,
          })}
      </div>
    </div>
  );
};

DropDownSimple.propTypes = propTypes;
