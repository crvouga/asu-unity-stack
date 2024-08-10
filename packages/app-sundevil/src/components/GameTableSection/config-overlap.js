// @ts-check

import PropTypes from "prop-types";

export const ConfigOverlap = {
  "first-row-with-hero": "first-row-with-hero",
  "sport-tabs-with-hero": "sport-tabs-with-hero",
};
export const configOverlapPropTypes = PropTypes.oneOf(
  Object.values(ConfigOverlap)
);

/**
 * @typedef {{
 * configOverlap: keyof ConfigOverlap;
 * headerDimensions: {height: number, width: number};
 * gameTableFirstRowDimensions: {height: number, width: number};
 * }} GetStylesInput
 */

/**
 * @type {(input: GetStylesInput) => {marginTop?: number}}
 */
export const getOverlapStyles = ({
  configOverlap,
  headerDimensions,
  gameTableFirstRowDimensions,
}) => {
  switch (configOverlap) {
    case ConfigOverlap["first-row-with-hero"]: {
      return {
        marginTop:
          (headerDimensions.height + gameTableFirstRowDimensions.height) * -1,
      };
    }
    case ConfigOverlap["sport-tabs-with-hero"]: {
      return {
        marginTop: -headerDimensions.height,
      };
    }
    default: {
      return {};
    }
  }
};

/**
 * @type {(input: GetStylesInput) => {paddingBottom?: number}}
 */
export const getHeroOverlapStyles = ({
  configOverlap,
  headerDimensions,
  gameTableFirstRowDimensions,
}) => {
  switch (configOverlap) {
    case ConfigOverlap["first-row-with-hero"]: {
      return {
        paddingBottom:
          headerDimensions.height + gameTableFirstRowDimensions.height,
      };
    }
    case ConfigOverlap["sport-tabs-with-hero"]: {
      return {
        paddingBottom: headerDimensions.height,
      };
    }
    default: {
      return {};
    }
  }
};
