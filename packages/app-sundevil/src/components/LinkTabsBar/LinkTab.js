import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styled from "styled-components";

import { Icon, iconPropType } from "../Icon_";

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

export const LinkTab = forwardRef(
  (
    { active, focused, href, icon, renderIconEnd, onClick, label, as, style },
    ref
  ) => {
    return (
      <Root
        style={style}
        focused={focused}
        active={active}
        href={href}
        as={as}
        onClick={onClick}
        ref={ref}
      >
        <LabelRoot>
          {icon && <Icon icon={icon} />}
          {typeof label === "string" && label.trim().length > 0 && (
            <Label>{label}</Label>
          )}
        </LabelRoot>
        {renderIconEnd && renderIconEnd()}
      </Root>
    );
  }
);
LinkTab.propTypes = {
  href: PropTypes.string,
  icon: iconPropType,
  renderIconEnd: PropTypes.func,
  label: PropTypes.string,
  as: PropTypes.elementType,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  focused: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};
