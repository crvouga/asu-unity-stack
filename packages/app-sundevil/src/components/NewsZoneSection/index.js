import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { useIsMobile } from "../../../../component-header/src/core/hooks/isMobile";
import { Button } from "../../../../components-core/src/index";
import { APP_CONFIG } from "../../config";
import { useElementContentPosition } from "../../utils/use-element-position";
import * as NewsStory from "../NewsStory/news-story";
import { NewsStoryCardGridDesktopFeatured } from "../NewsStory/NewsStoryCardGrid/NewsStoryCardGridDesktop";
import { NewsStoryCardGridMobile } from "../NewsStory/NewsStoryCardGrid/NewsStoryCardGridMobile";
import { SectionHeader } from "../SectionHeader";
import { Skeleton } from "../Skeleton";

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
 *  allStoriesLabel: string;
 *  allStoriesHref: string;
 *  skeleton?: boolean;
 * }} Props
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
 * @type {React.FC<Props>}
 */
export const NewsZoneSection = ({
  newsStories,
  sectionHeader,
  allStoriesHref,
  allStoriesLabel,
  skeleton,
}) => {
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

      {isMobile && (
        <NewsStoryCardGridMobile
          skeleton={Boolean(skeleton)}
          newsStories={newsStories}
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
      )}
      {isDesktop && (
        <div className="container">
          <NewsStoryCardGridDesktopFeatured
            newsStories={newsStories}
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
      )}
    </Root>
  );
};

NewsZoneSection.propTypes = {
  sectionHeader: SectionHeader.propTypes,
  newsStories: PropTypes.arrayOf(NewsStory.newsStorySchema),
  allStoriesLabel: PropTypes.string.isRequired,
  allStoriesHref: PropTypes.string.isRequired,
  skeleton: PropTypes.bool,
};
