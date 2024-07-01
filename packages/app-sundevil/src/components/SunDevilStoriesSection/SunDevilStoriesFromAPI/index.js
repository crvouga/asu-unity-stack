import PropTypes from "prop-types";
import React from "react";

import { SunDevilStoriesFromAPIDrupal } from "./SunDevilStoriesFromAPIDrupal";

const drupalPropTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  sponsor_block: PropTypes.object,
  api_endpoint: PropTypes.string.isRequired,
  all_stories_href: PropTypes.string.isRequired,
  all_stories_label: PropTypes.string.isRequired,
};

const drupalPropsToProps = maybeDrupalProps => {
  const drupalProps = maybeDrupalProps ?? {};
  return {
    apiUrl: drupalProps.api_endpoint,
    allStoriesHref: drupalProps.all_stories_href,
    allStoriesLabel: drupalProps.all_stories_label,
    sectionHeader: {
      title: drupalProps.title,
      sponsorBlock: drupalProps.sponsor_block[0],
      subtitle: undefined,
    },
  };
};

export const SunDevilStoriesFromAPI = drupalProps => {
  const props = drupalPropsToProps(drupalProps);
  return <SunDevilStoriesFromAPIDrupal {...props} />;
};

SunDevilStoriesFromAPI.propTypes = drupalPropTypes;
