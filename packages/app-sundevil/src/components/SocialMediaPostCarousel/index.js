import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Carousel, CarouselItem } from "../Carousel";
import { socialMediaPostSchema } from "./social-media-post";
import { SocialMediaPostCardTall } from "./SocialMediaPostCardTall";

const propTypes = {
  posts: PropTypes.arrayOf(socialMediaPostSchema.isRequired).isRequired,
};

/**
 * @typedef {Object} SocialMediaPostCarouselProps
 * @property {import('./social-media-post').SocialMediaPost[]} posts
 */

const Root = styled.div`
  /* Ensure swiper-container and swiper-slide have full width */
  swiper-container {
    width: 100%;
  }

  swiper-slide {
    width: auto;
    padding: 0 12px;
  }
`;

/**
 * @type {React.FC<SocialMediaPostCarouselProps>}
 */
export const SocialMediaPostCarousel = ({ posts }) => {
  const [index, setIndex] = React.useState(0);

  return (
    <Root>
      <Carousel index={index} onIndexChanged={setIndex} slidesPerView="auto">
        {posts.map(post => (
          <CarouselItem key={post.id}>
            <SocialMediaPostCardTall socialMediaPost={post} />
          </CarouselItem>
        ))}
      </Carousel>
    </Root>
  );
};
SocialMediaPostCarousel.propTypes = propTypes;
