// @ts-check

import { CookieConsent } from "../../component-cookie-consent/src/CookieConsent";
import {
  GameTable,
  GameTableSection,
  LinkTabsBar,
  NewsStorySection,
  NewsZoneSection,
  SectionHeader,
  SocialMediaSection,
  SocialMediaSectionEmbedded,
  SpecialEventsSection,
  SunDevilsHeader,
  VideoSection,
} from "./components";
import { Ads } from "./components/Ads";
import { CardSectionSingleColumn } from "./components/CardSectionSingleColumn";
import { CardSectionThreeColumn } from "./components/CardSectionThreeColumn";
import { ContactUsCTA } from "./components/ContactUsCTA";
import { GroupTickets } from "./components/GroupTickets";
import { CardGrid } from "./components/GroupTickets/CardGrid";
import { EnhanceExperience } from "./components/GroupTickets/EnhanceExperience";
import { PreviewSection } from "./components/GroupTickets/PreviewSection";
import { IconTextColumnsSection } from "./components/IconTextColumnsSection";
import { NonTicketedIntro } from "./components/IconTextColumnsSection/NonTicketedIntro";
import { SeasonsTicket } from "./components/SeasonsTicket";
import { GroupTicketBenefit } from "./components/SeasonsTicket/GroupTicketBenefit";
import { GroupTicketMiniPlans } from "./components/SeasonsTicket/GroupTicketMiniPlans";
import { TicketsFooter } from "./components/SeasonsTicket/ticketsFooter";
import { RenderReact } from "./render-react";

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
