import PropTypes from "prop-types";

import { gameTableFormStatePropTypes } from "./use-game-table-form";

export const configFormPropTypes = PropTypes.shape({
  title: PropTypes.string,
  initialState: gameTableFormStatePropTypes,
  enableUrlState: PropTypes.bool,
});

/**
 * @typedef {{
 * title?: string;
 * enableUrlState?: boolean;
 * initialState?: import("./use-game-table-form").GameTableFormState;
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
