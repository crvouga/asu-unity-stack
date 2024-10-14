/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React from "react";

import { Cell, STYLES_TRUNCATE } from "./shared";

/**
 * @type {import("./shared").CellComponent}
 */
export const CellDate = ({ game, configLayout }) => {
  return (
    configLayout?.includeCellDate && (
      <Cell
        style={{
          width: "208px",
          height: "120px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "16px",
          flexShrink: 0,
        }}
      >
        <div
          style={{
            ...STYLES_TRUNCATE,
            width: "100%",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          <div
            style={{
              ...STYLES_TRUNCATE,
              width: "100%",
              display: "flex",
              alignItems: "flex-end",
              gap: "4px",
            }}
          >
            <div
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                lineHeight: "20px",
              }}
              dangerouslySetInnerHTML={{
                __html: [game?.dateMonth ?? "", game?.dateDay ?? ""].join(" "),
              }}
            />
            <div
              style={{
                fontSize: "12px",
              }}
            >
              {game?.dateDayName}
            </div>
          </div>
          <div
            style={{
              ...STYLES_TRUNCATE,
              width: "100%",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                lineHeight: "12px",
              }}
              dangerouslySetInnerHTML={{
                __html: game?.dateTimeRange ?? "",
              }}
            />
            <div
              style={{
                fontSize: "12px",
              }}
            >
              {game?.dateTimeZone}
            </div>
          </div>
        </div>
        <div style={{ width: "100%" }}>
          {game?.dateLinks?.map(link => (
            <a
              key={`${link.href}${link.label}`}
              href={link.href}
              style={{
                color: "#747474",
                fontSize: "14px",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </Cell>
    )
  );
};
