/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React from "react";

import { isNonEmptyArray } from "../../../../../../utils/is-non-empty-array";
import { LinkBase } from "../../../../../Link/LinkBase";
import { STYLES_TRUNCATE } from "../shared";

/**
 * @type {import("../shared").CellComponent}
 */
export const SupplementalLinks = props => {
  const { game } = props;

  return (
    isNonEmptyArray(game?.supplementalLinks) && (
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
          gap: "3px",
          minWidth: "0",
          flexShrink: 1,
          width: "144px",
          maxHeight: "100%",
          ...STYLES_TRUNCATE,
        }}
      >
        <div style={{ width: "100%", height: "13px" }} />
        {game?.supplementalLinks?.map(link => (
          <LinkBase
            {...link}
            key={`${link.label}${link.href}`}
            href={link.href}
            className={link.className}
            style={{
              width: "100%",
              fontSize: "14px",
              fontWeight: "400",
              whiteSpace: "normal",
              wordWrap: "break-word",
              ...link.style,
            }}
            dangerouslySetInnerHTML={{
              __html: link.label,
            }}
          />
        ))}
      </div>
    )
  );
};
