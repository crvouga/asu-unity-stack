/* eslint-disable react/prop-types */
// @ts-check
import React from "react";

import { APP_CONFIG } from "../../config";
import { trackGAEvent } from "../../track-ga/track-ga-event";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { Tabs } from "./Tabs";

/**
 * @type {React.FC<import("./props").SectionHeaderProps>}
 */
export const TabsSection = props => {
  const { title, tabs, onTabItemClick } = props;

  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);

  const sectionName = title;

  return (
    tabs &&
    tabs.length > 0 && (
      <Tabs
        tabs={tabs}
        onTabItemClick={(tabId, tab) => {
          if (typeof onTabItemClick === "function") {
            onTabItemClick?.(tabId);
          }

          trackGAEvent({
            event: "link",
            action: "click",
            name: "onclick",
            type: "internal link",
            region: "main content",
            section: sectionName,
            text: tab?.label?.toLowerCase() ?? "",
            component: "text",
          });
        }}
        stretch={isMobile}
      />
    )
  );
};
