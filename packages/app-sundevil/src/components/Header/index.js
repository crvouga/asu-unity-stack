// @ts-check
import PropTypes from "prop-types";
import React from "react";

import { ASUHeader } from "../../../../component-header/src";
import { RenderReact } from "../../utils/react-render";
import { HeaderContentSportLinks } from "../HeaderContentSportLinks";
import { OfficialAthleticsSite } from "../OfficialAthleticsSite";
import { IconHamburgerSearch } from "./IconHamburgerSearch";
import { MobileSearchBar } from "./MobileSearchBar";

/** @typedef {import("../../../../component-header/src/header").HeaderProps} BaseHeaderProps */
/** @typedef {BaseHeaderProps & {officialSiteHref: string}} HeaderProps */

/** @typedef {import("../../../../component-header/src/header").HeaderProps['navTree'][0]} NavTreeItem */

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
/** @type {(icon: unknown) => icon is {icon_name: string, style: string}} */
const isIcon = icon =>
  Boolean(
    icon && typeof icon === "object" && "icon_name" in icon && "style" in icon
  );

/** @type {(icon: unknown) => string} */
const iconToFaClassName = icon => {
  if (!isIcon(icon)) return "";
  return `fa ${icon.style} fa-${icon.icon_name}`;
};

/** @type {(item: object) => object} */
const mapNavTreeItemItem = item => {
  return {
    ...item,
    faClassName: iconToFaClassName(item.icon),
  };
};

/** @type {(props: NavTreeItemVariant) => NavTreeItemVariant} */
const mapNavTreeItemButtons = navTreeItem => {
  const buttons = Array.isArray(navTreeItem.buttons) ? navTreeItem.buttons : [];
  return {
    ...navTreeItem,
    buttons: buttons.map(button => {
      const icon =
        "icon" in button &&
        typeof button.icon === "object" &&
        isIcon(button.icon)
          ? button.icon
          : null;

      const faClassName = iconToFaClassName(icon);

      return {
        ...button,
        faClassName,
      };
    }),
  };
};

/** @type {(props: NavTreeItemVariant) => NavTreeItemVariant} */
const mapNavTreeItemToSportLinks = navTreeItem => {
  return {
    id: navTreeItem.id,
    type: navTreeItem.type,
    text: navTreeItem.text,
    footers: navTreeItem.footers,
    buttons: navTreeItem.buttons,
    renderContent: () => {
      return (
        <HeaderContentSportLinks
          buttons={[]}
          sports={(navTreeItem.items ?? []).flatMap(column =>
            column.map(item => {
              const extraLinks = Array.isArray(item.extra_links)
                ? item?.extra_links
                : [];
              return {
                href: item.href,
                sportName: item.text,
                sportLinks: extraLinks.map(extraLink => {
                  return {
                    label: extraLink.text,
                    url: extraLink.href,
                  };
                }),
                faClassName: iconToFaClassName(item.icon),
              };
            })
          )}
        />
      );
    },
  };
};

/** @type {(props: NavTreeItemVariant) => NavTreeItemVariant}  */
const mapNavTreeItemItems = navTreeItem => {
  const items = Array.isArray(navTreeItem.items) ? navTreeItem.items : [];
  return {
    ...navTreeItem,
    items: items.map(item => {
      if (Array.isArray(item)) {
        return item.map(mapNavTreeItemItem);
      }
      return mapNavTreeItemItem(item);
    }),
  };
};

/** @type {(extraSection: unknown) => "image-only" | "button-with-text"} */
const extraSectionToFooterType = extraSection => {
  // Drupal team passing weird props
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
      footers: navTreeItem.extra_section.map(extraSection => {
        return {
          ...extraSection,
          type: extraSectionToFooterType(extraSection),
          text: extraSection.extra_text,
          buttonHref: extraSection.button_uri,
          buttonText: extraSection.button_text,
          imageSrc: extraSection.url,
          imageWidth: extraSection.image_width,
          imageHeight: extraSection.image_height,
          imageAlt: extraSection.alt,
        };
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

/** @type {(props: HeaderProps['navTree']) => HeaderProps['navTree']}  */
const mapNavTree = navTree =>
  navTree.map(assocNavTreeVariant).map(mapNavTreeItem);

/** @type {(props: HeaderProps) => HeaderProps}  */
const mapProps = props => ({
  ...props,
  navTree: mapNavTree(props.navTree),
  universalNavbar: {
    renderStart: () => <OfficialAthleticsSite href={props.officialSiteHref} />,
    hideMobile: true,
    searchPlaceholder: "Search Sun Devil Athletics",
  },
  mobile: {
    hamburger: {
      renderOpen: () => (
        <IconHamburgerSearch
          width="24"
          height="24"
          style={{ color: "#4d4d4d" }}
        />
      ),
    },
    drawer: {
      renderStart: () => <MobileSearchBar />,
    },
  },
});

export const SunDevilsHeader = props => {
  const mappedProps = { ...mapProps(props) };
  return <ASUHeader {...mappedProps} />;
};
SunDevilsHeader.propTypes = {
  ...ASUHeader.propTypes,
  officialSiteHref: PropTypes.string.isRequired,
};

export const initSunDevilsHeader = ({ targetSelector, props }) => {
  RenderReact(SunDevilsHeader, props, document.querySelector(targetSelector));
};
