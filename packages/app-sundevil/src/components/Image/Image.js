import PropTypes from "prop-types";
import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";

import { Skeleton } from "../Skeleton";

const ImageBase = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Image = ({ src, alt, className, style, onHeight }) => {
  const ref = useRef();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = src;

    img.onload = () => {
      if (onHeight && typeof img.naturalHeight === "number") {
        onHeight(img.naturalHeight);
      }
    };
  }, [src, onHeight]);

  return (
    <Skeleton className={className} skeleton={!isImageLoaded} style={style}>
      <ImageBase
        ref={ref}
        src={src}
        alt={alt ?? " "}
        onLoad={() => {
          setIsImageLoaded(true);
        }}
      />
    </Skeleton>
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  onHeight: PropTypes.func,
};
