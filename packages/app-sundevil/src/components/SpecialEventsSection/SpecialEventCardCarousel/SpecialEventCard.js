import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import styled from "styled-components";

import { Button } from "../../../../../components-core/src";
import { Skeleton } from "../../Skeleton";
import { AspectRatio16by9 } from "./AspectRatio16by9";
import { specialEventCardSchema } from "./special-event-card";

const CardRoot = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #d0d0d0;
  height: 100%;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
  padding: 24px;
  flex-shrink: 0;
`;

const SportHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const SportName = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  font-weight: 700;
`;

const SportIcon = styled.i`
  width: 12px;
  height: 12px;
  font-size: 12px;
`;

const CardTitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 700;
`;

const CardSubtitles = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

const CardSubtitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 700;
  color: #747474;
`;

const CardBody = styled.div`
  flex: 1;
  width: 100%;
`;

const CardBodyText = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: #191919;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CardButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  padding-top: 6px;
`;

/** @typedef {React.FC<{specialEventCard: import("./special-event-card").SpecialEventCard, cardWidth?: number }>} */
export const SpecialEventCard = ({ specialEventCard, cardWidth }) => {
  const cardRef = useRef();
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <CardRoot
      ref={cardRef}
      style={{
        width: cardWidth === 0 ? "100%" : cardWidth,
      }}
    >
      <Skeleton skeleton={!isImageLoaded}>
        <AspectRatio16by9>
          <CardImage
            src={specialEventCard.imageSrc}
            alt={specialEventCard.imageAlt}
            onLoad={() => setIsImageLoaded(true)}
          />
        </AspectRatio16by9>
      </Skeleton>
      <CardContent>
        <SportHeading>
          <SportIcon className={specialEventCard.sportIconFaClassName} />
          <SportName>{specialEventCard.sportName}</SportName>
        </SportHeading>
        <CardTitle>{specialEventCard.title}</CardTitle>
        <CardSubtitles>
          {specialEventCard.subtitles.map(subtitle => (
            <CardSubtitle key={subtitle}>{subtitle}</CardSubtitle>
          ))}
        </CardSubtitles>
        <CardBody>
          <CardBodyText>{specialEventCard.body}</CardBodyText>
        </CardBody>

        <CardButtons>
          {specialEventCard.buttons.map(button => (
            <Button
              key={button.label}
              color={button.color}
              ariaLabel={button.label}
              href={button.href}
              label={button.label}
              size="small"
            />
          ))}
        </CardButtons>
      </CardContent>
    </CardRoot>
  );
};

SpecialEventCard.propTypes = {
  specialEventCard: specialEventCardSchema,
  cardWidth: PropTypes.number,
};
