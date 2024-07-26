// @ts-check
import React from "react";

import { ContactUsCTA } from "./ContactUsCTA";

// Mock up https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4946-9137&t=npLkRT1OeHXVfTDe-0
/** @type {import("./ContactUsCTA").Props} */
const props = {
  title: "Interested? Have questions? We’re here to help.",
  body: "If you have questions regarding Season Tickets or Mini Plans, or are interested in joining the Season Ticket Holder family, please call <a href='#'>480-727-0000</a> or email <a href='#'>seasontickets@asu.edu</a> to speak to a Sun Devil Ticket sales representative.",
  buttons: [
    {
      color: "gold",
      href: "#",
      label: "Email us",
    },
  ],
  footerLinksLabel: "Current Season Ticket Holders:",
  footerLinks: [
    {
      href: "#",
      label: "Renew tickets",
    },
    {
      href: "#",
      label: "Learn more",
    },
  ],
  imageAlt: " ",
  imageSrc:
    "https://s3-alpha-sig.figma.com/img/975d/af0e/fe74c4e14178ba517df3c0a1d51ef4ee?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OZwBpVuenNFF~kvSHsxyGSUPR7DSPk0JaPh8uWJbqxmoscUYE25dbhUvfAVkLXD06-ARN2awmbzd2IOBk6l6OZMcPnm~IrwwiZDoXS5LJndkaZYFMIfUm5FRs53VeE9G0vR4Or8hYLr32hQ8K5xMy3w2PdbtAd5qHWY~xyPzW17VXQbO5OSQTJMTLdbRA0X6T1MjzWcbX8It71wC75cLBsB5oMVXSLT8674Gwf42NaSAeII1q0MVpc62gYOU2c940n~quYeQXUuuxsMbsrHU3Wm5rAYzFIs17RgQInJBdrAjMS526Dzq2wa9cQF1eSoHaMB9LWuzjlf4GooTlNie4Q__",
};

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
