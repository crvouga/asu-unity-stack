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

  useEffect(() => {
    if (open && referenceRef.current && dropdownRef.current) {
      const referenceRect = referenceRef.current.getBoundingClientRect();
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      let top;
      let left;

      switch (position) {
        case "bottom-end":
          top = referenceRect.bottom;
          left = referenceRect.right - dropdownRect.width;
          break;
        case "bottom-start":
          top = referenceRect.bottom;
          left = referenceRect.left;
          break;
        case "top-end":
          top = referenceRect.top - dropdownRect.height;
          left = referenceRect.right - dropdownRect.width;
          break;
        case "top-start":
          top = referenceRect.top - dropdownRect.height;
          left = referenceRect.left;
          break;
        default:
          top = referenceRect.bottom;
          left = referenceRect.left;
      }

      // Update dropdownRef styles directly
      dropdownRef.current.style.position = "fixed";
      dropdownRef.current.style.zIndex = "9999";
      dropdownRef.current.style.top = `${top}px`;
      dropdownRef.current.style.left = `${left}px`;
    }
  }, [position, open]);

  return (
    <>
      {renderReference({ ref: referenceRef, open })}
      {open &&
        renderContent({
          ref: dropdownRef,
          referenceWidth: referenceRef.current?.offsetWidth,
        })}
    </>
  );
};

DropDownSimple.propTypes = propTypes;
