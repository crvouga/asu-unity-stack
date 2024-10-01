import PropsTypes from "prop-types";

export const socialMediaPostPropTypes = PropsTypes.shape({
  id: PropsTypes.string,
  imageSrc: PropsTypes.string,
  imageAlt: PropsTypes.string,
  username: PropsTypes.string,
  caption: PropsTypes.string,
  avatarSrc: PropsTypes.string,
  avatarAlt: PropsTypes.string,
  href: PropsTypes.string,
});
/**
 * @typedef {Object} SocialMediaPost
 * @property {string} id
 * @property {string} username
 * @property {string} imageSrc
 * @property {string} [imageAlt]
 * @property {string} [caption]
 * @property {string} [avatarSrc]
 * @property {string} [avatarAlt]
 * @property {string} [href]
 */
