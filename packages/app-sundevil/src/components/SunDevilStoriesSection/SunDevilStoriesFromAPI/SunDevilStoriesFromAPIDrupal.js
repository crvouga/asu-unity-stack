// @ts-check
import PropTypes from "prop-types";
import React, { useMemo } from "react";

import { SectionHeader } from "../../SectionHeader";
import { NewsStoryAPI } from "../news-story-api/news-story-api-impl";
import { NewsStoryAPIProvider } from "../news-story-api/news-story-api-provider";
import { SunDevilStoriesFromAPI } from "./SunDevilStoriesFromAPI";

export const SunDevilStoriesFromAPIDrupal = ({
  sectionHeader,
  allStoriesHref,
  allStoriesLabel,
  apiUrl,
  apiImpl,
}) => {
  const newsStoryAPI = useMemo(
    () => NewsStoryAPI({ apiUrl, apiImpl }),
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
