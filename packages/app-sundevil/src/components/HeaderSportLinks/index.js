// @ts-check
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

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
  color: blue;
`;

/**
 * @type {React.FC<{sport: Sport}>}
 */
const SportLinks = ({ sport }) => {
  return (
    <ul>
      {sport.sportLinks.map(link => {
        return (
          <li>
            <StyledSportLink href={link.url}>{link.label}</StyledSportLink>
          </li>
        );
      })}
    </ul>
  );
};
SportLinks.propTypes = {
  sport: sportSchema.isRequired,
};

/**
 * @type {React.FC<{sport: Sport}>}
 */
const Sport = ({ sport }) => {
  return (
    <li>
      <p>{sport.sportName}</p>
      <SportLinks sport={sport} />
    </li>
  );
};
Sport.propTypes = {
  sport: sportSchema.isRequired,
};

/**
 * @type {React.FC<Props>}
 */
export const HeaderContentSportLinks = ({ sports }) => {
  return (
    <div>
      {sports?.map(sport => {
        return <Sport sport={sport} />;
      })}
    </div>
  );
};
HeaderContentSportLinks.propTypes = propTypesSchema;
