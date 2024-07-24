import PropTypes from "prop-types";
import React, { useMemo, useRef } from "react";
import styled from "styled-components";

import { useBreakpoint } from "../../utils/use-breakpoint";
import { APP_CONFIG } from "../../config";
import {
  useElementContentDimensions,
  useElementContentPosition,
} from "../../utils/use-element-position";
import { mapSectionHeaderProps, SectionHeader } from "../SectionHeader";
import {
  buildSpecialEventsDataSource,
  specialEventsDataSourcePropTypes,
} from "./special-events-data-source/special-events-data-source-impl";
import { SpecialEventCardCarousel } from "./SpecialEventCardCarousel";
import { SpecialEventsDataSourceProvider } from "./SpecialEventsDataSourceContext";
import { useSpecialEventsLoader } from "./use-special-events-loader";

const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 52px;
  position: relative;
`;

const DESKTOP_CARD_WIDTH = 588;

const SpecialEventsSectionInner = ({ sectionHeader }) => {
  const { isLoading, specialEvents } = useSpecialEventsLoader({
    offset: 0,
    limit: 10,
  });

  const sectionHeaderRef = useRef();
  const sectionHeaderPosition = useElementContentPosition(sectionHeaderRef);
  const sectionHeaderDimensions = useElementContentDimensions(sectionHeaderRef);
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  const cardWidth = isMobile
    ? sectionHeaderDimensions.width
    : DESKTOP_CARD_WIDTH;

  const shouldPreventJitter = sectionHeaderPosition.left > 0;

  return (
    <Root>
      <SectionHeader
        {...mapSectionHeaderProps(sectionHeader)}
        ref={sectionHeaderRef}
      />
      {shouldPreventJitter && (
        <SpecialEventCardCarousel
          cards={specialEvents}
          skeleton={isLoading}
          cardWidth={cardWidth}
          slidesOffsetBefore={sectionHeaderPosition.left}
        />
      )}
    </Root>
  );
};

SpecialEventsSectionInner.propTypes = {
  sectionHeader: PropTypes.shape(SectionHeader.propTypes),
  cardCarousel: PropTypes.shape(SpecialEventCardCarousel.propTypes),
  specialEventsDataSource: specialEventsDataSourcePropTypes,
};

export const SpecialEventsSection = ({
  specialEventsDataSource: specialEventsDataSourceConfig,
  ...props
}) => {
  const specialEventsDataSourceInstance = useMemo(
    () => buildSpecialEventsDataSource(specialEventsDataSourceConfig),
    [specialEventsDataSourceConfig]
  );

  return (
    <SpecialEventsDataSourceProvider
      specialEventsDataSource={specialEventsDataSourceInstance}
    >
      <SpecialEventsSectionInner {...props} />
    </SpecialEventsDataSourceProvider>
  );
};

SpecialEventsSection.propTypes = {
  sectionHeader: PropTypes.shape(SectionHeader.propTypes),
  cardCarousel: PropTypes.shape(SpecialEventCardCarousel.propTypes),
  specialEventsDataSource: specialEventsDataSourcePropTypes,
};
