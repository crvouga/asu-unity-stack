// @ts-check
import React from "react";

import { ISpecialEventsDataSource } from "./special-events-data-source/special-events-data-source";
import { SpecialEventsDataSourceStatic } from "./special-events-data-source/special-events-data-source-impl-static";
import { SpecialEventsSection } from "./SpecialEventsSection";

const randomBody = () => {
  const words = [
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet",
    "consectetur",
    "adipiscing",
    "elit",
    "Ut",
    "et",
    "massa",
    "mi",
    "Aliquam",
    "in",
    "hendrerit",
    "urna",
    "Pellentesque",
    "sit",
    "amet",
    "sapien",
    "fringilla",
    "mattis",
    "ligula",
    "consectetur",
    "ultrices",
  ];

  const wordsFinal = [];

  for (let i = 0; i < Math.random() * 10; i += 1) {
    const randomWords = words.sort(() => Math.random() - 0.5);
    wordsFinal.push(
      ...randomWords.slice(0, Math.floor(Math.random() * randomWords.length))
    );
  }

  return wordsFinal.join(" ");
};

/** @type {import("./special-event").SpecialEvent} */
const cardBase = {
  imageSrc:
    "https://s3-alpha-sig.figma.com/img/e612/d1c3/c3494ba0dc25749d9779cb496f7e703b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LrE-~tupwTOUQy4~hBr9vBPPlW0WSoLLicHd2mNpsM897xPOp3gpJPNdF15HEDb0YMLvmjedwt4pGbu36fHJn-~6yrftN4jADb60~q3cqF2qh7qxcOo4rb2xIlTL7RREUTUeuEdbfWch36oKbh4N1yqLWpQSS~0YsXFn6G-DNXjtrzm-co3H4bRPklx2-pTObIfZEM~BJuHx7m2GC8oB0SPx8HrpW5d6P90lO3uCDNvN4tw~fAT9GxMeiA8YUq5edTDFqc3wsVmd9fHMwv9AVj1L1fU4rhlgOZODyvVofIWF3V4nUiWTi19Qsa2txTrKK0nheZEhaf0bX0oQgG6Kog",
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices",
  buttons: [
    {
      color: "maroon",
      href: "#",
      label: "Learn More",
      ariaLabel: "Learn more about the Maroon and Gold Spring Game",
    },
    {
      color: "dark",
      href: "#",
      label: "More Info",
      ariaLabel: "More information about the Maroon and Gold Spring Game",
    },
  ],
  sportName: "Football",
  subtitles: ["April 26, 2024", "Free Admission"],
  title: "Don't miss the Maroon and Gold Spring Game",
};

/** @type {import("./special-event").SpecialEvent[]} */
const specialEvents = [
  {
    ...cardBase,
    id: "1",
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/e612/d1c3/c3494ba0dc25749d9779cb496f7e703b?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LrE-~tupwTOUQy4~hBr9vBPPlW0WSoLLicHd2mNpsM897xPOp3gpJPNdF15HEDb0YMLvmjedwt4pGbu36fHJn-~6yrftN4jADb60~q3cqF2qh7qxcOo4rb2xIlTL7RREUTUeuEdbfWch36oKbh4N1yqLWpQSS~0YsXFn6G-DNXjtrzm-co3H4bRPklx2-pTObIfZEM~BJuHx7m2GC8oB0SPx8HrpW5d6P90lO3uCDNvN4tw~fAT9GxMeiA8YUq5edTDFqc3wsVmd9fHMwv9AVj1L1fU4rhlgOZODyvVofIWF3V4nUiWTi19Qsa2txTrKK0nheZEhaf0bX0oQgG6Kog",
    title: "Don't miss the Maroon and Gold Spring Game",
    sportName: "Football",
    sportIcon: "fas fa-football-ball",
    body: randomBody(),
  },
  {
    ...cardBase,
    id: "2",
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/7721/72dc/96e73cd4315bf14044c059817bc0e2ed?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVU83pvXkuycc7RV7hnT2Z3F5GMlZmmvpjXXi1ICkr-GeqGm7y7Rdt8usJ~grVPKR4V3~DMP9hif135HY1sh2kYIKnD4altGY1z15NWzB8mKHNk1YLyIIHiOuSTwKBmCW1BC6sIeMZz9x~yonXT3NxzJbF8oRVHqJw0ejORv001j8oHRQA~hhmQldB~k7n0P26py0CO9YyHkAavE7sQ38hcfjlgJku08lG9YDv4oePaue2MsArQRGeJIXDvdJ5Q7l0DS5u8cLD36lv1ju~tTAg3P64nWBxgx0m9px6kiXVRHqCTn2X7FzP8FXieP1JXwyUGHsmGdqFzvIo~cdiK4cw__",
    title: "2024 Pac-12 Men's Golf Championships",
    sportName: "Golf",
    sportIcon: "fas fa-golf-ball",
    body: randomBody(),
  },
  {
    ...cardBase,
    id: "3",
    imageSrc:
      "https://s3-alpha-sig.figma.com/img/58bd/32e1/6fc153a1e6011cbe26ee74115d1db05e?Expires=1721001600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GwPqm43LaMtcAw1SkNMWTooS3DiYBQr8G-tkT8sdEFAvYuRjzk7vRq37DdwXrEd9RmV0Jr3vTimmEb3Hn~b8oJodCTfDrSmIN7G~IGombkW0DoNx6qrTt5I5KJrj8vL1gxNicH6xt4shKnLd~qAYEFJw2KgseJZpQ3DttYnxyQEQxLcgEJLdMIN7fB0~-1f9kNtwWs-~5tDqZLHpXCqHkmMNuz75Q0mbsK3kqIlczFKEZewZZc3aMxxf--w3oF8KkF0vLfiQMJCu-GRoP75SHqUuRoqCsxNk6G3-rAvU--yYLohYzJ-YpxN3N0cjZuZddKZ6O1pcCNV9xHqS5f7QXg__",
    title: "Sun Devil Legends Luncheon",
    sportName: "All Sports",
    sportIcon: "fas fa-sync-alt",
    body: randomBody(),
  },
];

class CustomSpecialEventsDataSource extends ISpecialEventsDataSource {
  // eslint-disable-next-line class-methods-use-this
  async findMany(input) {
    await new Promise(resolve => setTimeout(resolve, 1500));

    const dataSource = new SpecialEventsDataSourceStatic({
      specialEvents,
    });

    return dataSource.findMany(input);
  }
}

/**
 *
 */
const props = {
  // specialEventsDataSource: {
  //   type: "static",
  //   specialEvents,
  // },
  // specialEventsDataSource: {
  //   type: "drupal-api",
  //   url: ""
  // },
  // specialEventsDataSource: {
  //   type: "asu-events",
  //   url: "https://asuevents.asu.edu/feed-json/sun_devil_athletics",
  //   timeout: 1500,
  // },
  specialEventsDataSource: {
    type: "custom",
    specialEventsDataSource: new CustomSpecialEventsDataSource(),
  },
  sectionHeader: {
    title: "Special events",
    subtitle:
      "From block parties to hosting championship events, celebrating Sun Devil athletes past and present and more, Sun Devil Athletics offers events for the whole family to enjoy.",
    sponsorBlock: {
      text: "Presented by: ",
      name: "Ford",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/2560px-Ford_logo_flat.svg.png",
      url: "https://www.ford.com/",
    },
  },
};

export default {
  title: "Special Events / Special Events Section",
  component: args => <SpecialEventsSection {...args} {...props} />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => {
  return <SpecialEventsSection {...args} {...props} />;
};

export const Default = Template.bind({});
Default.args = {};
