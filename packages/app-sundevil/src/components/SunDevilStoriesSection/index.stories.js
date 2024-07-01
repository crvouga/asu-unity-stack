// @ts-check
import React from "react";

import { SunDevilStoriesSection } from "./index";

/**
 * @typedef {import("./index").Sport} Sport
 */

/**
 * @typedef {import("./index").SunDevilStoriesSectionProps} Props
 */

/**
 * @typedef {import("./news-story").NewsStory} NewsStory
 */

/**
 * @type {NewsStory[]}
 */
const newsStories = [
  {
    href: "#",
    showCategory: false,
    showSportName: false,
    category: "News",
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/8e9e/72a1/77c62116be69649354a4a17f906b6615?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MeS04UtlxKjM9ziMvygi4VQpXsMrb3dc-~AcinmwGBfarv-SENiFxas8dMJPMcuRGCsa-LwM6IbGtQ6CyABLg89AixL1t0so-I0-xDk3H6fllt6h56Y0ZbAEXWFtELSrYsVWsLpqNHVgEO99w2gM1qgYq2nwtfCfoRVfocsSm-IdhFHk0QARkax-Qc~FWV4p97k0zs7kma5qh6y-cuOpAa-tfU8TusqglRAcJ0~U5lKH1vpTonEFmfinhed0qcEFfmFpMRmbvz~jz5DGVyprbP5EgeC2XCMhztEuAO25z7woowTqGxwPFf~a8Kt3SkpUeLs04NGwp85uh1i1rJrYeg__",
    sportName: "W. Lacrosse",
    sportIconFaClassName: "fas fa-lacrosse",
    title: "Gigi Gaspar Named Pac-12 Lacrosse Scholar Athlete of the Year",
  },
  {
    href: "#",
    showCategory: false,
    showSportName: false,
    category: "Video",
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/db0e/2b8f/17baef744858f2831afd5de70e69852e?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LzIVm3wZceyyQ2qCNwRixlbg9Nsoy-zDW-FH1vZJY-3D7zNvqyOe3siCiuK1Pcd4au0Hur3bR8eFyHzl199FKZ700Yj0kpwqe~3yY3KlTvacQoqHEuju6Ki7ep6PWhV-K67O99UjMGULD1BXPBfCc0JrN0i67V3C2kvm3FRtrMq5ULQnXEdeTd2pXoHu8iQXnnMyDGswW38dzLCHtJ~HO1P-fy-Fdj6sx3tVw2Cta3gqzWn7h1CjK4A0QuKWKpu~dDajfz3hwN23KmlcPNhjOIOzlwm7xFJEDO14VMHQMsrIrQXss-i4LRS7wCMyB9svxzB4WJeUb0HmQ9~4wynhiA__",
    sportName: "Football",
    sportIconFaClassName: "fas fa-football-ball",
    title: "Super Bowl #SunDevils4Life",
  },
  {
    href: "#",
    showCategory: false,
    showSportName: false,
    category: "Video",
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/a7e8/e762/1cedb83f4bd2e6732714050f2896cb6c?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FkSMmPFMIG-j9b15WHAEVzieYEtT1u9CSQGjGZ5rY9KOfH7v-HuqEnfOzheQeiMSgr9t2QsW7n6Dk-ZUBLNtuTw0AU59A1i6u0pnLTAj0h4CIrZuoT1~wkTtE2P4SeFr1~sVVivnAh7lKDk~sSyTHHf~TM1Zi3vyl0NS7cHO3XnvkULgaRLg5Uni8TVnUVXjdWtUZ2kYfwXy~BtsfCHxkVDfOWLX6RGRkP4DhraU7-agjdt2mtoGxDRb8C0cAi35KjVLBCmGLdnyDAAxpjEk~nZPckePSFtvfXXMfwDW40yp5LfAahXjXd6xFtObYdpaRPnCI0NJenkT3ulFJg2puw__",
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
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/f9f1/f62f/87c68b75cb042655b9dbf6c51643f8cb?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F-gvLfWe2beVM-~wa~fiSyLtKMN1kr9r8oDO6jGVxnVj94O8E6sYJBsfEvRpisevNyXOIvQfoWbuG5abg53KgVVNy2ynaodcqL1UZbIbqvte00rOUQsFGNO~BxpFWUjYw6mJM19XXII9KOstUY75A55FfSQHZoduAY-0L~FPFi~-eP17IuBKaN3rtcYJDglrHmkK6e3GbE3tW4e0Oz36fB2Wrj~1I5hI~Q7CrDw0p0wVQg7vhntL1YbXbBLQqKOUft~Dn479Dd091kLEUv21tI2WjMEBUJHyCPC7EulDsGvXiN~qfDGX~J0izjuPe0c5EDFaBd8iurmrd9Zn7su4yw__",
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
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/6c0d/ba36/0f3cea5b1a4f1c99eff6d375e3be1a5e?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kg6ktxBEy0Z5GlpmxCj8kv9Vln4apNNO5KRQ49LV0~ejRh~sfjYfuw6c5NIx931cnI6vituK4HWC8o10ljzQAtIxhtumTkaM42e6IUj-YmNRc8TP8LunlEcUplitu2thziJMUffQbO1d4mrpuvQ0mrOr1mTtTNQeUN2t9D6vId2hCrAQT9jHs1z4p2GtC9rc~IFxJIbQ1r46No6Fm77di-dBgLmgv2aZp1SkTlu-LhD6ss-ROpi9RaPTdwH6NUQ5THYKwh6V7BNQNvqAKegiLsZZcBTDg1QiRKFWPQNZCpzLdZYGSZPjgwqy-rX921KWLmWuirp0XDM095bzrruXNw__",
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
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/7bc0/246d/4143ac6ebd83e47570bc5aa7e002f4fb?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vs67jkbMvAw5vj9C16xIKg1Q9QdAfDMp7IHuxiHdkupKFSkpThBlU~i~RmhrPTYW7iXJtvro2rDvpKaYupaTdctA35feYW0-wIeNgqQt3rPqsXK0BEG-CkSFtZ39pyQXI5hydyQTHnFKD4~38gpLuwBUpYbmGk6qfk6tI5hYKExZJgXbRnxa494WiTC7fTmfQwoebEAIIo7Uy4eXov2jnvQbAxWwu6A-bDRa0o2UWzxUB7ruAj1u23H9B-VhVmsn~h9nMEekY6wMxrppE-VroTBRpJJpr5LGlVL0OoMRnUq7VlFPMXVUXwzslqihgEOREPGfY3HYkqR~A2lqU2aG9A__",
  },
];

/** @type {Props} */
const props = {
  allStoriesHref: "#",
  allStoriesLabel: "All Stories",
  sectionHeader: {
    title: "Sun Devil Stories",
    presentedBy: {
      name: "Desert Financial",
      logo: "https://www.desertfinancial.com/globalassets/images/logos/desert-financial/df-logo_fullcolor_tm-cropped.svg",
    },
  },
  sports: [
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
  ],
};

export default {
  title: "Sun Devil Stories / Sun Devil Stories Section",
  component: args => <SunDevilStoriesSection {...args} {...props} />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => {
  return <SunDevilStoriesSection {...args} {...props} />;
};

export const Default = Template.bind({
  ...props,
});
