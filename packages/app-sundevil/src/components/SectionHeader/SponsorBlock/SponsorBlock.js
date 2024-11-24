/* eslint-disable react/prop-types */
// @ts-check
import React, { useRef } from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../../config";
import { trackGAEvent } from "../../../track-ga/track-ga-event";
import { trackAdClickHandler } from "../../Ads/ad-data-layers";
import { Variant } from "./Variant";
import { useWatchPredicate } from "../../../utils/use-watch-predicate";

const Root = styled.a`
  color: #191919;
  text-decoration: none;
  width: fit-content;
`;

const Title = styled.div`
  color: ${({
    // @ts-ignore
    darkMode,
  }) => (darkMode ? "#fff" : "#191919")};
  font-weight: bold;
  font-size: 16px;
  text-align: left;

  @media (max-width: ${APP_CONFIG.breakpointMobile}) {
    font-size: 12px;
  }

  white-space: nowrap;
`;

const isCleanString = str => typeof str === "string" && str.trim().length > 0;

/**
 * @type {React.FC<import("../props").SectionHeaderProps & {mobile: boolean}>}
 */
export const SponsorBlock = props => {
  const { sponsorBlock, mobile, darkMode = false } = props;

  const className = mobile
    ? "d-flex flex-column flex-sm-column flex-md-row align-items-center gap-1"
    : "d-flex flex-row align-items-center justify-content-end gap-2";

  /** @type {React.MutableRefObject<HTMLDivElement | undefined>} */
  const variantRef = useRef();

  const hasImageElement = useWatchPredicate({
    ref: variantRef,
    predicate: node => {
      const isImageElement = node.tagName.toUpperCase().includes("IMG");
      const containsImageElement = node.querySelector("img") !== null;
      return isImageElement || containsImageElement;
    },
  });

  return (
    <Root
      href={sponsorBlock?.url}
      className={className}
      style={
        hasImageElement
          ? {}
          : {
              opacity: 0,
              pointerEvents: "none",
            }
      }
      onClick={() => {
        trackGAEvent({
          event: "link",
          action: "click",
          name: "onclick",
          type: "external link",
          region: "main content",
          section: sponsorBlock?.text ?? " ",
          text: sponsorBlock?.name ?? " ",
          component: "image",
        });
        trackAdClickHandler({
          adId: sponsorBlock?.adId,
          href: sponsorBlock?.url,
        })();
      }}
    >
      {isCleanString(sponsorBlock?.text) && (
        <Title
          // @ts-ignore
          darkMode={darkMode}
        >
          {sponsorBlock?.text}
        </Title>
      )}
      <Variant
        {...props}
        // @ts-ignore
        ref={variantRef}
      />
    </Root>
  );
};
