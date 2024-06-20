// @ts-check
import React from "react";

import { useIsMobile } from "../../../../component-header/src/core/hooks/isMobile";
import { APP_CONFIG } from "../../config";
import {
  SportsTabsDesktop,
  SportsTabsMobile,
} from "../../core/components/SportsTabs";

/**
 * @typedef {import("../../core/components/SportsTabs/SportsTabsMobile").Props} MobileProps
 * @typedef {import("../../core/components/SportsTabs/SportsTabsDesktop").Props} DesktopProps
 * @typedef {MobileProps & DesktopProps} Props
 * @type {React.FC<Props>}
 */
const GameNavigation = ({ ...props }) => {
  const isMobile = useIsMobile(APP_CONFIG.breakpoint);
  if (isMobile) {
    return <SportsTabsMobile {...props} />;
  }
  return <SportsTabsDesktop {...props} />;
};
GameNavigation.propTypes = {
  ...SportsTabsMobile.propTypes,
  ...SportsTabsDesktop.propTypes,
};

export { GameNavigation };
