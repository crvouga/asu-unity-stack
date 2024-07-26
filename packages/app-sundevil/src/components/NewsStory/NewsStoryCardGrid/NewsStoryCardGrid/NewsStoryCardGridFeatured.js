import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { range } from "../../../../utils/range";
import { randomNewsStorySkeleton } from "../news-stories-skeleton-data";
import { NewsStoryCard } from "../NewsStoryCard";
import * as newsStoryCardGrid from "./news-story-card-grid";

/** @typedef {import("../NewsStoryCard").NewsStory} */

const FeaturedCard = styled.div`
  grid-column: ${props =>
    props.layout === "fullWidth" ? "1 / span 3" : "1 / span 2"};
  grid-row: 1 / span 2;
`;

const Root = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 1fr;
  gap: 1rem;
  width: 100%;

  & > * {
    height: 100%;
  }

  & > ${FeaturedCard} {
    grid-row: span 2;
  }
`;

/**
 * @typedef {Object} Props
 * @property {NewsStory[]} newsStories
 * @property {boolean} [skeleton]
 * @property {'twoThirds' | 'fullWidth'} [layout='twoThirds']
 */

/** @type {React.FC<Props>} */
export const NewsStoryCardGridFeatured = ({
  newsStories,
  skeleton,
  layout = "twoThirds",
  maxCards = 3,
}) => {
  const newsStoriesFinal = skeleton
    ? range(maxCards).map(() => randomNewsStorySkeleton())
    : newsStories;

  if (newsStoriesFinal.length < 1) {
    return null;
  }

  const [featuredStory, ...otherStories] = newsStoriesFinal.slice(0, maxCards);

  return (
    <Root>
      <FeaturedCard layout={layout}>
        <NewsStoryCard
          key={featuredStory?.id ?? featuredStory?.title}
          newsStory={featuredStory}
          skeleton={Boolean(skeleton)}
          size="large"
        />
      </FeaturedCard>
      {otherStories.map(newsStory => (
        <NewsStoryCard
          key={newsStory?.id ?? newsStory?.title}
          newsStory={newsStory}
          skeleton={Boolean(skeleton)}
        />
      ))}
    </Root>
  );
};

NewsStoryCardGridFeatured.propTypes = {
  ...newsStoryCardGrid.propTypes,
  maxCards: PropTypes.number,
  layout: PropTypes.oneOf(["twoThirds", "fullWidth"]),
};
