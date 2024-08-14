import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const ChevronIcon = styled.span`
  font-size: 16px;
  color: inherit;
`;

export const CollapseIcon = ({ open, style }) => {
  if (open) {
    return <ChevronIcon style={style} className="fas fa-chevron-up" />;
  }

  return <ChevronIcon style={style} className="fas fa-chevron-down" />;
};

CollapseIcon.propTypes = {
  open: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};
