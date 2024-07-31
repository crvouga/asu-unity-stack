/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Icon } from "../Icon_";
import { Alignment } from "./alignment";
import { Fit, fitPropTypes } from "./fit";

const Root = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: column;

  padding: 24px 0px;

  ${({ columnContentAlignment }) => {
    switch (columnContentAlignment) {
      case Alignment.center: {
        return `
          justify-content: flex-start;
          align-items: center;
          text-align: center;
        `;
      }
      case Alignment.start: {
        return `
          justify-content: flex-start;
          align-items: flex-start;
          text-align: left;
        `;
      }

      case Alignment.end: {
        return `
          justify-content: flex-start;
          align-items: flex-end;
          text-align: right;
        `;
      }
      default: {
        return `
          justify-content: flex-start;
          align-items: center;
          text-align: center;
        `;
      }
    }
  }}

  ${({ columnFit }) => {
    switch (columnFit) {
      case Fit.shrink: {
        return `
          width: min-content;
        `;
      }
      case Fit.grow: {
        return `
          width: 100%;
          flex: 1;
        `;
      }
      default: {
        return `
          flex: 1;
        `;
      }
    }
  }})
`;

const Title = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 700;
  color: #191919;
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 120px;
`;

const Caption = styled.p`
  margin: 0;
  padding: 0;
  font-size: 12px;
  color: #747474;
  white-space: nowrap;
`;

const Body = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: #191919;
`;

/**
 * @type {React.FC<Props>}
 */
export const IconTextColumn = ({
  column,
  columnFit = Fit.shrink,
  columnContentAlignment = Alignment.center,
}) => {
  const hasContent = Boolean(
    column.title || column.body || column.caption || column.icon
  );

  if (!hasContent) {
    return null;
  }

  return (
    <Root columnContentAlignment={columnContentAlignment} columnFit={columnFit}>
      {column.icon && <Icon icon={column.icon} />}
      {column.title && <Title>{column.title}</Title>}
      {column.body && <Body>{column.body}</Body>}
      {column.caption && <Caption>{column.caption}</Caption>}
    </Root>
  );
};

/**
 * @typedef {{
 *  id: string;
 *  title?: string | null;
 *  icon?: string | null;
 *  caption?: string | null;
 *  body?: string | null
 *  position?: number | null;
 * }} IconTextColumnProps
 */

export const iconColumnPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  position: PropTypes.number,
  body: PropTypes.string,
  caption: PropTypes.string,
});

/**
 * @typedef {{
 *  columnContentAlignment: import('./alignment').Alignment
 *  columnFit: import("./fit").Fit
 *  column: IconTextColumn
 * }} Props
 */

IconTextColumn.propTypes = {
  columnFit: fitPropTypes,
  column: iconColumnPropType,
};
