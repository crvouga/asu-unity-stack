import PropTypes from "prop-types";

import { newsStoryFormStatePropTypes } from "./NewsStorySearchForm/use-news-story-search-form";

export const configFormPropTypes = PropTypes.shape({
  title: PropTypes.string,
  initialState: newsStoryFormStatePropTypes,
});

/**
 * @typedef {{
 * title?: string;
 * initialState?: import("./NewsStorySearchForm/use-news-story-search-form").NewsStorySearchFormState;
 * }} ConfigForm
 */

/**
 * @type {ConfigForm}
 */
export const defaultConfigForm = {};
