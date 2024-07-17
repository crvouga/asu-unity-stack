import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styled from "styled-components";

import { Icon } from "../../Icon_";

export const Root = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  color: #191919;
  text-decoration: none;
  cursor: pointer;
  height: 100%;
  font-weight: bold;
  background-color: transparent;
  flex-wrap: nowrap;
  overlap: hidden;
  white-space: nowrap;

  display: flex;
  align-items: center;

  outline: none !important;
  border: 3px solid transparent;
  box-shadow: none !important;
  box-sizing: border-box;
  &:focus {
    outline: none !important;
    box-shadow: none !important;
    border: 3px solid transparent;
  }
  &:active {
    outline: none !important;
    box-shadow: none !important;
  }
  &:hover {
    background-color: rgba(25, 25, 25, 0.1);
    color: color-mix(in srgb, currentColor 60%, transparent);
  }
  gap: 0.5rem;
  ${({ focused }) => {
    if (focused) {
      return `
        background-color: rgba(25, 25, 25, 0.1);
        color: color-mix(in srgb, currentColor 60%, transparent);
      `;
    }
    return "";
  }}
  ${({ active }) => {
    if (active) {
      return `
        border-bottom: 3px solid #fdc627;
        &:active {
          border-bottom: 3px solid #fdc627;
        }
        &:focus {
          border-bottom: 3px solid #fdc627;
        }
      `;
    }
    return `
      border-bottom: 3px solid transparent;
    `;
  }}
`;

export const LinkTab = forwardRef(
  ({ active, focused, href, icon, renderIconEnd, onClick, label, as }, ref) => {
    return (
      <Root
        focused={focused}
        active={active}
        href={href}
        as={as}
        onClick={onClick}
        ref={ref}
      >
        {icon && <Icon icon={icon} />}
        {label}
        {renderIconEnd && renderIconEnd()}
      </Root>
    );
  }
);
LinkTab.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string,
  renderIconEnd: PropTypes.func,
  label: PropTypes.string,
  as: PropTypes.elementType,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  focused: PropTypes.bool,
};
