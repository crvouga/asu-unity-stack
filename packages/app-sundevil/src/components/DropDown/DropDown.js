import { autoUpdate, shift, useFloating } from "@floating-ui/react";
import PropTypes from "prop-types";
import React, { useEffect } from "react";

/**
 * @typedef {{
 * open: boolean
 * onClose: () => void
 * renderContent: () => React.ReactNode
 * renderReference: (input: {open: boolean, ref: React.RefObject<HTMLElement>}) => React.ReactNode
 * }}  Props
 */

const propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  renderContent: PropTypes.func.isRequired,
  renderReference: PropTypes.func.isRequired,
};

/**
 * @type {React.FC<Props>}
 */
export const DropDown = ({ open, onClose, renderContent, renderReference }) => {
  const { refs, floatingStyles } = useFloating({
    strategy: "fixed",
    whileElementsMounted: autoUpdate,
    placement: "bottom-end",
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

  return (
    <>
      {renderReference({ ref: refs.setReference, open })}
      {open && (
        <div ref={refs.setFloating} style={floatingStyles}>
          {renderContent(floatingStyles)}
        </div>
      )}
    </>
  );
};
DropDown.propTypes = propTypes;
