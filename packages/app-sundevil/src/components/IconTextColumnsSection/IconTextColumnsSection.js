import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../config";
import { useBreakpoint } from "../../utils/use-breakpoint";
import {
  footerButtonPropTypes,
  footerLinkPropTypes,
  SectionFooter,
} from "../SectionFooter";
import { SectionHeader, sectionHeaderPropTypes } from "../SectionHeader";
import { alignmentPropTypes } from "./alignment";
import { fitPropTypes } from "./fit";
import { iconColumnPropType, IconTextColumn } from "./IconTextColumn";

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const isPositiveNumber = value => typeof value === "number" && value > 0;
const Columns = styled.div`
  width: 100%;
  ${({ columnCount }) => {
    if (isPositiveNumber(columnCount)) {
      return `
        display: grid;
        grid-template-columns: repeat(${columnCount}, 1fr);
        gap: 12px;
        align-content: start;
        justify-content: space-between;
        place-items: start center;
      `;
    }

    return `
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: 12px;
    `;
  }}
`;

const Disclaimer = styled.p`
  font-size: 12px;
  margin: 0;
  color: #747474;
`;

const ColumnsTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
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

const isCleanString = str => typeof str === "string" && str.trim().length > 0;

/**
 * https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4946-8618&t=y8n7tOHFoV6bMZzz-0
 * @type {React.FC<Props>}
 */
export const IconTextColumnsSection = ({
  sectionHeader,
  columnFit,
  columnContentAlignment,
  columns,
  disclaimer,
  footerButtons,
  footerLinks,
  columnsTitle,
  mobileColumnCount,
}) => {
  const sortedColumns = sortColumns(columns);
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const columnCount = isMobile ? mobileColumnCount ?? 2 : null;
  return (
    <Root>
      <SectionHeader {...sectionHeader} />
      {isCleanString(columnsTitle) && (
        <ColumnsTitle className="container">{columnsTitle}</ColumnsTitle>
      )}

      <Columns className="container" columnCount={columnCount}>
        {sortedColumns.map(column => (
          <IconTextColumn
            key={column?.id ?? column?.name}
            column={column}
            columnFit={columnFit}
            columnContentAlignment={columnContentAlignment}
          />
        ))}
      </Columns>
      {isCleanString(disclaimer) && (
        <div className="container">
          <Disclaimer>{disclaimer}</Disclaimer>
        </div>
      )}
      <SectionFooter footerButtons={footerButtons} footerLinks={footerLinks} />
    </Root>
  );
};

/**
 * @typedef {{
 * sectionHeader: import("../SectionHeader").SectionHeaderProps
 * mobileColumnCount?: number
 * columns: import("./IconTextColumn").IconTextColumnProps[]
 * disclaimer?: string
 * columnFit: import("./fit").Fit
 * columnContentAlignment: import("./alignment").Alignment
 * columnsTitle?: string
 * footerButtons?: import("../SectionFooter").FooterButtonProps[]
 * footerLinks?: import("../SectionFooter").FooterLinkProps[]
 * }} Props
 */

IconTextColumnsSection.propTypes = {
  sectionHeader: sectionHeaderPropTypes,
  disclaimer: PropTypes.string,
  mobileColumnCount: PropTypes.number,
  columns: PropTypes.arrayOf(iconColumnPropType),
  columnFit: fitPropTypes,
  columnContentAlignment: alignmentPropTypes,
  columnsTitle: PropTypes.string,
  footerButtons: PropTypes.arrayOf(footerButtonPropTypes),
  footerLinks: PropTypes.arrayOf(footerLinkPropTypes),
};
