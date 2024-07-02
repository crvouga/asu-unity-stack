import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import styled from "styled-components";

import { useIsMobile } from "../../../../../component-header/src/core/hooks/isMobile";
import { APP_CONFIG } from "../../../config";
import { ArrowButtons } from "../../ArrowButtons";
import { Carousel, CarouselController, CarouselItem } from "../../Carousel";
import { specialEventCardSchema } from "./special-event-card";
import { SpecialEventCard } from "./SpecialEventCard";

const propTypes = {
  cards: PropTypes.arrayOf(specialEventCardSchema.isRequired).isRequired,
  slidesOffsetBefore: PropTypes.number,
  cardWidth: PropTypes.number,
};

/**
 * @typedef {Object} Props
 * @property {import('./special-event-card').SpecialEventCard[]} cards
 * @property {number} [cardWidth]
 * @property {number} [slidesOffsetBefore]
 */

const Root = styled.div`
  /* Ensure swiper-container and swiper-slide have full width */
  swiper-container {
    width: 100%;
  }

  swiper-slide {
    width: auto;
    padding: 0 24px 0 0;
    height: auto !important;
  }

  .swiper-content {
    height: 100% !important;
  }

  @media (max-width: 768px) {
    swiper-slide {
      width: auto;
      padding: 0 12px 0 0;
      height: auto !important;
    }
  }
`;

const ArrowButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 52px;
`;

/**
 * @type {React.FC<Props>}
 */
export const SpecialEventCardCarousel = ({
  cards,
  slidesOffsetBefore,
  cardWidth,
}) => {
  const [carouselController] = useState(() => new CarouselController());
  const [index, setIndex] = useState(0);
  const isMobile = useIsMobile(APP_CONFIG.breakpoint);
  const carouselRef = useRef(null);

  return (
    <Root>
      <Carousel
        slidesPerView="auto"
        loop={false}
        slidesOffsetBefore={slidesOffsetBefore}
        slidesOffsetAfter={isMobile ? 0 : cardWidth}
        initialSlide={0}
        controller={carouselController}
        index={index}
        onIndexChanged={setIndex}
        ref={carouselRef}
      >
        {cards.map(card => (
          <CarouselItem key={card.id}>
            <SpecialEventCard specialEventCard={card} cardWidth={cardWidth} />
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
SpecialEventCardCarousel.propTypes = propTypes;
