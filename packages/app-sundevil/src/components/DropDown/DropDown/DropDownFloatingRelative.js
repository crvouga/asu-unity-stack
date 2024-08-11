import { autoUpdate, useFloating } from "@floating-ui/react";
import React from "react";

import { useClickOutside } from "../../../utils/use-click-outside";
import { useElementContentDimensions } from "../../../utils/use-element-content-dimensions";
import { propTypes } from "./drop-down-props";

/**
 * @type {React.FC<import("./drop-down-props").Props>}
 */
export const DropDownFloatingRelative = ({
  open,
  position,
  onClose,
  renderContent,
  renderReference,
  style,
}) => {
  const { refs, floatingStyles } = useFloating({
    strategy: "absolute",
    whileElementsMounted: autoUpdate,
    placement: position ?? "bottom-end",
    middleware: [],
  });

  useClickOutside([refs.reference, refs.floating], onClose);

  const referenceDimensions = useElementContentDimensions(refs.reference);
  const referenceWidth = referenceDimensions.width;

  return (
    <div style={{ ...style, position: "relative" }}>
      {renderReference({ ref: refs.setReference, open })}
      {open && (
        <div ref={refs.setFloating} style={{ ...floatingStyles, zIndex: 10 }}>
          {renderContent({ referenceWidth })}
        </div>
      )}
    </div>
  );
};

DropDownFloatingRelative.propTypes = propTypes;
