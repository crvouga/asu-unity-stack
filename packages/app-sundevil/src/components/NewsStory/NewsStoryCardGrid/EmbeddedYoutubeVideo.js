import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { toYoutubeVideoId } from "./to-youtube-video-id";

const toYoutubeEmbedUrl = youtubeVideoId =>
  `https://www.youtube.com/embed/${youtubeVideoId}`;

const Root = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IFrame = styled.iframe`
  width: 100%;
  height: 100%;
  z-index: 10;
`;

const PlayButton = styled.button`
  z-index: 20;
  background-color: #ffffff;
  width: 48px;
  height: 48px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer;
  outline: none !important;
  box-shadow: none !important;
  border: none !important;

  &:active,
  &:focus,
  &:focus-visible {
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
  }
`;

export const EmbeddedYoutubeVideo = ({
  youtubeVideoUrl,
  isVideoOpen,
  onClickPlay,
}) => {
  if (typeof youtubeVideoUrl !== "string") {
    return null;
  }

  const youtubeVideoId = toYoutubeVideoId(youtubeVideoUrl);

  if (!youtubeVideoId) {
    return null;
  }

  const youtubeEmbedUrl = toYoutubeEmbedUrl(youtubeVideoId);

  if (!isVideoOpen) {
    return (
      <Root>
        <PlayButton type="button" onClick={onClickPlay}>
          <i className="fas fa-play" />
        </PlayButton>
      </Root>
    );
  }

  return (
    <Root>
      <IFrame
        width="100%"
        height="100%"
        src={youtubeEmbedUrl}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </Root>
  );
};

EmbeddedYoutubeVideo.propTypes = {
  youtubeVideoUrl: PropTypes.string.isRequired,
  isVideoOpen: PropTypes.bool,
  onClickPlay: PropTypes.func,
};
