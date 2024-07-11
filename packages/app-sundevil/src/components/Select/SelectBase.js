import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

/**
 * @typedef {{
 * icon: string;
 * renderIcon?: () => React.ReactNode
 * name: string;
 * open: boolean;
 * onClick: () => void;
 * variant?: "bottom-bordered" | "borderless" | null | undefined;
 * }} Props
 */

const propTypes = {
  renderIcon: PropTypes.func,
  name: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(["bottom-bordered", "borderless"]),
};

const Root = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #191919;
  border: none;
  padding: 1rem 0rem;
  min-width: 260px;
  text-align: left;
  width: 100%;
  gap: 12px;
  cursor: pointer;
  ${({ variant }) => {
    switch (variant) {
      case "bottom-bordered":
        return `
          border-bottom: 1px solid #bfbfbf;
        `;
      default:
        return `
        `;
    }
  }}
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #191919;
  text-align: left;
  flex: 1;
`;

const ChevronIcon = styled.span`
  font-size: 16px;
  color: #191919;
`;

/**
 * @type {React.FC<Props>}
 */
export const SelectBase = React.forwardRef(
  ({ name, onClick, renderIcon, open, variant = "bottom-bordered" }, ref) => {
    return (
      <Root
        type="button"
        // @ts-ignore
        ref={ref}
        variant={variant}
        onClick={onClick}
      >
        {renderIcon &&
          renderIcon?.({ style: { fontSize: "16", color: "#191919" } })}
        <Text>{name}</Text>
        {open ? (
          <ChevronIcon className="fas fa-chevron-up" />
        ) : (
          <ChevronIcon className="fas fa-chevron-down" />
        )}
      </Root>
    );
  }
);
SelectBase.propTypes = propTypes;
