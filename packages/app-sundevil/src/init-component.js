/* eslint-disable import-helpers/order-imports */
// @ts-nocheck

import { RenderReact } from "./render-react";

import { SunDevilsHeader } from "./components/Header";
// const SunDevilsHeader = React.lazy(() =>
//   import("./components/Header").then(module => ({
//     default: module.SunDevilsHeader,
//   }))
// );

import { CookieConsent } from "../../component-cookie-consent/src/CookieConsent";
// const CookieConsent = React.lazy(() =>
//   import("../../component-cookie-consent/src/CookieConsent").then(module => ({
//     default: module.CookieConsent,
//   }))
// );

import { Ads } from "./components/Ads";
// const Ads = React.lazy(() =>
//   import("./components/Ads").then(module => ({ default: module.Ads }))
// );

import { CardSectionSingleColumn } from "./components/CardSectionSingleColumn";
// const CardSectionSingleColumn = React.lazy(() =>
//   import("./components/CardSectionSingleColumn").then(module => ({
//     default: module.CardSectionSingleColumn,
//   }))
// );

import { CardSectionThreeColumn } from "./components/CardSectionThreeColumn";
// const CardSectionThreeColumn = React.lazy(() =>
//   import("./components/CardSectionThreeColumn").then(module => ({
//     default: module.CardSectionThreeColumn,
//   }))
// );

import { ContactUsCTA } from "./components/ContactUsCTA";
// const ContactUsCTA = React.lazy(() =>
//   import("./components/ContactUsCTA").then(module => ({
//     default: module.ContactUsCTA,
//   }))
// );

import { GameTable } from "./components/GameTable";
// const GameTable = React.lazy(() =>
//   import("./components/GameTable").then(module => ({
//     default: module.GameTable,
//   }))
// );

import { GameTableSection } from "./components/GameTableSection";
// const GameTableSection = React.lazy(() =>
//   import("./components/GameTableSection").then(module => ({
//     default: module.GameTableSection,
//   }))
// );

import { GroupTickets } from "./components/GroupTickets";
// const GroupTickets = React.lazy(() =>
//   import("./components/GroupTickets").then(module => ({
//     default: module.GroupTickets,
//   }))
// );

import { CardGrid } from "./components/GroupTickets/CardGrid";
// const CardGrid = React.lazy(() =>
//   import("./components/GroupTickets/CardGrid").then(module => ({
//     default: module.CardGrid,
//   }))
// );

import { EnhanceExperience } from "./components/GroupTickets/EnhanceExperience";
// const EnhanceExperience = React.lazy(() =>
//   import("./components/GroupTickets/EnhanceExperience").then(module => ({
//     default: module.EnhanceExperience,
//   }))
// );

import { PreviewSection } from "./components/GroupTickets/PreviewSection";
// const PreviewSection = React.lazy(() =>
//   import("./components/GroupTickets/PreviewSection").then(module => ({
//     default: module.PreviewSection,
//   }))
// );

import { IconTextColumnsSection } from "./components/IconTextColumnsSection";
// const IconTextColumnsSection = React.lazy(() =>
//   import("./components/IconTextColumnsSection").then(module => ({
//     default: module.IconTextColumnsSection,
//   }))
// );

import { NonTicketedIntro } from "./components/IconTextColumnsSection/NonTicketedIntro";
// const NonTicketedIntro = React.lazy(() =>
//   import("./components/IconTextColumnsSection/NonTicketedIntro").then(
//     module => ({ default: module.NonTicketedIntro })
//   )
// );

import { LinkTabsBar } from "./components/LinkTabsBar";
// const LinkTabsBar = React.lazy(() =>
//   import("./components/LinkTabsBar").then(module => ({
//     default: module.LinkTabsBar,
//   }))
// );

import { NewsStorySection } from "./components/NewsStorySection";
// const NewsStorySection = React.lazy(() =>
//   import("./components/NewsStorySection").then(module => ({
//     default: module.NewsStorySection,
//   }))
// );

import { NewsZoneSection } from "./components/NewsZoneSection";
// const NewsZoneSection = React.lazy(() =>
//   import("./components/NewsZoneSection").then(module => ({
//     default: module.NewsZoneSection,
//   }))
// );

import { SeasonsTicket } from "./components/SeasonsTicket";
// const SeasonsTicket = React.lazy(() =>
//   import("./components/SeasonsTicket").then(module => ({
//     default: module.SeasonsTicket,
//   }))
// );

import { GroupTicketBenefit } from "./components/SeasonsTicket/GroupTicketBenefit";
// const GroupTicketBenefit = React.lazy(() =>
//   import("./components/SeasonsTicket/GroupTicketBenefit").then(module => ({
//     default: module.GroupTicketBenefit,
//   }))
// );

import { GroupTicketMiniPlans } from "./components/SeasonsTicket/GroupTicketMiniPlans";
// const GroupTicketMiniPlans = React.lazy(() =>
//   import("./components/SeasonsTicket/GroupTicketMiniPlans").then(module => ({
//     default: module.GroupTicketMiniPlans,
//   }))
// );

import { TicketsFooter } from "./components/SeasonsTicket/ticketsFooter";
// const TicketsFooter = React.lazy(() =>
//   import("./components/SeasonsTicket/ticketsFooter").then(module => ({
//     default: module.TicketsFooter,
//   }))
// );

import { SectionHeader } from "./components/SectionHeader";
// const SectionHeader = React.lazy(() =>
//   import("./components/SectionHeader").then(module => ({
//     default: module.SectionHeader,
//   }))
// );

import { SocialMediaSection } from "./components/SocialMediaSection";
// const SocialMediaSection = React.lazy(() =>
//   import("./components/SocialMediaSection").then(module => ({
//     default: module.SocialMediaSection,
//   }))
// );

import { SocialMediaSectionEmbedded } from "./components/SocialMediaSectionEmbedded";
// const SocialMediaSectionEmbedded = React.lazy(() =>
//   import("./components/SocialMediaSectionEmbedded").then(module => ({
//     default: module.SocialMediaSectionEmbedded,
//   }))
// );

import { SpecialEventsSection } from "./components/SpecialEventsSection";
// const SpecialEventsSection = React.lazy(() =>
//   import("./components/SpecialEventsSection").then(module => ({
//     default: module.SpecialEventsSection,
//   }))
// );

import { VideoSection } from "./components/VideoSection";
// const VideoSection = React.lazy(() =>
//   import("./components/VideoSection").then(module => ({
//     default: module.VideoSection,
//   }))
// );

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
