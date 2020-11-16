/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from "preact";
//import { useEffect, useState } from "preact/compat";

import Glide from "@glidejs/glide";

// Include required and our custom styles for @glidejs/glide
import "./styles.scss";

// Requirement: We import bs4-theme css from QA site in preview-head.html.

// Initially based on this approach:
// https://stackoverflow.com/questions/61596516/glide-js-with-react

const AsuCarousel = props => {
  //console.log("props", props);

  // Only prop for the slider configs we expose is perView. Everything else is
  // considered locked down for Web Standards 2.
  // We implement "slider" approach per Web Standards 2:
  // - Dead-end advance when end is reached. No wrap around.
  // - First card is focused.
  // - No advance allowed to create whitespace at the end of slide. Stops with
  //   all visible.
  // - Shadow (at either left or right) should disappear when there is no next
  //   or previous.
  // - Instead of tying the bullets to the number of cards, we do a calculation
  //   tying the bullets to the number of "views" or "panels" so the last bullet
  //   displays the max number of cards with no overhanging card or extra
  //   whitespace. TODO Negative impact on a11y from this?

  // Get glide instance class name.
  // Defaults to glide. If implementing multiple instnaces, you MUST provide
  // an unique instance name for all but one instance.
  let instanceName = `glide-${Math.ceil(Math.random() * 10000)}`;

  let perViewSm, perViewMd, perViewLg;

  // Calculate number of buttons to show so we don't advance past perView.
  // TODO Limtation: this does not recalc if the screen is resized and the
  // perView adapts. In that case Prev/next buttons may need to be used to see
  // all slides. Leverage GlideJS resize event?
  // See docs: https://glidejs.com/docs/events/
  // The resize event is implemented below and commented out until a solid
  // strategy for updating the buttons is in place.
  let itemCount = props.carouselItems.length;
  let buttonCount;

  // Set a perView value for each breakpoint so we adapt down appropriately.
  // Also set buttonCount to match. Note: buttonCount is not adaptive in this
  // scenario, per comment above.
  switch (props.perView ? props.perView : "1") {
    case "3":
      // Values used in config call.
      perViewSm = 1;
      perViewMd = 2;
      perViewLg = 3;
      buttonCount = itemCount - 2; // -2 w/ perView of 3
      break;
    case "2":
      // Values used in config call.
      perViewSm = 1;
      perViewMd = 2;
      perViewLg = 2;
      buttonCount = itemCount - 1; // -1 w/ perView of 2
      break;
    case "1":
    default:
      // Values used in config call.
      perViewSm = 1;
      perViewMd = 1;
      perViewLg = 1;
      buttonCount = itemCount - 0; // -0 w/ perView of 1
  }

  // Build out bullets code based on buttonCount.
  // TODO Move this into the component code to better support resize?
  let buttonElements = [];
  for (var i = 0; i < buttonCount; i++) {
    buttonElements.push(
      <button className="glide__bullet" data-glide-dir={"=" + i}></button>
    );
  }

  // Set GlideJS config options, per https://glidejs.com/docs/options/
  const sliderConfig = {
    type: "slider", // No wrap-around.
    focusAt: 0,
    bound: true, // Only if type slider with focusAt 0
    rewind: false, // Only if type slider
    gap: 24, // Space between slides... may be impacted by viewport size.
    keyboard: true, // Left/Right arrow key support for slides - true is default. Accessible?
    startAt: 0,
    swipeThreshold: 80, // Distance required for swipe to change slide.
    dragThreshold: 120, // Distance for mouse drag to change slide.
    perTouch: 1, // Number of slides that can be moved per each swipe/drag.
    breakpoints: {
      576: {
        // BS4 sm
        perView: perViewSm,
        peek: { before: 0, after: 62 },
      },
      768: {
        // BS4 md
        //perView: props.perView > 1 ? 2 : 1,
        perView: perViewSm,
        peek: { before: 124, after: 124 },
      },
      992: {
        // BS4 lg
        //perView: props.perView > 1 ? props.perView : 1,
        perView: perViewMd,
        peek: { before: 124, after: 124 },
      },
      1260: {
        // BS4 xl
        //perView: props.perView > 1 ? props.perView : 1,
        perView: perViewLg,
        peek: { before: 124, after: 124 },
      },
      1400: {
        //perView: props.perView > 1 ? props.perView : 1,
        perView: perViewLg,
        peek: { before: 124, after: 124 },
      },
      1920: {
        //perView: props.perView > 1 ? props.perView : 1,
        perView: perViewLg,
        peek: { before: 124, after: 124 },
      },
    },
  };

  // Following wasn't triggered with useEffect approach... so we just ensure
  // the DOM is loaded.

  // Works on first load with current code but doesn't refresh successfully in
  // Storybook when code is updated - have to reload page.
  // Better approach using window ? Learn about that.
  // Or https://www.npmjs.com/package/preact-hot-loader ?
  document.addEventListener("DOMContentLoaded", function () {
    // Load up a new glideJS slider, but don't mount until we have event
    // listener (https://glidejs.com/docs/events/) handlers defined and configs
    // all mustered.
    const slider = new Glide(`#${instanceName}`, sliderConfig);
    //const slider = new Glide(".glide", sliderConfig);

    // Implement glidejs event listeners.

    // We use event listeners to clear and set class names to show/hide
    // gradients when at the start, middle or end of a slider.

    // On build.before event...
    slider.on("build.before", function () {
      // Set .slider-start for starting gradient styles.
      let gliderElement = document.getElementById(`${instanceName}`);
      gliderElement.classList.add("slider-start");
    });

    // On Move event...
    slider.on("move", function (e) {
      // Get glider top level element.
      let gliderElement = document.getElementById(`${instanceName}`);

      // Gradient-triggering classes.
      var gradientClasses = ["slider-start", "slider-mid", "slider-end"];

      // Set/clear classes for gradients.
      if (slider.index == 0) {
        // START SLIDE.
        // Gradient for start.
        gliderElement.classList.remove(...gradientClasses);
        gliderElement.classList.add("slider-start");
        // Enable/disable prev/next styles. Glide takes care of actual disable.
        document
          .querySelector(`#${instanceName} .glide__arrow--prev`)
          .classList.add("glide__arrow--disabled");
        document
          .querySelector(`#${instanceName} .glide__arrow--next`)
          .classList.remove("glide__arrow--disabled");
      } else if (slider.index >= buttonCount - 1) {
        // MIDDLE SLIDES.
        // Gradient for end.
        gliderElement.classList.remove(...gradientClasses);
        gliderElement.classList.add("slider-end");
        // Enable/disable prev/next styles. Glide takes care of actual disable.
        document
          .querySelector(`#${instanceName} .glide__arrow--prev`)
          .classList.remove("glide__arrow--disabled");
        document
          .querySelector(`#${instanceName} .glide__arrow--next`)
          .classList.add("glide__arrow--disabled");
      } else {
        // LAST SLIDE.
        // Gradient for middle.
        gliderElement.classList.remove(...gradientClasses);
        gliderElement.classList.add("slider-mid");
        // Enable/disable prev/next styles. Glide takes care of actual disable.
        document
          .querySelector(`#${instanceName} .glide__arrow--prev`)
          .classList.remove("glide__arrow--disabled");
        document
          .querySelector(`#${instanceName} .glide__arrow--next`)
          .classList.remove("glide__arrow--disabled");
      }
    });

    // On Resize event...
    /* TODO Leverage this event to recalculate and updating number of bullets.
     * See notes about this above.
    slider.on("resize", function () {
      // Get Original viewport width
      let vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      );
      console.log("VW on resize", vw);
      if (vw < 768) {
        // Value for sm breakpoint
        console.log("VW sm", vw);
      } else if (vw < 992) {
        // Value for md breakpoint
        console.log("VW md", vw);
      } else {
        // Value for lg breakpoint
        console.log("VW lg", vw);
      }
    });
    */

    slider.mount();
    //console.log(slider);
  });

  // Imported from preact/hooks
  /*
  useEffect(() => {
    console.log("hit AsuCarousel useEffect");
    return () => {
      console.log("sliiiiiider");
      const slider = new Glide(".glide", sliderConfiguration);
      slider.mount();
      console.log(slider);
    };
  }, []);
  //}, [slider]);
  */

  // Setup carousel items from the carouselItems prop.
  const listItems = props.carouselItems.map(sliderItem => (
    <li key={sliderItem.id.toString()} className="glide__slide slider">
      {sliderItem.item}
    </li>
  ));

  // For prev and next button icons we use the Creative Commons licensed
  // FontAweseome chevron-left and chevron-right SVG without alterations.
  // This serves as the required link to the license as per attribution
  // guidelines provided at time of use: https://fontawesome.com/license

  return (
    <div className="glide" id={instanceName}>
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">{listItems}</ul>
      </div>
      <div className="glide__bullets" data-glide-el="controls[nav]">
        {buttonElements}
      </div>
      <div className="glide__arrows" data-glide-el="controls">
        <button className="glide__arrow glide__arrow--prev" data-glide-dir="<">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-left"
            className="svg-inline--fa fa-chevron-left fa-w-10"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"
            ></path>
          </svg>
        </button>
        <button className="glide__arrow glide__arrow--next" data-glide-dir=">">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="chevron-right"
            className="svg-inline--fa fa-chevron-right fa-w-10"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

//export default AsuCarousel;
export { AsuCarousel };
