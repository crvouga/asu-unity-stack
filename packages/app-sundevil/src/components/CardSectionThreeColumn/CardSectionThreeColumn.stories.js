// @ts-check
import React from "react";

import { CardSectionThreeColumn } from "./CardSectionThreeColumn";

// Mock up https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4946-9655&t=RJ4gXIiQnKYmjiU7-0
/** @type {import("./CardSectionThreeColumn").Props} */
const props = {
  sectionHeader: {
    title: "Partner with us",
    subtitle:
      "As we enter a new era in ASU Sun Devil Athletics, we are excited to expand our efforts to engage and build a stronger affinity with ASU partners in our community, through sport. Our business community is vital to the advancement of ASU, and we aim to offer more opportunities for our corporate communities to partner with us in many ways, including athletics.",
  },
  cardSectionTitle: "Examples of corporate partnerships could include:",
  cards: [
    {
      title: "Corporate and hospitality",
      description:
        "We design curated, custom packages, to accommodate large and small group events",
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/de38/858c/fd42425186cdb4c18852d8f5aa3f1786?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KQQl-OicgB73mULh6vZL3Gev50~7NdVOhYOeYkEADRtLVQYHxSwiUStEMSADjgjze0bD-oBlaFsfq4-L4LBPkuG8DNxni7MfwVKFmkTvR6W-9vnxHlvX0fTojIsdSnbVgsjkmEKoIr~3mt5F61ma1y9mRlmWKAtHWVjK2q2ZzI6~EMKZWrxeugYVi5HVz~uicoYAdjF6xIHgtMF4qrtm-TYJIo4LwIG~~skb5kWNzUNoFDI3qBoNrT4AVpFI57bPXz7RT~mRmd55BSsz3dJNJYA2kA7CgPRT~10fFGD4T05VocKFOSvtN~0aoHnJFdrIuwTSg7e5PaKpRfSjA08WoA__",
      imageAlt: " ",
    },
    {
      title: "Season ticket special offers",
      description:
        "ASU partners receive a special football season ticket offer in the Lower Level End Zone or Upper West Sideline.",
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/db85/37ac/a645afe0099bd391a0d89549ea5166f5?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HfnB3Zi~XQAzjtFXgpEZUkdCqf5qbgOeiGEDCOud63mLZMhABzetjXGumgY09BX2wt2wG6bPvmcwQ39ST9baSwTOoMbGkINNXACjJCUduVRO9cmq-v005QDBO6BDwC9-~-rmcpFKlwyGsm9Ie9vJsw87Bflo4SyBIareLcjK8xKJLmtHs7MvB7FEP5O9Bb-fzXwvpgu5Nre9A2MkFdp3tQoK5hllUoQoThCIbRVgaM2hUrLkCkAMuSVqtkn-ViSY2ziRHK35K~ryh9riohJgsPCD-ocWL1KI6a95JNOu2BCWOCRtwCKnazabsFtL2HxCH9g7UAm50fU1EU9d1wUkTw__",
      imageAlt: " ",
    },
    {
      title: "Single game tickets for events",
      description:
        "Specially priced ASU partner game tickets available in a block",
      imageSrc:
        "https://s3-alpha-sig.figma.com/img/f710/b026/54aa42a892e9c3d6e7be272da3279702?Expires=1723420800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qPeLnRRPGXG9Mcy4~HmAt549dc7krB~YqdpSEruDCDCj-wA-43NdTyYlThDdff-QqXdsKoEmfQLa~zEH~UjhZV8-gp8x1H3dx5rvqc-UvUMc0SGUPBjFoIOpKA2~GceUZcd17e0QrykTqnjp4LACpUuj12-jppvTfFdJX3-vO6Or~RhstDLRKfYiAlw-s2WcCsdukSjtziC1s4K~D48OsJmLgdRRiS0FI-sdvncn0twhg8dGbP7SXudzeZ-dfNrgVC0JNOIwzc1gg-JAHZDaO~SsZlk9khh1eyeFV5fzMqhfvrjywjSodsWVzGUiERf~as2-MDM5J3EYXBbOvCK14A__",
      imageAlt: " ",
    },
  ],
  footerButtons: [
    {
      label: "Work with us",
      href: "#",
      color: "gold",
      size: "large",
    },
  ],
};

export default {
  title: "Card Section / Card Section Three Column",
  component: args => <CardSectionThreeColumn {...args} />,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => {
  return <CardSectionThreeColumn {...args} />;
};

export const Default = Template.bind({});
Default.args = props;
