/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../../../../config";
import { useBreakpoint } from "../../../../../utils/use-breakpoint";
import { STYLES_TRUNCATE } from "./shared";

const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const Title = styled.a`
  font-size: 24px;
  padding: 0;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
  width: fit-content;
  max-width: 100%;
  color: #191919 !important;
  text-decoration: none;
  &.active {
    text-decoration: underline;
  }
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const isNonEmptyArray = value => Array.isArray(value) && value.length > 0;

/**
 * @type {import("./shared").CellComponent}
 */
export const CellTitle = props => {
  const isTablet = useBreakpoint(APP_CONFIG.breakpointTablet);

  const { game, configLayout } = props;

  return (
    configLayout?.includeCellTitle && (
      <Cell
        style={{
          ...STYLES_TRUNCATE,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "row",
          flex: 1,
          flexShrink: 0,
          gap: "6px",
          minWidth: "0",
        }}
      >
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
            flex: 1,
            gap: "6px",
            flexShrink: 0,
            ...STYLES_TRUNCATE,
          }}
        >
          <Title
            style={{
              ...STYLES_TRUNCATE,
              padding: "16px",
              paddingBottom: "0",
            }}
            dangerouslySetInnerHTML={{ __html: game?.title ?? "" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "8px",
              padding: "16px",
              paddingTop: "0px",
              ...STYLES_TRUNCATE,
            }}
          >
            {game?.chips.map(chip => (
              <Chip key={chip.label} chip={chip} />
            ))}
          </div>
        </div>

        {!isTablet && isNonEmptyArray(game?.supplementalLinks) && (
          <div
            style={{
              height: "100%",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              flexDirection: "column",
              padding: "16px",
              gap: "6px",
              minWidth: "0",
              paddingRight: "48px",
              flexShrink: 1,
              flexWrap: "wrap",
              ...STYLES_TRUNCATE,
            }}
          >
            {game?.supplementalLinks.map(link => (
              <a
                key={`${link.label}${link.href}`}
                href={link.href}
                className={link.className}
                style={{
                  color: "#747474",
                  fontSize: "14px",
                  fontWeight: "400",
                  ...link.style,
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </Cell>
    )
  );
};

const toColorStyles = color => {
  switch (color) {
    case "maroon": {
      return {
        backgroundColor: "#8C1D40",
        color: "#ffffff",
      };
    }
    case "gold": {
      return {
        backgroundColor: "#FFC628",
      };
    }
    default: {
      return {};
    }
  }
};

const Chip = (
  /**
   * @type {{chip: import("../../../../Game/game").Link}}
   */
  props
) => {
  const { chip } = props;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 6px",
        borderRadius: "1px",
        backgroundColor: "#d0d0d0",
        color: "#484848",
        fontSize: "12px",
        fontWeight: "bold",
        height: "18px",
        ...toColorStyles(chip.color),
      }}
    >
      {chip.label}
    </div>
  );
};
