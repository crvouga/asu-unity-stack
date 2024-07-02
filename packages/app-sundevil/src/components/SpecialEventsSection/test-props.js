import { specialEventsCardCarouselProps } from "./SpecialEventCardCarousel/test-props";

const sectionHeaderProps = {
  title: "Special events",
  subtitle:
    "From block parties to hosting championship events, celebrating Sun Devil athletes past and present and more, Sun Devil Athletics offers events for the whole family to enjoy.",
  sponsorBlock: {
    text: "Presented by: ",
    name: "Ford",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png",
    url: "https://www.ford.com/",
  },
};

export const specialEventsSectionProps = {
  sectionHeader: sectionHeaderProps,
  cardCarousel: specialEventsCardCarouselProps,
};
