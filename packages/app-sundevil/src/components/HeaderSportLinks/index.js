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
/** @typedef {import('prop-types').InferProps<typeof sportLinkItemSchema>['isRequired']} SportLinkItem */

const sportSchema = PropTypes.shape({
  sportName: PropTypes.string.isRequired,
  sportLinks: PropTypes.arrayOf(sportLinkItemSchema.isRequired).isRequired,
});
/** @typedef {import('prop-types').InferProps<typeof sportSchema>['isRequired']} Sport */

const SportLinkItemLink = styled.a`
  color: var(--text-color-muted);
  text-decoration: underline !important;
  font-size: var(--font-size-small);
`;

const SportLinkItemRoot = styled.li`
  margin-bottom: 0.5em;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

/** @type {React.FC<{sportLinkItem: SportLinkItem}>} */
const SportLinkItem = ({ sportLinkItem }) => {
  return (
    <SportLinkItemRoot key={sportLinkItem.label}>
      <SportLinkItemLink href={sportLinkItem.url}>
        {sportLinkItem.label}
      </SportLinkItemLink>
    </SportLinkItemRoot>
  );
};
SportLinkItem.propTypes = {
  sportLinkItem: sportLinkItemSchema.isRequired,
};

const SportItemLinksRoot = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

/** @type {React.FC<{sport: Sport}>} */
const SportItemLinks = ({ sport }) => {
  return (
    <SportItemLinksRoot>
      {sport.sportLinks.map(sportLinkItem => (
        <SportLinkItem
          key={sportLinkItem.label}
          sportLinkItem={sportLinkItem}
        />
      ))}
    </SportItemLinksRoot>
  );
};
SportItemLinks.propTypes = {
  sport: sportSchema.isRequired,
};

const SportGridListItemRoot = styled.li`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: start;
  gap: 0.75rem;
`;

const SportLinksRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
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

/** @type {React.FC<{sport: Sport}>} */
const SportGridListItem = ({ sport }) => {
  const sportName = stringToClosestSportName(sport.sportName);
  return (
    <SportGridListItemRoot>
      <SportIconWrapper>
        <SportIcon sportName={sportName} />
      </SportIconWrapper>
      <SportLinksRoot>
        <StyledSportName>{sport.sportName}</StyledSportName>
        <SportItemLinks sport={sport} />
      </SportLinksRoot>
    </SportGridListItemRoot>
  );
};
SportGridListItem.propTypes = {
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

const Root = styled.div``;

const SportGridList = styled.div`
  color: var(--text-color-primary);
  font-size: var(--font-size-normal);
  padding: 2rem 0rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  & > * + * {
    position: relative;
    padding-left: 1rem;
  }

  & > * + *::before {
    content: '';
    position: absolute;
    top: 3%;
    bottom: 3%;
    left: 0;
    width: 1px;
    background-color: var(--divider-color, #ccc);
  }
`;

const SportGridListColumn = styled.div`
  color: var(--text-color-primary);
  font-size: var(--font-size-normal);
  gap: 2rem;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const propTypesSchema = {
  sports: PropTypes.arrayOf(sportSchema.isRequired).isRequired,
};

/** @typedef {import('prop-types').InferProps<typeof propTypesSchema>} Props */

const COLUMN_HEIGHT = 5;

/**
 * @type {React.FC<Props>}
 * @link https://www.figma.com/proto/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?page-id=728%3A24523&node-id=728-105787&viewport=1748%2C1505%2C0.29&t=0Uxkiwcg69QwaV7S-1&scaling=scale-down-width
 * @link https://www.figma.com/proto/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?page-id=728%3A24523&node-id=728-105743&viewport=1748%2C1505%2C0.29&t=0Uxkiwcg69QwaV7S-1&scaling=scale-down-width
 * @link https://www.figma.com/proto/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?page-id=728%3A24523&node-id=728-108410&viewport=1748%2C1505%2C0.29&t=0Uxkiwcg69QwaV7S-1&scaling=scale-down-width
 * @link https://www.figma.com/proto/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?page-id=728%3A24523&node-id=728-108411&viewport=1748%2C1505%2C0.29&t=0Uxkiwcg69QwaV7S-1&scaling=scale-down-width
 */
export const HeaderContentSportLinks = ({ sports }) => {
  const columns = chunk(sports, COLUMN_HEIGHT);
  return (
    <Root>
      <Vars />
      <SportGridList>
        {columns.map((column, index) => (
          <SportGridListColumn key={index}>
            {column.map(sport => (
              <SportGridListItem key={sport.sportName} sport={sport} />
            ))}
          </SportGridListColumn>
        ))}
      </SportGridList>
    </Root>
  );
};
HeaderContentSportLinks.propTypes = propTypesSchema;

/**
 * @template T
 * @param {T[]} array
 * @param {number} chunkSize
 * @returns {T[][]}
 */
const chunk = (array, chunkSize) => {
  return Array.from({ length: Math.ceil(array.length / chunkSize) }, (_, i) =>
    array.slice(i * chunkSize, i * chunkSize + chunkSize)
  );
};
