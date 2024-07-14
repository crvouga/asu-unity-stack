import PropTypes from "prop-types";
import React, { useMemo } from "react";
import styled from "styled-components";

import { useIsMobile } from "../../../../component-header/src/core/hooks/isMobile";
import { Button } from "../../../../components-core/src/index";
import { APP_CONFIG } from "../../config";
import { useElementContentPosition } from "../../utils/use-element-position";
import { sportSchema } from "../Navigation";
import {
  buildNewsStoryDataSource,
  newsStoryDataSourceSchema,
} from "../NewsStory/news-story-data-source/news-story-data-source-impl";
import { NewsStoryDataSourceProvider } from "../NewsStory/NewsDataSourceContext";
import { newsStoriesSkeletonData } from "../NewsStory/NewsStoryCardGrid/news-stories-skeleton-data";
import { NewsStoryCardGridDesktop } from "../NewsStory/NewsStoryCardGrid/NewsStoryCardGridDesktop";
import { NewsStoryCardGridMobile } from "../NewsStory/NewsStoryCardGrid/NewsStoryCardGridMobile";
import { useNewsStoryLoader } from "../NewsStory/use-news-story-loader";
import { mapSectionHeaderProps, SectionHeader } from "../SectionHeader";
import { Skeleton } from "../Skeleton";
import { SportsTabsDesktop, SportsTabsMobile } from "../SportsTabs";

/**
 * @typedef {import("../Navigation").Sport} Sport
 */

/**
 * @typedef {import("../NewsStoryCardGrid/NewsStoryCard").NewsStory} NewsStory
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
const SunDevilStoriesSectionInner = ({
  sports,
  sectionHeader,
  allStoriesHref,
  allStoriesLabel,
  emptyStateMessage,
  removeSportsWithNoStories,
}) => {
  const [selectedSportId, setSelectedSportId] = React.useState(sports[0]?.id);

  const sportsWithSelectedTab = sports.map(sport => ({
    ...sport,
    active: sport.id === selectedSportId,
  }));

  const selectedSport = sports.find(sport => sport.id === selectedSportId);

  const sectionHeaderRef = React.useRef();
  const sectionHeaderPosition = useElementContentPosition(sectionHeaderRef);
  const cardWidth = Math.abs(
    sectionHeaderPosition.left - sectionHeaderPosition.right
  );

  const isMobile = useIsMobile(APP_CONFIG.breakpointMobile);
  const isDesktop = !isMobile;

  const { newsStories, isLoading, allSportIds } = useNewsStoryLoader({
    sportId: selectedSportId === "all" ? null : selectedSportId,
  });

  const skeleton = isLoading;
  const skeletonTabs = Boolean(
    skeleton && removeSportsWithNoStories && allSportIds.length === 0
  );
  const empty = !isLoading && newsStories.length === 0;

  const newsStoriesFinal = skeleton ? newsStoriesSkeletonData : newsStories;
  const sportsFinal = sportsWithSelectedTab.filter(sport => {
    if (skeletonTabs) {
      return true;
    }
    if (removeSportsWithNoStories) {
      return allSportIds.includes(sport.id) || sport.id === "all";
    }
    return true;
  });
  return (
    <Root>
      <SectionHeader
        {...mapSectionHeaderProps(sectionHeader)}
        ref={sectionHeaderRef}
      />
      {selectedSport && isMobile && (
        <>
          <div className="container">
            <SportsTabsMobile
              sports={sportsFinal}
              onSportItemClick={sportId => () => setSelectedSportId(sportId)}
              skeleton={skeletonTabs}
            />
          </div>
          <NewsStoryCardGridMobile
            key={selectedSport.id}
            skeleton={skeleton}
            newsStories={newsStoriesFinal}
            slidesOffsetBefore={sectionHeaderPosition.left}
            slidesOffsetAfter={window.innerWidth - sectionHeaderPosition.right}
            cardWidth={cardWidth}
            empty={empty}
            emptyStateMessage={emptyStateMessage}
            renderBottomRightContent={() => (
              <Skeleton skeleton={skeleton} fitContent>
                <Button
                  color="maroon"
                  size="small"
                  label={allStoriesLabel}
                  href={allStoriesHref}
                  skeleton={skeleton}
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
              skeleton={skeletonTabs}
              sports={sportsFinal}
              onSportItemClick={sportId => () => setSelectedSportId(sportId)}
              moreTabOrientation="horizontal"
              moreTabColor="muted"
            />
          </div>
          <div className="container">
            <NewsStoryCardGridDesktop
              key={selectedSport.id}
              newsStories={newsStoriesFinal}
              skeleton={skeleton}
              empty={empty}
              emptyStateMessage={emptyStateMessage}
            />
            <AllStoriesRoot>
              <Skeleton skeleton={skeleton} fitContent>
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

SunDevilStoriesSectionInner.propTypes = {
  sectionHeader: SectionHeader.propTypes,
  sports: PropTypes.arrayOf(sportSchema).isRequired,
  allStoriesLabel: PropTypes.string.isRequired,
  allStoriesHref: PropTypes.string.isRequired,
  skeleton: PropTypes.bool,
  emptyStateMessage: PropTypes.string,
  removeSportsWithNoStories: PropTypes.bool,
};

export const SunDevilStoriesSection = ({
  newsStoryDataSource: newsStoryDataSourceConfig,
  ...props
}) => {
  const newsStoryDataSource = useMemo(
    () => buildNewsStoryDataSource(newsStoryDataSourceConfig),
    [newsStoryDataSourceConfig]
  );
  return (
    <NewsStoryDataSourceProvider newsStoryDataSource={newsStoryDataSource}>
      <SunDevilStoriesSectionInner {...props} />
    </NewsStoryDataSourceProvider>
  );
};
SunDevilStoriesSection.propTypes = {
  ...SunDevilStoriesSectionInner.propTypes,
  newsStoryDataSource: newsStoryDataSourceSchema,
};

/**
 * @typedef {{
 *  sports: Sport[];
 *  sectionHeader: object;
 *  allStoriesLabel: string;
 *  allStoriesHref: string;
 *  skeleton?: boolean;
 *  newsStoryDataSource: object
 *  emptyStateMessage?: string;
 *  removeSportsWithNoStories?: boolean;
 * }} SunDevilStoriesProps
 */
