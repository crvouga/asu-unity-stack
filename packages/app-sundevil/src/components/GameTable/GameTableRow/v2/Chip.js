/* eslint-disable react/prop-types */
import React from "react";

const toColorStyles = color => {
  const cleanedColor =
    typeof color === "string" ? color.toLowerCase().trim() : color;
  switch (cleanedColor) {
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
    case "black": {
      return {
        backgroundColor: "#000000",
        color: "#ffffff",
      };
    }
    case "pink": {
      return {
        // backgroundColor: "#FFC0CB",
        backgroundColor: "#E74973",
        color: "#FAFAFA",
      };
    }

    case "white": {
      return {
        backgroundColor: "#ffffff",
        color: "#000000",
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
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: chip.label,
      }}
    />
  );
};
