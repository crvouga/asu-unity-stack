import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { trackGAEvent } from "../../track-ga/track-ga-event";

const Root = styled.button`
  color: #8c1d40;
  color: ${({ loading }) => (loading ? "#191919" : "#8c1d40")};
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  width: fit-content;
`;

const Icon = styled.i``;

export const LoadMoreButton = ({
  label,
  loading,
  placeholder,
  onClick,
  sectionName,
}) => {
  const labelFinal = label ?? "Load More";
  return (
    <Root
      type="button"
      className="btn-maroon"
      onClick={() => {
        onClick?.();
        trackGAEvent({
          event: "collapse",
          action: "open",
          name: "onclick",
          type: "click",
          region: "main content",
          section: sectionName,
          text: labelFinal,
          component: "text",
        });
      }}
      loading={loading}
      disabled={loading}
    >
      {loading ? (
        placeholder ?? "Loading..."
      ) : (
        <>
          {labelFinal}
          <Icon className="fas fa-chevron-down" />
        </>
      )}
    </Root>
  );
};

LoadMoreButton.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  sectionName: PropTypes.string,
};

/**
 * @typedef {{
 *  label?: string;
 *  loadingLabel?: string;
 *  loading?: boolean;
 *  onClick?: () => void;
 *  sectionName?: string;
 * }} LoadMoreButtonProps
 */

export const loadMorePropTypes = PropTypes.shape(
  // eslint-disable-next-line react/forbid-foreign-prop-types
  LoadMoreButton.propTypes
);
