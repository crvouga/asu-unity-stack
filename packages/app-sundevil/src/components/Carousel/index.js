import PropTypes from "prop-types";
import React, { useEffect, useLayoutEffect, useRef } from "react";
// eslint-disable-next-line import/no-unresolved
import { register } from "swiper/element/bundle";

register();

export function Carousel(props) {
  const swiperRef = useRef(null);
  const { children, index, onIndexChanged, ...rest } = props;

  useLayoutEffect(() => {
    if (!swiperRef.current) return;

    const params = {
      ...rest,
    };

    Object.assign(swiperRef.current, params);
    swiperRef.current.initialize();

    window.swiperRef = swiperRef.current;

    const handleSlideChange = () => {
      if (swiperRef.current) {
        const { realIndex } = swiperRef.current.swiper;
        if (realIndex !== index) {
          onIndexChanged(realIndex);
        }
      }
    };

    swiperRef.current.addEventListener("slideChange", handleSlideChange);

    // eslint-disable-next-line consistent-return
    return () => {
      if (swiperRef.current) {
        swiperRef.current.removeEventListener("slideChange", handleSlideChange);
      }
    };
  }, [rest, index, onIndexChanged]);

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const { realIndex } = swiperRef.current.swiper;
      if (realIndex !== index) {
        swiperRef.current.swiper.slideTo(index);
      }
    }
  }, [index]);

  return (
    <swiper-container init="false" ref={swiperRef}>
      {children}
    </swiper-container>
  );
}

Carousel.propTypes = {
  index: PropTypes.number.isRequired,
  onIndexChanged: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  slidesPerView: PropTypes.number,
  initialSlide: PropTypes.number,
};

export function CarouselItem(props) {
  const { children, ...rest } = props;

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <swiper-slide {...rest}>{children}</swiper-slide>;
}

CarouselItem.propTypes = {
  children: PropTypes.node.isRequired,
};
