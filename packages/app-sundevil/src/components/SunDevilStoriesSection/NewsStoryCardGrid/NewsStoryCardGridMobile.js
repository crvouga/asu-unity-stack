import PropTypes from "prop-types";
import React, { useEffect } from "react";
import styled from "styled-components";

import { ArrowButtons } from "../../ArrowButtons";
import { Carousel, CarouselController, CarouselItem } from "../../Carousel";
import { NewsStoryCard, newsStorySchema } from "./NewsStoryCard";

/** @typedef {import("./NewsStoryCard").NewsStory} */

const Root = styled.div`
  /* Ensure swiper-container and swiper-slide have full width */
  swiper-container {
    width: 100%;
    height: 273px;
  }

  swiper-slide {
    width: auto;
    padding: 0 12px;
    height: 273px;
  }

  @media (max-width: 768px) {
    swiper-slide {
      width: auto;
      padding: 0 6px;
      height: 273px;
    }
  }
`;

const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding-top: 52px;
`;

const WhitespaceFill = styled.div`
  flex: 1;
`;

/**
 * @typedef {{newsStories: NewsStory[]; slideOffsetBefore; number; cardWidth?: number; renderBottomRightContent?: () => React.ReactNode }} Props
 */

/** @type {React.FC<Props>} */
export const NewsStoryCardGridMobile = ({
  newsStories,
  slideOffsetBefore,
  slidesOffsetAfter,
  cardWidth,
  renderBottomRightContent,
}) => {
  const [carouselController] = React.useState(() => new CarouselController());
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    carouselController.reset();
  }, [newsStories]);

  return (
    <Root>
      <Carousel
        slidesPerView="auto"
        initialSlide={index}
        controller={carouselController}
        index={index}
        onIndexChanged={setIndex}
        slidesOffsetBefore={slideOffsetBefore ?? 0}
        slidesOffsetAfter={slidesOffsetAfter ?? 0}
      >
        {newsStories.map(newsStory => (
          <CarouselItem key={newsStory.title} style={{ width: "fit-content" }}>
            <div style={{ width: cardWidth, height: "100%" }}>
              <NewsStoryCard newsStory={newsStory} />
            </div>
          </CarouselItem>
        ))}
      </Carousel>
      <BottomContent className="container">
        <ArrowButtons
          onLeft={() => carouselController.slidePrev()}
          onRight={() => carouselController.slideNext()}
        />
        <WhitespaceFill />
        {renderBottomRightContent?.()}
      </BottomContent>
    </Root>
  );
};
NewsStoryCardGridMobile.propTypes = {
  newsStories: PropTypes.arrayOf(newsStorySchema).isRequired,
  slidesOffsetAfter: PropTypes.number,
  slideOffsetBefore: PropTypes.number,
  cardWidth: PropTypes.number,
  renderBottomRightContent: PropTypes.func.isRequired,
};
