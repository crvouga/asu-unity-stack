import React from "react";

import { APP_CONFIG } from "../../../config";
import { useBreakpoint } from "../../../utils/use-breakpoint";
import { propTypes } from "./contact-us-cta-card";
import { ContactUsCTACardDesktop } from "./ContactUsCTACardDesktop";
import { ContactUsCTACardMobile } from "./ContactUsCTACardMobile";

export const ContactUsCTACard = props => {
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);
  if (isMobile) {
    return <ContactUsCTACardMobile {...props} />;
  }
  return <ContactUsCTACardDesktop {...props} />;
};

ContactUsCTACard.propTypes = propTypes;
