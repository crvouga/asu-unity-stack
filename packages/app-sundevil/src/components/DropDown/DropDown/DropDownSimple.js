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
    if (referenceRef.current) {
      referenceRef.current.style.position = "relative";
    }

    if (dropdownRef.current) {
      dropdownRef.current.style.position = "absolute";
      dropdownRef.current.style.zIndex = "9999";

      switch (position) {
        case "bottom-end":
          dropdownRef.current.style.top = "100%";
          dropdownRef.current.style.right = "0";
          break;
        case "bottom-start":
          dropdownRef.current.style.top = "100%";
          dropdownRef.current.style.left = "0";
          break;
        case "top-end":
          dropdownRef.current.style.bottom = "100%";
          dropdownRef.current.style.right = "0";
          break;
        case "top-start":
          dropdownRef.current.style.bottom = "100%";
          dropdownRef.current.style.left = "0";
          break;
        default:
          dropdownRef.current.style.top = "100%";
          dropdownRef.current.style.left = "0";
      }
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
