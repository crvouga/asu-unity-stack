import { autoUpdate, shift, useFloating } from "@floating-ui/react";
import React, { useEffect } from "react";

import { useElementPosition } from "../../../utils/use-element-position";
import { propTypes } from "./drop-down-props";

/**
 * @type {React.FC<import("./drop-down-props").Props>}
 */
export const DropDownFloating = ({
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
DropDownFloating.propTypes = propTypes;
