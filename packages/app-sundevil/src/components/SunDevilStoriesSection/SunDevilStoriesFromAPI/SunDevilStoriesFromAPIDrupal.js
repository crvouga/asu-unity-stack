// @ts-check
import PropTypes from "prop-types";
import React, { useMemo } from "react";

import { SectionHeader } from "../../SectionHeader";
import { NewsStoryAPIMock } from "../news-story-api/news-story-api-impl-mock";
import { NewsStoryAPIProvider } from "../news-story-api/news-story-api-provider";
import { SunDevilStoriesFromAPI } from "./SunDevilStoriesFromAPI";

export const SunDevilStoriesFromAPIDrupal = ({
  sectionHeader,
  allStoriesHref,
  allStoriesLabel,
  apiUrl,
}) => {
  // const newsStoryAPI = useMemo(() => NewsStoryAPIDrupal({ apiUrl }), [apiUrl]);
  const newsStoryAPI = useMemo(() => NewsStoryAPIMock(), [apiUrl]);
  // eslint-disable-next-line no-console
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
};
