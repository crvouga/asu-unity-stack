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
export const RowSupplementalLinks = props => {
  const { game } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "12px",
        padding: "16px 0",
      }}
    >
      {game?.supplementalLinks.map(link => (
        <a
          key={`${link.label}${link.href}`}
          href={link.href}
          className={link.className}
          style={{
            color: "#747474",
            fontSize: "14px",
            fontWeight: "400",
            ...link.style,
          }}
        >
          {link.label}
        </a>
      ))}
    </div>
  );
};
