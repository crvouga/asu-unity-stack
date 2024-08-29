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
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  renderContent: PropTypes.func.isRequired,
  renderReference: PropTypes.func.isRequired,
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
