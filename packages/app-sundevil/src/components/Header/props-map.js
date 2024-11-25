// @ts-check
import React from "react";

import { trackGAEvent } from "../../track-ga/track-ga-event";
import { isCleanString } from "../../utils/is-clean-string";
import { HeaderContentSportLinks } from "../HeaderContentSportLinks";
import { Icon } from "../Icon_";
import { OfficialAthleticsSite } from "../OfficialAthleticsSite";
import { mapSponsorLogoProps } from "./SponsorLogo/props-map";
import { TopBanner } from "./TopBanner";
import { UniversalNavMobile } from "./UniversalNavMobile";
import { DropdownItemFooterGoogleAd } from "./DropdownItemFooter/DropdownItemFooterGoogleAd";

/** @typedef {import("./props").HeaderProps['navTree'][0]} NavTreeItem */

/** @typedef {NavTreeItem & ({type: "builtin"} | {type: "sport-links"} | {type: string & {}})} NavTreeItemVariant */

const isSportLinksItem = item =>
  item.text &&
  item.text.toLowerCase()?.includes("sport") &&
  typeof item.renderContent !== "function";

/** @type {(props: NavTreeItem) => NavTreeItemVariant}  */
const assocNavTreeVariant = navTreeItem => {
  if (isSportLinksItem(navTreeItem)) {
    return {
      ...navTreeItem,
      type: "sport-links",
    };
  }
  return {
    ...navTreeItem,
    type: navTreeItem.type ?? "builtin",
  };
};

/** @type {(item: object) => object} */
const mapNavTreeItemItem = item => {
  return {
    ...item,
    renderStartIcon: () => <Icon icon={item.icon} />,
  };
};

/** @type {(props: NavTreeItemVariant) => NavTreeItemVariant} */
const mapNavTreeItemButtons = navTreeItem => {
  const buttons = Array.isArray(navTreeItem.buttons) ? navTreeItem.buttons : [];
  return {
    ...navTreeItem,
    buttons: buttons.map(button => ({
      ...button,
      icon: undefined,
      renderStartIcon: () => (
        <Icon
          icon={"icon" in button && button.icon}
          style={{ marginRight: "0.5rem" }}
        />
      ),
    })),
  };
};

const ensureArray = value => (Array.isArray(value) ? value : [value]);

/** @type {(props: NavTreeItemVariant) => NavTreeItemVariant} */
const mapNavTreeItemToSportLinks = navTreeItem => {
  const sports = ensureArray(navTreeItem.items).flatMap(column =>
    ensureArray(column).map(item => {
      const extraLinks = ensureArray(item?.extra_links);

      return {
        href: item.href,
        sportName: item.text,
        sportLinks: extraLinks.map(extraLink => {
          return {
            label: extraLink.text,
            url: extraLink.href,
          };
        }),
        icon: item.icon,
      };
    })
  );

  const allHrefs = new Set(
    ensureArray(sports).flatMap(sport => [
      sport.href,
      ...ensureArray(sport.sportLinks).map(link => link.url),
    ])
  );

  const selected = allHrefs.has(
    window.location.pathname + window.location.search
  );

  return {
    selected,
    href: navTreeItem.href,
    id: navTreeItem.id,
    type: navTreeItem.type,
    text: navTreeItem.text,
    footers: navTreeItem.footers,
    buttons: navTreeItem.buttons,
    renderContent: ({ listId = "", onClickedLink = () => {} } = {}) => (
      <HeaderContentSportLinks
        id={listId}
        buttons={[]}
        onClickedLink={onClickedLink}
        sports={sports}
      />
    ),
  };
};

/** @type {(props: NavTreeItemVariant) => NavTreeItemVariant}  */
const mapNavTreeItemItems = navTreeItem => {
  return {
    ...navTreeItem,
    items: navTreeItem.items?.map?.(item => {
      if (Array.isArray(item)) {
        return item.map(mapNavTreeItemItem);
      }
      return mapNavTreeItemItem(item);
    }),
  };
};

/** @type {(extraSection: unknown) => "image-only" | "button-with-text" | "google-ad"} */
const extraSectionToFooterType = extraSection => {
  // Drupal team passing weird props
  if (
    typeof extraSection === "object" &&
    extraSection &&
    "googleAdHead" in extraSection &&
    "googleAdBody" in extraSection &&
    isCleanString(extraSection.googleAdHead) &&
    isCleanString(extraSection.googleAdBody)
  ) {
    return "google-ad";
  }

  if (
    typeof extraSection === "object" &&
    extraSection &&
    "type" in extraSection &&
    extraSection.type &&
    typeof extraSection.type === "string" &&
    extraSection.type.toLowerCase().includes("image") &&
    extraSection.type.toLowerCase().includes("only")
  ) {
    return "image-only";
  }

  return "button-with-text";
};

