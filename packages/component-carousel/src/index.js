// @ts-check
import {
  initCardCarousel,
  initTestimonialCarousel,
  initImageCarousel,
  initImageGalleryCarousel,
} from "./core/utils/init-carousel";

// @ts-ignore
window.initCardCarousel = initCardCarousel;
// @ts-ignore
window.initTestimonialCarousel = initTestimonialCarousel;
// @ts-ignore
window.initImageCarousel = initImageCarousel;
// @ts-ignore
window.initImageGalleryCarousel = initImageGalleryCarousel;

export * from "./components";
export {
  initCardCarousel,
  initTestimonialCarousel,
  initImageCarousel,
  initImageGalleryCarousel,
};
