import styled from "styled-components";

export const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 54px;
`;

export const STYLES_TRUNCATE = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

/**
 * @typedef {React.FC<import("../../game-table-row").GameTableRowProps>} CellComponent
 */

/**
 * @typedef {React.FC<import("../../game-table-row").GameTableRowProps>} RowComponent
 */

export const isCleanString = str =>
  typeof str === "string" && str.trim().length > 0;
