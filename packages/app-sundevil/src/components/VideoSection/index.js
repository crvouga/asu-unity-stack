import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { useBreakpoint } from "../../utils/use-breakpoint";
import { APP_CONFIG } from "../../config";
import { useElementContentPosition } from "../../utils/use-element-position";
import { ButtonProp } from "../Button";
import { BottomButtons } from "../Button/BottomButtons";
import * as NewsStory from "../NewsStory/news-story";
import { NewsStoryCardGridDesktopFeatured } from "../NewsStory/NewsStoryCardGrid/NewsStoryCardGridDesktop";
import { NewsStoryCardGridMobile } from "../NewsStory/NewsStoryCardGrid/NewsStoryCardGridMobile";
import { mapSectionHeaderProps, SectionHeader } from "../SectionHeader";

/**
 * @typedef {import("../Navigation").Sport} Sport
 */

/**
 * @typedef {import("../NewsStory/news-story").NewsStory} NewsStory
 */

/**
 * @typedef {{
 *  newsStories: NewsStory[]
 *  sectionHeader?: object;
 *  bottomButtons: ButtonProp.ButtonProp[]
 *  skeleton?: boolean;
 *  maxCards?: number;
 * }} Props
 */

const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ hasSectionHeader }) => (hasSectionHeader ? "48px" : "0")};
`;

const BottomButtonsRoot = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
`;

const DEFAULT_MAX_CARDS = 4;

/**
 * @type {React.FC<Props>}
 */
export const VideoSection = ({
  newsStories,
  sectionHeader,
  bottomButtons,
  skeleton,
  maxCards = DEFAULT_MAX_CARDS,
}) => {
  const sectionHeaderRef = React.useRef();
  const sectionHeaderPosition = useElementContentPosition(sectionHeaderRef);
  const cardWidth = Math.abs(
    sectionHeaderPosition.left - sectionHeaderPosition.right
  );

  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const isDesktop = !isMobile;

  const newsStoriesSliced = newsStories.slice(0, maxCards);

  const hasSectionHeader =
    Boolean(sectionHeader) && Object.keys(sectionHeader).length > 0;

  return (
    <Root hasSectionHeader={hasSectionHeader}>
      <SectionHeader
        {...mapSectionHeaderProps(sectionHeader)}
        ref={sectionHeaderRef}
      />
      {isMobile && (
        <NewsStoryCardGridMobile
          skeleton={Boolean(skeleton)}
          newsStories={newsStoriesSliced}
          slidesOffsetBefore={sectionHeaderPosition.left}
          slidesOffsetAfter={window.innerWidth - sectionHeaderPosition.right}
          cardWidth={cardWidth}
          renderBottomRightContent={() => (
            <BottomButtons buttons={bottomButtons} skeleton={skeleton} />
          )}
        />
      )}
      {isDesktop && (
        <div className="container">
          <NewsStoryCardGridDesktopFeatured
            layout="fullWidth"
            newsStories={newsStoriesSliced}
            skeleton={Boolean(skeleton)}
          />
          <BottomButtonsRoot>
            <BottomButtons buttons={bottomButtons} skeleton={skeleton} />
          </BottomButtonsRoot>
        </div>
      )}
    </Root>
  );
};

VideoSection.propTypes = {
  sectionHeader: SectionHeader.propTypes,
  newsStories: PropTypes.arrayOf(NewsStory.newsStorySchema),
  bottomButtons: PropTypes.arrayOf(ButtonProp.buttonSchema),
  skeleton: PropTypes.bool,
  maxCards: PropTypes.number,
};
