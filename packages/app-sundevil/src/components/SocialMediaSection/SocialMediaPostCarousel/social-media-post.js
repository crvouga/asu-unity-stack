import PropsTypes from "prop-types";

export const socialMediaPostPropTypes = PropsTypes.shape({
  id: PropsTypes.string.isRequired,
  imageSrc: PropsTypes.string.isRequired,
  imageAlt: PropsTypes.string.isRequired,
  username: PropsTypes.string.isRequired,
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
