import PropsTypes from "prop-types";

const buttonSchema = PropsTypes.shape({
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

export const specialEventSchema = PropsTypes.shape({
  id: PropsTypes.string,
  imageSrc: PropsTypes.string,
  imageAlt: PropsTypes.string,
  sportName: PropsTypes.string,
  sportIconFaClassName: PropsTypes.string,
  title: PropsTypes.string,
  subtitles: PropsTypes.arrayOf(PropsTypes.string),
  body: PropsTypes.string,
  buttons: PropsTypes.arrayOf(buttonSchema),
});

/**
 * @typedef {Object} SpecialEvent
 * @property {string} [id]
 * @property {string} [imageSrc]
 * @property {string} [imageAlt]
 * @property {string} [sportName]
 * @property {string} [sportIconFaClassName]
 * @property {string} [title]
 * @property {string[]} [subtitles]
 * @property {string} [body]
 * @property {Button[]} [buttons]
 */
