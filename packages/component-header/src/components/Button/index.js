// @ts-check
import React from "react";

import { ButtonPropTypes } from "../../core/models/app-prop-types";
import { ButtonWrapper } from "./index.styles";

/**
 * @typedef {import('../../core/models/types').Button} ButtonProps
 */

/**
 * @param {ButtonProps} props
 * @returns {JSX.Element}
 */

const Button = ({
  href,
  color,
  text,
  classes,
  onClick,
  onFocus,
  renderStartIcon,
  style,
}) => {
  return (
    // @ts-ignore
    <ButtonWrapper
      href={href}
      className={`button-${color} ${classes ?? ""}`}
      onClick={onClick}
      onFocus={onFocus}
      style={style}
    >
      {renderStartIcon && renderStartIcon?.()}
      <span>{text}</span>
    </ButtonWrapper>
  );
};

Button.propTypes = { ...ButtonPropTypes };

export { Button };
