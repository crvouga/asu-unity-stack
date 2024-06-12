import PropTypes from "prop-types";
import React, { useMemo } from "react";
import styled from "styled-components";

import { Carousel, CarouselItem } from "../Carousel";
import { socialMediaPostSchema } from "./social-media-post";
import { SocialMediaPostCardTall } from "./SocialMediaPostCardTall";

const propTypes = {
  posts: PropTypes.arrayOf(socialMediaPostSchema.isRequired).isRequired,
  loop: PropTypes.bool,
  slidesOffsetBefore: PropTypes.number,
  initialSlide: PropTypes.number,
};

/**
 * @typedef {Object} SocialMediaPostCarouselProps
 * @property {import('./social-media-post').SocialMediaPost[]} posts
 * @property {boolean} [loop]
 * @property {number} [slidesOffsetBefore]
 * @property {number} [initialSlide]
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
export const SocialMediaPostCarousel = ({
  posts,
  loop,
  slidesOffsetBefore,
  initialSlide,
}) => {
  const [index, setIndex] = React.useState(initialSlide ?? 0);

  const postsFinal = useMemo(() => {
    if (!loop) {
      return posts;
    }

    return [
      ...posts,
      ...posts.map(post => ({ ...post, id: `1${post.id}` })),
      ...posts.map(post => ({ ...post, id: `2${post.id}` })),
      ...posts.map(post => ({ ...post, id: `3${post.id}` })),
    ];
  }, [loop, posts]);

  return (
    <Root>
      <Carousel
        index={index}
        onIndexChanged={setIndex}
        slidesPerView="auto"
        loop={loop ?? false}
        slidesOffsetBefore={slidesOffsetBefore}
        initialSlide={initialSlide}
      >
        {postsFinal.map(post => (
          <CarouselItem key={post.id}>
            <SocialMediaPostCardTall socialMediaPost={post} />
          </CarouselItem>
        ))}
      </Carousel>
    </Root>
  );
};
SocialMediaPostCarousel.propTypes = propTypes;
