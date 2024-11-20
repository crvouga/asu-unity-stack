import PropTypes from "prop-types";

import { buttonPropTypes } from "../Button/button-prop";
import { socialPropType } from "./JoinTheConversation";

/**
 * @typedef {Object} SectionHeaderProps
 * @property {string} [title]
 * @property {string} [subtitle]
 * @property {string} [subtitleFontWeight]
 * @property {Array<{ label: string, color?: string; onClick?: () => void; href?: string, fontWeight?: string; url?: string }>} [subtitleLinks]
 * @property {Array<import("../Button/button-prop").ButtonProp>} [subtitleButtons]
 * @property {Array<{ id: string, label: string, active: boolean }>} [tabs]
 * @property {Array<import("./JoinTheConversation").SocialProp>} [social]
 * @property {{name: string, logo: string, text: string, url: string, adId?: string | number}} [sponsorBlock]
 * @property {boolean} [darkMode]
 * @property {(...params: any[]) => void} [onTabItemClick]
 * @property {React.CSSProperties} [style]
 *
 */

export const sponsorBlockPropTypes = PropTypes.shape({
  name: PropTypes.string,
  logo: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  adId: PropTypes.string,
});

export const sectionHeaderPropTypes = PropTypes.shape({
  title: PropTypes.string,
  subtitle: PropTypes.string,
  subtitleFontWeight: PropTypes.string,
  subtitleLinks: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      href: PropTypes.string,
      fontWeight: PropTypes.string,
      url: PropTypes.string,
      color: PropTypes.string,
    })
  ),
  subtitleButtons: PropTypes.arrayOf(buttonPropTypes),
  sponsorBlock: sponsorBlockPropTypes,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      active: PropTypes.bool,
    })
  ),
  social: PropTypes.arrayOf(socialPropType),

  onTabItemClick: PropTypes.func,
  darkMode: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
});

export const mapPropsSponsorBlock = props => {
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

  // eslint-disable-next-line camelcase
  const sponsor_block = props?.sponsor_block;

  if (Array.isArray(sponsor_block) && sponsor_block?.[0]) {
    return {
      ...props,
      sponsorBlock: sponsor_block[0],
    };
  }

  return {
    ...props,
    sponsorBlock: sponsor_block,
  };
};

/**
 * Used for drupal integration. Drupal team sends weird props so we'll fix them here.
 */
export const mapSectionHeaderProps = props => {
  return mapPropsSponsorBlock(props);
};
