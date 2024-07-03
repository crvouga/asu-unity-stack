import PropTypes from "prop-types";
import React, { useRef } from "react";
import styled from "styled-components";

import { useIsMobile } from "../../../../component-header/src/core/hooks/isMobile";
import { APP_CONFIG } from "../../config";
import { RenderReact } from "../../core/react-render";
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
  position: relative;
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

  const shouldPreventJitter = sectionHeaderPosition.left > 0;

  return (
    <Root>
      <SectionHeader {...sectionHeader} ref={sectionHeaderRef} />
      {shouldPreventJitter && (
        <SpecialEventCardCarousel
          {...cardCarousel}
          cardWidth={cardWidth}
          slidesOffsetBefore={sectionHeaderPosition.left}
        />
      )}
    </Root>
  );
};

SpecialEventsSection.propTypes = {
  sectionHeader: PropTypes.shape(SectionHeader.propTypes),
  cardCarousel: PropTypes.shape(SpecialEventCardCarousel.propTypes),
};

export const initSpecialEventsSection = ({ targetSelector, props }) => {
  RenderReact(
    SpecialEventsSection,
    props,
    document.querySelector(targetSelector)
  );
};
