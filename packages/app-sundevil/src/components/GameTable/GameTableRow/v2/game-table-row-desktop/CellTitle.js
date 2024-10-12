/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React from "react";
import styled from "styled-components";

import { Subtitles } from "../Subtitles";

const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const CellTitleContent = styled.div`
  padding: 0 1.5rem;
  line-height: 28.8px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
`;

const Title = styled.a`
  font-size: 24px;
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
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

/**
 * @type {import("./shared").CellComponent}
 */
export const CellTitle = props => {
  const { game, configLayout } = props;

  return (
    configLayout?.includeCellTitle && (
      <Cell className="flex-1">
        <CellTitleContent>
          <Title
            href={game?.titleHref}
            dangerouslySetInnerHTML={{ __html: game?.title ?? "" }}
          />

          <Subtitles {...props} />
        </CellTitleContent>
      </Cell>
    )
  );
};
