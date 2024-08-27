import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styled from "styled-components";

import { Icon, iconPropType } from "../Icon_";

export const Root = styled.a`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  margin: 0 !important;
  color: #191919;
  text-decoration: none;
  cursor: pointer;
  height: 100%;
  font-weight: bold;
  background-color: transparent;
  overlap: hidden;
  white-space: nowrap;

  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  outline: none !important;
  border: 0px solid transparent;
  box-shadow: none !important;
  &:focus {
    outline: none !important;
    box-shadow: none !important;
    border: 0px solid transparent;
  }
  &:active {
    outline: none !important;
    box-shadow: none !important;
  }
  &:hover {
    background-color: rgba(25, 25, 25, 0.1);
  }
  gap: 0.5rem;
  ${({ focused }) => {
    if (focused) {
      return `
        background-color: rgba(25, 25, 25, 0.1);
      `;
    }
    return "";
  }}
`;

const LabelRoot = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: flex-start;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
`;

const Label = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const HighlightBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overlap: hidden;
  white-space: nowrap;
  overflow: hidden;
  pointer-events: none;
  border-bottom: 8px solid #fdc627;
`;

export const LinkTab = forwardRef(
  (
    {
      active,
      focused,
      href,
      iconAlt,
      icon,
      renderIconEnd,
      onClick,
      label,
      as,
      style,
      iconTooltip,
    },
    ref
  ) => {
    const hasLabel = typeof label === "string" && label.trim().length > 0;
    const isIconOnly = Boolean(!hasLabel && icon);
    const ariaLabel = iconAlt || label || " ";
    const ariaLabelFinal = isIconOnly ? iconTooltip || ariaLabel : undefined;

    return (
      <Root
        style={style}
        focused={focused}
        active={active}
        href={href}
        as={as}
        onClick={onClick}
        ref={ref}
        title={ariaLabelFinal}
        aria-label={ariaLabelFinal}
      >
        <LabelRoot>
          {icon ? <Icon icon={icon} /> : null}
          {hasLabel && <Label>{label}</Label>}
        </LabelRoot>
        {renderIconEnd && renderIconEnd()}
        {active && <HighlightBar />}
      </Root>
    );
  }
);
LinkTab.propTypes = {
  href: PropTypes.string,
  icon: iconPropType,
  iconAlt: PropTypes.string,
  renderIconEnd: PropTypes.func,
  label: PropTypes.string,
  as: PropTypes.elementType,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  focused: PropTypes.bool,
  iconTooltip: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};
