import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../config";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { useElementContentPosition } from "../../utils/use-element-position";
import { ButtonProp } from "../Button";
import * as NewsStory from "../NewsStory/news-story";
import { NewsStoryCardCarousel } from "../NewsStory/NewsStoryCardGrid/NewsStoryCardCarousel";
import { NewsStoryCardGridFeatured } from "../NewsStory/NewsStoryCardGrid/NewsStoryCardGrid";
import {
  SectionFooter,
  footerButtonPropTypes,
  footerLinkPropTypes,
} from "../SectionFooter";
import { mapSectionHeaderProps, SectionHeader } from "../SectionHeader";

/**
 * @typedef {import("../Navigation").Sport} Sport
 */

/**
 * @typedef {import("../NewsStoryCardGrid/NewsStoryCard").NewsStory} NewsStory
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

const DEFAULT_MAX_CARDS = 3;

/**
 * @type {React.FC<Props>}
 */
export const NewsZoneSection = ({
  newsStories,
  sectionHeader,
  skeleton,
  footerButtons,
  footerLinks,
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

  const hasFooter = footerButtons?.length > 0 || footerLinks?.length > 0;

  const footer = hasFooter ? (
    <SectionFooter footerButtons={footerButtons} footerLinks={footerLinks} />
  ) : null;

  return (
    <Root>
      <SectionHeader
        {...mapSectionHeaderProps(sectionHeader)}
        ref={sectionHeaderRef}
      />

      {isMobile && (
        <NewsStoryCardCarousel
          skeleton={Boolean(skeleton)}
          newsStories={newsStoriesSliced}
          slidesOffsetBefore={sectionHeaderPosition.left}
          slidesOffsetAfter={window.innerWidth - sectionHeaderPosition.right}
          cardWidth={cardWidth}
          renderBottomRightContent={() => footer}
        />
      )}
      {isDesktop && (
        <div className="container">
          <NewsStoryCardGridFeatured
            newsStories={newsStoriesSliced}
            skeleton={Boolean(skeleton)}
          />
          {footer && <FooterRoot>{footer}</FooterRoot>}
        </div>
      )}
    </Root>
  );
};

NewsZoneSection.propTypes = {
  sectionHeader: SectionHeader.propTypes,
  newsStories: PropTypes.arrayOf(NewsStory.newsStoryPropTypes),
  bottomButtons: PropTypes.arrayOf(ButtonProp.buttonPropTypes),
  skeleton: PropTypes.bool,
  maxCards: PropTypes.number,
  footerButtons: PropTypes.arrayOf(footerButtonPropTypes),
  footerLinks: PropTypes.arrayOf(footerLinkPropTypes),
};
