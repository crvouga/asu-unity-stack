// @ts-check
import PropTypes from "prop-types";
import React from "react";

/**
 *
 * @param {{
 *  onClick?: () => void
 * }} props
 * @returns
 */
const NextButton = ({ onClick = () => null, icon, additionalCss }) => (
  <button
    type="button"
    className={`glide__arrow glide__arrow--next ${additionalCss}`}
    data-glide-dir=">"
    aria-label="Next slide"
    onClick={onClick}
  >
    <i className={`fas ${icon || "fa-chevron-right"} arrow-icon`} />
  </button>
);

NextButton.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.string,
  additionalCss: PropTypes.string,
};

export { NextButton };
