import PropTypes from "prop-types";
import React, { useState } from "react";

import { trackGAEvent } from "../../../track-ga-event";
import { CollapseIcon } from "../../CollapseIcon/CollapseIcon";
import { DropDown, DropDownSurface } from "../../DropDown";
import { DropDownItem } from "../../DropDown/DropDownItem";
import { linkTabPropType, linkTabToKey } from "../link";
import { LinkTab } from "../LinkTab";

export const LinkTabsBarDropDown = ({ links }) => {
  const [open, setOpen] = useState(false);
  const activeLink = links.find(link => link.active) ?? links[0];

  return (
    <DropDown
      open={open}
      onClose={() => setOpen(false)}
      position="bottom-start"
      style={{
        width: "100%",
        padding: "0",
        height: "100%",
      }}
      width="screen"
      renderReference={({ ref, open: isOpen }) => (
        <LinkTab
          style={{
            width: "100%",
            height: "100%",
            paddingRight: "1rem",
          }}
          as="button"
          focused={isOpen}
          ref={ref}
          onClick={() => {
            setOpen(openPrev => !openPrev);
            trackGAEvent({
              event: "collapse",
              action: isOpen ? "close" : "open",
              name: "onclick",
              type: "click",
              region: "main content",
              section: "sticky navbar",
              text: activeLink?.icon || "more",
              component: "text",
            });
          }}
          label={activeLink?.label}
          icon={activeLink?.icon}
          renderIconEnd={() => (
            <div key={isOpen}>
              <CollapseIcon open={isOpen} />
            </div>
          )}
        />
      )}
      renderContent={() => (
        <DropDownSurface>
          {links?.map(link => (
            <DropDownItem
              as="a"
              key={linkTabToKey(link)}
              label={link.label}
              href={link.href}
              onClick={() => {
                setOpen(false);
              }}
              active={link.active}
            />
          ))}
        </DropDownSurface>
      )}
    />
  );
};
LinkTabsBarDropDown.propTypes = {
  links: PropTypes.arrayOf(linkTabPropType),
};
