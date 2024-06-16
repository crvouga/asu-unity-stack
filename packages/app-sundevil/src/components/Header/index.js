// @ts-check
import React from "react";

import { ASUHeader } from "../../../../component-header/src";
import { RenderReact } from "../../utils/react-render";
import { HeaderContentSportLinks } from "../HeaderContentSportLinks";

/** @typedef {import("../../../../component-header/src/header").HeaderProps} HeaderProps */

/** @typedef {import("../../../../component-header/src/header").HeaderProps['navTree'][0]} NavTreeItem */

/** @typedef {NavTreeItem & ({type: "builtin"} | {type: "sport-links"})} NavTreeItemVariant */

/** @type {(props: NavTreeItem) => NavTreeItemVariant}  */
const toNavTreeVariant = navTreeItem => {
  if (navTreeItem.text && navTreeItem.text.toLowerCase()?.includes("sport")) {
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

/** @type {(props: NavTreeItemVariant) => NavTreeItemVariant}  */
const mapNavTreeItem = navTreeItem => {
  switch (navTreeItem.type) {
    case "sport-links": {
      return {
        id: navTreeItem.id,
        type: navTreeItem.type,
        text: navTreeItem.text,
        renderContent: () => {
          return (
            <HeaderContentSportLinks
              sports={(navTreeItem.items ?? []).flatMap(column =>
                column.map(item => {
                  // const extraLinks = Array.isArray(item.extra_links) ? item?.extra_links : [];
                  return {
                    href: item.href,
                    sportName: item.text,
                    sportLinks: [],
                    faClassName: "fa fa-soccer-ball-o",
                  };
                })
              )}
            />
          );
        },
      };
    }
    default: {
      return {
        ...navTreeItem,
      };
    }
  }
};

/** @type {(props: HeaderProps['navTree']) => HeaderProps['navTree']}  */
const mapNavTree = navTree => navTree.map(toNavTreeVariant).map(mapNavTreeItem);

/** @type {(props: HeaderProps) => HeaderProps}  */
const mapProps = props => ({ ...props, navTree: mapNavTree(props.navTree) });

export const SunDevilsHeader = props => {
  return <ASUHeader {...mapProps(props)} />;
};
SunDevilsHeader.propTypes = ASUHeader.propTypes;

export const initSunDevilsHeader = ({ targetSelector, props }) => {
  RenderReact(SunDevilsHeader, props, document.querySelector(targetSelector));
};
