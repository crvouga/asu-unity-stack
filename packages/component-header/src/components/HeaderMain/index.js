// @ts-check
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

import { trackGAEvent } from "../../../../../shared";
import { useAppContext } from "../../core/context/app-context";
import { useIsMobile } from "../../core/hooks/isMobile";
import { useDimensions } from "../../core/utils/use-dimensions";
import { UniversalNavbar } from "../UniversalNavbar";
import { HeaderMainWrapper } from "./index.styles";
import { Logo } from "./Logo";
import { LogoSponsor } from "./LogoSponsor";
import { NavbarContainer } from "./NavbarContainer";
import { Partner } from "./Partner";
import { Title } from "./Title";

const HeaderMain = () => {
  const { breakpoint, isPartner, hasNavigation } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile(breakpoint);
  const isDesktop = !isMobile;
  const headerMainRef = React.useRef(null);
  const headerMainDimensions = useDimensions(headerMainRef);

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
  return (
    <>
      {isDesktop && <UniversalNavbar />}
      {/* @ts-ignore */}
      <HeaderMainWrapper breakpoint={breakpoint} ref={headerMainRef}>
        <div className="container-xl">
          <div className="header-main">
            <div
              className={`navbar navbar-expand-xl ${
                isPartner ? "partner" : ""
              }`}
            >
              {!isPartner && <Logo />}
              <button
                className={`navbar-toggler${
                  mobileMenuOpen ? "" : " collapsed"
                }`}
                type="button"
                onClick={handleClickMobileMenu}
                aria-label="Toggle navigation"
              >
                <FontAwesomeIcon
                  icon={mobileMenuOpen ? faTimes : faBars}
                  // @ts-ignore
                  alt=""
                />
              </button>
              {isDesktop && (
                <>
                  <div
                    className={`${!isPartner ? "expand-title" : ""}${
                      !hasNavigation ? " no-navigation" : ""
                    }`}
                  >
                    {isPartner ? <Partner /> : <Title />}
                    <NavbarContainer
                      navBarHeight={headerMainDimensions.height}
                    />
                  </div>
                  <LogoSponsor />
                </>
              )}
            </div>
            {isMobile && mobileMenuOpen && (
              <NavbarContainer navBarHeight={headerMainDimensions.height} />
            )}
          </div>
        </div>
      </HeaderMainWrapper>
    </>
  );
};

export { HeaderMain };
