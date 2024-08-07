import PropTypes from "prop-types";
import { createContext, useContext } from "react";

import { deepMergeLeft } from "../../../utils/deep-merge-left";

export const configCardPropTypes = PropTypes.shape({
  titleFontSize: PropTypes.string,
  titleMaxLines: PropTypes.number,
  titleFontWeight: PropTypes.string,
});

/**
 * @typedef {{
 * titleFontSize: string;
 * titleMaxLines: number;
 * titleFontWeight: string;
 * }} ConfigCard
 */

/**
 * @type {ConfigCard}
 */
export const defaultConfigCard = {
  titleFontSize: "24px",
  titleMaxLines: 2,
  titleFontWeight: "bold",
};

const NewsStoryCardConfigContext = createContext(defaultConfigCard);

export const NewsStoryCardConfigProvider = NewsStoryCardConfigContext.Provider;

const ensureRecord = record => {
  if (typeof record !== "object") {
    return {};
  }
  return record ?? {};
};

/**
 * @returns {ConfigCard}
 */
export const useNewsStoryCardConfig = () => {
  const value = useContext(NewsStoryCardConfigContext);
  return deepMergeLeft(ensureRecord(value), ensureRecord(defaultConfigCard));
};
