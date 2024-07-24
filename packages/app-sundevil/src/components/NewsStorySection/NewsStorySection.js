// @ts-check
import PropTypes from "prop-types";
import React, { useMemo } from "react";
import styled from "styled-components";

import { Button } from "../../../../components-core/src/index";
import { APP_CONFIG } from "../../config";
import { deepMergeLeft } from "../../utils/deep-merge-left";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { useElementContentPosition } from "../../utils/use-element-position";
import { LoadMoreButton } from "../LoadMoreButton";
import { sportPropTypes } from "../Navigation";
import {
  buildNewsStoryDataSource,
  newsStoryDataSourcePropTypes,
} from "../NewsStory/news-story-data-source/news-story-data-source-impl";
import { NewsStoryDataSourceProvider } from "../NewsStory/NewsDataSourceContext";
import { NewsStoryCardCarousel } from "../NewsStory/NewsStoryCardGrid/NewsStoryCardCarousel";
import { NewsStoryCardGrid } from "../NewsStory/NewsStoryCardGrid/NewsStoryCardGrid";
import { useNewsStoryDataSourceLoader } from "../NewsStory/use-news-story-data-source-loader";
import { useSportIdsLoader } from "../NewsStory/use-sport-ids-loader";
import { mapSectionHeaderProps, SectionHeader } from "../SectionHeader";
import { Skeleton } from "../Skeleton";
import { SportsTabsDesktop, SportsTabsMobile } from "../SportsTabs";
import { configFormPropTypes } from "./config-form";
import { configInputsPropTypes, defaultConfigInputs } from "./config-inputs";
import { configLayoutPropTypes, defaultConfigLayout } from "./config-layout";
import { NewsStorySearchFormTopbar } from "./NewsStorySearchForm/NewsStorySearchFormTopbar";
import { useNewsStorySearchForm } from "./NewsStorySearchForm/use-news-story-search-form";

/**
 * @typedef {import("../Navigation").Sport} Sport
 */

const Root = styled.section`
  display: flex;
  flex-direction: column;
`;

const AllStoriesRoot = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
`;

const LoadButtonRoot = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 48px;
  width: 100%;
  align-items: center;
`;

const DEFAULT_LIMIT = 6;

/**
 * @type {React.FC<NewsStorySectionProps>}
 */
const NewsStorySectionInner = ({
  sports,
  sectionHeader,
  allStoriesHref,
  allStoriesLabel,
  emptyStateMessage,
  removeSportsWithNoStories,
  configInputs: propsConfigInputs,
  configLayout: propsConfigLayout,
  configForm: propsConfigForm,
  mobileVariant = "carousel",
  loadMore,
  newsStoryDataSourceLoader: propsNewsStoryDataSourceLoader,
}) => {
  const limit = propsNewsStoryDataSourceLoader?.limit ?? DEFAULT_LIMIT;
  /** @type {import("./config-form").ConfigForm} */
  const configForm = propsConfigForm ?? {};

  /** @type {import("./config-layout").ConfigLayout} */
  const configLayout = deepMergeLeft(
    propsConfigLayout ?? {},
    defaultConfigLayout
  );

  /** @type {import("./config-inputs").ConfigInputs} */
  const configInputs = deepMergeLeft(
    propsConfigInputs ?? {},
    defaultConfigInputs
  );

  const newsStorySearchFrom = useNewsStorySearchForm({
    enableUrlState: false,
    sportId: sports.find(sport => sport.active)?.id ?? "all",
  });

  const sportsWithSelectedTab = sports.map(sport => ({
    ...sport,
    active: sport.id === newsStorySearchFrom.sportId,
  }));

  const sectionHeaderRef = React.useRef();
  const sectionHeaderPosition = useElementContentPosition(sectionHeaderRef);
  const cardWidth = Math.abs(
    sectionHeaderPosition.left - sectionHeaderPosition.right
  );

  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const isDesktop = !isMobile;

  const { allSportIds } = useSportIdsLoader();

  const newsStoryDataSourceLoader = useNewsStoryDataSourceLoader({
    limit,
    searchQuery: newsStorySearchFrom.debouncedSearchQuery,
    newsType: newsStorySearchFrom.newsType,
    sportId:
      newsStorySearchFrom.sportId === "all"
        ? null
        : newsStorySearchFrom.sportId,
  });

  const skeleton = newsStoryDataSourceLoader.isLoadingInitial;
  const skeletonTabs = Boolean(
    skeleton && removeSportsWithNoStories && allSportIds.length === 0
  );
  const empty =
    !newsStoryDataSourceLoader.isLoading &&
    newsStoryDataSourceLoader.rows.length === 0;

  const sportsFinal = sportsWithSelectedTab.filter(sport => {
    if (skeletonTabs) {
      return true;
    }
    if (removeSportsWithNoStories) {
      return allSportIds.includes(sport.id) || sport.id === "all";
    }
    return true;
  });

  const hasAllStories = Boolean(allStoriesHref && allStoriesLabel);

  return (
    <Root>
      <SectionHeader
        {...mapSectionHeaderProps(sectionHeader)}
        ref={sectionHeaderRef}
        style={{ paddingBottom: "32px" }}
      />

      <NewsStorySearchFormTopbar
        className="container"
        newsStorySearchForm={newsStorySearchFrom}
        configInputs={configInputs}
        configLayout={configLayout}
        configForm={configForm}
        // @ts-ignore
        sports={sportsWithSelectedTab}
      />

      {isDesktop && (
        <>
          {configLayout.includeSportTabs && (
            <div className="container" style={{ paddingBottom: "32px" }}>
              <SportsTabsDesktop
                skeleton={skeletonTabs}
                // @ts-ignore
                sports={sportsFinal}
                onSportItemClick={sportId => () =>
                  newsStorySearchFrom.update({ sportId })}
                moreTabOrientation="horizontal"
                moreTabColor="muted"
              />
            </div>
          )}
          <div className="container">
            <NewsStoryCardGrid
              newsStories={newsStoryDataSourceLoader.rows}
              skeleton={skeleton}
              // @ts-ignore
              empty={empty}
              emptyStateMessage={emptyStateMessage}
              skeletonCount={limit}
            />
            {hasAllStories && (
              <AllStoriesRoot>
                {/* @ts-ignore */}
                <Skeleton skeleton={skeleton} fitContent>
                  <Button
                    color="maroon"
                    size="small"
                    label={allStoriesLabel}
                    href={allStoriesHref}
                    // @ts-ignore
                    skeleton={skeleton}
                  />
                </Skeleton>
              </AllStoriesRoot>
            )}
          </div>
        </>
      )}

      {isMobile && (
        <>
          {configLayout.includeSportTabs && (
            <div className="container">
              <SportsTabsMobile
                // @ts-ignore
                sports={sportsFinal}
                onSportItemClick={sportId => () =>
                  newsStorySearchFrom.update({ sportId })}
                skeleton={skeletonTabs}
              />
            </div>
          )}

          {mobileVariant === "carousel" && (
            <NewsStoryCardCarousel
              skeleton={skeleton}
              // @ts-ignore
              newsStories={newsStoryDataSourceLoader.rows}
              slidesOffsetBefore={sectionHeaderPosition.left}
              slidesOffsetAfter={
                window.innerWidth - sectionHeaderPosition.right
              }
              cardWidth={cardWidth}
              empty={empty}
              emptyStateMessage={emptyStateMessage}
              renderBottomRightContent={() =>
                hasAllStories && (
                  // @ts-ignore
                  <Skeleton skeleton={skeleton} fitContent>
                    <Button
                      color="maroon"
                      size="small"
                      label={allStoriesLabel}
                      href={allStoriesHref}
                      // @ts-ignore
                      skeleton={skeleton}
                    />
                  </Skeleton>
                )
              }
            />
          )}

          {mobileVariant === "column" && (
            <div className="container">
              <NewsStoryCardGrid
                newsStories={newsStoryDataSourceLoader.rows}
                skeleton={skeleton}
                // @ts-ignore
                empty={empty}
                emptyStateMessage={emptyStateMessage}
                columns={1}
                skeletonCount={limit}
              />
              {hasAllStories && (
                <AllStoriesRoot>
                  {/* @ts-ignore */}
                  <Skeleton skeleton={skeleton} fitContent>
                    <Button
                      color="maroon"
                      size="small"
                      label={allStoriesLabel}
                      href={allStoriesHref}
                      // @ts-ignore
                      skeleton={skeleton}
                    />
                  </Skeleton>
                </AllStoriesRoot>
              )}
            </div>
          )}
        </>
      )}

      {configLayout.includeLoadMore &&
        loadMore &&
        newsStoryDataSourceLoader.showLoadNextPage && (
          <LoadButtonRoot>
            <LoadMoreButton
              {...loadMore}
              onClick={newsStoryDataSourceLoader.loadNextPage}
              loading={newsStoryDataSourceLoader.isLoading}
            />
          </LoadButtonRoot>
        )}
    </Root>
  );
};

