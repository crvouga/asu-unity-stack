/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React from "react";
import styled from "styled-components";

import { decodeHtml } from "../../../../../../utils/decode-html";
import { STYLES_TRUNCATE } from "../shared";

const Root = styled.a`
  font-size: 24px;
  line-height: 24px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
  width: fit-content;
  max-width: 100%;
  color: #191919 !important;
  text-decoration: none;
  &.active {
    text-decoration: underline;
  }
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

/**
 * @type {import("../shared").CellComponent}
 */
export const Title = props => {
  const { game } = props;

  return (
    <Root
      style={{
        ...STYLES_TRUNCATE,
        padding: "16px",
        paddingBottom: "0",
        flexShrink: 0,
      }}
      href={game?.titleHref}
      dangerouslySetInnerHTML={{ __html: decodeHtml(game?.title ?? "") }}
    />
  );
};
