/* eslint-disable import/no-extraneous-dependencies */
import React from "react";

import { getCurrentScriptPath, trackGAEvent } from "../../../../../../shared";
import { useAppContext } from "../../../core/context/app-context";
import { LogoSponsorWrapper } from "./index.styles";

const currentScriptPath = getCurrentScriptPath();
const vertLogo = `${currentScriptPath}/assets/img/arizona-state-university-logo-vertical.png`;
const horizLogo = `${currentScriptPath}/assets/img/arizona-state-university-logo.png`;

const LogoSponsor = () => {
  const { sponsorLogo } = useAppContext();

  if (!sponsorLogo) {
    return null;
  }

  return (
    <LogoSponsorWrapper
      href={sponsorLogo?.brandLink ?? "https://asu.edu"}
      className="navbar-brand"
      data-testid="logo"
      onFocus={() => trackGAEvent({ text: "asu logo" })}
    >
      <img
        className="vert"
        style={{ transform: "scale(0.55)" }}
        src={sponsorLogo?.src ?? vertLogo}
        alt={sponsorLogo?.alt ?? "Arizona State University"}
        title={sponsorLogo?.title ?? "ASU home page"}
        width="303"
        height="234"
        decoding="async"
        // eslint-disable-next-line
        fetchpriority="high"
      />
      <img
        className="horiz"
        src={sponsorLogo?.mobileSrc ?? horizLogo}
        alt={sponsorLogo?.alt ?? "Arizona State University"}
        title={sponsorLogo?.title ?? "ASU home page"}
        width="400"
        height="72"
        decoding="async"
        // eslint-disable-next-line
        fetchpriority="high"
      />
    </LogoSponsorWrapper>
  );
};

export { LogoSponsor };
