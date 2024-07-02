// @ts-check
import React from "react";

import { SpecialEventsSection } from "./SpecialEventsSection";
import { specialEventsSectionProps } from "./test-props";

export default {
  title: "Special Events / Special Events Section",
  component: args => (
    <SpecialEventsSection {...args} {...specialEventsSectionProps} />
  ),
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => {
  return <SpecialEventsSection {...args} {...specialEventsSectionProps} />;
};

export const Default = Template.bind({});
Default.args = {};
