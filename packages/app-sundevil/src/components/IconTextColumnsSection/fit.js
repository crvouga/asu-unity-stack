import PropTypes from "prop-types";

/**
 * @typedef {"shrink" | "grow"} Fit
 */

export const Fit = {
  shrink: "shrink",
  grow: "grow",
};
export const fitPropTypes = PropTypes.oneOf(Object.values(Fit));
