/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
import React from "react";
import styled from "styled-components";

import { decodeHtml } from "../../../../../utils/decode-html";
import { trackGAEvent } from "../../../../../track-ga/track-ga-event";

const Title = styled.a`
  color: #191919 !important;
  text-decoration: none !important;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Limit to 2 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.2;
  &:active,
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

/**
 * @type {import("./shared").CellComponent}
 */
export const CellTitle = props => {
  const { game, configLayout, sectionName } = props;

  const hasContent = game?.title;
  return configLayout.includeCellTitle && hasContent ? (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        overflow: "hidden",
        flex: 1,
        height: "100%",
        minWidth: 0,
        padding: "0 1rem",
      }}
    >
      {game?.title && (
        <Title
          href={game?.titleHref}
          style={{
            padding: 0,
            margin: 0,
            fontSize: "16px",
            fontWeight: "bold",
            width: "fit-content",
          }}
          dangerouslySetInnerHTML={{ __html: decodeHtml(game?.title ?? "") }}
          onClick={() => {
            trackGAEvent({
              event: "link",
              action: "click",
              name: "onclick",
              type: "internal link",
              region: "main content",
              section: sectionName,
              text: game?.title,
              component: "text",
            });
          }}
        />
      )}
    </div>
  ) : null;
};
