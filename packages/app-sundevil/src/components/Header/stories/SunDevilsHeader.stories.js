// @ts-check
import React from "react";

import { SunDevilsHeader } from "../SunDevilsHeader";
import { Content } from "./Content";
import { HEADER_TEST_PROPS } from "./test-props";

export default {
  title: "Header / Sun Devils Header",
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
      <SunDevilsHeader {...{ ...args, ...HEADER_TEST_PROPS }} />
      <Content />
      <Content />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
