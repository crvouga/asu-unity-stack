/**
 * @type {import("../news-story").NewsStory}
 */
export const newsStorySkeleton = {
  id: Math.random().toString(),
  href: "#",
  showNewsType: false,
  showSportName: false,
  newsType: "News",
  imageSrc:
    "https://asuevents.asu.edu/sites/default/files/2024-07/football-2024.jpg",
  sportId: "lacrosse",
  sportName: "W. Lacrosse",
  sportIcon: "fas fa-lacrosse",
  title: "lorem ipsum dolor sit amet consectetur adipiscing elit ",
};

export const DEFAULT_EMPTY_STATE_MESSAGE = "No stories available";

export const randomNewsStorySkeleton = () => {
  return {
    ...newsStorySkeleton,
    id: Math.random().toString(),
  };
};
