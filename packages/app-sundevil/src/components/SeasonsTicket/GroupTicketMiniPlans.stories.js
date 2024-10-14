import React from "react";

import { GroupTicketMiniPlans } from "./GroupTicketMiniPlans";

const props = {
  title: "Mini Plans",
  description:
    // "Mini plans are now available for the 2024 Sun Devil Football season.Choose one of each option within the categories below to create your plan.",
    '<p><meta charset="utf-8"></p><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr">Mini plans are no longer available for the 2024 Sun Devil Football season.</p><p style="line-height:1.2;margin-bottom:0pt;margin-top:0pt;" dir="ltr">&nbsp;</p><p><a class="btn btn-dark" text="undefined" href="https://thesundevils.com/documents/2024/6/12/2024_FB_Mini_Plan_Pricing_Map.pdf" role="button"><span class="text">See 2024 pricing map</span></a></p><p>&nbsp;</p><p>If you have questions regarding mini plans or are interested in joining the season ticket holder family, please call or text <a href="tel:480-727-0000">480-727-0000</a> or email <a href="mailto:seasontickets@asu.edu">seasontickets@asu.edu</a> to speak to a Sun Devil ticket sales representative.</p>',
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
  cta: [
    {
      href: "#",
      text: "Build Your Mini Plan",
      target: "_blank",
      startIcon: "fa fas fa-ticket-alt",
      endIcon: "fa fas fa-chevron-right",
    },
    {
      href: "#/hello",
      text: "Hello",
      target: "_blank",
      color: "dark",
      startIcon: "fa fas fa-ticket-alt",
      endIcon: "fa fas fa-chevron-right",
    },
  ],
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
