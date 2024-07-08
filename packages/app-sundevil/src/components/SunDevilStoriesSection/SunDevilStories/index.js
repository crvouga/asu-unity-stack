import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { useIsMobile } from "../../../../../component-header/src/core/hooks/isMobile";
import { Button } from "../../../../../components-core/src/index";
import { APP_CONFIG } from "../../../config";
import { useElementContentPosition } from "../../../utils/use-element-position";
import { sportSchema } from "../../Navigation";
import * as NewsStory from "../../NewsStory/news-story";
import { NewsStoryCardGridDesktop } from "../../NewsStory/NewsStoryCardGrid/NewsStoryCardGridDesktop";
import { NewsStoryCardGridMobile } from "../../NewsStory/NewsStoryCardGrid/NewsStoryCardGridMobile";
import { SectionHeader } from "../../SectionHeader";
import { Skeleton } from "../../Skeleton";
import { SportsTabsDesktop, SportsTabsMobile } from "../../SportsTabs";

/**
 * @typedef {import("../Navigation").Sport} Sport
 */

/**
 * @typedef {import("../NewsStoryCardGrid/NewsStoryCard").NewsStory} NewsStory
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
 *  skeleton?: boolean;
 * }} SunDevilStoriesProps
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
 * @type {React.FC<SunDevilStoriesProps>}
 */
export const SunDevilStories = ({
  sports,
  sectionHeader,
  allStoriesHref,
  allStoriesLabel,
  skeleton,
}) => {
  // eslint-disable-next-line react/prop-types
  const [selectedTab, setSelectedTab] = React.useState(sports[0]?.id);

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

  const isMobile = useIsMobile(APP_CONFIG.breakpointMobile);
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
              skeleton={Boolean(skeleton)}
            />
          </div>
          <NewsStoryCardGridMobile
            key={selectedSport.id}
            skeleton={Boolean(skeleton)}
            newsStories={selectedSport.newsStories}
            slidesOffsetBefore={sectionHeaderPosition.left}
            slidesOffsetAfter={window.innerWidth - sectionHeaderPosition.right}
            cardWidth={cardWidth}
            renderBottomRightContent={() => (
              <Skeleton skeleton={Boolean(skeleton)} fitContent>
                <Button
                  color="maroon"
                  size="small"
                  label={allStoriesLabel}
                  href={allStoriesHref}
                  skeleton={Boolean(skeleton)}
                />
              </Skeleton>
            )}
          />
        </>
      )}
      {selectedSport && isDesktop && (
        <>
          <div className="container">
            <SportsTabsDesktop
              skeleton={Boolean(skeleton)}
              sports={sportsWithSelectedTab}
              onSportItemClick={sportId => () => setSelectedTab(sportId)}
              moreTabOrientation="horizontal"
              moreTabColor="muted"
            />
          </div>
          <div className="container">
            <NewsStoryCardGridDesktop
              key={selectedSport.id}
              newsStories={selectedSport.newsStories}
              skeleton={Boolean(skeleton)}
            />
            <AllStoriesRoot>
              <Skeleton skeleton={Boolean(skeleton)} fitContent>
                <Button
                  color="maroon"
                  size="small"
                  label={allStoriesLabel}
                  href={allStoriesHref}
                  skeleton={skeleton}
                />
              </Skeleton>
            </AllStoriesRoot>
          </div>
        </>
      )}
    </Root>
  );
};

SunDevilStories.propTypes = {
  sectionHeader: SectionHeader.propTypes,
  sports: PropTypes.arrayOf(sportWithNewsStoriesSchema).isRequired,
  allStoriesLabel: PropTypes.string.isRequired,
  allStoriesHref: PropTypes.string.isRequired,
  skeleton: PropTypes.bool,
};
