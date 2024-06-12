// @ts-check
import React from "react";

import { SocialMediaSection } from "./index";

import { socialMediaSectionProps } from "./test-props";

export default {
  title: "Social Media / Social Media Section",
  component: args => (
    <SocialMediaSection {...args} {...socialMediaSectionProps} />
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
  return <SocialMediaSection {...{ ...args }} {...socialMediaSectionProps} />;
};

export const Default = Template.bind({});
Default.args = {};
