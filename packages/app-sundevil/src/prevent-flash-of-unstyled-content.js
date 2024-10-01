import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

export const PreventFlashOfUnstyledContent = ({
  enabled = false,
  children,
  timeout = 3000,
  loadingIndicator = null,
  pollingInterval = 100, // Optional: make polling interval configurable
}) => {
  const [isStylesLoaded, setIsStylesLoaded] = useState(false);

  useEffect(() => {
    let timeoutId;

    const checkForStyledComponents = () => {
      const styleTags = document.head.querySelectorAll("style[data-styled]");
      if (styleTags.length > 0) {
        setIsStylesLoaded(true);
        clearTimeout(timeoutId);
      }
    };

    // Check immediately in case styles are already there
    checkForStyledComponents();

    // Set up an interval to check periodically
    const intervalId = setInterval(checkForStyledComponents, pollingInterval);

    // Set a timeout to stop checking after the specified time
    timeoutId = setTimeout(() => {
      clearInterval(intervalId);
      setIsStylesLoaded(true);
      // eslint-disable-next-line no-console
      console.warn(
        "PreventFlashOfUnstyledContent: Styled-components styles did not load within the specified timeout."
      );
    }, timeout);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [timeout, pollingInterval]);

  if (!enabled) {
    return children;
  }

  return (
    <>
      <div style={{ visibility: isStylesLoaded ? "visible" : "hidden" }}>
        {children}
      </div>
      {!isStylesLoaded && loadingIndicator}
    </>
  );
};

PreventFlashOfUnstyledContent.propTypes = {
  children: PropTypes.node,
  timeout: PropTypes.number,
  loadingIndicator: PropTypes.node,
  pollingInterval: PropTypes.number, // Optional: allow custom polling interval
  enabled: PropTypes.bool,
};
