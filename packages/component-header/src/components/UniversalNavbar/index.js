// @ts-check
import React, { forwardRef } from "react";

import { trackGAEvent } from "../../../../../shared";
import { useAppContext } from "../../core/context/app-context";
import { useIsMobile } from "../../core/hooks/isMobile";
import { Wrapper } from "./index.styles";
import { Login } from "./Login";
import { Search } from "./Search";

const DEFAULT_GA_EVENT = {
  // https://www.dropbox.com/scl/fo/gmkapav1avulctkge0w9q/AFF5UCx0jwCOHPhM8ZoaKOg/About%20ASU%20Sun%20Devil%20Athletics%20%20%20ASU%20Sun%20Devil%20Athletics.pdf?rlkey=le42w6mnh6hukls733k3ej41c&e=3&dl=0
  event: "link",
  action: "click",
  name: "onclick",
  type: "internal link",
  region: "navbar",
  section: "topbar",
  text: "asu home",
  component: "text",
};

function getURL() {
  try {
    const URL = window.location.href;
    return URL;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return "";
  }
}

const UniversalNavbar = forwardRef((_props, ref) => {
  const { breakpoint, universalNavbar } = useAppContext();
  const isMobile = useIsMobile(breakpoint);
  const isDesktop = !isMobile;

  return (
    <Wrapper
      // @ts-ignore
      breakpoint={breakpoint}
      className="universal-nav"
      data-testid="universal-navbar"
      data-elastic-exclude="data-elastic-exclude"
      universalNavbar={universalNavbar}
      ref={ref}
    >
      <div className="container-xl">
        <div className="header-top">
          <nav className="nav" aria-label="ASU">
            <div className="links-container">
              <a
                className="nav-link visually-hidden-focusable"
                href="#skip-to-content"
              >
                Skip to main content
              </a>
              <a
                className="nav-link visually-hidden-focusable"
                href={`https://accessibility.asu.edu/report?a11yref=${getURL()}`}
              >
                Report an accessibility problem
              </a>

              {isDesktop && (
                <>
                  {universalNavbar?.renderStart?.({ isMobile, isDesktop })}
                  <div className="links-whitespace" />
                </>
              )}

              <a
                className="nav-link"
                href="https://asu.edu"
                onFocus={() =>
                  trackGAEvent({ ...DEFAULT_GA_EVENT, text: "asu home" })
                }
              >
                ASU Home
              </a>
              <a
                className="nav-link"
                href="https://my.asu.edu"
                onFocus={() =>
                  trackGAEvent({ ...DEFAULT_GA_EVENT, text: "my asu" })
                }
              >
                My ASU
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/academics/colleges-schools"
                onFocus={() =>
                  trackGAEvent({
                    ...DEFAULT_GA_EVENT,
                    text: "colleges and schools",
                  })
                }
              >
                Colleges and Schools
              </a>
              <Login />
            </div>
            <Search placeholder={universalNavbar?.searchPlaceholder ?? null} />
          </nav>
        </div>
      </div>
    </Wrapper>
  );
});

export { UniversalNavbar };
