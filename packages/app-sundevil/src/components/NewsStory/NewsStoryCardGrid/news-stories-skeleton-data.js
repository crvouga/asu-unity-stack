/**
 * @type {import("../news-story").NewsStory[]}
 */
export const newsStoriesSkeletonData = Array.from({ length: 6 }).map(() => ({
  id: Math.random().toString(),
  href: "#",
  showCategory: false,
  showSportName: false,
  category: "News",
  imageSrc:
    "https://asuevents.asu.edu/sites/default/files/2024-07/football-2024.jpg",
  sportId: "lacrosse",
  sportName: "W. Lacrosse",
  sportIconFaClassName: "fas fa-lacrosse",
  title: "lorem ipsum dolor sit amet consectetur adipiscing elit ",
}));

export const DEFAULT_EMPTY_STATE_MESSAGE = "No stories available";
