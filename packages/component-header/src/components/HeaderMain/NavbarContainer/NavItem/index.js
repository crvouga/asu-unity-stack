// @ts-check
import { autoUpdate, shift, useFloating } from "@floating-ui/react";
import { faChevronDown, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useEffect, useMemo, useRef } from "react";

import { trackGAEvent } from "../../../../../../../shared";
import { useAppContext } from "../../../../core/context/app-context";
import { useIsMobile } from "../../../../core/hooks/isMobile";
import { NavTreePropTypes } from "../../../../core/models/app-prop-types";
import { useDimensionsBody } from "../../../../core/utils/use-dimensions";
import { DropdownItem } from "../DropdownItem";
import { NavItemWrapper } from "./index.styles";

// TODO: why did we stop using this class and should we remove
// eslint-disable-next-line no-unused-vars
const DROPDOWN_CONTAINER_CLASS = "dropdown-container";

// https://www.dropbox.com/scl/fo/gmkapav1avulctkge0w9q/AFF5UCx0jwCOHPhM8ZoaKOg/About%20ASU%20Sun%20Devil%20Athletics%20%20%20ASU%20Sun%20Devil%20Athletics.pdf?rlkey=le42w6mnh6hukls733k3ej41c&e=3&dl=0
export const DROPDOWNS_GA_EVENTS = {
  event: "collapse",
  type: "click",
  action: "open",
  name: "onclick",
  region: "navbar",
  section: "main navbar",
  text: "men's sports",
  component: "text",
};

/**
 * @param {{ children: React.ReactNode }} props
 * @returns {JSX.Element}
 */

const NavLinkIcon = ({ children }) => {
  return (
    <>
      {/* @ts-ignore */}
      <FontAwesomeIcon icon={faHome} className="icon-nav-item" alt="" />
      <span className="mobile-only">{children}</span>
    </>
  );
};

NavLinkIcon.propTypes = {
  children: PropTypes.node,
};

const isHashHref = href =>
  href && typeof href === "string" && href?.includes?.("#");

/**
 * @typedef {import('../../../../core/models/types').NavTreeProps} NavTreeProps
 */

/**
 * @param {{ link: NavTreeProps, setItemOpened: Function, itemOpened: number, toggleMobileMenu: Function }} props
 * @returns {JSX.Element}
 *
 */
