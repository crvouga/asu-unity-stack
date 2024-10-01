import PropTypes from "prop-types";
import React, { useMemo } from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../config";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { useElementContentXPosition } from "../../utils/use-element-content-x-position";
import { ButtonProp } from "../Button";
import { EmptyStateMessage } from "../EmptyState/EmptyStateMessage";
import * as NewsStory from "../NewsStory/news-story";
import {
  buildNewsStoryDataSource,
  newsStoryDataSourcePropTypes,
} from "../NewsStory/news-story-data-source/news-story-data-source-impl";
import { NewsStoryDataSourceProvider } from "../NewsStory/NewsDataSourceContext";
import {
  configCardPropTypes,
  NewsStoryCardConfigProvider,
} from "../NewsStory/NewsStoryCardGrid/config-card";
import { DEFAULT_EMPTY_STATE_MESSAGE } from "../NewsStory/NewsStoryCardGrid/news-stories-skeleton-data";
import { NewsStoryCardCarousel } from "../NewsStory/NewsStoryCardGrid/NewsStoryCardCarousel";
import { NewsStoryCardGridFeatured } from "../NewsStory/NewsStoryCardGrid/NewsStoryCardGrid";
import { useNewsStoryDataSourceLoader } from "../NewsStory/use-news-story-data-source-loader";
import {
  footerButtonPropTypes,
  footerLinkPropTypes,
  SectionFooter,
} from "../SectionFooter";
import { mapSectionHeaderProps, SectionHeader } from "../SectionHeader";
import { useUrlSportId } from "../Sport/use-url-sport-id";

/**
 * @typedef {import("../Navigation").Sport} Sport
 */

/**
 * @typedef {import("../NewsStoryCardGrid/NewsStoryCard").NewsStory} NewsStory∏
 */

/**
 * @typedef {{
 *  newsStories: NewsStory[]
 *  sectionHeader: object;
 *  skeleton?: boolean;
 *  maxCards?: number;
 *  footerButtons: import("../SectionFooter").FooterButton[]
 *  footerLinks: import("../SectionFooter").FooterButton[]
 * }} Props
 */

const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 48px;
`;

const FooterRoot = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
`;

const EmptyStateMessageRoot = styled.div`
  display: flex;
  width: 100%;
  height: 480px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const DEFAULT_MAX_CARDS = 3;

/**
 * @type {React.FC<Props>}
 */
const NewsZoneSectionInner = ({
  sectionHeader,
  skeleton: propsSkeleton,
  footerButtons,
  footerLinks,
  emptyStateMessage = DEFAULT_EMPTY_STATE_MESSAGE,
  maxCards: propsMaxCards = DEFAULT_MAX_CARDS,
  newsStoryDataSourceLoader: propsNewsStoryDataSourceLoader,
}) => {
  const maxCards = propsNewsStoryDataSourceLoader?.limit ?? propsMaxCards;
  const urlSportId = useUrlSportId();
  const sportId = propsNewsStoryDataSourceLoader?.sportId ?? urlSportId ?? null;

  const newsStoryDataSourceLoader = useNewsStoryDataSourceLoader({
    limit: maxCards,
    sportId,
  });

  const skeleton = propsSkeleton || newsStoryDataSourceLoader.isLoadingInitial;

  const sectionHeaderRef = React.useRef();
  const sectionHeaderPosition = useElementContentXPosition(sectionHeaderRef);
  const cardWidth = Math.abs(
    sectionHeaderPosition.left - sectionHeaderPosition.right
  );

  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const isDesktop = !isMobile;

  const newsStoriesSliced =
    newsStoryDataSourceLoader?.rows?.slice(0, maxCards) ?? [];

  const hasFooter = footerButtons?.length > 0 || footerLinks?.length > 0;

  const sectionHeaderProps = mapSectionHeaderProps(sectionHeader);
  const sectionName = sectionHeaderProps?.title ?? " ";

  const footer = hasFooter ? (
    <SectionFooter
      disablePadding
      sectionName={sectionName}
      footerButtons={footerButtons}
      footerLinks={footerLinks}
    />
  ) : null;

  const showEmptyState =
    !newsStoryDataSourceLoader.isLoading && !newsStoriesSliced.length;

  return (
    <Root>
      <SectionHeader {...sectionHeaderProps} ref={sectionHeaderRef} />

      {showEmptyState && (
        <EmptyStateMessageRoot>
          <EmptyStateMessage message={emptyStateMessage} />
        </EmptyStateMessageRoot>
      )}
      {isMobile && (
        <NewsStoryCardCarousel
          skeleton={skeleton}
          newsStories={newsStoriesSliced}
          slidesOffsetBefore={sectionHeaderPosition.left}
          slidesOffsetAfter={window.innerWidth - sectionHeaderPosition.right}
          cardWidth={cardWidth}
          renderBottomRightContent={() => footer}
          skeletonCount={maxCards}
          sectionName={sectionName}
        />
      )}
      {isDesktop && (
        <div className="container">
          <NewsStoryCardGridFeatured
            newsStories={newsStoriesSliced}
            skeleton={skeleton}
            skeletonCount={maxCards}
            sectionName={sectionName}
          />
          {footer && <FooterRoot>{footer}</FooterRoot>}
        </div>
      )}
    </Root>
  );
};

NewsZoneSectionInner.propTypes = {
  sectionHeader: SectionHeader.propTypes,
  newsStories: PropTypes.arrayOf(NewsStory.newsStoryPropTypes),
  bottomButtons: PropTypes.arrayOf(ButtonProp.buttonPropTypes),
  skeleton: PropTypes.bool,
  maxCards: PropTypes.number,
  footerButtons: PropTypes.arrayOf(footerButtonPropTypes),
  footerLinks: PropTypes.arrayOf(footerLinkPropTypes),
  newsStoryDataSource: newsStoryDataSourcePropTypes,
  newsStoryDataSourceLoader: PropTypes.shape({
    limit: PropTypes.number,
    sportId: PropTypes.string,
  }),
  emptyStateMessage: PropTypes.string,
  configCard: configCardPropTypes,
};

export const NewsZoneSection = ({
  newsStoryDataSource: newsStoryDataSourceConfig,
  configCard,
  ...props
}) => {
  const newsStoryDataSource = useMemo(
    () => buildNewsStoryDataSource(newsStoryDataSourceConfig),
    [newsStoryDataSourceConfig]
  );
  return (
    <NewsStoryCardConfigProvider value={configCard}>
      <NewsStoryDataSourceProvider newsStoryDataSource={newsStoryDataSource}>
        <NewsZoneSectionInner {...props} />
      </NewsStoryDataSourceProvider>
    </NewsStoryCardConfigProvider>
  );
};
NewsZoneSection.propTypes = NewsZoneSectionInner.propTypes;
