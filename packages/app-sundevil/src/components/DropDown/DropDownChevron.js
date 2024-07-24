import PropTypes from "prop-types";
import React from "react";

const ICON_SIZE = {
  fontSize: "16px",
  width: "16px",
  height: "16px",
};

export const DropDownChevron = ({ open, style }) => {
  const styleFinal = { ...ICON_SIZE, ...style };
  if (open) {
    return <i className="fas fa-chevron-up" style={styleFinal} />;
  }
  return <i className="fas fa-chevron-down" style={styleFinal} />;
};
DropDownChevron.propTypes = {
  open: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};
