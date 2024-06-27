// @ts-check
import React, { useRef, useState } from "react";

import { trackGAEvent } from "../../../../../shared";
import { useAppContext } from "../../core/context/app-context";
import { useIsMobile } from "../../core/hooks/isMobile";
import { useDimensions } from "../../core/utils/use-dimensions";
import { useDisableParentScrolling } from "../../core/utils/use-disable-parent-scrolling";
import { UniversalNavbar } from "../UniversalNavbar";
import { HamburgerButton } from "./HamburgerButton";
import { HeaderMainWrapper } from "./index.styles";
import { Logo } from "./Logo";
import { LogoSponsor } from "./LogoSponsor";
import { NavbarContainer } from "./NavbarContainer";
import { Partner } from "./Partner";
import { Title } from "./Title";

const HeaderMain = () => {
  const {
    breakpoint,
    isPartner,
    // @ts-ignore
    hasNavigation,
  } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile(breakpoint);
  const isDesktop = !isMobile;
  const navbarRef = React.useRef(null);
  const navbarDimensions = useDimensions(navbarRef);

  const handleChangeMenuVisibility = () => {
    setMobileMenuOpen(prevState => !prevState);
  };

  const handleClickMobileMenu = () => {
    handleChangeMenuVisibility();
    trackGAEvent({
      event: "collapse",
      action: mobileMenuOpen ? "close" : "open",
      type: "click",
      text: "menu button tablet",
    });
  };

  /** @type {React.MutableRefObject<HTMLElement | null>} */
  const mobileNavContainerRef = useRef(null);
  useDisableParentScrolling({
    disabled: mobileMenuOpen && isMobile,
    elementRef: mobileNavContainerRef,
  });

  return (
    <>
      {isDesktop && <UniversalNavbar />}
      {/* @ts-ignore */}
      <HeaderMainWrapper breakpoint={breakpoint}>
        <div className="container-xl">
          <div className="header-main">
            <div
              className={`navbar navbar-expand-xl ${
                isPartner ? "partner" : ""
              }`}
              ref={navbarRef}
            >
              {!isPartner && <Logo />}

              {isMobile && (
                <HamburgerButton
                  onClick={handleClickMobileMenu}
                  open={mobileMenuOpen}
                />
              )}
              {isDesktop && (
                <>
                  <div
                    className={`${!isPartner ? "expand-title" : ""}${
                      !hasNavigation ? " no-navigation" : ""
                    }`}
                  >
                    {isPartner ? <Partner /> : <Title />}
                    <NavbarContainer navBarHeight={navbarDimensions.height} />
                  </div>
                  <LogoSponsor />
                </>
              )}
            </div>
            {isMobile && mobileMenuOpen && (
              <NavbarContainer
                navBarHeight={navbarDimensions.height}
                // @ts-ignore
                ref={mobileNavContainerRef}
              />
            )}
          </div>
        </div>
      </HeaderMainWrapper>
    </>
  );
};

export { HeaderMain };
