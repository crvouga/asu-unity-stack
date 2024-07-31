import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { SectionHeader, sectionHeaderPropTypes } from "../SectionHeader";
import { iconColumnPropType, IconTextColumn } from "./IconTextColumn";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Columns = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Disclaimer = styled.p`
  font-size: 12px;
  margin: 0;
  color: #747474;
`;

const ensureNumber = value => {
  if (typeof value !== "number") {
    return Infinity;
  }

  // eslint-disable-next-line use-isnan
  if (value === NaN) {
    return Infinity;
  }

  return value;
};

const sortColumns = columns => {
  if (!Array.isArray(columns)) {
    return [];
  }
  return columns.sort(
    (a, b) => ensureNumber(a?.position) - ensureNumber(b?.position)
  );
};

/**
 * https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4946-8618&t=y8n7tOHFoV6bMZzz-0
 * @type {React.FC<Props>}
 */
export const IconTextColumnsSection = ({
  sectionHeader,
  columns,
  disclaimer,
}) => {
  const sortedColumns = sortColumns(columns);
  return (
    <Root>
      <SectionHeader {...sectionHeader} />
      <Columns className="container">
        {sortedColumns.map(column => (
          <IconTextColumn key={column?.id ?? column?.name} column={column} />
        ))}
      </Columns>
      <div className="container">
        <Disclaimer>{disclaimer}</Disclaimer>
      </div>
    </Root>
  );
};

/**
 * @typedef {{
 * sectionHeader: import("../SectionHeader").SectionHeaderProps
 * columns: import("./IconTextColumn").IconTextColumnProps[]
 * disclaimer: string
 * }} Props
 */

IconTextColumnsSection.propTypes = {
  sectionHeader: sectionHeaderPropTypes,
  disclaimer: PropTypes.string,
  columns: PropTypes.arrayOf(iconColumnPropType),
};
