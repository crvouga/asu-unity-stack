// @ts-check
import PropTypes from "prop-types";
import React from "react";

import { Card } from "../../../../components-core/src/components/Card";
import { BaseCarousel } from "../../core/components/BaseCarousel";

/**
 * @typedef {import('../../core/components/BaseCarousel').CarouselItem} CarouselItem
 */

/**
 * @typedef {import('../../core/types/card-carousel-types').CardItem} CardItem
 */

/**
 * @typedef {import('../../core/types/card-carousel-types').CardCarouselType} CardCarouselType
 */

/**
 * @param {CardItem} props
 * @param {"default" | "degree" | "event" | "news" | "story"} cardType
 * @param {"stack" | "inline"} cardEventFormat
 * @param {boolean} cardHorizontal
 * @returns {CarouselItem}
 * @ignore
 */
const htmlTemplate = (
  {
    id,
    imageSource,
    imageAltText,
    title,
    topic,
    content,
    eventLocation,
    eventTime,
    buttons,
    buttonOrientation,
    linkLabel,
    linkUrl,
    tags,
  },
  cardType,
  cardHorizontal,
  cardEventFormat
) => ({
  id,
  item: (
    <Card
      type={cardType}
      horizontal={cardHorizontal}
      image={imageSource}
      imageAltText={imageAltText}
      title={title}
      topic={topic}
      body={content}
      eventFormat={cardEventFormat}
      eventLocation={eventLocation}
      eventTime={eventTime}
      buttons={buttons}
      buttonsOrientation={buttonOrientation}
      linkLabel={linkLabel}
      linkUrl={linkUrl || buttons?.[0]?.href}
      tags={tags}
    />
  ),
});

/**
 * @param {CardCarouselType} props
 * @returns { JSX.Element }
 */
const CardCarousel = ({
  perView,
  cardItems,
  cardType = "default",
  cardEventFormat = "stack",
  cardHorizontal = false,
  width = undefined,
  maxWidth = undefined,
  imageAutoSize = true,
  hasPositionIndicators = true,
  hasNavButtons = true,
  prevIcon = undefined,
  nextIcon = undefined,
  additionalNavBtnCss = undefined,
}) => {
  const carouselItems = cardItems.map(item =>
    htmlTemplate(item, cardType, cardHorizontal, cardEventFormat)
  );
  const activateGlideActions = cardItems.length > perView;

  return (
    <BaseCarousel
      perView={+perView}
      maxWidth={maxWidth}
      width={width}
      carouselItems={carouselItems}
      cssClass="aligned-carousel"
      imageAutoSize={imageAutoSize}
      removeSideBackground={cardItems.length <= perView}
      hasPositionIndicators={activateGlideActions && hasPositionIndicators}
      hasNavButtons={activateGlideActions && hasNavButtons}
      isDraggable={activateGlideActions}
      hasShadow
      navPrevIcon={prevIcon}
      navNextIcon={nextIcon}
      additionalNavBtnCss={additionalNavBtnCss}
    />
  );
};

CardCarousel.propTypes = {
  perView: PropTypes.string.isRequired,
  cardItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string,
      eventLocation: PropTypes.string,
      eventTime: PropTypes.string,
      image: PropTypes.string,
      imageAltText: PropTypes.string,
      buttons: Card.propTypes.buttons,
      linkLabel: PropTypes.string,
      linkUrl: PropTypes.string,
      tags: Card.propTypes.tags,
    })
  ).isRequired,
  cardType: Card.propTypes.type,
  cardEventFormat: Card.propTypes.eventFormat,
  cardHorizontal: Card.propTypes.horizontal,
  width: PropTypes.string,
  maxWidth: PropTypes.string,
  imageAutoSize: PropTypes.bool,
  hasPositionIndicators: PropTypes.bool,
  hasNavButtons: PropTypes.bool,
  prevIcon: PropTypes.string,
  nextIcon: PropTypes.string,
  additionalNavBtnCss: PropTypes.string,
};

export { CardCarousel };
