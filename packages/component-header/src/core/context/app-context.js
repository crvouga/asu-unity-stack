import PropTypes from "prop-types";
import React, {createContext, useContext, useEffect} from "react";

import {HeaderPropTypes} from "../models/app-prop-types";

const breakpoints = {Lg: "992px", Xl: "1260px"};

const AppContext = createContext();

const AppContextProvider = ({ initialValue, children }) => {
  const value = {
    ...initialValue,
    breakpoint: breakpoints[initialValue.breakpoint],
  };

  function getCookie(cname) {
    var name = `${cname}=`;
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  const [userName, setUserName] = React.useState("");
  useEffect(() => {
    if (value.loggedIn) {
      const username = getCookie("SSONAME") || "";
      setUserName(username);
    }
  }, [value.loggedIn]);

  return (
    <AppContext.Provider
      value={{
        ...value,
        userName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  initialValue: PropTypes.shape(HeaderPropTypes).isRequired,
  children: PropTypes.node.isRequired,
};

/**
 * @returns {import("../models/types").HeaderProps}
 */
const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};

export { AppContextProvider, useAppContext };
