import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../../config";
import { useBreakpoint } from "../../../utils/use-breakpoint";
import { ArrowButtons } from "../../ArrowButtons";
import { Carousel, CarouselController, CarouselItem } from "../../Carousel";
import { specialEventPropTypes } from "../special-event";
import { specialEventsSkeletonData } from "./special-events-skeleton-data";
import { SpecialEventCard } from "./SpecialEventCard";

const propTypes = {
  cards: PropTypes.arrayOf(specialEventPropTypes),
  slidesOffsetBefore: PropTypes.number,
  cardWidth: PropTypes.number,
  skeleton: PropTypes.bool,
  sectionName: PropTypes.string,
};

/**
 * @typedef {Object} Props
 * @property {import('../special-event').SpecialEvent[]} cards
 * @property {number} [cardWidth]
 * @property {boolean} [skeleton]
 * @property {number} [slidesOffsetBefore]
 * @property {string} sectionName
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
  skeleton,
  sectionName,
}) => {
  const [carouselController] = useState(() => new CarouselController());
  const [index, setIndex] = useState(0);
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
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
        disabled={skeleton}
      >
        {!skeleton && (
          <>
            {cards.map(card => (
              <CarouselItem key={card.id}>
                <SpecialEventCard
                  skeleton={skeleton}
                  specialEventCard={card}
                  cardWidth={cardWidth}
                />
              </CarouselItem>
            ))}
          </>
        )}

        {skeleton && (
          <>
            {specialEventsSkeletonData.map(card => (
              <CarouselItem key={card.id}>
                <SpecialEventCard
                  skeleton={skeleton}
                  specialEventCard={card}
                  cardWidth={cardWidth}
                />
              </CarouselItem>
            ))}
          </>
        )}
      </Carousel>
      {(cards.length > 0 || skeleton) && (
        <ArrowButtonsWrapper className="container">
          <ArrowButtons
            skeleton={skeleton}
            onLeft={() => carouselController.slidePrev()}
            onRight={() => carouselController.slideNext()}
            sectionName={sectionName}
          />
        </ArrowButtonsWrapper>
      )}
    </Root>
  );
};
SpecialEventCardCarousel.propTypes = propTypes;
