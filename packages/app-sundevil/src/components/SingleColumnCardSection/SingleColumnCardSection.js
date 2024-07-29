// @ts-check
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Card } from "./Card/Card";
import { cardPropTypes } from "./Card/card-prop";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`;

/**
 * https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=5684-858&t=9IhK8Vy1oD4OHGJB-0
 * @type {React.FC<Props>}
 */
export const SingleColumnCardSection = ({ cards, alternate = true }) => {
  return (
    <Root className="container">
      {cards?.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          reverse={alternate && index % 2 !== 0}
        />
      ))}
    </Root>
  );
};

/**
 * @typedef {{
 * cards?: import("./Card/card-prop").CardProp[]
 * alternate?: boolean
 * }} Props
 */

SingleColumnCardSection.propTypes = {
  // @ts-ignore
  cards: PropTypes.arrayOf(cardPropTypes),
  alternate: PropTypes.bool,
};
