// @ts-check

/** @type {import("../special-event").SpecialEvent} */
const cardBase = {
  imageSrc: " ",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices",
  buttons: [
    {
      color: "maroon",
      href: "#",
      label: "Learn More",
    },
    {
      color: "dark",
      href: "#",
      label: "More Info",
    },
  ],
  sportName: "Football",
  subtitles: ["April 26, 2024", "Free Admission"],
  title: "Don't miss the Maroon and Gold Spring Game",
};

/** @type {import('../special-event').SpecialEvent[]} */
export const specialEventsSkeletonData = Array.from(
  { length: 3 },
  (_, index) => ({
    ...cardBase,
    id: String(index + 1),
  })
);
