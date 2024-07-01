// @ts-check
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";

import { trackGAEvent } from "../../../../../../shared";
import { useAppContext } from "../../../core/context/app-context";
import { useIsMobile } from "../../../core/hooks/isMobile";
import { SearchWrapper } from "./index.styles";

const SEARCH_GA_EVENT = {
  event: "search",
  action: "type",
  name: "onenter",
  type: "main search",
  region: "navbar",
  section: "topbar",
};

function handleSearch(e) {
  e.preventDefault();
  /**
   * Issue: Callback not currently available
   * We need to ensure dataLayer events are being logged correctly
   * Solution might be in GA4 settings with a form event targeting the element ID
   *
   * This solution does not guarantee the event is logged before the page
   * redirects.
   * Preventing form submission with arbitrary timeout is always bad, but this
   * may be small enough to not degrade the experience
   *
   * TODO: UDS-1612
   */
  setTimeout(() => e.target.submit(), 100);
  return trackGAEvent({
    ...SEARCH_GA_EVENT,
    text: e.target.elements.q.value,
  });
}

const Search = ({
  disablePadding = false,
  disableDataLayers = false,
  renderIconEnd = (_input = {}) => null,
  placeholder = null,
} = {}) => {
  const { breakpoint, searchUrl, site } = useAppContext();
  const isMobile = useIsMobile(breakpoint);
  /** @type {React.MutableRefObject<HTMLInputElement | null>} */
  const inputRef = useRef(null);
  const [open, setOpen] = useState(false);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (open) {
      focusInput();
    }
  }, [open]);

  const handleChangeVisibility = () => {
    setOpen(prevState => {
      const newState = !prevState;

      trackGAEvent({
        ...SEARCH_GA_EVENT,
        event: "link",
        action: "click",
        name: "onclick",
        text: newState ? "search icon" : "close search icon",
      });
      return newState;
    });
  };

  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const onInputChanged = e => {
    const inputValueNew = e.target.value;
    trackGAEvent({
      ...SEARCH_GA_EVENT,
      text: inputValueNew,
    });
    setInputValue(inputValueNew);
  };

  return (
    <SearchWrapper
      // @ts-ignore
      breakpoint={breakpoint}
      action={searchUrl}
      onSubmit={disableDataLayers ? undefined : handleSearch}
      method="get"
      name="gs"
      className={open ? "open-search" : ""}
      data-testid="universal-nav-search-form"
      disablePadding={disablePadding}
    >
      {!isMobile ? (
        <>
          <button
            type="button"
            aria-label="Search asu.edu"
            onClick={handleChangeVisibility}
            className="search-button"
            data-testid="search-button"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
          {open && (
            <>
              <input
                ref={inputRef}
                className="form-control"
                type="search"
                name="q"
                value={inputValue}
                onChange={onInputChanged}
                aria-labelledby="header-top-search"
                placeholder={placeholder ?? "Search asu.edu"}
                required
              />
              <button
                type="button"
                aria-label={placeholder ?? "Search asu.edu"}
                onClick={handleChangeVisibility}
                className="close-search"
                data-testid="close-search"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </>
          )}
        </>
      ) : (
        <label>
          <FontAwesomeIcon icon={faSearch} />
          <input
            ref={inputRef}
            className="form-control"
            type="search"
            name="q"
            aria-labelledby="header-top-search"
            placeholder={placeholder ?? "Search asu.edu"}
            required
            value={inputValue}
            onChange={onInputChanged}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <span key={inputValue}>
            {renderIconEnd({ inputValue, isFocused })}
          </span>
        </label>
      )}
      <input name="url_host" value={site} type="hidden" />
      <input name="site" value="default_collection" type="hidden" />
      <input name="sort" value="date:D:L:d1" type="hidden" />
      <input name="output" value="xml_no_dtd" type="hidden" />
      <input name="ie" value="UTF-8" type="hidden" />
      <input name="oe" value="UTF-8" type="hidden" />
      <input name="client" value="asu_frontend" type="hidden" />
      <input name="proxystylesheet" value="asu_frontend" type="hidden" />
    </SearchWrapper>
  );
};
Search.propTypes = {
  disablePadding: PropTypes.bool,
  disableDataLayers: PropTypes.bool,
  renderIconEnd: PropTypes.func,
  placeholder: PropTypes.string,
};

const UniversalNavbarSearch = Search;

export { Search, UniversalNavbarSearch };
