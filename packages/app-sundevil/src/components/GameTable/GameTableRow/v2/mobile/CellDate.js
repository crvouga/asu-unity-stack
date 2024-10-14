/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React from "react";

/**
 * @type {import("./shared").CellComponent}
 */
export const CellDate = props => {
  const { game, configLayout } = props;

  return (
    configLayout.includeCellDate && (
      <div
        style={{
          padding: 0,
          margin: 0,
          fontSize: "12px",
          fontWeight: "bold",
          height: "100%",
          maxHeight: "100%",
          width: "48px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "fit-content",
          }}
        >
          <div
            style={{
              margin: 0,
              marginBottom: "-8px",
              padding: 0,
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {game?.dateMonth}
          </div>
          <div
            style={{
              margin: 0,
              padding: 0,
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            {game?.dateDay}
          </div>
        </div>
      </div>
    )
  );
};
