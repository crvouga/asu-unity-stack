import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../config";
import { cardPropTypes } from "../Card/card-prop";
import { CardSimple } from "../Card/CardSimple";
import {
  footerButtonPropTypes,
  footerLinkPropTypes,
  SectionFooter,
} from "../SectionFooter/SectionFooter";
import { SectionHeader, sectionHeaderPropTypes } from "../SectionHeader";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const CardColumns = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: ${APP_CONFIG.breakpointMobile}) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CardSectionRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  gap: 2.5rem;
`;

const CardSectionTitle = styled.h3`
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

/**
 * https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4946-9655&t=RJ4gXIiQnKYmjiU7-0
 * @type {React.Fc<Props>}
 */
export const CardSectionThreeColumn = ({
  sectionHeader,
  cardSectionTitle,
  cards,
  footerButtons,
  footerLinks,
}) => {
  const sectionName = sectionHeader?.title ?? cardSectionTitle;
  return (
    <Root>
      <SectionHeader {...sectionHeader} />

      <CardSectionRoot className="container">
        {cardSectionTitle && (
          <CardSectionTitle>{cardSectionTitle}</CardSectionTitle>
        )}
        <CardColumns>
          {cards?.map(card => (
            <CardSimple
              key={card.title}
              card={card}
              sectionName={sectionName}
            />
          ))}
        </CardColumns>
      </CardSectionRoot>
      <SectionFooter
        sectionName={sectionName}
        footerButtons={footerButtons}
        footerLinks={footerLinks}
      />
    </Root>
  );
};

/**
 * @typedef {{
 * sectionHeader: import("../SectionHeader").SectionHeaderProps;
 * cardSectionTitle?: string;
 * cards: import("../Card/card-prop").CardProp[]
 * footerButtons?: import("../SectionFooter/SectionFooter").FooterButtonProps[]
 * footerLinks?: import("../SectionFooter/SectionFooter").FooterLink[]
 * }} Props
 */

CardSectionThreeColumn.propTypes = {
  sectionHeader: sectionHeaderPropTypes,
  cardSectionTitle: PropTypes.string,
  cards: PropTypes.arrayOf(cardPropTypes),
  footerButtons: PropTypes.arrayOf(footerButtonPropTypes),
  footerLinks: PropTypes.arrayOf(footerLinkPropTypes),
};
