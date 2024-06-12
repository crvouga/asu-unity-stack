// @ts-check
import React from "react";

import { SocialMediaPostCarousel } from "./index";

import { socialMediaPostCarouselProps } from "./test-props";

export default {
  title: "Social Media / Social Media Post Carousel",
  component: args => (
    <SocialMediaPostCarousel {...args} {...socialMediaPostCarouselProps} />
  ),
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => {
  return (
    <SocialMediaPostCarousel
      {...{ ...args }}
      {...socialMediaPostCarouselProps}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
