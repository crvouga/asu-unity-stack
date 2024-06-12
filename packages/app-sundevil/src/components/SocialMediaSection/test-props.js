import { socialMediaPostCarouselProps } from "../SocialMediaPostCarousel/test-props";

const sectionHeaderProps = {
  title: "Sun Devil Nation",
  subtitle:
    "Share your Sun Devil love! The Sun Devil Nation is a global community that bleeds maroon and gold.",
  presentedBy: {
    name: "Ford",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png",
  },
  tabs: [],
  social: [
    {
      label: "Facebook",
      url: "#",
    },
    {
      label: "Twitter",
      url: "#",
    },
    {
      label: "Instagram",
      url: "#",
    },
  ],
  onTabItemClick: () => {},
};

export const socialMediaSectionProps = {
  sectionHeader: sectionHeaderProps,
  postCarousel: socialMediaPostCarouselProps,
};
