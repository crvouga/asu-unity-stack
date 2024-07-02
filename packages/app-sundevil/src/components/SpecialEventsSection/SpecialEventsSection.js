import React, { useRef } from "react";
import styled from "styled-components";

import { useIsMobile } from "../../../../component-header/src/core/hooks/isMobile";
import { APP_CONFIG } from "../../config";
import {
  useElementContentDimensions,
  useElementContentPosition,
} from "../../utils/use-element-position";
import { SectionHeader } from "../SectionHeader";
import { SpecialEventCardCarousel } from "./SpecialEventCardCarousel";

const Root = styled.section`
  display: flex;
  flex-direction: column;
  gap: 52px;
`;

const DESKTOP_CARD_WIDTH = 588;

export const SpecialEventsSection = ({ sectionHeader, cardCarousel }) => {
  const sectionHeaderRef = useRef();
  const sectionHeaderPosition = useElementContentPosition(sectionHeaderRef);
  const sectionHeaderDimensions = useElementContentDimensions(sectionHeaderRef);
  const isMobile = useIsMobile(APP_CONFIG.breakpoint);
  const cardWidth = isMobile
    ? sectionHeaderDimensions.width
    : DESKTOP_CARD_WIDTH;

  return (
    <Root>
      <SectionHeader {...sectionHeader} ref={sectionHeaderRef} />
      <SpecialEventCardCarousel
        {...cardCarousel}
        cardWidth={cardWidth}
        slidesOffsetBefore={sectionHeaderPosition.left}
      />
    </Root>
  );
};

SpecialEventsSection.propTypes = {
  sectionHeader: SectionHeader.propTypes,
  cardCarousel: SpecialEventCardCarousel.propTypes,
};
