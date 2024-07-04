// @ts-check
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  overflow: hidden;
  flex-wrap: nowrap;
`;

const Tab = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  background-color: ${({
    // @ts-ignore
    active,
  }) => (active ? "#191919" : "transparent")};
  color: ${({
    // @ts-ignore
    active,
  }) => (active ? "#fff" : "#191919")};
  border: none;
  outline: none;
  transition: background-color 0.1s, color 0.1s;

  ${({
    // @ts-ignore
    stretch,
  }) =>
    stretch &&
    `
    flex: 1;
  `}

  &:hover {
    background-color: ${({
      // @ts-ignore
      active,
    }) => (active ? "#191919" : "rgba(25, 25, 25, 0.1)")};
  }

  outline: none !important;
  border: none !important;
  &:focus {
    outline: none !important;
    box-shadow: none !important;
    border: none !important;
    background-color: ${({
      // @ts-ignore
      active,
    }) => (active ? "#191919" : "rgba(25, 25, 25, 0.1)")};
  }
  &:active {
    outline: none !important;
    box-shadow: none !important;
    border: none !important;
  }
`;

const Tabs = ({ tabs, onTabItemClick, stretch = false }) => {
  return (
    tabs &&
    tabs.length > 0 && (
      <Root>
        {tabs.map(tab => (
          <Tab
            onClick={onTabItemClick?.(tab.id)}
            // @ts-ignore
            active={Boolean(tab.active)}
            key={tab.id}
            // @ts-ignore
            stretch={stretch}
          >
            {tab.label}
          </Tab>
        ))}
      </Root>
    )
  );
};

Tabs.propTypes = {
  onTabItemClick: PropTypes.func,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      active: PropTypes.bool,
    })
  ),
  stretch: PropTypes.bool,
};

export { Tabs };
