import PropTypes from "prop-types";
import React, { useState } from "react";

import { trackGAEvent } from "../../../track-ga-event";
import { CollapseIcon } from "../../CollapseIcon/CollapseIcon";
import { DropDown, DropDownSurface } from "../../DropDown";
import { DropDownItem } from "../../DropDown/DropDownItem";
import { linkTabPropType, linkTabToKey } from "../link";
import { LinkTab } from "../LinkTab";

export const LinkTabMoreDropDown = ({ links, moreTabLabel = "More" }) => {
  const [open, setOpen] = useState(false);
  return (
    <DropDown
      open={open}
      onClose={() => setOpen(false)}
      style={{ height: "100%" }}
      position="bottom-end"
      renderReference={({ ref, open: isOpen }) => (
        <LinkTab
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
              text: moreTabLabel || "more",
              component: "text",
            });
          }}
          label={moreTabLabel}
          renderIconEnd={() => (
            <div key={isOpen}>
              <CollapseIcon open={isOpen} />
            </div>
          )}
          active={links.some(link => link.active)}
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
              active={link.active}
              onClick={() => setOpen(false)}
            />
          ))}
        </DropDownSurface>
      )}
    />
  );
};
LinkTabMoreDropDown.propTypes = {
  links: PropTypes.arrayOf(linkTabPropType),
  moreTabLabel: PropTypes.string,
};
