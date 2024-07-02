import PropTypes from "prop-types";
import React from "react";

import { RenderReact } from "../../utils/react-render";
import { iconToFaClassName } from "../drupal-integration";
import { SocialMediaSectionEmbedded as SocialMediaSectionEmbeddedCore } from "./SocialMediaSectionEmbedded";

const drupalSocialMediaHandlePropTypes = PropTypes.shape({
  // eslint-disable-next-line react/forbid-prop-types
  icon: PropTypes.object,
  link: PropTypes.string,
});

const drupalSponsorBlockPropTypes = PropTypes.shape({
  logo: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
  name: PropTypes.string,
});

const drupalPropTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  embed_code: PropTypes.string,
  feed_type: PropTypes.string,
  social_media_handles: PropTypes.arrayOf(drupalSocialMediaHandlePropTypes),
  sponsor_block: PropTypes.arrayOf(drupalSponsorBlockPropTypes),
};

const ensureArray = value => (Array.isArray(value) ? value : []);
const ensureRecord = value => (typeof value === "object" ? value ?? {} : {});

/** @type {(drupalProps: unknown) => import("./SocialMediaSectionEmbedded").Props} */
const drupalPropsToProps = maybeDrupalProps => {
  const drupalProps = ensureRecord(maybeDrupalProps);
  return {
    embedCode: drupalProps?.embed_code,
    sectionHeader: {
      title: drupalProps?.title,
      subtitle: drupalProps?.body,
      social: ensureArray(drupalProps?.social_media_handles).map(handle => {
        return {
          url: handle?.link,
          faClassName: iconToFaClassName(handle?.icon),
        };
      }),
      sponsorBlock: ensureRecord(drupalProps?.sponsor_block?.[0]),
      onTabItemClick: () => {},
      tabs: undefined,
    },
  };
};

export const SocialMediaSectionEmbedded = drupalProps => {
  const props = drupalPropsToProps(drupalProps);
  return <SocialMediaSectionEmbeddedCore {...props} />;
};

SocialMediaSectionEmbedded.propTypes = drupalPropTypes;

export const initSocialMediaSectionEmbedded = ({ targetSelector, props }) => {
  RenderReact(
    SocialMediaSectionEmbedded,
    props,
    document.querySelector(targetSelector)
  );
};
