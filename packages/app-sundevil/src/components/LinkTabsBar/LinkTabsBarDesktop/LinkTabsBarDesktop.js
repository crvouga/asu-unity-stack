import React, { forwardRef, useRef } from "react";
import styled from "styled-components";

import { linkTabsBarPropTypes } from "../link-tab-bar";
import { useMaxLinkCount } from "../max-link-count";
import { Sponsor } from "../Sponsor/Sponsor";
import { LinkTabs } from "./LinkTabs";

export const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 62px;
  max-height: 62px;
  border-bottom: 1px solid #d0d0d0;
  background-color: #fff;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const LinkTabsRoot = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  flex: 1;
  width: 100%;
`;

export const LinkTabsBarDesktop = forwardRef((props, ref) => {
  const {
    links = [],
    maxLinkCountBreakpoints,
    moreTabLabel,
    alignment,
    anchorTitle,
    style,
    iconTooltip,
  } = props;

  const containerRef = useRef(null);
  const maxLinkCount = useMaxLinkCount(maxLinkCountBreakpoints);

  return (
    <Root ref={ref} alignment={alignment} style={style}>
      <Content className="container">
        <LinkTabsRoot ref={containerRef}>
          <LinkTabs
            title={anchorTitle}
            links={links}
            maxLinkCount={maxLinkCount}
            moreTabLabel={moreTabLabel}
            alignment={alignment}
            iconTooltip={iconTooltip}
          />
        </LinkTabsRoot>
        <Sponsor {...props} />
      </Content>
    </Root>
  );
});
LinkTabsBarDesktop.propTypes = linkTabsBarPropTypes;
