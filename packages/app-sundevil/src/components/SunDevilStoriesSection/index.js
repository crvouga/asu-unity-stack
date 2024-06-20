import PropTypes from "prop-types";
import React from "react";

import { sportSchema } from "../../../../component-game-list/src/core/components/Navigation";
import { newsStorySchema } from "./NewsStoryCardGrid/NewsStoryCard";
import { NewsStoryCardGrid } from "./NewsStoryCardGrid/NewsStoryCardGrid";

/**
 * @typedef {import("../../../../component-game-list/src/core/components/Navigation").Sport} Sport
 */

/**
 * @typedef {import("./NewsStoryCardGrid/NewsStoryCard").NewsStory} NewsStory
 */

/**
 * @typedef {Sport & { newsStories: NewsStory[]} } SportWithNewsStories
 */

const sportWithNewsStoriesSchema = PropTypes.shape({
  ...sportSchema,
  newsStories: PropTypes.arrayOf(newsStorySchema).isRequired,
});

/**
 * @typedef {{
 *  sports: SportWithNewsStories[];
 * }} SunDevilStoriesSectionProps
 */

/**
 * @type {React.FC<SunDevilStoriesSectionProps>}
 */
export const SunDevilStoriesSection = ({ sports }) => {
  // eslint-disable-next-line react/prop-types
  const [selectedTab, setSelectedTab] = React.useState(sports[0].id);

  const sportsWithSelectedTab = sports.map(sport => ({
    ...sport,
    active: sport.id === selectedTab,
  }));

  const selectedSport = sports.find(sport => sport.id === selectedTab);
  return (
    <div>
      {/* <SportsNavigation
        sports={sportsWithSelectedTab}
        onSportItemClick={sportId => () => setSelectedTab(sportId)}
      /> */}
      {selectedSport && (
        <NewsStoryCardGrid newsStories={selectedSport.newsStories} />
      )}
    </div>
  );
};

SunDevilStoriesSection.propTypes = {
  sports: PropTypes.arrayOf(sportWithNewsStoriesSchema),
};
