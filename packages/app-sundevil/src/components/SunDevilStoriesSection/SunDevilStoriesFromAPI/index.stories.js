// @ts-check
import React from "react";

import { SunDevilStoriesFromAPI } from "./index";

const props = {
  title: "Sun Devil Stories",
  sponsor_block: [
    {
      text: "Presented by:",
      name: "Desert Financial",
      logo: "https://www.desertfinancial.com/globalassets/images/logos/desert-financial/df-logo_fullcolor_tm-cropped.svg",
    },
  ],
  // We have to proxy because of CORS error
  api_endpoint: "http://localhost:8888/",
  // api_endpoint: "https://asuevents.asu.edu/feed-json/sun_devil_athletics",
  all_stories_href: "#",
  all_stories_label: "All Stories",
  api_impl: "mock",
};

export default {
  title: "Sun Devil Stories / Sun Devil Stories From API",
  component: args => <SunDevilStoriesFromAPI {...args} />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => {
  return <SunDevilStoriesFromAPI {...args} {...props} />;
};

export const Default = Template.bind({
  ...props,
});
