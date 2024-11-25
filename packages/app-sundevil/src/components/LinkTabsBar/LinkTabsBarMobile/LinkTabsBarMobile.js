import React, { forwardRef } from "react";
import styled from "styled-components";

import { linkTabsBarPropTypes } from "../link-tab-bar";
import { Sponsor } from "../Sponsor/Sponsor";
import { LinkTabsBarDropDown } from "./LinkTabsBarDropDown";

export const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 62px;
  max-height: 62px;
  border-bottom: 1px solid #d0d0d0;
  background-color: #fff;
`;

const LinkTabsRoot = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  min-width: 0;
  flex: 1;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const LinkTabsBarMobile = forwardRef((props, ref) => {
  const { links = [], style } = props;
  return (
    <Root ref={ref}>
      <Content style={style}>
        <LinkTabsRoot>
          <div
            style={{
              width: "100%",
              height: "100%",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <LinkTabsBarDropDown links={links} />
          </div>
        </LinkTabsRoot>
        <Sponsor {...props} borderLeft />
      </Content>
    </Root>
  );
});
LinkTabsBarMobile.propTypes = linkTabsBarPropTypes;
