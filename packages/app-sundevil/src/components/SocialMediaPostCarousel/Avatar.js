import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const AvatarImage = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 50%;
  background-color: #e8e7e8;
  object-fit: cover;
  flex-shrink: 0;
`;

const PlaceholderAvatar = styled.div`
  width: 51px;
  height: 51px;
  border-radius: 50%;
  background-color: white;
  flex-shrink: 0;
`;

/**
 * @typedef {Object} AvatarProps
 * @property {string} src
 * @property {string} alt
 */

/**
 * @type {React.FC<AvatarProps>}
 */
export const Avatar = ({ src, alt }) => {
  const [error, setError] = React.useState(false);

  if (!src || error) {
    return <PlaceholderAvatar />;
  }

  return <AvatarImage src={src} alt={alt} onError={() => setError(true)} />;
};

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
