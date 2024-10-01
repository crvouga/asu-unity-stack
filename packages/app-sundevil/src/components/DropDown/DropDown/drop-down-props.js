import PropTypes from "prop-types";

/**
 * @typedef {{
 * open: boolean
 * onClose: () => void
 * position?: "top" | "top-start" | "top-end" | "right" | "right-start" | "right-end" | "bottom" | "bottom-start" | "bottom-end" | "left" | "left-start" | "left-end"
 * style?: React.CSSProperties
 * renderContent: (input: {referenceWidth: number}) => React.ReactNode
 * renderReference: (input: {open: boolean, ref: React.RefObject<HTMLElement>}) => React.ReactNode
 * width?: "content" | "screen"
 * }}  Props
 */

export const propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  renderContent: PropTypes.func,
  renderReference: PropTypes.func,
  style: PropTypes.object,
  width: PropTypes.oneOf(["content", "screen"]),
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
