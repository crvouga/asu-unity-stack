import PropTypes from "prop-types";
import React, { useState } from "react";

import { DropDown, DropDownSurface } from "../../DropDown";
import { DropDownChevron } from "../../DropDown/DropDownChevron";
import { DropDownItem } from "../../DropDown/DropDownItem";
import { linkTabPropType, linkTabToKey } from "../link";
import { LinkTab } from "../LinkTab";

export const LinkTabMoreDropDown = ({ links, moreTabLabel = "More" }) => {
  const [open, setOpen] = useState(false);
  return (
    <DropDown
      open={open}
      onClose={() => setOpen(false)}
      position="bottom-start"
      renderReference={({ ref, open: isOpen }) => (
        <LinkTab
          as="button"
          focused={isOpen}
          ref={ref}
          onClick={() => setOpen(openPrev => !openPrev)}
          label={moreTabLabel}
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
