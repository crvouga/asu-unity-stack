import PropTypes from "prop-types";
import React, { useRef } from "react";
import styled from "styled-components";

import { useTrackChildrenClicks } from "../../track-ga/track-ga-event-hooks";
import { AspectRatio16by9 } from "../AspectRatio/AspectRatio16by9";
import { Image } from "../Image";
import { cardPropTypes } from "./card-prop";

const Root = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  flex: 1;
  object-fit: cover;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.5rem;
  padding: 1rem 0;
`;

const Title = styled.h4`
  margin: 0;
  padding: 0;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 16px;
  margin: 0;
  padding: 0;
  color: #191919;
`;

/**
 * https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4946-9655&t=RJ4gXIiQnKYmjiU7-0
 * @type {React.FC<Props>}
 */
export const CardSimple = ({ card, sectionName }) => {
  const descriptionRef = useRef(null);
  useTrackChildrenClicks({
    ref: descriptionRef,
    sectionName,
  });
  return (
    <Root>
      <AspectRatio16by9>
        <StyledImage src={card.imageSrc} alt={card.imageAlt} />
      </AspectRatio16by9>
      <Content>
        <Title>{card.title}</Title>
        <Description
          ref={descriptionRef}
          dangerouslySetInnerHTML={{ __html: card.description }}
        />
      </Content>
    </Root>
  );
};

/**
 * @typedef {{
 * card: import("./card-prop").CardProp
 * sectionName: string
 * }} Props
 */

CardSimple.propTypes = {
  card: cardPropTypes,
  sectionName: PropTypes.string,
};
