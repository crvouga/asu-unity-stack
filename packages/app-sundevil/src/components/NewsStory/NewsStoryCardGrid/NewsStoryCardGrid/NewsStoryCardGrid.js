import React from "react";
import styled from "styled-components";

import { repeat } from "../../../../utils/repeat";
import { EmptyStateMessage } from "../../../EmptyState/EmptyStateMessage";
import {
  DEFAULT_EMPTY_STATE_MESSAGE,
  newsStorySkeleton,
} from "../news-stories-skeleton-data";
import { NewsStoryCard } from "../NewsStoryCard";
import * as newsStoryCardGrid from "./news-story-card-grid";

/** @typedef {import("../NewsStoryCard").NewsStory} */

const Root = styled.div`
  display: grid;
  gap: 1rem;
  width: 100%;
  position: relative;
  ${({ columns }) => {
    return `grid-template-columns: repeat(${columns}, 1fr);`;
  }}
`;

/** @type {React.FC<newsStoryCardGrid.Props>} */
export const NewsStoryCardGrid = ({
  newsStories,
  skeleton = false,
  emptyStateMessage = DEFAULT_EMPTY_STATE_MESSAGE,
  empty = false,
  columns = 3,
  skeletonCount = 6,
  sectionName,
}) => {
  return (
    <Root columns={columns}>
      {!skeleton && !empty && (
        <>
          {newsStories.map(newsStory => (
            <NewsStoryCard
              key={newsStory?.id ?? newsStory?.title}
              newsStory={newsStory}
              sectionName={sectionName}
            />
          ))}
        </>
      )}

      {skeleton && (
        <>
          {repeat(skeletonCount, newsStorySkeleton).map(newsStory => (
            <NewsStoryCard
              key={newsStory?.id ?? newsStory?.title}
              newsStory={newsStory}
              skeleton
              sectionName={sectionName}
            />
          ))}
        </>
      )}

      {empty && (
        <>
          {repeat(3, newsStorySkeleton).map(newsStory => (
            <NewsStoryCard
              key={newsStory?.id ?? newsStory?.title}
              newsStory={newsStory}
              empty
              sectionName={sectionName}
            />
          ))}
          <EmptyStateMessage message={emptyStateMessage} />
        </>
      )}
    </Root>
  );
};

NewsStoryCardGrid.propTypes = newsStoryCardGrid.propTypes;
