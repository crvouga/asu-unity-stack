import React from "react";

import { propTypes } from "./drop-down-props";
import { DropDownFloating } from "./DropDownFloating";
import { DropDownSimple } from "./DropDownSimple";

const DropDownImpl = {
  FloatingUI: "FloatingUI",
  Simple: "Simple",
};

// Floating UI is causing performance issues
const DROPDOWN_IMPL = DropDownImpl.FloatingUI;

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
    default: {
      return <DropDownSimple {...props} />;
    }
  }
};

DropDown.propTypes = propTypes;
