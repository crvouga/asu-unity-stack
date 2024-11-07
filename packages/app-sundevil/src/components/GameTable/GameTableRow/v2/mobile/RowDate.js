/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React from "react";

import { LinkBase } from "../../../../Link/LinkBase";
import { isCleanString } from "./shared";

/**
 * @typedef {React.FC<import("../../game-table-row").GameTableRowProps>} Component
 */

/**
 * @type {import("./shared").RowComponent}
 */
export const RowDate = props => {
  const { game } = props;
  const dateString = [game?.dateMonth, game?.dateDay].filter(Boolean).join(" ");

  const hasDateString = isCleanString(dateString);

  const hasContent =
    hasDateString ||
    game?.dateDayName ||
    game?.dateTimeRange ||
    game?.dateLinks;

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
            dangerouslySetInnerHTML={{
              __html: dateString,
            }}
          />
        )}
        {game?.dateDayName && (
          <div
            style={{
              fontWeight: "normal",
              paddingLeft: "4px",
            }}
            dangerouslySetInnerHTML={{
              __html: game?.dateDayName ?? "",
            }}
          />
        )}
        {game?.dateTimeRange && (
          <div
            style={{
              fontWeight: "normal",
            }}
            dangerouslySetInnerHTML={{
              __html: [",", game?.dateTimeRange].filter(Boolean).join(" "),
            }}
          />
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
            <LinkBase
              key={link.href}
              href={link.href}
              style={{
                width: "fit-content",
              }}
              dangerouslySetInnerHTML={{
                __html: link.label,
              }}
            />
          ))}
        </div>
      )}
    </div>
  ) : null;
};
