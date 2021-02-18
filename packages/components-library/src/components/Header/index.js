import { useState, useEffect, useRef, useCallback } from "preact/compat";
import PropTypes from "prop-types";
import * as S from "./styles";
import { Nav } from "../Nav";
import { UniversalSearch } from "../Search";
import { Login } from "../Login";
import { Navbar } from "../Navbar";
import { Logo } from "../Logo";
import { Title } from "../Title";
import useWindowDimensions from "../../hooks/useWindowDimensions";

const Header = ({
  navTree,
  title,
  baseUrl,
  parentOrg,
  parentOrgUrl,
  logo,
  loggedIn,
  userName,
  loginLink,
  logoutLink,
  buttons,
  breakpoint,
  animateTitle,
  expandOnHover,
  ...props
}) => {
  // State hooks to track and set opening/closing mobile nav
  const [mobileOpen, setMobileOpen] = useState(false);
  // Function to toggle the mobile nav
  const toggle = () => setMobileOpen(oldOpen => !oldOpen);

  //State hooks for tracking and setting open/close search in universal nav
  const [searchOpen, setSearchOpen] = useState(false);

  // State hooks for tracking and setting the max mobile nav menu height
  const [maxMobileNavHeight, setMaxMobileNavHeight] = useState(-1);

  // Get breakpoint from theme and props
  const bpoint = breakpoint === "Xl" ? S.BreakpointXl : S.BreakpointLg;
  const bpointInt = parseInt(bpoint, 10);

  // get window dimensions
  const { height, width } = useWindowDimensions();

  // Hooks to track scroll position state
  const [scrollPosition, setSrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  const killEvent = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
  }, []);

  const onClickCallbackRTN = useCallback((e) => {
    let whatWasClicked = e.target;
    let limit = 100; // prevent infinite loop

    // Climb DOM tree until someone has an identifier
    while (limit > 0 && whatWasClicked.dataset.salesforceIdentifier === undefined) {
      whatWasClicked = whatWasClicked.parentNode;
      limit--;
    }

    // Action depends on what was clicked
    const identifier = whatWasClicked.dataset.salesforceIdentifier;
    if (identifier === "universal-search-bar") {
      setSearchOpen(true);
    } else if (identifier === "mobile-dropdown") {
      toggle();
    } else if (identifier.includes("toggle-dropdown.")) {
      setSearchOpen(false);
      clearSearchBar(whatWasClicked);
      toggleNavDropdown(whatWasClicked)
    } else if (identifier === "leave-open") {
      killEvent();
    }
  }, []);
  const toggleNavDropdown = (clickedDOM) => {
    navRef.current.forceToggle(clickedDOM);
  }
  const clearSearchBar = (domElement) => {
    let searchUp = domElement;
    let limit = 100; // prevent infinite loop
    while (limit > 0 && searchUp.dataset.salesforceIdentifier !== 'top-of-header') {
      limit--;
      searchUp = searchUp.parentNode
    }
    if (searchUp.querySelector('[data-salesforce-identifier = "universal-search-bar"]').querySelector("input").value.length > 0){
      searchUp.querySelector('[data-salesforce-identifier = "universal-search-bar"]').querySelector("input").value = "";
    }
  }

  // Attach scroll event lister which will update the scrollPosition state
  // when window scrolled
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Refs to track height of header dom elements
  const universalRef = useRef(null);
  const logoRef = useRef(null);
  const titleRef = useRef(null);
  const navRef = useRef(null);

  // Calculate the mobile nav menu max-height every time the mobile nav is opened
  // or the viewport changes size
  useEffect(() => {
    if (width < bpointInt && mobileOpen) {
      //window.setTimeout(() => {
        const uHeight = universalRef.current.clientHeight;
        const lHeight = logoRef.current.clientHeight;
        const tHeight = titleRef.current.clientHeight;
        // Get primary nav top padding value from theme
        const tpadding = parseInt(S.primaryNavTopPadding, 10);

        // top padding x2 - 24px margin under title and 24px padding above title
        const pHeight = lHeight + tHeight + tpadding * 2;
        const newHeight = height - uHeight - pHeight;
        setMaxMobileNavHeight(newHeight);
      //}, 100);
    }
  }, [height, width, mobileOpen, bpointInt]);

  return (
    <S.Header
      breakpoint={bpoint}
      class={
        scrollPosition > 0 || (mobileOpen && width < bpointInt)
          ? "scrolled"
          : ""
      }
      data-salesforce-identifier = "top-of-header"
    >
      <div onmousedown={killEvent} onclick={onClickCallbackRTN} data-salesforce-identifier="no-action"></div>
      <S.UniversalNav open={mobileOpen} ref={universalRef} {...{ searchOpen }}>
        <S.UniversalNavLinks>
          <a href="https://www.asu.edu/">ASU home</a>
          <a href="https://my.asu.edu/">My ASU</a>
          <a href="https://www.asu.edu/colleges/">Colleges and schools</a>
          <Login {...{ loggedIn, loginLink, logoutLink, userName }} />
        </S.UniversalNavLinks>
        <UniversalSearch
          open={searchOpen}
          setOpen={setSearchOpen}
          mobile={width < bpointInt}
        />
      </S.UniversalNav>
      <Navbar
        onClick={e => {
          e.preventDefault();
          toggle();
        }}
        mobileOpen={mobileOpen}
        logo={<Logo {...logo} ref={logoRef} />}
        data-salesforce-identifier = "mobile-dropdown"
      >
        {props.dangerouslyGenerateStub ? (
          <div id="asu-generated-stub" />
        ) : (
          <>
            <Title
              {...{ parentOrg, parentOrgUrl, baseUrl, animate: animateTitle }}
              ref={titleRef}
            >
              {title} and more v28
            </Title>
            <Nav
              {...{
                navTree,
                mobileOpen,
                height,
                width,
                buttons,
                maxMobileHeight: maxMobileNavHeight,
                breakpoint,
                expandOnHover
              }}
              ref={navRef}
            />
          </>
        )}
      </Navbar>
    </S.Header>
  );
};

Header.propTypes = {
  navTree: PropTypes.arrayOf(PropTypes.object),
  logo: PropTypes.shape(Logo.propTypes),
  title: Title.propTypes.title,
  parentOrg: Title.propTypes.parentOrg,
  parentOrgUrl: Title.propTypes.parentOrgUrl,
  baseUrl: Title.propTypes.baseUrl,
  loggedIn: Login.propTypes.loggedIn,
  userName: Login.propTypes.userName,
  loginLink: Login.propTypes.loginLink,
  logoutLink: Login.propTypes.logoutLink,
  buttons: PropTypes.arrayOf(PropTypes.object),
  breakpoint: PropTypes.oneOf(["Lg", "Xl"]),
  animateTitle: PropTypes.bool,
  expandOnHover: PropTypes.bool
};

Header.defaultProps = {
  navTree: [],
  dangerouslyGenerateStub: false,
  title: "",
  buttons: [],
  breakpoint: "Lg",
  expandOnHover: false
};

export { Header };
