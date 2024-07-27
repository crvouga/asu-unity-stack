import PropTypes from "prop-types";

import { buttonPropTypes } from "../../Button/button-prop";

/**
 * @typedef {{
 *  imageSrc: string;
 *  imageAlt: string;
 *  title: string;
 *  body: string;
 *  buttons: import("../Button/button-prop").ButtonProp[];
 * }} Props
 */

export const propTypes = PropTypes.shape({
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  buttons: PropTypes.arrayOf(buttonPropTypes),
});
