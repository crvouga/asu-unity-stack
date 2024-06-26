// @ts-check
import React from "react";

import { LiveNow } from "./LiveNow";

export default {
  title: "Live Now / Live Now",
  component: args => <LiveNow {...args} />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => {
  return <LiveNow {...args} />;
};

export const Desktop = Template.bind({});
Desktop.args = {};
