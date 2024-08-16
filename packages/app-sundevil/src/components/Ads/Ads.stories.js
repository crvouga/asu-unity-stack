// @ts-check
import React from "react";

import { Ads } from "./Ads";

/** @type {import("./Ads").Props} */
const props = {
  // width: 970,
  // height: 66,
  storage: window.localStorage,
  storageKey: "sun-devils-ads",
  id: "root-ad",
  ads: [
    {
      imageSrc: "https://tpc.googlesyndication.com/simgad/15906690503191566407",
      imageAlt: "Placeholder",
      href: "https://www.example.com",
      id: "some-ad",
      // width: 970,
      // height: 66,
    },
    {
      imageSrc: "https://tpc.googlesyndication.com/simgad/4947683613591479131",
      imageAlt: "Placeholder",
      href: "https://www.example.com",
      // width: 970,
      // height: 66,
    },
    {
      imageSrc: "https://tpc.googlesyndication.com/simgad/8450655694590921544",
      imageAlt: "Placeholder",
      href: "https://www.example.com",
      // width: 728,
      // height: 90,
    },
  ],
};

export default {
  title: "Ads / Ads",
  component: args => <Ads {...args} />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => {
  return <Ads {...args} />;
};

export const Default = Template.bind({});
Default.args = props;
