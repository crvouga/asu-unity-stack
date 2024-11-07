/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React from "react";

import { LinkBase } from "../../../../Link/LinkBase";

/**
 * @typedef {React.FC<import("../../game-table-row").GameTableRowProps>} Component
 */

/**
 * @type {import("./shared").RowComponent}
 */
export const RowSupplementalLinks = props => {
  const { game } = props;

  const hasContent =
    Array.isArray(game?.supplementalLinks) &&
    game?.supplementalLinks?.length > 0;

  return hasContent ? (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "12px",
        padding: "16px 0",
      }}
    >
      {game?.supplementalLinks?.map(link => (
        <LinkBase
          {...link}
          key={`${link.label}${link.href}`}
          href={link.href}
          className={link.className}
          style={{
            fontSize: "14px",
            fontWeight: "400",
            ...link.style,
          }}
          dangerouslySetInnerHTML={{
            __html: link.label,
          }}
        />
      ))}
    </div>
  ) : null;
};
