/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React from "react";

/**
 * @typedef {React.FC<import("../../game-table-row").GameTableRowProps>} Component
 */

/**
 * @type {import("./shared").RowComponent}
 */
export const RowDate = props => {
  const { game } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        width: "100%",
        padding: "12px 0",
        fontSize: "14px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0",
        }}
      >
        <div
          style={{
            fontWeight: "bold",
          }}
        >
          {[game?.dateMonth, game?.dateDay, game?.dateDayName]
            .filter(Boolean)
            .join(" ")}
        </div>
        <div
          style={{
            fontWeight: "normal",
          }}
        >
          {[",", game?.dateTimeRange].filter(Boolean).join(" ")}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        {game?.dateLinks?.map(link => (
          <a
            key={link.href}
            href={link.href}
            style={{
              color: "#747474",
              width: "fit-content",
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};
