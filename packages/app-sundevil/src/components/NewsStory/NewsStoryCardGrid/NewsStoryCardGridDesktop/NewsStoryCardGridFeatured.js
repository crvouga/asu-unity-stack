import React from "react";
import styled from "styled-components";

import { NewsStoryCard } from "../NewsStoryCard";
import * as newsStoryCardGrid from "./news-story-card-grid";

/** @typedef {import("../NewsStoryCard").NewsStory} */

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto;
  gap: 1rem;
  width: 100%;
`;

const FeaturedCard = styled.div`
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
`;

/** @type {React.FC<newsStoryCardGrid.Props>} */
export const NewsStoryCardGridDesktopFeatured = ({ newsStories, skeleton }) => {
  if (newsStories.length < 1) {
    return null;
  }

  const [featuredStory, ...otherStories] = newsStories;

  return (
    <Root>
      <FeaturedCard>
        <NewsStoryCard
          newsStory={featuredStory}
          skeleton={Boolean(skeleton)}
          featured
        />
      </FeaturedCard>
      {otherStories.map(newsStory => (
        <NewsStoryCard
          key={newsStory.title}
          newsStory={newsStory}
          skeleton={Boolean(skeleton)}
        />
      ))}
    </Root>
  );
};
NewsStoryCardGridDesktopFeatured.propTypes = newsStoryCardGrid.propTypes;
