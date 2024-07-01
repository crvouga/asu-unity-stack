// @ts-check

/**
 * @typedef {import("../index").Sport} Sport
 */

/**
 * @typedef {import("../index").SunDevilStoriesProps} Props
 */

/**
 * @typedef {import("../news-story").NewsStory} NewsStory
 */

const imageSrc =
  "https://asuevents.asu.edu/sites/default/files/2024-07/football-2024.jpg";

/**
 * @type {NewsStory[]}
 */
const newsStories = [
  {
    href: "#",
    showCategory: false,
    showSportName: false,
    category: "News",
    imageSrc,
    sportName: "W. Lacrosse",
    sportIconFaClassName: "fas fa-lacrosse",
    title: "Gigi Gaspar Named Pac-12 Lacrosse Scholar Athlete of the Year",
  },
  {
    href: "#",
    showCategory: false,
    showSportName: false,
    category: "Video",
    imageSrc,
    sportName: "Football",
    sportIconFaClassName: "fas fa-football-ball",
    title: "Super Bowl #SunDevils4Life",
  },
  {
    href: "#",
    showCategory: false,
    showSportName: false,
    category: "Video",
    imageSrc,
    sportName: "M. Golf",
    sportIconFaClassName: "fas fa-golf-ball",
    title:
      "Men's Golf Gets No. 1 Seet at Rancho Santa Fe/The Farms Golf Club Regional",
  },
  {
    href: "#",
    showCategory: false,
    showSportName: false,
    category: "News",
    imageSrc,
    sportName: "Vollyball",
    sportIconFaClassName: "fas fa-volleyball-ball",
    title: "Rohr Pac-12 Coach of the Year, Kensinger Honored",
  },
  {
    href: "#",
    showCategory: false,
    showSportName: false,
    category: "Game Recap",
    title: "Lacrosse Downs Ducks, Will Face Stanford in Pac-12 Semifinals",
    sportName: "W. Lacrosse",
    imageSrc,
    sportIconFaClassName: "fas fa-lacrosse",
  },
  {
    href: "#",
    showCategory: false,
    showSportName: false,
    category: "News",
    title: "Kensinger, Williamson Named All-Americans",
    sportName: "Volleyball",
    sportIconFaClassName: "fas fa-volleyball-ball",
    imageSrc,
  },
];

/** @type {Props['sports']} */
export const skeletonSports = [
  {
    name: "All Sports",
    icon: "fas fa-sync-alt",
    active: true,
    position: 1,
    id: "all",
    newsStories: [...newsStories].sort(() => Math.random() - 0.5),
  },
  {
    name: "Football",
    icon: "fas fa-football-ball",
    position: 2,
    id: "football",
    newsStories: [...newsStories].sort(() => Math.random() - 0.5),
  },
  {
    name: "M. Basketball",
    icon: "fas fa-basketball-ball",
    position: 3,
    id: "basketball",
    newsStories: [...newsStories].sort(() => Math.random() - 0.5),
  },
  {
    name: "Hockey",
    icon: "fas fa-hockey-puck",
    position: 4,
    id: "hockey",
    newsStories: [...newsStories].sort(() => Math.random() - 0.5),
  },
  {
    name: "Baseball",
    icon: "fas fa-baseball-ball",
    position: 5,
    id: "baseball",
    newsStories: [...newsStories].sort(() => Math.random() - 0.5),
  },
  {
    name: "W. Basketball",
    icon: "fas fa-basketball-ball",
    id: "w-basketball",
    position: 6,
    newsStories: [...newsStories].sort(() => Math.random() - 0.5),
  },
  {
    name: "Softball",
    icon: "fas fa-futbol",
    id: "softball",
    position: 7,
    newsStories: [...newsStories].sort(() => Math.random() - 0.5),
  },
  {
    name: "Soccer",
    icon: "fas fa-baseball-ball",
    id: "soccer",
    position: 8,
    newsStories: [...newsStories].sort(() => Math.random() - 0.5),
  },
  {
    name: "Swimming",
    icon: "fas fa-swimmer",
    id: "swimming",
    position: 9,
    newsStories: [...newsStories].sort(() => Math.random() - 0.5),
  },
  {
    name: "Golf",
    icon: "fas fa-golf-ball",
    id: "golf",
    position: 10,
    newsStories: [...newsStories].sort(() => Math.random() - 0.5),
  },
  {
    name: "Tennis",
    icon: "fas fa-table-tennis",
    id: "tennis",
    position: 11,
    newsStories: [...newsStories].sort(() => Math.random() - 0.5),
  },
  {
    name: "W. Lacrosse",
    icon: "fas fa-lacrosse",
    id: "w-lacrosse",
    position: 12,
    newsStories: [...newsStories].sort(() => Math.random() - 0.5),
  },
];
