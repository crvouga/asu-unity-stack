// @ts-check
import React from "react";

import { GOOGLE_ADS_TEST_PROPS } from "../../../google-ads/test-props";
import { SunDevilsHeader } from "../SunDevilsHeader";
import { Content } from "./Content";
import { HEADER_TEST_PROPS } from "./test-props";
// @ts-ignore
import { mapObjectLeaves } from "../../../utils/map-object-leaves";

export default {
  title: "Header / Sun Devils Header Ads",
  component: SunDevilsHeader,
  parameters: {
    docs: {
      description: {
        component: " ",
      },
    },
  },
};

const Template = args => {
  return (
    <>
      <SunDevilsHeader {...{ ...HEADER_TEST_PROPS, ...args }} />
      <Content />
      <Content />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {};

/**
 * https://docs.google.com/document/d/1vsrmv9ClEcYa25FgPHT5zl9FQW-sbcbOgAxEx3jGh6o/edit?tab=t.eu6mundvmnbh
 */
export const GoogleAd = Template.bind({});
GoogleAd.args = {
  ...HEADER_TEST_PROPS,
  sponsorLogo: {
    ...HEADER_TEST_PROPS.sponsorLogo,
    googleAdHead: GOOGLE_ADS_TEST_PROPS.nonEmpty.googleAdHead,
    googleAdBody: GOOGLE_ADS_TEST_PROPS.nonEmpty.googleAdBody,
  },
};

/**
 * https://docs.google.com/document/d/1vsrmv9ClEcYa25FgPHT5zl9FQW-sbcbOgAxEx3jGh6o/edit?tab=t.eu6mundvmnbh
 */
export const GoogleAdEmpty = Template.bind({});
GoogleAdEmpty.args = {
  ...HEADER_TEST_PROPS,
  sponsorLogo: {
    ...HEADER_TEST_PROPS.sponsorLogo,
    googleAdHead: GOOGLE_ADS_TEST_PROPS.empty.googleAdHead,
    googleAdBody: GOOGLE_ADS_TEST_PROPS.empty.googleAdBody,
  },
};

/**
 * https://docs.google.com/document/d/1vsrmv9ClEcYa25FgPHT5zl9FQW-sbcbOgAxEx3jGh6o/edit?tab=t.eu6mundvmnbh
 */

/**
 * @type {import('../props').HeaderProps}
 */
const propsGoogleAdDropDownFooter = JSON.parse(
  JSON.stringify(HEADER_TEST_PROPS)
);
// @ts-ignore
propsGoogleAdDropDownFooter.navTree[1].extra_section[0] = {
  // @ts-ignore
  ...propsGoogleAdDropDownFooter.navTree[1].extra_section[0],
  googleAdHead: GOOGLE_ADS_TEST_PROPS.nonEmpty.googleAdHead,
  googleAdBody: GOOGLE_ADS_TEST_PROPS.nonEmpty.googleAdBody,
};

export const GoogleAdDropDownFooter = Template.bind({});
GoogleAdDropDownFooter.args = {
  ...propsGoogleAdDropDownFooter,
};
