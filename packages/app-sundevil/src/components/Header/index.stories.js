// @ts-check
import React from "react";

import { SunDevilsHeader } from ".";

import { testHeaderProps } from "./test-props-v2";

export default {
  title: "Header/SunDevilsHeader",
  component: args => <SunDevilsHeader {...{ ...args, ...testHeaderProps }} />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => {
  return <SunDevilsHeader {...{ ...args, ...testHeaderProps }} />;
};

export const Default = Template.bind({});
Default.args = {};
