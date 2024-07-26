import PropsTypes from "prop-types";

import { iconPropType } from "../Icon_";

const buttonPropTypes = PropsTypes.shape({
  label: PropsTypes.string,
  href: PropsTypes.string,
  color: PropsTypes.oneOf(["maroon", "dark"]),
});

/**
 * @typedef {Object} Button
 * @property {string} label
 * @property {string} href
 * @property {"maroon" | "dark"} color
 */

export const specialEventPropTypes = PropsTypes.shape({
  id: PropsTypes.string,
  imageSrc: PropsTypes.string,
  imageAlt: PropsTypes.string,
  sportName: PropsTypes.string,
  sportIcon: PropsTypes.string,
  sportIcon: iconPropType,
  title: PropsTypes.string,
  subtitles: PropsTypes.arrayOf(PropsTypes.string),
  body: PropsTypes.string,
  buttons: PropsTypes.arrayOf(buttonPropTypes),
});

/**
 * @typedef {Object} SpecialEvent
 * @property {string} [id]
 * @property {string} [imageSrc]
 * @property {string} [imageAlt]
 * @property {string} [sportName]
 * @property {string} [sportIcon]
 * @property {any} [sportIcon]
 * @property {string} [title]
 * @property {string[]} [subtitles]
 * @property {string} [body]
 * @property {Button[]} [buttons]
 */
