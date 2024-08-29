import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Root = styled.button`
  border-radius: 50%;
  background-color: transparent;
  cursor: pointer;
  outline: none !important;
  outline: none !important;
  box-shadow: none !important;
  border: none !important;
  &:hover {
    outline: none !important;
    box-shadow: none !important;
    border: none !important;
  }
  &:active {
    outline: none !important;
    box-shadow: none !important;
    border: none !important;
  }
  &:focus {
    outline: none !important;
    box-shadow: none !important;
    border: none !important;
  }
`;

/**
 * @type {React.Fc<Props>}
 */
export const PlayPauseButton = ({
  isPlaying: propsIsPlaying = false,
  onToggle,
  fill = "#D9D9D9",
  opacity = "0.6",
  width = "68px",
  height = "68px",
  ariaLabel = "Toggle play pause",
}) => {
  const [isPlaying, setIsPlaying] = useState(propsIsPlaying);
  const toggle = () => {
    setIsPlaying(isPlayingPrev => {
      const isPlayingNext = !isPlayingPrev;
      onToggle?.(isPlayingNext);
      return isPlayingNext;
    });
  };

  useEffect(() => {
    setIsPlaying(propsIsPlaying);
  }, [propsIsPlaying]);

  if (isPlaying) {
    return (
      <Root onClick={toggle} aria-label={ariaLabel}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 68 68"
          fill="none"
        >
          <path
            opacity={opacity}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34 68C52.7776 68 68 52.7778 68 34C68 15.2222 52.7776 0 34 0C15.2224 0 0 15.2222 0 34C0 52.7778 15.2224 68 34 68ZM26.875 43.2109H30.625C31.6406 43.2109 32.5 42.3906 32.5 41.3359V27.5859C32.5 26.5703 31.6406 25.7109 30.625 25.7109H26.875C25.8203 25.7109 25 26.5703 25 27.5859V41.3359C25 42.3906 25.8203 43.2109 26.875 43.2109ZM40.625 43.2109C41.6406 43.2109 42.5 42.3906 42.5 41.3359V27.5859C42.5 26.5703 41.6406 25.7109 40.625 25.7109H36.875C35.8203 25.7109 35 26.5703 35 27.5859V41.3359C35 42.3906 35.8203 43.2109 36.875 43.2109H40.625Z"
            fill={fill}
          />
        </svg>
      </Root>
    );
  }

  return (
    <Root onClick={toggle} aria-label={ariaLabel}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 68 68"
        fill="none"
      >
        <path
          opacity={opacity}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M34 68C52.7776 68 68 52.7778 68 34C68 15.2222 52.7776 0 34 0C15.2224 0 0 15.2222 0 34C0 52.7778 15.2224 68 34 68ZM27 23.75L47 34L27 44.25V23.75Z"
          fill={fill}
        />
      </svg>
    </Root>
  );
};

/**
 * @typedef {{
 * isPlaying?: boolean | null
 * onToggle?: (isPlaying: boolean) => void
 * fill?: string
 * opacity?: string | number
 * width?: string | number
 * height?: string | number
 * ariaLabel?: string
 * }} Props
 */

PlayPauseButton.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
  fill: PropTypes.string,
  opacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ariaLabel: PropTypes.string,
};
