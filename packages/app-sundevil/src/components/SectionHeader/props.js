/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";

import { buttonPropTypes } from "../Button/button-prop";
import { socialPropType } from "./SocialSection";

/**
 * @typedef {Object} SponsorBlockProps
 * @property {string} [name]
 * @property {string} [logo]
 * @property {string} [text]
 * @property {string} [url]
 * @property {string} [adId]
 * @property {string} [googleAdHead]
 * @property {string} [googleAdBody]
 * @property {string} [googleAdWidth]
 * @property {string} [googleAdHeight]
 *
 */

export const sponsorBlockPropTypes = PropTypes.shape({
  name: PropTypes.string,
  logo: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  adId: PropTypes.string,
  googleAdHead: PropTypes.string,
  googleAdBody: PropTypes.string,
  googleAdWidth: PropTypes.string,
  googleAdHeight: PropTypes.string,
});

const mapPropsSponsorBlock = props => {
  const sponsorBlock = props?.sponsorBlock;
  if (Array.isArray(sponsorBlock) && sponsorBlock?.[0]) {
    return {
      ...props,
      sponsorBlock: sponsorBlock?.[0],
    };
  }

  if (sponsorBlock) {
    return {
      ...props,
      sponsorBlock,
    };
  }

  if (Array.isArray(props?.sponsor_block) && props?.sponsor_block?.[0]) {
    return {
      ...props,
      sponsorBlock: props?.sponsor_block[0],
    };
  }

  return {
    ...props,
    sponsorBlock: props?.sponsor_block,
  };
};

/**
 * @typedef {Object} LinkProps
 * @property {string} label
 * @property {string} href
 * @property {string} fontWeight
 * @property {string} url
 * @property {string} color
 * @property {() => void} onClick
 */

const linkPropTypes = PropTypes.shape({
  label: PropTypes.string,
  href: PropTypes.string,
  fontWeight: PropTypes.string,
  url: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
});

/**
 * @typedef {Object} TabProps
 * @property {string} id
 * @property {string} label
 * @property {boolean} active
 */

const tabProps = PropTypes.shape({
  id: PropTypes.string,
  label: PropTypes.string,
  active: PropTypes.bool,
});

/**
 * @typedef {Object} SectionHeaderProps
 * @property {string} [title]
 * @property {string} [subtitle]
 * @property {string} [subtitleFontWeight]
 * @property {Array<LinkProps>} [subtitleLinks]
 * @property {Array<import("../Button/button-prop").ButtonProp>} [subtitleButtons]
 * @property {Array<TabProps>} [tabs]
 * @property {Array<import("./SocialSection").SocialProp>} [social]
 * @property {SponsorBlockProps} [sponsorBlock]
 * @property {boolean} [darkMode]
 * @property {(...params: any[]) => void} [onTabItemClick]
 * @property {React.CSSProperties} [style]
 *
 */

export const sectionHeaderPropTypes = PropTypes.shape({
  title: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleFontWeight: PropTypes.string,
  subtitleLinks: PropTypes.arrayOf(linkPropTypes),
  subtitleButtons: PropTypes.arrayOf(buttonPropTypes),
  sponsorBlock: sponsorBlockPropTypes,
  tabs: PropTypes.arrayOf(tabProps),
  social: PropTypes.arrayOf(socialPropType),
  onTabItemClick: PropTypes.func,
  darkMode: PropTypes.bool,
  style: PropTypes.object,
});

/**
 * Used for drupal integration. Drupal team sends weird props so we'll fix them here.
 */
export const mapSectionHeaderProps = props => {
  return mapPropsSponsorBlock(props);
};
