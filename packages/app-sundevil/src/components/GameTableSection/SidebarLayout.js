import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../config";
import { useBreakpoint } from "../../utils/use-breakpoint";

const Root = styled.div`
  display: flex;
  padding: 0;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: ${({ isTablet }) => (isTablet ? "column" : "row")};
`;

const SidebarRoot = styled.div`
  display: flex;
  width: ${({ isTablet }) => (isTablet ? "100%" : "25%")};
  padding: 0;
  padding-right: ${({ isTablet }) => (isTablet ? "0" : "1.5rem")};
`;

const ContentRoot = styled.div`
  display: flex;
  width: ${({ isTablet }) => (isTablet ? "100%" : "75%")};
  padding: 0;
`;

export const SidebarLayout = ({ className, renderSidebar, renderContent }) => {
  const isTablet = useBreakpoint(APP_CONFIG.breakpointTablet);
  return (
    <Root className={className} isTablet={isTablet}>
      <SidebarRoot isTablet={isTablet}>{renderSidebar()}</SidebarRoot>
      <ContentRoot isTablet={isTablet}>{renderContent()}</ContentRoot>
    </Root>
  );
};
SidebarLayout.propTypes = {
  className: PropTypes.string,
  renderSidebar: PropTypes.func,
  renderContent: PropTypes.func,
};
