// @ts-check
import React from "react";

import { trackGAEvent } from "../../../../../shared";
import { useAppContext } from "../../core/context/app-context";
import { useIsMobile } from "../../core/hooks/isMobile";
import { Wrapper } from "./index.styles";
import { Login } from "./Login";
import { Search } from "./Search";

const DEFAUL_GA_EVENT = {
  section: "topbar",
};

const UniversalNavbar = () => {
  const { breakpoint, universalNavbar } = useAppContext();
  const isMobile = useIsMobile(breakpoint);
  const isDesktop = !isMobile;

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

  if (isMobile && universalNavbar?.hideMobile) {
    return null;
  }

  return (
    <Wrapper
      // @ts-ignore
      breakpoint={breakpoint}
      className="universal-nav"
      data-testid="universal-navbar"
      data-elastic-exclude="data-elastic-exclude"
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
                  trackGAEvent({ ...DEFAUL_GA_EVENT, text: "asu home" })
                }
              >
                ASU Home
              </a>
              <a
                className="nav-link"
                href="https://my.asu.edu"
                onFocus={() =>
                  trackGAEvent({ ...DEFAUL_GA_EVENT, text: "my asu" })
                }
              >
                My ASU
              </a>
              <a
                className="nav-link"
                href="https://www.asu.edu/academics/colleges-schools"
                onFocus={() =>
                  trackGAEvent({
                    ...DEFAUL_GA_EVENT,
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
};

export { UniversalNavbar };
