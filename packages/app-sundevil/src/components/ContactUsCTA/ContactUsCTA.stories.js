// @ts-check
import React from "react";

import { ContactUsCTA } from "./ContactUsCTA";

const props = {};

export default {
  title: "Contact Us CTA / Contact Us CTA",
  component: args => <ContactUsCTA {...args} />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => {
  return <ContactUsCTA {...args} />;
};

export const Default = Template.bind({});
Default.args = props;
