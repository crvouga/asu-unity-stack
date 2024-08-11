import React from "react";

import { propTypes } from "./drop-down-props";
import { DropDownFloating } from "./DropDownFloating";
import { DropDownFloatingRelative } from "./DropDownFloatingRelative";
import { DropDownSimple } from "./DropDownSimple";

const DropDownImpl = {
  FloatingUI: "FloatingUI",
  FloatingUIRelative: "FloatingUIRelative",
  Simple: "Simple",
};

// Floating UI is causing performance issues
const DROPDOWN_IMPL = DropDownImpl.Simple;

/**
 * @type {React.FC<import("./drop-down-props").Props>}
 */
export const DropDown = props => {
  switch (DROPDOWN_IMPL) {
    case DropDownImpl.FloatingUI: {
      return <DropDownFloating {...props} />;
    }
    case DropDownImpl.Simple: {
      return <DropDownSimple {...props} />;
    }
    case DropDownImpl.FloatingUIRelative: {
      return <DropDownFloatingRelative {...props} />;
    }
    default: {
      return <DropDownSimple {...props} />;
    }
  }
};

DropDown.propTypes = propTypes;
