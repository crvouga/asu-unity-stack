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
 * @typedef {import("../../game-table-row").GameTableRowProps & {sectionName:string}}  Props
 */

/**
 * @typedef {React.FC<Props>} CellComponent
 */

/**
 * @typedef {React.FC<Props>} RowComponent
 */

export const isCleanString = str =>
  typeof str === "string" && str.trim().length > 0;

/**
 * @param {Props} props
 * @returns {string}
 */
export const toTeamLogoAlt = props => {
  const alt = props.game.teamLogoAlt;
  return isCleanString(alt) ? alt : "Opponent Logo";
};
