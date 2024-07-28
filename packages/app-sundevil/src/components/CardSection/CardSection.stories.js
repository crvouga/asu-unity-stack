// @ts-check
import React from "react";

import { CardSection } from "./CardSection";

// Mock up https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4448-12633&t=vfGSyD27IARFA28D-0
/** @type {import("./CardSection").Props} */
const props = {
  foo: "bar",
};

export default {
  title: "CardSection / CardSection",
  component: args => <CardSection {...args} />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => {
  return <CardSection {...args} />;
};

export const Default = Template.bind({});
Default.args = props;
