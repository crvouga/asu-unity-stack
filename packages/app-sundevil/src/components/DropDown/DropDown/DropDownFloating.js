import { autoUpdate, useFloating } from "@floating-ui/react";
import React from "react";

import { useClickOutside } from "../../../utils/use-click-outside";
import { useElementContentDimensions } from "../../../utils/use-element-content-dimensions";
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
  });

  useClickOutside([refs.reference, refs.floating], onClose);

  const referenceDimensions = useElementContentDimensions(refs.reference);
  const referenceWidth = referenceDimensions.width;

  return (
    <>
      {renderReference({ ref: refs.setReference, open })}
      {open && (
        <div ref={refs.setFloating} style={{ ...floatingStyles, zIndex: 10 }}>
          {renderContent({ referenceWidth })}
        </div>
      )}
    </>
  );
};
DropDownFloating.propTypes = propTypes;
