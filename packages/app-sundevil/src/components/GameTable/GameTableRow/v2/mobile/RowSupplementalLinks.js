/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React from "react";

import { trackGAEvent } from "../../../../../track-ga/track-ga-event";
import { LinkBase } from "../../../../Link/LinkBase";

/**
 * @typedef {React.FC<import("../../game-table-row").GameTableRowProps>} Component
 */

/**
 * @type {import("./shared").RowComponent}
 */
export const RowSupplementalLinks = props => {
  const { game, sectionName } = props;

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
          onClick={() => {
            trackGAEvent({
              event: "link",
              action: "click",
              name: "onclick",
              type: "internal link",
              region: "main content",
              section: sectionName,
              text: link.label,
              component: "text",
            });
          }}
        />
      ))}
    </div>
  ) : null;
};
