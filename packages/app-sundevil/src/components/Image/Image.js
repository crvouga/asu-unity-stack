import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

import { Skeleton } from "../Skeleton";

const ImageBase = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Image = ({ src, alt, className, style }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <Skeleton className={className} skeleton={!isImageLoaded} style={style}>
      <ImageBase src={src} alt={alt} onLoad={() => setIsImageLoaded(true)} />
    </Skeleton>
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};
