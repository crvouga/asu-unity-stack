// @ts-check
import React from "react";

import { VideoSection } from "./index";

/**
 * @typedef {import("./index").Sport} Sport
 */

/**
 * @typedef {import("./index").Props} Props
 */

/**
 * @typedef {import("../NewsStory/news-story").NewsStory} NewsStory
 */

const imageSrc =
  "https://asuevents.asu.edu/sites/default/files/2024-07/football-2024.jpg";

/** @type {Props} */
const props = {
  bottomButtons: [
    {
      color: "maroon",
      href: "https://www.youtube.com/@thesundevils",
      label: "Watch more",
      endIcon: "fa fas fa-solid fa-arrow-up-right-from-square",
      target: "_blank",
    },
  ],
  newsStories: [
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/8d20/1f72/5ddad920fe6909e26a83a3085dfcbbb6?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hpe-56mMFfnx9xLBrRYuMzRaMgO1uhzRy-ba-rqvr-Z2K3UVdsGBQw2fujcTG1ymEaZnoaZdLz9oL0I3Tu9oCzMvH~68~UOh8X4hdJFT2SQx96N675ZxC4pR2UuZI24JkLNUipHSmJ2gryuKl9QWk-qNtEnFNuUOReUSL76GBL8lDZcnafKubVf0Z6DWjj1DQkFfLsme9Pgsio5ldp0YKTA1r2tH1~hGvQB6Cw2bAedHjVIFV4gVr7Qdb54bgmumbn1CYwReSltv15LIqnuoq2n-DlBq3FbAHpHiXiPTIi6O6sqH-PtkgAuly7bqJFtHOHL26So1h-LfCfzvhRQY~Q__",
      title:
        "Sun Devil Football Staff Update: Hines Ward New Wide Receivers Coach",
      youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/db0e/2b8f/17baef744858f2831afd5de70e69852e?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MM42Xvuer6a1TLI257Ja3QiympAdy2Lh7p4BgQGIKC3ixl5prhOAKMeBzBm2q8FGo7CUnFeuaMITA3-iRx07Cfx3cQDOPDfdeNaeMUwG7FlDB1KiD56sHmiy4ofGGU3dR40MGrpsQUFZycXrF~iw7KPVGX0cdZtAqOuN7ymMCPZz~5iwF8qcfW67g0XmNZVH51izRqNB17FFsNBKxNYtc6FOkWA7-ARnzvDNsSExXbMUN9L0sFp32UlLeE4Uyst7bQTJ8MPnYZmC0s7jmFC8aqgwJ5BHvsaS4o1R1akjM~i90poOzdnK0FIxW8pGMXFCe1zPnF7cu8fn0uWnQFAGHg__",
      title: "Super Bowl #SunDevils4Life",
      youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
    },
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/dfae/4866/ba1fbcd89e13fd869983f888431f8de9?Expires=1721606400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bS5L16TSKJ~5JomeDwxEcuWlZo2FGlyz60-6R-XTMDNMSsLTmOv3vH-6Hs2hEMoPw21R8mYPpz4x6jrYlxo07q3cLmSc-M1HLCD73AqmyoekBZnhnzq~LYY-oUgGhu6YklIA0XCQ6cQG1KYh~RGjWEvoEp~gvL1pys1l6Mom9SxFf13DWn1NgfzoXgat36JgERn7r9NnbkwmweWI364jcwQwJ5ibMkeTc5SfMvuSEXq1~bdAzK7q9D9gtoJ9AnnXuhl0k~T1HqzyBwX7z4~2zsPvcwKgc~cFgTvIWlVWht8o7iU12mviU8IRqD~ZKzLa1MLCiazDp-9yMFq6V6D6wA__",
      title: "Big 12 Announces 2024 Football Schedule",
      youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
    },
    {
      imageSrc,
      title: "Rohr Pac-12 Coach of the Year, Kensinger Honored",
      youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
    },
    {
      title: "Lacrosse Downs Ducks, Will Face Stanford in Pac-12 Semifinals",
      youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
    },
    {
      title: "Kensinger, Williamson Named All-Americans",
      imageSrc,
      youtubeVideoUrl: "https://www.youtube.com/watch?v=I07k7P0txjY",
    },
  ],
};

export default {
  title: "Video Section / Video Section",
  component: args => <VideoSection {...args} />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => {
  return <VideoSection {...args} {...props} />;
};

export const Default = Template.bind({
  ...props,
});
