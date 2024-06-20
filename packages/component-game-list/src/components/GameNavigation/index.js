// @ts-check
import React from "react";

import { useIsMobile } from "../../../../component-header/src/core/hooks/isMobile";
import { APP_CONFIG } from "../../config";
import {
  SportsTabsMobile,
  SportsTabsDesktop,
} from "../../core/components/SportsTabs";

const GameNavigation = ({ ...props }) => {
  const isMobile = useIsMobile(APP_CONFIG.breakpoint);
  const isDesktop = !isMobile;
  return (
    <>
      {isDesktop ? (
        <div className="container">
          <SportsTabsDesktop {...props} />
        </div>
      ) : (
        <SportsTabsMobile {...props} />
      )}
    </>
  );
};
GameNavigation.propTypes = SportsTabsMobile.propTypes;
GameNavigation.propTypes = SportsTabsDesktop.propTypes;

export { GameNavigation };
