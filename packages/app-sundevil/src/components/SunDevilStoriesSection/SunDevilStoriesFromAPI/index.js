import PropTypes from "prop-types";
import React from "react";

import { RenderReact } from "../../../utils/react-render";
import { SectionHeader } from "../../SectionHeader";
import { useNewsStoryAPILoader } from "../news-story-api/use-news-story-api";
import { SunDevilStories } from "../SunDevilStories";
import { skeletonSports } from "./skeleton-props";

/**
 * @typedef {import("../../../../../component-game-list/src/core/components/Navigation").Sport} Sport
 */

/**
 * @typedef {import("../news-story").NewsStory} NewsStory
 */

/**
 * @typedef {Sport & { newsStories: NewsStory[]} } RemoteResult
 */

/**
 * @typedef {Sport & { newsStories: NewsStory[]} } SportWithNewsStories
 */

/**
 * @typedef {{
 *  sports: SportWithNewsStories[];
 *  sectionHeader: object;
 *  allStoriesLabel: string;
 *  allStoriesHref: string;
 * }} SunDevilStoriesProps
 */

/**
 * @type {React.FC<SunDevilStoriesProps>}
 */
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
  allStoriesLabel: PropTypes.string.isRequired,
  allStoriesHref: PropTypes.string.isRequired,
};

export const initSunDevilsStoriesFromAPI = ({ targetSelector, props }) => {
  RenderReact(SunDevilStories, props, document.querySelector(targetSelector));
};
