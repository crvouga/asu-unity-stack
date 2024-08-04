import PropTypes from "prop-types";

/**
 * @typedef {"start" | "center" | "end"} Alignment
 */

export const Alignment = {
  start: "start",
  center: "center",
  end: "end",
};

export const alignmentPropTypes = PropTypes.oneOf(Object.values(Alignment));
