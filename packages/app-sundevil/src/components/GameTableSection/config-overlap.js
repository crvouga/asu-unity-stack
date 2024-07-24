import PropTypes from "prop-types";

export const ConfigOverlap = {
  "first-row-with-hero": "first-row-with-hero",
  "sport-tabs-with-hero": "sport-tabs-with-hero",
};
export const configOverlapPropTypes = PropTypes.oneOf(
  Object.values(ConfigOverlap)
);
