import PropTypes from "prop-types";

/**
 * @typedef {{
 * open: boolean
 * onClose: () => void
 * position?: "top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end"
 * renderContent: (input: {referenceWidth: number}) => React.ReactNode
 * renderReference: (input: {open: boolean, ref: React.RefObject<HTMLElement>}) => React.ReactNode
 * }}  Props
 */

export const propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  renderContent: PropTypes.func.isRequired,
  renderReference: PropTypes.func.isRequired,
  position: PropTypes.oneOf([
    "top",
    "top-start",
    "top-end",
    "right",
    "right-start",
    "right-end",
    "bottom",
    "bottom-start",
    "bottom-end",
    "left",
    "left-start",
    "left-end",
  ]),
};
