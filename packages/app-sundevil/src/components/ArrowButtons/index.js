import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { trackGAEvent } from "../../track-ga-event";
import { IconArrowLeft } from "./IconArrowLeft";
import { IconArrowRight } from "./IconArrowRight";
import { IconButton } from "./IconButton";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ArrowButtons = ({ sectionName, onLeft, onRight, skeleton }) => {
  return (
    <Root>
      <IconButton
        onClick={() => {
          onLeft?.();
          trackGAEvent({
            event: "select",
            action: "click",
            name: "onclick",
            type: "carousel",
            region: "main content",
            section: sectionName ?? " ",
            text: "left chevron",
            component: "icon",
          });
        }}
        label="Go to previous"
        skeleton={Boolean(skeleton)}
      >
        <IconArrowLeft />
      </IconButton>
      <IconButton
        onClick={() => {
          onRight?.();
          trackGAEvent({
            event: "select",
            action: "click",
            name: "onclick",
            type: "carousel",
            region: "main content",
            section: sectionName ?? " ",
            text: "right chevron",
            component: "icon",
          });
        }}
        label="Go to next"
        skeleton={Boolean(skeleton)}
      >
        <IconArrowRight />
      </IconButton>
    </Root>
  );
};
ArrowButtons.propTypes = {
  onLeft: PropTypes.func,
  onRight: PropTypes.func,
  skeleton: PropTypes.bool,
  sectionName: PropTypes.string,
};
