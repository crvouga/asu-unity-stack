import { autoUpdate, shift, useFloating } from "@floating-ui/react";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

import { useElementPosition } from "../../utils/use-element-position";

/**
 * @typedef {{
 * open: boolean
 * onClose: () => void
 * position?: "top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end"
 * renderContent: (input: {referenceWidth: number}) => React.ReactNode
 * renderReference: (input: {open: boolean, ref: React.RefObject<HTMLElement>}) => React.ReactNode
 * }}  Props
 */

const propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  renderContent: PropTypes.func.isRequired,
  renderReference: PropTypes.func.isRequired,
  position: PropTypes.oneOf([
    "top",
    "top-start",
    "top-end",
    "right",
    "right-start",
    "right-end",
    "bottom",
    "bottom-start",
    "bottom-end",
    "left",
    "left-start",
    "left-end",
  ]),
};

/**
 * @type {React.FC<Props>}
 */
export const DropDown = ({
  open,
  position,
  onClose,
  renderContent,
  renderReference,
}) => {
  const { refs, floatingStyles } = useFloating({
    strategy: "fixed",
    whileElementsMounted: autoUpdate,
    placement: position ?? "bottom-end",
    middleware: [
      shift({
        crossAxis: false,
        mainAxis: true,
      }),
    ],
  });

  const handleClickOutside = event => {
    if (
      refs.reference.current &&
      !refs.reference.current.contains(event.target) &&
      refs.floating.current &&
      !refs.floating.current.contains(event.target)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const referencePosition = useElementPosition(refs.reference);
  const referenceWidth = Math.abs(
    referencePosition.left - referencePosition.right
  );

  return (
    <>
      {renderReference({ ref: refs.setReference, open })}
      {open && (
        <div ref={refs.setFloating} style={{ ...floatingStyles, zIndex: 9999 }}>
          {renderContent({ referenceWidth })}
        </div>
      )}
    </>
  );
};
DropDown.propTypes = propTypes;
