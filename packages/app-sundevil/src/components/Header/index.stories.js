// @ts-check
import React from "react";
import styled from "styled-components";

import { SunDevilsHeader } from ".";

import { testHeaderProps } from "./props-debug";

export default {
  title: "Header/Sun Devils Header",
  component: args => (
    <>
      <SunDevilsHeader {...{ ...args, ...testHeaderProps }} />
      <Content />
      <Content />
    </>
  ),
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: repeating-linear-gradient(
    45deg,
    #efefef,
    #dfdfdf 10px,
    #efefef 10px,
    #efefef 20px
  );
`;

const Template = args => {
  return (
    <>
      <SunDevilsHeader {...{ ...args, ...testHeaderProps }} />
      <Content />
      <Content />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};
