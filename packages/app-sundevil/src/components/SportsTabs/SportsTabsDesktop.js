// @ts-check
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { useIsMobile } from "../../../../component-header/src/core/hooks/isMobile";
import { APP_CONFIG } from "../../config";
import { DropDown, DropDownSurface } from "../DropDown";
import { Icon } from "../Icon_";
import { Skeleton } from "../Skeleton";
import { basePropTypes } from "./sports-tabs";
import { SportsTab } from "./SportsTab";
import { SportsTabDropDownItem } from "./SportsTabDropDownItem";

/**
 * @typedef {import("./sports-tabs").Sport} Sport
 * @typedef {import("./sports-tabs").BaseProps} BaseProps
 * @typedef {BaseProps & {moreTabOrientation?: "vertical" | "horizontal", moreTabColor?: "default" | "muted"; skeleton?: boolean; darkMode?: boolean; className?: string}} Props
 */

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  flex-wrap: nowrap;
`;

const ICON_SIZE = {
  width: "16px",
  height: "16px",
  fontSize: "16px",
};

/**
 * @type {React.FC<Props>}
 * */
export const SportsTabsDesktop = ({
  sports = [],
  onSportItemClick,
  moreTabOrientation,
  moreTabColor,
  skeleton,
  darkMode = false,
  className,
}) => {
  sports?.sort((a, b) => a.position - b.position);
  const isTablet = useIsMobile(APP_CONFIG.breakpointTablet);
  const tabCount = isTablet ? 6 : 9;
  // @ts-ignore
  const sportTabs = sports?.filter(sport => !sport.more)?.slice(0, tabCount);

  const moreSports = sports.filter(sport =>
    sportTabs.every(s => s.id !== sport.id)
  );
  const isMoreSportsActive = moreSports.some(sport => Boolean(sport.active));

  /** @type {Record<string, unknown>} */
  const initialState = {
    opened: null,
  };
  const [state, setState] = React.useState(initialState);

  return (
    <Skeleton skeleton={Boolean(skeleton)} className={className}>
      <Root>
        {sportTabs.map(sport => (
          <SportsTab
            key={sport.id}
            onClick={onSportItemClick(sport.id)}
            active={Boolean(sport.active)}
            orientation="vertical"
            darkMode={darkMode}
          >
            <Icon title={sport.name} icon={sport.icon} style={ICON_SIZE} />
            <div>{sport.name}</div>
          </SportsTab>
        ))}
        {moreSports.length > 0 && (
          <DropDown
            open={state.opened === "dropdown"}
            onClose={() =>
              setState(currentState => ({ ...currentState, opened: null }))
            }
            renderReference={input => {
              return (
                <SportsTab
                  // @ts-ignore
                  ref={input.ref}
                  onClick={() =>
                    setState(currentState => ({
                      ...currentState,
                      opened:
                        currentState.opened === "dropdown" ? null : "dropdown",
                    }))
                  }
                  orientation={moreTabOrientation ?? "vertical"}
                  active={isMoreSportsActive}
                  color={moreTabColor ?? "default"}
                  darkMode={darkMode}
                >
                  {input.open ? (
                    <span className="fas fa-chevron-up" style={ICON_SIZE} />
                  ) : (
                    <span className="fas fa-chevron-down" style={ICON_SIZE} />
                  )}
                  <div>More</div>
                </SportsTab>
              );
            }}
            renderContent={() => {
              return (
                <DropDownSurface>
                  {moreSports.map(sport => (
                    <SportsTabDropDownItem
                      key={sport.id ?? sport.name}
                      label={sport.name}
                      active={Boolean(sport.active)}
                      onClick={() => {
                        setState(currentState => ({
                          ...currentState,
                          opened: null,
                        }));
                        onSportItemClick(sport.id)();
                      }}
                    />
                  ))}
                </DropDownSurface>
              );
            }}
          />
        )}
      </Root>
    </Skeleton>
  );
};

// @ts-ignore
SportsTabsDesktop.propTypes = {
  ...basePropTypes,
  skeleton: PropTypes.bool,
  darkMode: PropTypes.bool,
  className: PropTypes.string,
};
