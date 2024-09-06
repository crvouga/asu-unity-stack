import React from "react";

import { GroupTicketMiniPlans } from "./GroupTicketMiniPlans";

const props = {
  title: "Mini Plans",
  description:
    "Mini plans are now available for the 2024 Sun Devil Football season.Choose one of each option within the categories below to create your plan.",
  // backgroundSrc: backgroundPattern,
  // backgroundAlt: " ",
  miniPlans: [
    {
      title: "Non-conference:",
      description: "Wyoming or Mississippi State",
    },
    {
      title: "October:",
      description: "Kansas or Utah",
    },
    {
      title: "November:",
      description: "UCF or BYU",
    },
  ],
  cta: {
    href: "#",
    text: "Build Your Mini Plan",
    target: "_blank",
    startIcon: "fa fas fa-ticket-alt",
    endIcon: "fa fas fa-chevron-right",
  },
  ctaAlign: "start",
};
const Template = args => <GroupTicketMiniPlans {...args} {...props} />;

export const Default = Template.bind({
  ...props,
});

export default {
  title: "Season Tickets / Grouped Ticket Mini Plans",
  component: args => <GroupTicketMiniPlans {...args} />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};