/** @type {(props: NavTreeItemVariant) => NavTreeItemVariant}  */
const mapNavTreeFooters = navTreeItem => {
  if (Array.isArray(navTreeItem.footers) && navTreeItem.footers.length > 0) {
    return navTreeItem;
  }

  // Drupal team passing weird props
  if (
    "extra_section" in navTreeItem &&
    Array.isArray(navTreeItem.extra_section) &&
    navTreeItem.extra_section.length > 0
  ) {
    return {
      ...navTreeItem,
      footers: ensureArray(navTreeItem?.extra_section)?.map(extraSection => {
        const type = extraSectionToFooterType(extraSection);
        const footer = {
          ...extraSection,
          type,
          text: extraSection?.extra_text,
          buttonHref: extraSection?.button_uri,
          buttonText: extraSection?.button_text,
          href: extraSection?.href,
          imageSrc: extraSection?.url,
          imageWidth: extraSection?.image_width,
          imageHeight: extraSection?.image_height,
          imageAlt: extraSection?.alt,
        };
        switch (type) {
          case "google-ad": {
            return {
              ...footer,
              type: "render",
              render: () => (
                <DropdownItemFooterGoogleAd
                  googleAdHead={extraSection.googleAdHead}
                  googleAdBody={extraSection.googleAdBody}
                />
              ),
            };
          }
          case "button-with-text":
          case "image-only":
          default: {
            return footer;
          }
        }
      }),
    };
  }

  return navTreeItem;
};

const pipe = (data, ...fns) => fns.reduce((acc, fn) => fn(acc), data);

/** @type {(props: NavTreeItemVariant) => NavTreeItemVariant}  */
const mapNavTreeItem = navTreeItem => {
  switch (navTreeItem.type) {
    case "sport-links": {
      return pipe(
        navTreeItem,
        mapNavTreeFooters,
        mapNavTreeItemToSportLinks,
        mapNavTreeItemButtons
      );
    }
    default: {
      return pipe(
        navTreeItem,
        mapNavTreeItemItems,
        mapNavTreeFooters,
        mapNavTreeItemButtons
      );
    }
  }
};

const ensureOnlyOneSelectedItem = navTree => {
  if (!Array.isArray(navTree) || navTree.length === 0) {
    return navTree;
  }
  const selectedItemIndex = navTree.findIndex(item => item?.selected);

  if (selectedItemIndex === -1) {
    return navTree;
  }

  const navTreeNew = navTree.map((item, index) => {
    if (index === selectedItemIndex) {
      return {
        ...item,
        selected: true,
      };
    }
    return {
      ...item,
      selected: false,
    };
  });
  return navTreeNew;
};

/** @type {(props: import("./props").HeaderProps['navTree']) => import("./props").HeaderProps['navTree']}  */
const mapNavTree = navTree =>
  Array.isArray(navTree)
    ? navTree.map(assocNavTreeVariant).map(mapNavTreeItem)
    : [];

/** @type {(props: import("./props").HeaderProps) => import("./props").HeaderProps}  */
export const mapProps = props => ({
  ...props,
  navTree: ensureOnlyOneSelectedItem(mapNavTree(props.navTree)),
  sponsorLogo: mapSponsorLogoProps(props?.sponsorLogo ?? {}),
  universalNavbar: {
    renderStart: () => (
      <OfficialAthleticsSite
        {...props.officialSite}
        hrefStyle={props.officialSiteHrefStyle}
        href={props.officialSiteHref}
      />
    ),
    hideMobile: false,
    searchPlaceholder: "Search Sun Devil Athletics",
    disableTopGradient: true,
    hideSignIn: true,
    ...props.universalNavbar,
  },
  logo: {
    ...props.logo,
    onFocus: () => {
      trackGAEvent({
        event: "link",
        action: "click",
        name: "onclick",
        type: "internal link",
        region: "navbar",
        section: "main navbar",
        text: "asu sun devil athletics logo",
        component: "image",
      });
    },
  },

  mobile: {
    drawer: {
      height: "fit-content",
    },
    includeOfficialSite: true,
    title: props.title,
    ...props.mobile,
  },
  renderTop: ({ isMobile }) => {
    const includeOfficialSite = props.mobile?.includeOfficialSite ?? true;

    if (isMobile && includeOfficialSite) {
      return (
        <>
          <TopBanner {...props.topBanner} scrollTarget={props.scrollTarget} />
          <UniversalNavMobile {...props} scrollTarget={props.scrollTarget} />
        </>
      );
    }
    return <TopBanner {...props.topBanner} scrollTarget={props.scrollTarget} />;
  },
});
