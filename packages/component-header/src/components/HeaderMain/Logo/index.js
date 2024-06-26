/* eslint-disable import/no-extraneous-dependencies */
import React from "react";

import { getCurrentScriptPath, trackGAEvent } from "../../../../../../shared";
import { useAppContext } from "../../../core/context/app-context";
import { LogoWrapper } from "./index.styles";

const currentScriptPath = getCurrentScriptPath();
const vertLogo = `${currentScriptPath}/assets/img/arizona-state-university-logo-vertical.png`;
const horizLogo = `${currentScriptPath}/assets/img/arizona-state-university-logo.png`;

const Logo = () => {
  const { logo } = useAppContext();

  return (
    <LogoWrapper
      href={logo?.brandLink ?? "https://asu.edu"}
      className="navbar-brand"
      data-testid="logo"
      onFocus={() => trackGAEvent({ text: "asu logo" })}
    >
      <img
        className="vert"
        src={logo?.src ?? vertLogo}
        alt={logo?.alt ?? "Arizona State University"}
        title={logo?.title ?? "ASU home page"}
        width={logo?.width ?? "303"}
        height={logo?.height ?? "234"}
        style={
          logo?.width || logo?.height
            ? {
                width: `${logo?.width}px`,
                height: `${logo?.height}px`,
              }
            : {}
        }
        decoding="async"
        // eslint-disable-next-line
        fetchpriority="high"
      />
      <img
        className="horiz"
        src={logo?.mobileSrc ?? horizLogo}
        alt={logo?.alt ?? "Arizona State University"}
        title={logo?.title ?? "ASU home page"}
        width={logo?.mobileWidth ?? logo?.width ?? "400"}
        height={logo?.mobileHeight ?? logo?.height ?? "72"}
        style={
          logo?.width || logo?.height || logo?.mobileWidth || logo?.mobileHeight
            ? {
                width: `${logo?.mobileWidth ?? logo?.width}px`,
                height: `${logo?.mobileHeight ?? logo?.height}px`,
              }
            : {}
        }
        decoding="async"
        // eslint-disable-next-line
        fetchpriority="high"
      />
    </LogoWrapper>
  );
};

export { Logo };
