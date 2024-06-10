// @ts-check
import React from "react";

import { SocialMediaPostCarousel } from "./index";

export default {
  title: "Section/SocialMediaPostCarousel",
  component: args => <SocialMediaPostCarousel {...args} />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => {
  return <SocialMediaPostCarousel {...{ ...args }} />;
};

export const Default = Template.bind({});
Default.args = {};
