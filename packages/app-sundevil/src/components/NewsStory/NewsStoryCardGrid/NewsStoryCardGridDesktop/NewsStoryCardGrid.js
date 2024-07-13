import React from "react";
import styled from "styled-components";

import { EmptyStateMessage } from "../../../EmptyState/EmptyStateMessage";
import {
  DEFAULT_EMPTY_STATE_MESSAGE,
  newsStoriesSkeletonData,
} from "../news-stories-skeleton-data";
import { NewsStoryCard } from "../NewsStoryCard";
import * as newsStoryCardGrid from "./news-story-card-grid";

/** @typedef {import("../NewsStoryCard").NewsStory} */

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  width: 100%;
  position: relative;
`;

/** @type {React.FC<newsStoryCardGrid.Props>} */
export const NewsStoryCardGridDesktop = ({
  newsStories,
  skeleton = false,
  emptyStateMessage = DEFAULT_EMPTY_STATE_MESSAGE,
  empty = false,
}) => {
  return (
    <Root>
      {!skeleton && !empty && (
        <>
          {newsStories.map(newsStory => (
            <NewsStoryCard
              key={newsStory?.id ?? newsStory?.title}
              newsStory={newsStory}
            />
          ))}
        </>
      )}

      {skeleton && (
        <>
          {newsStoriesSkeletonData.map(newsStory => (
            <NewsStoryCard
              key={newsStory?.id ?? newsStory?.title}
              newsStory={newsStory}
              skeleton
            />
          ))}
        </>
      )}

      {empty && (
        <>
          {newsStoriesSkeletonData.slice(0, 3).map(newsStory => (
            <NewsStoryCard
              key={newsStory?.id ?? newsStory?.title}
              newsStory={newsStory}
              empty
            />
          ))}
          <EmptyStateMessage message={emptyStateMessage} />
        </>
      )}
    </Root>
  );
};

NewsStoryCardGridDesktop.propTypes = newsStoryCardGrid.propTypes;
