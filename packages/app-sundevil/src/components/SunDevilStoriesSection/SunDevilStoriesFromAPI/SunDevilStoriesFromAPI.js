import PropTypes from "prop-types";
import React from "react";

import { SectionHeader } from "../../SectionHeader";
import { useNewsStoryAPILoader } from "../news-story-api/use-news-story-api";
import { SunDevilStories } from "../SunDevilStories";
import { skeletonSports } from "./skeleton-props";

export const SunDevilStoriesFromAPI = ({
  sectionHeader,
  allStoriesHref,
  allStoriesLabel,
}) => {
  const newsStoryState = useNewsStoryAPILoader();
  switch (newsStoryState.t) {
    case "ok": {
      return (
        <SunDevilStories
          allStoriesHref={allStoriesHref}
          allStoriesLabel={allStoriesLabel}
          sectionHeader={{ ...sectionHeader }}
          sports={newsStoryState.value}
        />
      );
    }

    default: {
      return (
        <SunDevilStories
          allStoriesHref={allStoriesHref}
          allStoriesLabel={allStoriesLabel}
          sectionHeader={{ ...sectionHeader }}
          sports={skeletonSports}
          skeleton
        />
      );
    }
  }
};

SunDevilStoriesFromAPI.propTypes = {
  sectionHeader: SectionHeader.propTypes,
  allStoriesLabel: PropTypes.string,
  allStoriesHref: PropTypes.string,
};
