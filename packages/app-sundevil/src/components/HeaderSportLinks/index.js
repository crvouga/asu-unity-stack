// @ts-check
import PropTypes from "prop-types";
import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { SportIcon } from "../SportIcon";
import { stringToClosestSportName } from "../sport-name";

const sportLinkItemSchema = PropTypes.shape({
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

/**
 * @typedef {import('prop-types').InferProps<typeof sportLinkItemSchema>['isRequired']} SportLinkItem
 */

const sportSchema = PropTypes.shape({
  sportName: PropTypes.string.isRequired,
  sportLinks: PropTypes.arrayOf(sportLinkItemSchema.isRequired).isRequired,
});

/**
 * @typedef {import('prop-types').InferProps<typeof sportSchema>['isRequired']} Sport
 */

const propTypesSchema = {
  sports: PropTypes.arrayOf(sportSchema.isRequired).isRequired,
};

/**
 * @typedef {import('prop-types').InferProps<typeof propTypesSchema>} Props
 */

const StyledSportLink = styled.a`
  color: var(--text-color-muted);
  text-decoration: underline !important;
  font-size: var(--font-size-small);
`;

const StyledSportLinkItem = styled.li`
  margin-bottom: 0.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

/**
 * @type {React.FC<{sportLinkItem: SportLinkItem}>}
 */
const SportLinkItem = ({ sportLinkItem }) => {
  return (
    <StyledSportLinkItem key={sportLinkItem.label}>
      <StyledSportLink href={sportLinkItem.url}>
        {sportLinkItem.label}
      </StyledSportLink>
    </StyledSportLinkItem>
  );
};
SportLinkItem.propTypes = {
  sportLinkItem: sportLinkItemSchema.isRequired,
};

const SportLinkList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

/**
 * @type {React.FC<{sport: Sport}>}
 */
const SportLinks = ({ sport }) => {
  return (
    <SportLinkList>
      {sport.sportLinks.map(sportLinkItem => (
        <SportLinkItem
          key={sportLinkItem.label}
          sportLinkItem={sportLinkItem}
        />
      ))}
    </SportLinkList>
  );
};
SportLinks.propTypes = {
  sport: sportSchema.isRequired,
};

const SportRootWrapper = styled.li`
  padding-bottom: 1em;
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  gap: 0.5rem;
`;

const SportLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSportName = styled.p`
  margin: 0;
`;

const SportIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2px;
`;

/**
 * @type {React.FC<{sport: Sport}>}
 */
const Sport = ({ sport }) => {
  const sportName = stringToClosestSportName(sport.sportName);
  return (
    <SportRootWrapper>
      <SportIconWrapper>
        <SportIcon sportName={sportName} />
      </SportIconWrapper>
      <SportLinksContainer>
        <StyledSportName>{sport.sportName}</StyledSportName>
        <SportLinks sport={sport} />
      </SportLinksContainer>
    </SportRootWrapper>
  );
};
Sport.propTypes = {
  sport: sportSchema.isRequired,
};

const Vars = createGlobalStyle`
  :root {
    --text-color-primary: #191919;
    --text-color-muted: #747474;
    --text-color-brand: #8C1D40;

    --font-size-normal: 1rem;
    --font-size-small: 0.875rem;
  }
`;

const Root = styled.div`
  color: var(--text-color-primary);
  font-size: var(--font-size-normal);
  padding: 2rem;
`;

/**
 * @type {React.FC<Props>}
 * @link https://www.figma.com/proto/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?page-id=728%3A24523&node-id=728-105787&viewport=1748%2C1505%2C0.29&t=0Uxkiwcg69QwaV7S-1&scaling=scale-down-width
 * @link https://www.figma.com/proto/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?page-id=728%3A24523&node-id=728-105743&viewport=1748%2C1505%2C0.29&t=0Uxkiwcg69QwaV7S-1&scaling=scale-down-width
 * @link https://www.figma.com/proto/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?page-id=728%3A24523&node-id=728-108410&viewport=1748%2C1505%2C0.29&t=0Uxkiwcg69QwaV7S-1&scaling=scale-down-width
 * @link https://www.figma.com/proto/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?page-id=728%3A24523&node-id=728-108411&viewport=1748%2C1505%2C0.29&t=0Uxkiwcg69QwaV7S-1&scaling=scale-down-width
 */
export const HeaderContentSportLinks = ({ sports }) => {
  return (
    <Root>
      <Vars />
      {sports?.map((sport, index) => (
        <Sport key={index} sport={sport} />
      ))}
    </Root>
  );
};
HeaderContentSportLinks.propTypes = propTypesSchema;
