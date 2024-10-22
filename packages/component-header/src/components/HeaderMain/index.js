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
import { MobileTitle } from "./Title/MobileTitle";

const HeaderMain = () => {
  const { breakpoint, isPartner, hasNavigation, renderTop } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile(breakpoint);
  const isDesktop = !isMobile;
  const navbarRef = React.useRef(null);
  const navbarDimensions = useDimensions(navbarRef);

  const handleChangeMenuVisibility = () => {
    setMobileMenuOpen(prevState => !prevState);
  };

  const toggleMobileMenu = () => {
    handleChangeMenuVisibility();
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
    // TODO This is causing bugs on iOS where it loses scroll position when disabled. Disabling for now
    disabled: mobileMenuOpen && isMobile && false,
    elementRef: mobileNavContainerRef,
  });

  return (
    <>
      {renderTop?.({ isMobile, isDesktop })}
      {isDesktop && <UniversalNavbar />}
      <HeaderMainWrapper
        // @ts-ignore
        breakpoint={breakpoint}
        style={{ pointerEvents: "auto" }}
      >
        <div className="container-xl">
          <div className="header-main">
            <div
              className={`navbar navbar-expand-xl ${
                isPartner ? "partner" : ""
              }`}
              ref={navbarRef}
            >
              {!isPartner && <Logo />}

              {isDesktop && (
                <>
                  <div
                    className={`${!isPartner ? "expand-title" : ""}${
                      !hasNavigation ? " no-navigation" : ""
                    }`}
                  >
                    {isPartner ? <Partner /> : <Title />}
                    <NavbarContainer
                      toggleMobileMenu={toggleMobileMenu}
                      navBarHeight={navbarDimensions.height}
                    />
                  </div>
                  <LogoSponsor />
                </>
              )}

              {isMobile && <MobileTitle />}

              <HamburgerButton
                hidden={isDesktop}
                key="hamburger-button"
                onClick={handleClickMobileMenu}
                open={mobileMenuOpen}
              />
            </div>

            <NavbarContainer
              navBarHeight={navbarDimensions.height}
              // @ts-ignore
              ref={mobileNavContainerRef}
              hidden={!isMobile || !mobileMenuOpen}
              toggleMobileMenu={toggleMobileMenu}
            />
          </div>
        </div>
      </HeaderMainWrapper>
    </>
  );
};

export { HeaderMain };
