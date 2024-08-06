// @ts-check
import React from "react";

import { SocialMediaSectionEmbedded } from "./index";

import { drupalSocialMediaSectionProps } from "./test-props";

export default {
  title: "Social Media / Social Media Section Embedded",
  component: args => (
    <SocialMediaSectionEmbedded {...args} {...drupalSocialMediaSectionProps} />
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
    <SocialMediaSectionEmbedded {...drupalSocialMediaSectionProps} {...args} />
  );
};

export const Base = Template.bind({});
Base.args = {
  ...drupalSocialMediaSectionProps,
};

export const EmptyEmbed = Template.bind({});
EmptyEmbed.args = {
  ...drupalSocialMediaSectionProps,
  embed_code: "",
};
