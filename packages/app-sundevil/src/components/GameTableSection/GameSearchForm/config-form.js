import PropTypes from "prop-types";

import { gameSearchFormStatePropTypes } from "./use-game-search-form";

export const configFormPropTypes = PropTypes.shape({
  title: PropTypes.string,
  initialState: gameSearchFormStatePropTypes,
  enableUrlState: PropTypes.bool,
});

/**
 * @typedef {{
 * title?: string;
 * enableUrlState?: boolean;
 * initialState?: import("./use-game-search-form").GameSearchFormState;
 * }} ConfigForm
 */

/**
 * @type {ConfigForm}
 */
export const defaultConfigForm = {
  title: null,
  enableUrlState: null,
  initialState: null,
};
