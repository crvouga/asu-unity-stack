import React from "react";
import styled from "styled-components";

import { NewsStoryCard } from "../NewsStoryCard";
import * as newsStoryCardGrid from "./news-story-card-grid";

/** @typedef {import("../NewsStoryCard").NewsStory} */

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  width: 100%;
`;

/** @type {React.FC<newsStoryCardGrid.Props>} */
export const NewsStoryCardGridDesktop = ({ newsStories, skeleton }) => {
  return (
    <Root>
      {newsStories.map(newsStory => (
        <NewsStoryCard
          key={newsStory?.id ?? newsStory?.title}
          newsStory={newsStory}
          skeleton={Boolean(skeleton)}
        />
      ))}
    </Root>
  );
};

NewsStoryCardGridDesktop.propTypes = newsStoryCardGrid.propTypes;
