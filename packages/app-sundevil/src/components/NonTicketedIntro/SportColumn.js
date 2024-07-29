/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../config";
import { Icon } from "../Icon_";
import {
  sportGenderToString,
  stringToSportGender,
} from "../Sport/sport-gender";
import { sportPropTypes as sportTabPropTypes } from "../SportsTabs/sports-tabs";

const Root = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: column;
  justify-content: flex-start;
  min-width: 50%;
  @media (min-width: ${APP_CONFIG.breakpointMobile}) {
    min-width: 0;
  }
  flex: 1;
  padding: 24px;
`;

const Caption = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  text-align: center;
  color: #747474;
`;

const Title = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  text-align: center;
  font-weight: 700;
  color: #191919;
`;

const wrapParens = str => `(${str})`;

/**
 * @type {React.FC<Props>}
 */
export const SportColumn = ({ sport }) => {
  const caption =
    sport.caption ??
    wrapParens(sportGenderToString(stringToSportGender(sport.gender))) ??
    null;

  return (
    <Root>
      <Icon icon={sport.icon} />
      <Title>{sport.name}</Title>
      {caption && <Caption>{caption}</Caption>}
    </Root>
  );
};

/**
 * @typedef {import("../SportsTabs/sports-tabs").Sport & {gender?: string | null; caption?: string | null}} SportColumn
 */

export const sportColumnPropType = PropTypes.shape({
  ...sportTabPropTypes,
  gender: PropTypes.string,
  caption: PropTypes.string,
});

/**
 * @typedef {{
 *  sport: SportColumn
 * }} Props
 */

SportColumn.propTypes = {
  sport: sportColumnPropType,
};
