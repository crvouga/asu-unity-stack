import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { sportSchema } from "../../../../component-game-list/src/core/components/Navigation";
import {
  SportsTabsDesktop,
  SportsTabsMobile,
} from "../../../../component-game-list/src/core/components/SportsTabs";
import { useIsMobile } from "../../../../component-header/src/core/hooks/isMobile";
import { Button } from "../../../../components-core/src/index";
import { APP_CONFIG } from "../../config";
import { RenderReact } from "../../utils/react-render";
import { useElementContentPosition } from "../../utils/use-element-position";
import { SectionHeader } from "../SectionHeader";
import * as NewsStory from "./news-story";
import { NewsStoryCardGridDesktop } from "./NewsStoryCardGrid/NewsStoryCardGridDesktop";
import { NewsStoryCardGridMobile } from "./NewsStoryCardGrid/NewsStoryCardGridMobile";

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
  newsStories: PropTypes.arrayOf(NewsStory.newsStorySchema).isRequired,
});

/**
 * @typedef {{
 *  sports: SportWithNewsStories[];
 *  sectionHeader: object;
 *  allStoriesLabel: string;
 *  allStoriesHref: string;
 * }} SunDevilStoriesSectionProps
 */

const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const AllStoriesRoot = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
`;

/**
 * @type {React.FC<SunDevilStoriesSectionProps>}
 */
export const SunDevilStoriesSection = ({
  sports,
  sectionHeader,
  allStoriesHref,
  allStoriesLabel,
}) => {
  // eslint-disable-next-line react/prop-types
  const [selectedTab, setSelectedTab] = React.useState(sports[0].id);

  const sportsWithSelectedTab = sports.map(sport => ({
    ...sport,
    active: sport.id === selectedTab,
  }));

  const selectedSport = sports.find(sport => sport.id === selectedTab);

  const sectionHeaderRef = React.useRef();
  const sectionHeaderPosition = useElementContentPosition(sectionHeaderRef);
  const cardWidth = Math.abs(
    sectionHeaderPosition.left - sectionHeaderPosition.right
  );

  const isMobile = useIsMobile(APP_CONFIG.breakpoint);
  const isDesktop = !isMobile;

  return (
    <Root>
      <SectionHeader {...sectionHeader} ref={sectionHeaderRef} />

      {selectedSport && isMobile && (
        <>
          <div className="container">
            <SportsTabsMobile
              sports={sportsWithSelectedTab}
              onSportItemClick={sportId => () => setSelectedTab(sportId)}
            />
          </div>
          <NewsStoryCardGridMobile
            newsStories={selectedSport.newsStories}
            slidesOffsetBefore={sectionHeaderPosition.left}
            slidesOffsetAfter={window.innerWidth - sectionHeaderPosition.right}
            cardWidth={cardWidth}
            renderBottomRightContent={() => (
              <Button
                color="maroon"
                size="small"
                label={allStoriesLabel}
                href={allStoriesHref}
              />
            )}
          />
        </>
      )}
      {selectedSport && isDesktop && (
        <>
          <div className="container">
            <SportsTabsDesktop
              sports={sportsWithSelectedTab}
              onSportItemClick={sportId => () => setSelectedTab(sportId)}
              moreTabOrientation="horizontal"
              moreTabColor="muted"
            />
          </div>
          <div className="container">
            <NewsStoryCardGridDesktop newsStories={selectedSport.newsStories} />
            <AllStoriesRoot>
              <Button
                color="maroon"
                size="small"
                label={allStoriesLabel}
                href={allStoriesHref}
              />
            </AllStoriesRoot>
          </div>
        </>
      )}
    </Root>
  );
};

SunDevilStoriesSection.propTypes = {
  sectionHeader: SectionHeader.propTypes,
  sports: PropTypes.arrayOf(sportWithNewsStoriesSchema).isRequired,
  allStoriesLabel: PropTypes.string.isRequired,
  allStoriesHref: PropTypes.string.isRequired,
};

export const initSunDevilsStoriesSection = ({ targetSelector, props }) => {
  RenderReact(
    SunDevilStoriesSection,
    props,
    document.querySelector(targetSelector)
  );
};
