/* eslint-disable react/prop-types */
import React from "react";

const toColorStyles = color => {
  switch (color) {
    case "maroon": {
      return {
        backgroundColor: "#8C1D40",
        color: "#ffffff",
      };
    }
    case "gold": {
      return {
        backgroundColor: "#FFC628",
      };
    }
    default: {
      return {};
    }
  }
};

export const Chip = (
  /**
   * @type {{chip: import("../../../Game/game").Link}}
   */
  { chip }
) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 6px",
        borderRadius: "1px",
        backgroundColor: "#d0d0d0",
        color: "#484848",
        fontSize: "12px",
        fontWeight: "bold",
        height: "18px",
        ...toColorStyles(chip.color),
      }}
    >
      {chip.label}
    </div>
  );
};
