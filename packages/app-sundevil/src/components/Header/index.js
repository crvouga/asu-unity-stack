// @ts-check
import PropTypes from "prop-types";
import React from "react";

import { ASUHeader } from "../../../../component-header/src";
import { RenderReact } from "../../utils/react-render";
import { HeaderContentSportLinks } from "../HeaderContentSportLinks";
import { OfficialAthleticsSite } from "../OfficialAthleticsSite";

/** @typedef {import("../../../../component-header/src/header").HeaderProps} BaseHeaderProps */
/** @typedef {BaseHeaderProps & {officialSiteHref: string}} HeaderProps */

/** @typedef {import("../../../../component-header/src/header").HeaderProps['navTree'][0]} NavTreeItem */

/** @typedef {NavTreeItem & ({type: "builtin"} | {type: "sport-links"})} NavTreeItemVariant */

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
    type: "builtin",
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
const mapNavTreeItemToSportLinks = navTreeItem => {
  return {
    id: navTreeItem.id,
    type: navTreeItem.type,
    text: navTreeItem.text,
    renderContent: () => {
      const buttons = Array.isArray(navTreeItem.buttons)
        ? navTreeItem.buttons
        : [];
      return (
        <HeaderContentSportLinks
          buttons={buttons.map(button => {
            return {
              color: button.color ?? "gold",
              faClassName: iconToFaClassName(
                // @ts-ignore
                button.icon
              ),
              href: button.href,
              label: button.text,
            };
          })}
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

/** @type {(props: NavTreeItemVariant) => NavTreeItemVariant}  */
const mapNavTreeFooters = navTreeItem => {
  if (Array.isArray(navTreeItem.footers) && navTreeItem.footers.length > 0) {
    return navTreeItem;
  }

  // Drupal team are passing weird props
  if (
    "extra_section" in navTreeItem &&
    Array.isArray(navTreeItem.extra_section) &&
    navTreeItem.extra_section.length > 0
  ) {
    return {
      ...navTreeItem,
      footers: navTreeItem.extra_section.map(extraSection => {
        return {
          type: "button-with-text",
          text: extraSection.extra_text,
          buttonHref: extraSection.button_uri,
          buttonText: extraSection.button_text,
        };
      }),
    };
  }

  return navTreeItem;
};

/** @type {(props: NavTreeItemVariant) => NavTreeItemVariant}  */
const mapNavTreeItem = navTreeItem => {
  switch (navTreeItem.type) {
    case "sport-links": {
      return mapNavTreeItemToSportLinks(navTreeItem);
    }
    default: {
      return mapNavTreeFooters(mapNavTreeItemItems(navTreeItem));
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
  },
});

export const SunDevilsHeader = props => {
  return <ASUHeader {...mapProps(props)} />;
};
SunDevilsHeader.propTypes = {
  ...ASUHeader.propTypes,
  officialSiteHref: PropTypes.string.isRequired,
};

export const initSunDevilsHeader = ({ targetSelector, props }) => {
  RenderReact(SunDevilsHeader, props, document.querySelector(targetSelector));
};
