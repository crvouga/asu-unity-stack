// @ts-check

import React from "react";

import { RenderReact } from "./render-react";

const CookieConsent = React.lazy(() =>
  import("../../component-cookie-consent/src/CookieConsent").then(module => ({
    default: module.CookieConsent,
  }))
);
const Ads = React.lazy(() =>
  import("./components/Ads").then(module => ({ default: module.Ads }))
);
const CardSectionSingleColumn = React.lazy(() =>
  import("./components/CardSectionSingleColumn").then(module => ({
    default: module.CardSectionSingleColumn,
  }))
);
const CardSectionThreeColumn = React.lazy(() =>
  import("./components/CardSectionThreeColumn").then(module => ({
    default: module.CardSectionThreeColumn,
  }))
);
const ContactUsCTA = React.lazy(() =>
  import("./components/ContactUsCTA").then(module => ({
    default: module.ContactUsCTA,
  }))
);
const GameTable = React.lazy(() =>
  import("./components/GameTable").then(module => ({
    default: module.GameTable,
  }))
);

const GameTableSection = React.lazy(() =>
  // @ts-ignore
  import("./components/GameTableSection").then(module => ({
    default: module.GameTableSection,
  }))
);

const GroupTickets = React.lazy(() =>
  import("./components/GroupTickets").then(module => ({
    default: module.GroupTickets,
  }))
);
const CardGrid = React.lazy(() =>
  import("./components/GroupTickets/CardGrid").then(module => ({
    default: module.CardGrid,
  }))
);
const EnhanceExperience = React.lazy(() =>
  import("./components/GroupTickets/EnhanceExperience").then(module => ({
    default: module.EnhanceExperience,
  }))
);
const PreviewSection = React.lazy(() =>
  import("./components/GroupTickets/PreviewSection").then(module => ({
    default: module.PreviewSection,
  }))
);
const SunDevilsHeader = React.lazy(() =>
  import("./components/Header").then(module => ({
    default: module.SunDevilsHeader,
  }))
);
const IconTextColumnsSection = React.lazy(() =>
  import("./components/IconTextColumnsSection").then(module => ({
    default: module.IconTextColumnsSection,
  }))
);
const NonTicketedIntro = React.lazy(() =>
  import("./components/IconTextColumnsSection/NonTicketedIntro").then(
    module => ({ default: module.NonTicketedIntro })
  )
);
const LinkTabsBar = React.lazy(() =>
  // @ts-ignore
  import("./components/LinkTabsBar").then(module => ({
    default: module.LinkTabsBar,
  }))
);
const NewsStorySection = React.lazy(() =>
  import("./components/NewsStorySection").then(module => ({
    default: module.NewsStorySection,
  }))
);
const NewsZoneSection = React.lazy(() =>
  import("./components/NewsZoneSection").then(module => ({
    default: module.NewsZoneSection,
  }))
);
const SeasonsTicket = React.lazy(() =>
  import("./components/SeasonsTicket").then(module => ({
    default: module.SeasonsTicket,
  }))
);
const GroupTicketBenefit = React.lazy(() =>
  import("./components/SeasonsTicket/GroupTicketBenefit").then(module => ({
    default: module.GroupTicketBenefit,
  }))
);
const GroupTicketMiniPlans = React.lazy(() =>
  import("./components/SeasonsTicket/GroupTicketMiniPlans").then(module => ({
    default: module.GroupTicketMiniPlans,
  }))
);
const TicketsFooter = React.lazy(() =>
  import("./components/SeasonsTicket/ticketsFooter").then(module => ({
    default: module.TicketsFooter,
  }))
);
const SectionHeader = React.lazy(() =>
  import("./components/SectionHeader").then(module => ({
    default: module.SectionHeader,
  }))
);
const SocialMediaSection = React.lazy(() =>
  import("./components/SocialMediaSection").then(module => ({
    default: module.SocialMediaSection,
  }))
);
const SocialMediaSectionEmbedded = React.lazy(() =>
  import("./components/SocialMediaSectionEmbedded").then(module => ({
    default: module.SocialMediaSectionEmbedded,
  }))
);
const SpecialEventsSection = React.lazy(() =>
  import("./components/SpecialEventsSection").then(module => ({
    default: module.SpecialEventsSection,
  }))
);
const VideoSection = React.lazy(() =>
  import("./components/VideoSection").then(module => ({
    default: module.VideoSection,
  }))
);

