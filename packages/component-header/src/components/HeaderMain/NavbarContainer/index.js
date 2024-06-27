// @ts-check
import PropTypes from "prop-types";
import React, { forwardRef, useState } from "react";

import { idGenerator, trackGAEvent } from "../../../../../../shared";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useAppContext } from "../../../core/context/app-context";
import { useIsMobile } from "../../../core/hooks/isMobile";
import { Button } from "../../Button";
import { UniversalNavbar } from "../../UniversalNavbar";
import { Wrapper } from "./index.styles";
import { NavItem } from "./NavItem";

/**
 * @type {React.FC<{navBarHeight: number}>}
 */
const NavbarContainer = forwardRef(({ navBarHeight }, ref) => {
  const {
    navTree,
    mobileNavTree,
    buttons,
    breakpoint,
    universalNavbar,
    mobile,
  } = useAppContext();
  const isMobile = useIsMobile(breakpoint);
  const [itemOpened, setItemOpened] = useState(undefined);

  const handleSetItemOpened = itemId => {
    setItemOpened(() => (itemOpened === itemId ? undefined : itemId));
  };

  const renderItem = (link, index) => {
    const item = { ...link, id: index };
    const genKey = idGenerator(`${link.text}-${index}-`);
    const key = genKey.next().value;
    return (
      <NavItem
        key={key}
        link={item}
        setItemOpened={() => handleSetItemOpened(index)}
        // @ts-ignore
        itemOpened={itemOpened}
      />
    );
  };

  const showUniversalNavbar = isMobile && !universalNavbar?.hideMobile;

  return (
    <Wrapper
      ref={ref}
      // @ts-ignore
      breakpoint={breakpoint}
      data-testid="navigation"
      aria-label="Main"
      showUniversalNavbar={showUniversalNavbar}
      navBarHeight={navBarHeight}
    >
      {isMobile && typeof mobile?.drawer?.renderStart === "function"
        ? mobile.drawer.renderStart()
        : null}
      {(navTree?.length || mobileNavTree?.length || buttons?.length) && (
        <div className="content-container">
          {(navTree?.length || mobileNavTree?.length) && (
            <ul className="nav-list">
              {!!mobileNavTree?.length && isMobile
                ? mobileNavTree?.map((link, i) => renderItem(link, i))
                : navTree?.map((link, i) => renderItem(link, i))}
            </ul>
          )}
          {!!buttons?.length && (
            <form className="buttons-container" data-testid="buttons-container">
              {buttons?.map(button => (
                <Button
                  {...button}
                  key={button.text}
                  onFocus={() => trackGAEvent({ text: button.text })}
                />
              ))}
            </form>
          )}
        </div>
      )}
      {/* Navbar Footer */}
      {showUniversalNavbar && <UniversalNavbar />}
    </Wrapper>
  );
});

NavbarContainer.propTypes = {
  // @ts-ignore
  navBarHeight: PropTypes.number,
};

export { NavbarContainer };
