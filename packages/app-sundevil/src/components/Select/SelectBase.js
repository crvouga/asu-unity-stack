import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

/**
 * @typedef {{
 * icon: string;
 * name: string;
 * open: boolean;
 * onClick: () => void;
 * }} Props
 */

const propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

const Root = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: #191919;
  border: none;
  padding: 1rem 1rem;
  min-width: 260px;
  text-align: left;
  width: 100%;
  gap: 12px;
  border-bottom: 1px solid #bfbfbf;
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #191919;
  text-align: left;
  flex: 1;
`;

const Icon = styled.span`
  font-size: 16px;
  color: #191919;
`;

/**
 * @type {React.FC<Props>}
 */
export const SelectBase = React.forwardRef(
  ({ icon, name, onClick, open }, ref) => {
    return (
      <Root
        type="button"
        // @ts-ignore
        ref={ref}
        onClick={onClick}
      >
        <Icon title={name} className={icon} />
        <Text>{name}</Text>
        {open ? (
          <Icon className="fas fa-chevron-up" />
        ) : (
          <Icon className="fas fa-chevron-down" />
        )}
      </Root>
    );
  }
);
SelectBase.propTypes = propTypes;
