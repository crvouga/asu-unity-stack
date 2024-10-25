/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React from "react";

import { isCleanString } from "./shared";

/**
 * @typedef {React.FC<import("../../game-table-row").GameTableRowProps>} Component
 */

/**
 * @type {import("./shared").RowComponent}
 */
export const RowDate = props => {
  const { game } = props;
  const dateString = [game?.dateMonth, game?.dateDay, game?.dateDayName]
    .filter(Boolean)
    .join(" ");

  const hasDateString = isCleanString(dateString);

  const hasContent = hasDateString || game?.dateTimeRange || game?.dateLinks;

  return hasContent ? (
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
        {hasDateString && (
          <div
            style={{
              fontWeight: "bold",
            }}
          >
            {dateString}
          </div>
        )}
        {game?.dateTimeRange && (
          <div
            style={{
              fontWeight: "normal",
            }}
          >
            {[",", game?.dateTimeRange].filter(Boolean).join(" ")}
          </div>
        )}
      </div>
      {game?.dateLinks && (
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
      )}
    </div>
  ) : null;
};
