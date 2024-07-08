// @ts-check
import PropTypes from "prop-types";
import React, { useMemo } from "react";

import { buildNewsStoryAPI } from "../../NewsStory/news-story-api/news-story-api-impl";
import { NewsStoryAPIProvider } from "../../NewsStory/news-story-api/news-story-api-provider";
import { SectionHeader } from "../../SectionHeader";
import { SunDevilStoriesFromAPI } from "./SunDevilStoriesFromAPI";

export const SunDevilStoriesFromAPIDrupal = ({
  sectionHeader,
  allStoriesHref,
  allStoriesLabel,
  apiUrl,
  apiImpl,
}) => {
  const newsStoryAPI = useMemo(
    () => buildNewsStoryAPI({ apiUrl, apiImpl }),
    [apiUrl, apiImpl]
  );

  return (
    <NewsStoryAPIProvider newsStoryAPI={newsStoryAPI}>
      <SunDevilStoriesFromAPI
        sectionHeader={sectionHeader}
        allStoriesHref={allStoriesHref}
        allStoriesLabel={allStoriesLabel}
      />
    </NewsStoryAPIProvider>
  );
};

SunDevilStoriesFromAPIDrupal.propTypes = {
  apiUrl: PropTypes.string.isRequired,
  sectionHeader: SectionHeader.propTypes,
  allStoriesLabel: PropTypes.string.isRequired,
  allStoriesHref: PropTypes.string.isRequired,
  apiImpl: PropTypes.string,
};
