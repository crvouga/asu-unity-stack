// @ts-check
import PropTypes from "prop-types";
import React, { useMemo } from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../config";
import { deepMergeLeft } from "../../utils/deep-merge-left";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { useElementContentPosition } from "../../utils/use-element-position";
import { LoadMoreButton } from "../LoadMoreButton";
import {
  buildNewsStoryDataSource,
  newsStoryDataSourcePropTypes,
} from "../NewsStory/news-story-data-source/news-story-data-source-impl";
import { NewsStoryDataSourceProvider } from "../NewsStory/NewsDataSourceContext";
import { NewsStoryCardCarousel } from "../NewsStory/NewsStoryCardGrid/NewsStoryCardCarousel";
import { NewsStoryCardGrid } from "../NewsStory/NewsStoryCardGrid/NewsStoryCardGrid";
import { useNewsStoryDataSourceLoader } from "../NewsStory/use-news-story-data-source-loader";
import { useSportIdsLoader } from "../NewsStory/use-sport-ids-loader";
import { footerButtonPropTypes, SectionFooter } from "../SectionFooter";
import { mapSectionHeaderProps, SectionHeader } from "../SectionHeader";
import { SportsTabsDesktop, SportsTabsMobile } from "../SportsTabs";
import { sportWithFooterPropTypes } from "../SportsTabs/sports-tabs";
import { configFormPropTypes } from "./config-form";
import { configInputsPropTypes, defaultConfigInputs } from "./config-inputs";
import { configLayoutPropTypes, defaultConfigLayout } from "./config-layout";
import { NewsStorySearchFormTopbar } from "./NewsStorySearchForm/NewsStorySearchFormTopbar";
import { useNewsStorySearchForm } from "./NewsStorySearchForm/use-news-story-search-form";

const Root = styled.section`
  display: flex;
  flex-direction: column;
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
  emptyStateMessage,
  removeSportsWithNoStories,
  configInputs: propsConfigInputs,
  configLayout: propsConfigLayout,
  configForm: propsConfigForm,
  mobileVariant = "carousel",
  loadMore,
  newsStoryDataSourceLoader: propsNewsStoryDataSourceLoader,
  footerButtons: propsFooterButtons,
  footerLinks: propsFooterLinks,
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

  const activeSport = sports.find(sport => Boolean(sport.active));
  const footerButtons =
    (Array.isArray(activeSport?.footerButtons) &&
    activeSport?.footerButtons.length > 0
      ? activeSport?.footerButtons
      : propsFooterButtons) ?? [];

  const footerLinks =
    (Array.isArray(activeSport?.footerLinks) &&
    activeSport?.footerLinks.length > 0
      ? activeSport?.footerLinks
      : propsFooterLinks) ?? [];

  const hasFooter = footerButtons.length > 0 || footerLinks.length > 0;
  const footer = hasFooter ? (
    <SectionFooter footerButtons={footerButtons} footerLinks={footerLinks} />
  ) : null;

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
        sports={sportsWithSelectedTab}
      />

      {isDesktop && (
        <>
          {configLayout.includeSportTabs && (
            <div className="container" style={{ paddingBottom: "32px" }}>
              <SportsTabsDesktop
                skeleton={skeletonTabs}
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
              skeletonCount={limit ?? 6}
              newsStories={newsStoryDataSourceLoader.rows}
              empty={empty}
              emptyStateMessage={emptyStateMessage}
              skeleton={skeleton}
            />
            <div style={{ paddingTop: "32px" }}>{footer}</div>
          </div>
        </>
      )}

      {isMobile && (
        <>
          {configLayout.includeSportTabs && (
            <div className="container">
              <SportsTabsMobile
                sports={sportsFinal}
                onSportItemClick={sportId => () =>
                  newsStorySearchFrom.update({ sportId })}
                skeleton={skeletonTabs}
              />
            </div>
          )}

          {mobileVariant === "carousel" && (
            <NewsStoryCardCarousel
              number
              skeleton={skeleton}
              newsStories={newsStoryDataSourceLoader.rows}
              slidesOffsetBefore={sectionHeaderPosition.left}
              slidesOffsetAfter={
                window.innerWidth - sectionHeaderPosition.right
              }
              cardWidth={cardWidth}
              empty={empty}
              emptyStateMessage={emptyStateMessage}
              renderBottomRightContent={() => footer}
            />
          )}

          {mobileVariant === "column" && (
            <div className="container">
              <NewsStoryCardGrid
                newsStories={newsStoryDataSourceLoader.rows}
                skeleton={skeleton}
                empty={empty}
                emptyStateMessage={emptyStateMessage}
                columns={1}
                skeletonCount={limit}
              />
              {footer}
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
  footerButtons: PropTypes.arrayOf(footerButtonPropTypes.isRequired),
  footerLinks: PropTypes.arrayOf(footerButtonPropTypes.isRequired),
  // @ts-ignore
  sectionHeader: SectionHeader.propTypes,
  // @ts-ignore
  sports: PropTypes.arrayOf(sportWithFooterPropTypes).isRequired,
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
 *  sports: import("../SportsTabs/sports-tabs").SportWithFooter[];
 *  sectionHeader?: object;
 *  footerButtons?: import("../SectionFooter/SectionFooter").FooterButton[]
 *  footerLinks?: import("../SectionFooter/SectionFooter").FooterLink[]
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