NewsStorySectionInner.propTypes = {
  // @ts-ignore
  sectionHeader: SectionHeader.propTypes,
  // @ts-ignore
  sports: PropTypes.arrayOf(sportPropTypes).isRequired,
  allStoriesLabel: PropTypes.string,
  allStoriesHref: PropTypes.string,
  skeleton: PropTypes.bool,
  emptyStateMessage: PropTypes.string,
  removeSportsWithNoStories: PropTypes.bool,
  newsStoryDataSource: newsStoryDataSourcePropTypes,
  // @ts-ignore
  newsStoryDataSourceLoader: PropTypes.shape({
    limit: PropTypes.number,
  }),
  // @ts-ignore
  loadMore: LoadMoreButton.propTypes,
  // @ts-ignore
  configForm: configFormPropTypes,
  // @ts-ignore
  configLayout: configLayoutPropTypes,
  // @ts-ignore
  configInputs: configInputsPropTypes,
};

/**
 * @typedef {{
 *  sports: Sport[];
 *  sectionHeader: object;
 *  allStoriesLabel?: string;
 *  allStoriesHref?: string;
 *  skeleton?: boolean;
 *  newsStoryDataSource: object
 *  newsStoryDataSourceLoader?: {
 *    limit: number;
 *  }
 *  emptyStateMessage?: string;
 *  removeSportsWithNoStories?: boolean;
 *  loadMore?: import("../LoadMoreButton").LoadMoreButtonProps
 *  configForm?: import("./config-form").ConfigForm
 *  configLayout?: import("./config-layout").ConfigLayout
 *  configInputs?: import("./config-inputs").ConfigInputs
 *  mobileVariant?: "carousel" | "column"
 * }} NewsStorySectionProps
 */

export const NewsStorySection = ({
  newsStoryDataSource: newsStoryDataSourceConfig,
  ...props
}) => {
  const newsStoryDataSource = useMemo(
    () => buildNewsStoryDataSource(newsStoryDataSourceConfig),
    [newsStoryDataSourceConfig]
  );
  return (
    <NewsStoryDataSourceProvider newsStoryDataSource={newsStoryDataSource}>
      {/* @ts-ignore */}
      <NewsStorySectionInner {...props} />
    </NewsStoryDataSourceProvider>
  );
};
NewsStorySection.propTypes = NewsStorySectionInner.propTypes;
