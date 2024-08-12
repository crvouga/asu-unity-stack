import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { firstNonEmpty } from "../../utils/first-non-empty";
import { SectionHeader, sectionHeaderPropTypes } from "../SectionHeader";
import { cardPropTypes, SingleCard } from "./Card";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 42px;
`;

export const CardGrid = ({
  cards,
  sectionHeader = {},
  // For backwards compatibility
  sportsGroupCard,
  // For backwards compatibility
  title,
  // For backwards compatibility
  subtitle,
}) => {
  const cardsFinal = firstNonEmpty(cards, sportsGroupCard, []);
  return (
    <Root>
      <SectionHeader title={title} subtitle={subtitle} {...sectionHeader} />
      <div className="container">
        <div className="row w-100">
          {cardsFinal.map(card => {
            return (
              <div
                className="col-12 col-md-4"
                key={`${card?.title}${card?.body}${card?.description}`}
              >
                <SingleCard card={card} />
              </div>
            );
          })}
        </div>
      </div>
    </Root>
  );
};

CardGrid.propTypes = {
  sectionHeader: sectionHeaderPropTypes,
  cards: PropTypes.arrayOf(cardPropTypes),
  // Deprecated. Keeping for backwards compatibility
  sportsGroupCard: PropTypes.arrayOf(cardPropTypes),
  // Deprecated. Keeping for backwards compatibility
  title: PropTypes.string,
  // Deprecated. Keeping for backwards compatibility
  subtitle: PropTypes.string,
};
