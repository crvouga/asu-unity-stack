/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React from "react";
import styled from "styled-components";

import { trackGAEvent } from "../../../../../track-ga/track-ga-event";
import { LinkBase } from "../../../../Link/LinkBase";
import { Cell, STYLES_TRUNCATE } from "./shared";

const DateLink = styled(LinkBase)`
  color: #747474;
  font-size: 14px;
  /** Max 2 lines then truncate */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  line-height: 1.4;
  overflow: hidden;
  white-space: normal;
  word-break: break-word;
`;

/**
 * @type {import("./shared").CellComponent}
 */
export const CellDate = props => {
  const { game, configLayout } = props;
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
            gap: "6px",
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
                fontSize: "24px",
                fontWeight: "bold",
                lineHeight: "24px",
              }}
              dangerouslySetInnerHTML={{
                __html: [game?.dateMonth ?? "", game?.dateDay ?? ""].join(" "),
              }}
            />
            <div
              style={{
                fontSize: "12px",
              }}
              dangerouslySetInnerHTML={{
                __html: game?.dateDayName ?? "",
              }}
            />
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
              dangerouslySetInnerHTML={{
                __html: game?.dateTimeZone ?? "",
              }}
            />
          </div>
        </div>
        <div
          style={{
            width: "100%",
            flexShrink: 1,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {game?.dateLinks?.map(link => (
            <DateLink
              key={`${link.href}${link.label}`}
              href={link.href}
              style={{
                color: "#747474",
                fontSize: "14px",
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
                  section: props.sectionName,
                  text: link.label,
                  component: "text",
                });
              }}
            />
          ))}
        </div>
      </Cell>
    )
  );
};
