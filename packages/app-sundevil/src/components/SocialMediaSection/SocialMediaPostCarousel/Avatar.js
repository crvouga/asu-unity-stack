import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const AvatarImage = styled.img`
  width: ${props => (props.size === "sm" ? "28px" : "51px")};
  height: ${props => (props.size === "sm" ? "28px" : "51px")};
  border-radius: 50%;
  background-color: #e8e7e8;
  object-fit: cover;
  flex-shrink: 0;
`;

const PlaceholderAvatar = styled.div`
  width: ${props => (props.size === "sm" ? "28px" : "51px")};
  height: ${props => (props.size === "sm" ? "28px" : "51px")};
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
export const Avatar = ({ src, alt, size }) => {
  const [error, setError] = React.useState(false);

  if (!src || error) {
    return <PlaceholderAvatar size={size} />;
  }

  return (
    <AvatarImage
      size={size}
      src={src}
      alt={alt ?? " "}
      onError={() => setError(true)}
    />
  );
};

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(["sm", "lg"]),
};
