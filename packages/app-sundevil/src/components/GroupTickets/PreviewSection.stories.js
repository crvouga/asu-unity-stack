import React from "react";

import { PreviewSection } from "./PreviewSection";

const props = {
  title: "Bring the whole crew",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna.",
  images: [
    {
      src: "https://picsum.photos/300/300",
      alt: "Football",
    },
    {
      src: "https://picsum.photos/300/300",
      alt: "Football",
    },
    {
      src: "https://picsum.photos/300/300",
      alt: "Football",
    },
  ],
  interestedSection: {
    title: "Interested?",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
};

const Template = args => <PreviewSection {...args} {...props} />;

export const Default = Template.bind({
  ...props,
});

export default {
  title: "Group Ticket / Preview Section",
  component: args => <PreviewSection {...args} />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};
