// @ts-check
import React from "react";
import styled from "styled-components";

import { useAppContext } from "../../../core/context/app-context";
import { trackHeaderInternalLink } from "../../../core/data-layers";
import { TitlePropTypes } from "../../../core/models/app-prop-types";

// @ts-ignore
const MobileTitleWrapper = styled.div`
  font-weight: 700;
  font-size: 16px;
  flex: 1;
  color: #191919;
  text-align: left;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 0 20px;
  a {
    color: inherit;
    text-decoration: none;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: fit;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const isCleanString = str => typeof str === "string" && str.trim().length > 0;

export const MobileTitle = () => {
  const { baseUrl, mobile } = useAppContext();

  const mobileTitle = mobile?.title ?? "";

  if (!isCleanString(mobileTitle)) {
    return null;
  }

  return (
    <MobileTitleWrapper title={`${mobileTitle} home page`}>
      <a
        href={baseUrl}
        onFocus={() => trackHeaderInternalLink({ text: mobileTitle })}
      >
        {mobileTitle}
      </a>
    </MobileTitleWrapper>
  );
};

MobileTitle.propTypes = { ...TitlePropTypes };
