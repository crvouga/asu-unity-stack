// @ts-check

/**
 * @typedef {{
 *  type: string
 *  background: string,
 *  currentPage?: number,
 *  totalPages?: number,
 *  showFirstButton?: boolean,
 *  showLastButton?: boolean,
 *  totalNumbers?: number,
 *  onChange: (e: Event, pages: number) => void,
 * }} PaginationProps
 */

/**
 * @typedef {{
 *  isClickeable?: boolean
 *  disabled?: boolean
 *  pageLinkIcon?: boolean
 *  selectedPage?: boolean
 *  onClick?: () => void
 *  children: React.ReactNode
 * }} PageItemProps
 */

/**
 * This help VSCODE and JSOC to recognize the syntax
 * `import(FILE_PATH).EXPORTED_THING`
 */
export const JSDOC = "jsdoc";
