// @ts-check
import React from "react";

import { SocialMediaSection } from "./index";

import { socialMediaSectionProps } from "./test-props";

export default {
  title: "Social Media / Social Media Section",
  component: args => (
    <SocialMediaSection {...args} {...socialMediaSectionProps} />
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
  return <SocialMediaSection {...args} />;
};

export const Square = Template.bind({});
Square.args = {
  ...socialMediaSectionProps,
  sectionHeader: {
    ...socialMediaSectionProps.sectionHeader,
    title: "Connect with your Sun Devil Football team",
    subtitle:
      "Join fellow Sun Devil football fans  the latest updates about the program, games, your favorite players and more!",
    presentedBy: {
      name: "Ford",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png",
    },
  },
  postCarousel: {
    ...socialMediaSectionProps.postCarousel,
    variant: "square",
  },
};

export const Tall = Template.bind({});
Tall.args = {
  sectionHeader: {
    title: "Sun Devil Nation",
    subtitle:
      "Share your Sun Devil love! The Sun Devil Nation is a global community that bleeds maroon and gold.",
    presentedBy: {
      name: "Ford",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png",
    },
  },
  postCarousel: {
    ...socialMediaSectionProps.postCarousel,
    variant: "tall",
  },
};
