// @ts-check
import React from "react";

import { CardSectionSingleColumn } from "./CardSectionSingleColumn";

// Mock up https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4448-12633&t=vfGSyD27IARFA28D-0
/** @type {import("./CardSectionSingleColumn").Props} */
const props = {
  cards: [
    {
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/39f0/b001/a99e342d92f0c890d3af993d9737fa78?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q7A2Kb8zkkuRZLeWayaYUqArbEGxTL6dZCsPDStRCsoFQ78uV4zr~rRBMExpYaTU~GjiC~1AeE1cSsPhxYCtaWuLoYF0JLZRWWXmFhl~5Eo1EFjUpuICaV~fs79CM~eiWXPC1lZHbr-vjTY473FYMGPsbZ4kmssU5r3KhU01qKYn8Ncgd7ozVfqgoOUcmqUAkA4As05feXMY2bhAv8~AY37oXXLsMmA4NlGY3gEb1EkEC8lQ9LbCYc1hj3xPWTtpRwYEbyUps2qEkxY-ya3WNDF2JMsk~7~GuEnOGuoMYWlHaFsJlivFgmuRcPXr1UDHnlEh-mHwZzwrmBmT1XYf4g__",
      buttons: [
        {
          href: "#",
          label: "Secure your spot",
        },
      ],
      description:
        "Is your child in 8th grade or younger looking for memories that will last a lifetime? Sign them up so they can experience Sun Devil Athletics hands on through complimentary admission to events, games, competitions and exclusive experiences.",
      imageAlt: " ",
      title: "The Junior Sun Devil Club",
    },
    {
      title: "Get your kid into the action",
      buttons: [
        {
          label: "Visit Group Sales",
          href: "#",
        },
      ],
      description:
        "Watching the games is only part of the fun. We have opportunities for children to be involved in game activities through our group ticket sales programs. From waving the ASU flag on the field, to getting personalized photos and being in the spirit tunnel for high-fives from all their favorite players, there are so many ways to get your children from in the stands to on the field/court. To learn more, check out our group ticket sales options, and let the fun begin.",
      imageAlt: " ",
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/da5d/af53/30cb4940c3e8f52ee8a7ff821cfd3509?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l2b2LNQ6xNY2y6fHtTozFBeKDDJEwmWUxywFX1GJ8kmcPweT-uxQ8mg56qMia6vZPttW1PVbXRuOXqE~YwICtia-91JA-0SAwWRW8mJq8wiMpQWlvGqiVHkOPJeyusjogPL-i258vDwQKtE74I6QbqPTlhS~s88FA0NhLAXMpR9CCe~AQFwz46y4DpLUwPhh3uUBPSSH5QZmxWvZcokM4xybT2FjtVvt8kTCy~xxBftB7qBd3ivtvOvJ5GZLVw32QKW7-Ie5nzVQR9KQWPHwrcY44ZAj34b3AubKjjIOBHp1pIz1LvASv2p5v0v3La76jhWbxEcnDLn64koIJLD8hw__",
    },
    {
      title: "Sun Devil Camps",
      buttons: [
        {
          label: "Attend now",
          href: "#",
        },
      ],
      description:
        "From football, to basketball, to soccer and more, our ASU Sun Devils are always happy to have Junior Sun Devils on the field, court or pool. Your children will receive one-on-one time with our coaches and student athletes that will build bonds and new skills to practice and take home.",
      imageAlt: " ",
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/bcc4/46a3/e850419fc46c5066bf336cd8e47d76f1?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DokL3465s9vmhJbXdrtU7QwEXTwdaADHP3RWdy5DTl3RAWLEL8zPQIGMWwalkNp5hzHIVzA7dSKVFos9g84k-UNOK~ohWMBTKH7rcUIZaIB2sNfS48hqrJ4KEeSJbz-PDYIhhzwCWbAZs79qD9-Ufjzz7xxe0Gf8GUNuCsKoAJk5u6uDc~J329wrBdz9opKdw1cb06gdNg-4mWhvguKI9CtzUnsMjPjBy~sLAGoOJMsyGTOQeOUr93B9uyxL2UsT5VmKD7R29aKnj2leb3mNEWandBy38EaRZ4sAo-v2bMXLjYX2sqU4IuKEFHJWsZss4SSeAfdjPzhP8Y3X02KSzA__",
    },
  ],
};

export default {
  title: "CardSection / CardSection",
  component: args => <CardSectionSingleColumn {...args} />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => {
  return <CardSectionSingleColumn {...args} />;
};

export const Default = Template.bind({});
Default.args = props;