const NavItem = ({ link, setItemOpened, itemOpened, toggleMobileMenu }) => {
  const clickRef = useRef(null);
  const opened = link.id === itemOpened;
  const { breakpoint, expandOnHover, title } = useAppContext();
  const isMobile = useIsMobile(breakpoint);
  const isDesktop = !isMobile;
  const { refs, floatingStyles, y, update } = useFloating({
    strategy: "fixed",
    // placement: 'bottom-start',
    whileElementsMounted: autoUpdate,
    middleware: [
      shift({
        crossAxis: false,
        mainAxis: true,
      }),
    ],
  });
  useEffect(() => {
    if (itemOpened) {
      update();
    }
  }, [update, itemOpened]);
  const bodyDimensions = useDimensionsBody();
  const dropdownStyles = isDesktop
    ? {
        ...floatingStyles,
        maxHeight: `${bodyDimensions.height - y}px`,
        overflow: "hidden",
        overflowY: "auto",
      }
    : {};

  const isDropdown =
    (Array.isArray(link.items) && link.items.length > 0) ||
    typeof link.renderContent === "function";

  useEffect(() => {
    const handleClickOutside = event => {
      // @ts-ignore
      if (opened && !clickRef?.current?.contains(event.target)) {
        setItemOpened();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [opened]);

  const renderNavLinks = useMemo(() => {
    if (link.type === "icon-home") {
      return <NavLinkIcon>{link.text}</NavLinkIcon>;
    }
    return (
      <span>
        {link.text}
        {(!!link.items?.length || link.renderContent) && (
          <FontAwesomeIcon
            // @ts-ignore
            icon={faChevronDown}
            className={`chevron-icon ${opened ? "open" : ""}`}
            // @ts-ignore
            alt=""
          />
        )}
      </span>
    );
  }, [link]);

  const dispatchGAEvent = () => {
    const action = opened ? "close" : "open";
    const { text } = link;

    if (isDropdown) {
      trackGAEvent({
        ...DROPDOWNS_GA_EVENTS,
        action,
        text,
      });
      return;
    }

    const isHomeIcon = link.type === "icon-home";

    if (isHomeIcon) {
      // https://www.dropbox.com/scl/fo/gmkapav1avulctkge0w9q/AFF5UCx0jwCOHPhM8ZoaKOg/About%20ASU%20Sun%20Devil%20Athletics%20%20%20ASU%20Sun%20Devil%20Athletics.pdf?rlkey=le42w6mnh6hukls733k3ej41c&e=3&dl=0
      trackGAEvent({
        event: "link",
        action: "click",
        name: "onclick",
        type: "internal link",
        region: "navbar",
        section: "main navbar",
        text: "home icon",
        component: "icon",
      });
      return;
    }

    trackGAEvent({
      text,
    });
  };

  const handleClick = e => {
    if (isDropdown) {
      e.preventDefault();
      if (!expandOnHover && !isMobile) {
        setItemOpened();
      } else if (isMobile) {
        setItemOpened();
      }
    }
    dispatchGAEvent();
    link.onClick?.(e);
  };

  const handleOnMouseEnterLeave = () => {
    if (expandOnHover && !isMobile) {
      setItemOpened();
      dispatchGAEvent();
    }
  };

  if (isMobile && link.mobile?.hide) {
    return <></>;
  }

  const linkTitle =
    link.type === "icon-home" && title ? `${title} home page` : link.text;

  const onClickedLink = (input = {}) => {
    const href =
      input?.href ?? input?.url ?? input?.link?.href ?? input?.link?.url ?? "";
    if (isHashHref(href)) {
      setItemOpened(null);
      toggleMobileMenu();
    }
  };

  return (
    <NavItemWrapper
      // @ts-ignore
      breakpoint={breakpoint}
      ref={clickRef}
      onMouseEnter={handleOnMouseEnterLeave}
      onMouseLeave={handleOnMouseEnterLeave}
    >
      {/* @ts-ignore */}
      <a
        ref={refs.setReference}
        onClick={handleClick}
        href={link.href ?? "/"}
        aria-expanded={() => "true"} // eslint-disable-line no-nested-ternary
        aria-owns={
          (link.items && Array.isArray(link.items) && link.items.length > 0) ||
          link.renderContent
            ? `dropdown-${link.id}`
            : null
        }
        className={`${link.class ? link.class : ""}${
          link.selected ? " nav-item-selected" : ""
        }${opened ? " open-link" : ""}`}
        tabIndex={0}
        data-testid="nav-item"
        title={linkTitle}
        style={{ cursor: "pointer" }}
      >
        {renderNavLinks}
      </a>
      {typeof link.renderContent === "function" && (
        <DropdownItem
          onClickedLink={onClickedLink}
          items={[]}
          renderContent={link.renderContent}
          isMega={link.isMega}
          // @ts-ignore
          buttons={link.buttons}
          // @ts-ignore
          dropdownName={link.text}
          classes={`header-dropdown-${link.id} ${opened ? "opened" : ""}`}
          listId={`dropdown-${link.id}`}
          ref={refs.setFloating}
          style={dropdownStyles}
          mobile={link.mobile ?? undefined}
          footers={link.footers}
        />
      )}
      {isDropdown && Array.isArray(link.items) && link.items.length > 0 && (
        <DropdownItem
          onClickedLink={onClickedLink}
          items={link.items}
          isMega={link.isMega}
          // @ts-ignore
          buttons={link.buttons}
          // @ts-ignore
          dropdownName={link.text}
          classes={`header-dropdown-${link.id} ${opened ? "opened" : ""}`}
          listId={`dropdown-${link.id}`}
          style={dropdownStyles}
          ref={refs.setFloating}
          mobile={link.mobile ?? undefined}
          footers={link.footers}
        />
      )}
    </NavItemWrapper>
  );
};

NavItem.propTypes = {
  link: NavTreePropTypes,
  setItemOpened: PropTypes.func,
  itemOpened: PropTypes.number,
  toggleMobileMenu: PropTypes.func,
};

export { NavItem };
