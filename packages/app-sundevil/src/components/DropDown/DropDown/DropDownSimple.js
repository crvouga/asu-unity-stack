import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { propTypes } from "./drop-down-props";

const DropdownContainer = styled.div`
  position: relative;
`;

const DropdownContent = styled.div`
  position: absolute;
  z-index: 9999;
  ${({ position }) => {
    switch (position) {
      case "bottom-end":
        return `
          top: 100%;
          right: 0;
        `;
      case "bottom-start":
        return `
          top: 100%;
          left: 0;
        `;
      case "top-end":
        return `
          bottom: 100%;
          right: 0;
        `;
      case "top-start":
        return `
          bottom: 100%;
          left: 0;
        `;
      default:
        return `
          top: 100%;
          left: 0;
        `;
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
}) => {
  const referenceRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (
        referenceRef.current &&
        !referenceRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
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

  return (
    <DropdownContainer>
      {renderReference({ ref: referenceRef, open })}
      {open && (
        <DropdownContent ref={dropdownRef} position={position}>
          {renderContent({ referenceWidth: referenceRef.current?.offsetWidth })}
        </DropdownContent>
      )}
    </DropdownContainer>
  );
};

DropDownSimple.propTypes = propTypes;
