import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Button } from "../../../../../components-core/src/components/Button";
import { cardPropTypes } from "./card-prop";

const Root = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};
  border: 1px solid #e0e0e0;
`;

const Image = styled.img`
  width: 50%;
  height: auto;
  flex: 1;
  object-fit: cover;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 3rem;
`;

const Title = styled.p`
  font-size: 32px;
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

const ButtonRoot = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

/**
 * https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=5684-858&t=9IhK8Vy1oD4OHGJB-0
 * @type {React.FC<Props>}
 */
export const CardDesktop = ({ card, reverse }) => {
  return (
    <Root reverse={reverse}>
      <Image src={card.imageSrc} alt={card.imageAlt} />
      <Content>
        <Title>{card.title}</Title>
        <Description dangerouslySetInnerHTML={{ __html: card.description }} />
        <ButtonRoot>
          {card.buttons.map(button => (
            <Button
              {...button}
              key={button.label ?? button.href}
              color={button.color ?? "maroon"}
            />
          ))}
        </ButtonRoot>
      </Content>
    </Root>
  );
};

/**
 * @typedef {{
 * card: import("./card-prop").CardProp
 * reverse?: boolean
 * }} Props
 */

CardDesktop.propTypes = {
  card: cardPropTypes.isRequired,
  reverse: PropTypes.bool,
};
