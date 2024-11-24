// @ts-check
import React from "react";

import { SunDevilsHeader } from "../SunDevilsHeader";
import { baseProps } from "./base-props";
import { Content } from "./Content";

export default {
  title: "Header / Sun Devils Header Ads",
  component: SunDevilsHeader,
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
    <>
      <SunDevilsHeader {...{ ...args, ...baseProps }} />
      <Content />
      <Content />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
