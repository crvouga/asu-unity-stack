// @ts-check
import React from "react";

import { MyComponent } from "./index";

/** @typedef {import("@asu-design-system/components-core/src/core/types/feed-types").ComponentType } ComponentType */
export default {
  title: "New App Template/Test Component",
  component: MyComponent,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => <MyComponent {...args} />;

/**
 * @type {{ args: ComponentType, parameters: object}}
 */
export const Default = Template.bind({});
Default.args = {
  numItems: 4,
};
