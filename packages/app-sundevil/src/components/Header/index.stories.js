// @ts-check
import React from "react";

import { SunDevilsHeader } from ".";

import { testHeaderProps } from "./test-props";

export default {
  title: "Header/Sun Devils Header",
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
