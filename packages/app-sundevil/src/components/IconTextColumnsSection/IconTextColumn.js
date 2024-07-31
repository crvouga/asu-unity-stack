/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../config";
import { Icon } from "../Icon_";

const Root = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: column;
  justify-content: flex-start;
  width: min-content;
  padding: 24px 0px;

  @media (max-width: ${APP_CONFIG.breakpointMobile}) {
    width: 50%;
  }
`;

const Title = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  text-align: center;
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
  text-align: center;
  color: #747474;
  white-space: nowrap;
`;

/**
 * @type {React.FC<Props>}
 */
export const IconTextColumn = ({ column }) => {
  return (
    <Root>
      <Icon icon={column.icon} />
      <Title>{column.title}</Title>
      {column.caption && <Caption>{column.caption}</Caption>}
    </Root>
  );
};

/**
 * @typedef {{
 *  id: string;
 *  title: string;
 *  icon?: string;
 *  caption?: string;
 *  position?: number;
 * }} IconTextColumnProps
 */

export const iconColumnPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  gender: PropTypes.string,
  position: PropTypes.number,
  caption: PropTypes.string,
});

/**
 * @typedef {{
 *  column: IconTextColumn
 * }} Props
 */

IconTextColumn.propTypes = {
  column: iconColumnPropType,
};
