// @ts-check
import React from "react";

import { RequestTypeSection } from "./RequestTypeSection";

// Mock up https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4448-12633&t=vfGSyD27IARFA28D-0
/** @type {import("./RequestTypeSection").Props} */
const props = {};

export default {
  title: "Request Type Section / Request Type Section",
  component: args => <RequestTypeSection {...args} />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => {
  return <RequestTypeSection {...args} />;
};

export const Default = Template.bind({});
Default.args = props;
