import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { useIsMobile } from "../../../../component-header/src/core/hooks/isMobile";
import { APP_CONFIG } from "../../config";

const Root = styled.div`
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  flex-direction: ${({ isMobile }) => (isMobile ? "column" : "row")};
`;

const SidebarRoot = styled.div`
  display: flex;
  width: ${({ isMobile }) => (isMobile ? "100%" : "25%")};
  padding: 0;
  padding-right: ${({ isMobile }) => (isMobile ? "0" : "1.5rem")};
`;

const ContentRoot = styled.div`
  display: flex;
  width: ${({ isMobile }) => (isMobile ? "100%" : "75%")};
  padding: 0;
`;

export const SidebarLayout = ({ className, renderSidebar, renderContent }) => {
  const isMobile = useIsMobile(APP_CONFIG.breakpointMobile);
  return (
    <Root className={className} isMobile={isMobile}>
      <SidebarRoot isMobile={isMobile}>{renderSidebar()}</SidebarRoot>
      <ContentRoot isMobile={isMobile}>{renderContent()}</ContentRoot>
    </Root>
  );
};
SidebarLayout.propTypes = {
  className: PropTypes.string,
  renderSidebar: PropTypes.func.isRequired,
  renderContent: PropTypes.func.isRequired,
};
