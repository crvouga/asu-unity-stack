import PropTypes from "prop-types";
import React, { useState } from "react";

import { DropDown, DropDownSurface } from "../../DropDown";
import { DropDownChevron } from "../../DropDown/DropDownChevron";
import { DropDownItem } from "../../DropDown/DropDownItem";
import { linkTabPropType, linkTabToKey } from "../link";
import { LinkTab } from "../LinkTab";

export const LinkTabsBarDropDown = ({ links }) => {
  const [open, setOpen] = useState(false);
  const activeLink = links.find(link => link.active);

  return (
    <DropDown
      open={open}
      onClose={() => setOpen(false)}
      position="bottom-start"
      renderReference={({ ref, open: isOpen }) => (
        <LinkTab
          style={{ width: "100%", padding: "0 1rem" }}
          as="button"
          focused={isOpen}
          ref={ref}
          onClick={() => setOpen(openPrev => !openPrev)}
          label={activeLink.label}
          icon={activeLink.icon}
          renderIconEnd={() => <DropDownChevron open={isOpen} />}
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
              onClick={link.onClick}
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
