// @ts-check
import PropTypes from "prop-types";
import React from "react";

/**
 *
 * @param {{
 *  onClick?: () => void
 * }} props
 * @returns { JSX.Element }
 */
const PrevButton = ({ onClick = () => null, icon, additionalCss }) => (
  <button
    type="button"
    className={`glide__arrow glide__arrow--prev ${additionalCss}`}
    data-glide-dir="<"
    aria-label="Previous slide"
    onClick={onClick}
  >
    <span className={`fas ${icon || "fa-chevron-left"} arrow-icon`} />
  </button>
);

PrevButton.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.string,
  additionalCss: PropTypes.string,
};

export { PrevButton };
