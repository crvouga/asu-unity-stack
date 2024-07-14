import PropTypes from "prop-types";

export const LayoutOverlap = {
  "first-row-with-hero": "first-row-with-hero",
  "sport-tabs-with-hero": "sport-tabs-with-hero",
};
export const layoutOverlapSchema = PropTypes.oneOf(
  Object.values(LayoutOverlap)
);
