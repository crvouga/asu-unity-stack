import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import * as NewsStory from "../news-story";
import { NewsStoryCard } from "./NewsStoryCard";

/** @typedef {import("./NewsStoryCard").NewsStory} */

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  width: 100%;
`;

/** @type {React.FC<{newsStories: NewsStory[]; skeleton?: boolean}>} */
export const NewsStoryCardGridDesktop = ({ newsStories, skeleton }) => {
  return (
    <Root>
      {newsStories.map(newsStory => (
        <NewsStoryCard
          key={newsStory.title}
          newsStory={newsStory}
          skeleton={Boolean(skeleton)}
        />
      ))}
    </Root>
  );
};
NewsStoryCardGridDesktop.propTypes = {
  newsStories: PropTypes.arrayOf(NewsStory.newsStorySchema).isRequired,
  skeleton: PropTypes.bool,
};
