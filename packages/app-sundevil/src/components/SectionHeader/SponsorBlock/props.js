/* eslint-disable react/prop-types */
// @ts-check
import PropTypes from "prop-types";

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

export const isSponsorBlockStatic = sponsorBlock => {
  return (
    typeof sponsorBlock?.logo === "string" &&
    sponsorBlock?.logo.length.trim() > 0
  );
};

export const isSponsorGoogleAd = sponsorBlock => {
  return (
    typeof sponsorBlock?.googleAdHead === "string" &&
    sponsorBlock?.googleAdHead?.trim().length > 0 &&
    typeof sponsorBlock?.googleAdBody === "string" &&
    sponsorBlock?.googleAdBody.trim().length > 0
  );
};

export const isSponsorBlockValid = sponsorBlock => {
  return isSponsorBlockStatic(sponsorBlock) || isSponsorGoogleAd(sponsorBlock);
};
