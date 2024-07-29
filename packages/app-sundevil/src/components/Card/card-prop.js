import PropTypes from "prop-types";

import { buttonPropTypes } from "../Button/button-prop";

// https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=5684-466&t=Lk449MGqW6u2RcCn-0
/**
 * @typedef {{
 *  imageSrc: string
 *  imageAlt: string
 *  title: string
 *  description: string
 *  buttons?: import("../../Button/button-prop").ButtonProp[]
 * }} CardProp
 */

export const cardPropTypes = PropTypes.shape({
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  buttons: PropTypes.arrayOf(buttonPropTypes),
});
