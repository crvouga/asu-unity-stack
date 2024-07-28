import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

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

export const LoadMoreButton = ({ label, loading, placeholder, onClick }) => {
  return (
    <Root
      type="button"
      className="btn-maroon"
      onClick={onClick}
      loading={loading}
      disabled={loading}
    >
      {loading ? (
        placeholder ?? "Loading..."
      ) : (
        <>
          {label ?? "Load More"}
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
};

/**
 * @typedef {{
 *  label?: string;
 *  loadingLabel?: string;
 *  loading?: boolean;
 *  onClick?: () => void;
 * }} LoadMoreButtonProps
 */

export const loadMorePropTypes = PropTypes.shape(
  // eslint-disable-next-line react/forbid-foreign-prop-types
  LoadMoreButton.propTypes
);
