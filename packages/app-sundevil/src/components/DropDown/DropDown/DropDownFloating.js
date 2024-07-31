import { autoUpdate, shift, useFloating } from "@floating-ui/react";
import React from "react";

import { useClickOutside } from "../../../utils/use-click-outside";
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

  useClickOutside([refs.reference, refs.floating], onClose);

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
