import styled from "styled-components";

export const Cell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const STYLES_TRUNCATE = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

/**
 * @typedef {import("../../game-table-row").GameTableRowProps} CellProps
 */

/**
 * @typedef {React.FC<CellProps>} CellComponent
 */

export const isCleanString = str =>
  typeof str === "string" && str.trim().length > 0;
