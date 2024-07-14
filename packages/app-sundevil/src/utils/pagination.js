/**
 * @template TRow
 * @typedef {{
 * total: number;
 * rows: TRow[];
 * limit: number;
 * offset: number;
 * }} PaginationResult
 */

/**
 *
 * @param {PaginationResult} paginationResult
 * @returns {PaginationResult}
 */
export const PaginationResult = ({ total, rows, limit, offset }) => ({
  total,
  rows,
  limit,
  offset,
});

export const initPaginationResult = () =>
  PaginationResult({ total: 0, rows: [], limit: 0, offset: 0 });
