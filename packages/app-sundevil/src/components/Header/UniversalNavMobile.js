/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useRef } from "react";

import { OfficialAthleticsSite } from "../OfficialAthleticsSite";
import { useScrollCollapse } from "./use-scroll-collapse";

export const UniversalNavMobile = props => {
  const ref = useRef(null);
  const height = "24px";
  useScrollCollapse({ ref, height });
  return (
    <div
      ref={ref}
      style={{
        overflow: "hidden",
        height,
        width: "100%",
        backgroundColor: "#E8E8E8",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        paddingLeft: "20px",
      }}
    >
      <OfficialAthleticsSite
        {...props.officialSite}
        hrefStyle={props.officialSiteHrefStyle}
        href={props.officialSiteHref}
      />
    </div>
  );
};
