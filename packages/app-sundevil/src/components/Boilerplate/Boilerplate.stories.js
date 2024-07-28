// @ts-check
import React from "react";

import { Boilerplate } from "./Boilerplate";

// Mock up https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4448-12633&t=vfGSyD27IARFA28D-0
/** @type {import("./Boilerplate").Props} */
const props = {
  foo: "bar",
};

export default {
  title: "Boilerplate / Boilerplate",
  component: args => <Boilerplate {...args} />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => {
  return <Boilerplate {...args} />;
};

export const Default = Template.bind({});
Default.args = props;
