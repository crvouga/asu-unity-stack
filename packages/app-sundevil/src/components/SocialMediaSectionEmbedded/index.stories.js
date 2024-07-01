// @ts-check
import React from "react";

import { SocialMediaSectionEmbeddedDrupal } from "./index";

import { drupalSocialMediaSectionProps } from "./test-props";

export default {
  title: "Social Media / Social Media Section Embedded",
  component: args => (
    <SocialMediaSectionEmbeddedDrupal
      {...args}
      {...drupalSocialMediaSectionProps}
    />
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
    <SocialMediaSectionEmbeddedDrupal
      {...drupalSocialMediaSectionProps}
      {...args}
    />
  );
};

export const Square = Template.bind({});
Square.args = {
  ...drupalSocialMediaSectionProps,
};

export const Tall = Template.bind({});
Tall.args = {
  ...drupalSocialMediaSectionProps,
};
