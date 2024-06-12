import PropTypes from "prop-types";
import React, { useMemo } from "react";
import styled from "styled-components";

import { ArrowButtons } from "../ArrowButtons";
import { Carousel, CarouselController, CarouselItem } from "../Carousel";
import { socialMediaPostSchema } from "./social-media-post";
import { SocialMediaPostCard } from "./SocialMediaPostCard";

const propTypes = {
  posts: PropTypes.arrayOf(socialMediaPostSchema.isRequired).isRequired,
  loop: PropTypes.bool,
  slidesOffsetBefore: PropTypes.number,
  initialSlide: PropTypes.number,
  variant: PropTypes.oneOf(["tall", "square"]),
};

/**
 * @typedef {Object} SocialMediaPostCarouselProps
 * @property {import('./social-media-post').SocialMediaPost[]} posts
 * @property {boolean} [loop]
 * @property {number} [slidesOffsetBefore]
 * @property {number} [initialSlide]
 * @property {"tall" | "square"} variant
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

const ArrowButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 52px;
`;

/**
 * @type {React.FC<SocialMediaPostCarouselProps>}
 */
export const SocialMediaPostCarousel = ({
  posts,
  loop,
  slidesOffsetBefore,
  initialSlide,
  variant,
}) => {
  const [carouselController] = React.useState(() => new CarouselController());
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
        slidesPerView="auto"
        loop={loop ?? false}
        slidesOffsetBefore={slidesOffsetBefore}
        initialSlide={initialSlide}
        controller={carouselController}
        index={index}
        onIndexChanged={setIndex}
      >
        {postsFinal.map(post => (
          <CarouselItem key={post.id}>
            <SocialMediaPostCard variant={variant} socialMediaPost={post} />
          </CarouselItem>
        ))}
      </Carousel>

      <ArrowButtonsWrapper className="container">
        <ArrowButtons
          onLeft={() => carouselController.slidePrev()}
          onRight={() => carouselController.slideNext()}
        />
      </ArrowButtonsWrapper>
    </Root>
  );
};
SocialMediaPostCarousel.propTypes = propTypes;