/**
 * @typedef {(input: Omit<import("./render-react").RenderInput, 'component'>) => void} InitComponent
 */

/** @type {InitComponent} */
export const initGameTableComponent = input => {
  RenderReact({
    ...input,
    component: GameTable,
  });
};

/** @type {InitComponent} */
export const initHeaderComponent = input => {
  RenderReact({
    ...input,
    component: SectionHeader,
  });
};

/** @type {InitComponent} */
export const initGameTableSection = input => {
  RenderReact({
    ...input,
    component: GameTableSection,
  });
};

/** @type {InitComponent} */
export const initSocialMediaSection = input => {
  RenderReact({
    ...input,
    component: SocialMediaSection,
  });
};

/** @type {InitComponent} */
export const initSocialMediaSectionEmbedded = input => {
  RenderReact({
    ...input,
    component: SocialMediaSectionEmbedded,
  });
};

/** @type {InitComponent} */
export const initNewsStorySection = input => {
  RenderReact({
    ...input,
    component: NewsStorySection,
  });
};

// for backward compatibility
export const initSunDevilsStoriesSection = initNewsStorySection;

/** @type {InitComponent} */
export const initSunDevilsHeader = input => {
  RenderReact({
    ...input,
    component: SunDevilsHeader,
  });
};

/** @type {InitComponent} */
export const initSpecialEventsSection = input => {
  RenderReact({
    ...input,
    component: SpecialEventsSection,
  });
};

/** @type {InitComponent} */
export const initNewsZoneSection = input => {
  RenderReact({
    ...input,
    component: NewsZoneSection,
  });
};

export const initVideoSection = input => {
  RenderReact({
    ...input,
    component: VideoSection,
  });
};

export const initCookieConsent = input => {
  RenderReact({
    ...input,
    component: CookieConsent,
  });
};

export const initLinkTabsBar = input => {
  RenderReact({
    ...input,
    component: LinkTabsBar,
  });
};

export const initSeasonsTicket = input => {
  RenderReact({
    ...input,
    component: SeasonsTicket,
  });
};

export const initGroupsTicket = input => {
  RenderReact({
    ...input,
    component: GroupTickets,
  });
};

export const initTicketsFooter = input => {
  RenderReact({
    ...input,
    component: TicketsFooter,
  });
};

export const initGroupTicketBenefitSection = input => {
  RenderReact({
    ...input,
    component: GroupTicketBenefit,
  });
};

export const initEnhanceExperienceSection = input => {
  RenderReact({
    ...input,
    component: EnhanceExperience,
  });
};

export const initCardGrid = input => {
  RenderReact({
    ...input,
    component: CardGrid,
  });
};

// For backward compatibility
export const initGroupTicketsBySport = initCardGrid;

export const initPreviewSection = input => {
  RenderReact({
    ...input,
    component: PreviewSection,
  });
};

export const initGroupTicketMiniPlans = input => {
  RenderReact({
    ...input,
    component: GroupTicketMiniPlans,
  });
};

export const initContactUsCTA = input => {
  RenderReact({
    ...input,
    component: ContactUsCTA,
  });
};

export const initCardSectionSingleColumn = input => {
  RenderReact({
    ...input,
    component: CardSectionSingleColumn,
  });
};

export const initCardSectionThreeColumn = input => {
  RenderReact({
    ...input,
    component: CardSectionThreeColumn,
  });
};

export const initIconTextColumnsSection = input => {
  RenderReact({
    ...input,
    component: IconTextColumnsSection,
  });
};

export const initNonTicketedIntro = input => {
  RenderReact({
    ...input,
    component: NonTicketedIntro,
  });
};

export const initAds = input => {
  RenderReact({
    ...input,
    component: Ads,
  });
};
