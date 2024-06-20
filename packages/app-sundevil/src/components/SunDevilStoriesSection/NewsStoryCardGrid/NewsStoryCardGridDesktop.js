import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { NewsStoryCard, newsStorySchema } from "./NewsStoryCard";

/** @typedef {import("./NewsStoryCard").NewsStory} */

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  width: 100%;
`;

/** @type {React.FC<{newsStories: NewsStory[]}>} */
export const NewsStoryCardGridDesktop = ({ newsStories }) => {
  return (
    <Root>
      {newsStories.map(newsStory => (
        <NewsStoryCard key={newsStory.title} newsStory={newsStory} />
      ))}
    </Root>
  );
};
NewsStoryCardGridDesktop.propTypes = {
  newsStories: PropTypes.arrayOf(newsStorySchema).isRequired,
};
