// @ts-check
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../config";
import { trackGAEvent } from "../../track-ga-event";
import { useBreakpoint } from "../../utils/use-breakpoint";
import { CollapseIcon } from "../CollapseIcon/CollapseIcon";
import { DropDown, DropDownSurface } from "../DropDown";
import { Icon, SUN_DEVILS_ICON_CLASS_NAME } from "../Icon_";
import { Skeleton } from "../Skeleton";
import { sportsTabSkeletonData } from "./sports-tab-skeleton-data";
import { basePropTypes, cleanSportTabs } from "./sports-tabs";
import { SportsTab } from "./SportsTab";
import { SportsTabDropDownItem } from "./SportsTabDropDownItem";

/**
 * @typedef {import("./sports-tabs").Sport} Sport
 * @typedef {import("./sports-tabs").BaseProps} BaseProps
 * @typedef {BaseProps & {
 * moreTabOrientation?: "vertical" | "horizontal",
 * moreTabColor?: "default" | "muted";
 * skeleton?: boolean;
 * darkMode?: boolean;
 * className?: string
 * maxTabCountTablet?: number;
 * maxTabCountDesktop?: number;
 * sectionName:string
 * }} Props
 */

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-wrap: nowrap;
`;

const ICON_SIZE = {
  width: "16px",
  height: "16px",
  fontSize: "16px",
};

const StyledSportsTab = styled(SportsTab)`
  ${({ darkMode, active }) => {
    if (darkMode && !active) {
      return `
      &:hover {
        i, span, svg, ${SUN_DEVILS_ICON_CLASS_NAME} {
            color: #fdc627 !important;
        }
      }
      `;
    }
    if (!darkMode && !active) {
      return `
      &:hover {
        i, span, svg, ${SUN_DEVILS_ICON_CLASS_NAME} {
            color: #8c1d40 !important;
        }
      }
      `;
    }
    return "";
  }}
`;

/**
 * @type {React.FC<Props>}
 * */
export const SportsTabsDesktop = ({
  sports: propsSports = [],
  onSportItemClick,
  moreTabOrientation,
  moreTabColor,
  skeleton,
  darkMode = false,
  className,
  maxTabCountTablet = 6,
  maxTabCountDesktop = 9,
  sectionName,
}) => {
  const sports = cleanSportTabs(propsSports);

  const isTablet = useBreakpoint(APP_CONFIG.breakpointTablet);
  const maxTabCount = isTablet ? maxTabCountTablet : maxTabCountDesktop;
  // @ts-ignore
  const sportTabs = sports?.filter(sport => !sport.more)?.slice(0, maxTabCount);

  const moreSports = sports.filter(sport =>
    sportTabs.every(s => s.id !== sport.id)
  );
  const isMoreSportsActive = moreSports.some(sport => Boolean(sport.active));

  /** @type {Record<string, unknown>} */
  const initialState = {
    opened: null,
  };
  const [state, setState] = React.useState(initialState);

  if (sportTabs.length === 0) {
    return null;
  }

  return (
    // @ts-ignore
    <Skeleton skeleton={Boolean(skeleton)} className={className}>
      <Root>
        {skeleton && (
          <>
            {sportsTabSkeletonData.slice(0, maxTabCount).map(sport => (
              <SportsTab
                key={sport.id}
                onClick={() => {}}
                active={Boolean(sport.active)}
                orientation="vertical"
                darkMode={darkMode}
                sectionName={sectionName}
                text=" "
              />
            ))}
          </>
        )}
        {!skeleton && (
          <>
            {sportTabs.map(sport => (
              <StyledSportsTab
                key={sport.id}
                onClick={() => onSportItemClick(sport.id)}
                active={Boolean(sport.active)}
                orientation="vertical"
                darkMode={darkMode}
                sectionName={sectionName}
                text={sport?.name}
              >
                <Icon
                  darkMode={darkMode}
                  title={sport.name}
                  icon={sport.icon}
                  style={ICON_SIZE}
                />
                <div>{sport.name}</div>
              </StyledSportsTab>
            ))}
            {sportsTabSkeletonData
              .slice(0, maxTabCount - sportTabs.length)
              .map(sport => (
                <SportsTab
                  key={sport.id}
                  empty
                  sectionName={sectionName}
                  text=" "
                />
              ))}
            {moreSports.length > 0 && (
              <DropDown
                style={{
                  flex: 1,
                }}
                open={state.opened === "dropdown"}
                onClose={() =>
                  setState(currentState => ({ ...currentState, opened: null }))
                }
                renderReference={input => {
                  const text = "More";
                  return (
                    <StyledSportsTab
                      // @ts-ignore
                      ref={input.ref}
                      onClick={() =>
                        setState(currentState => ({
                          ...currentState,
                          opened:
                            currentState.opened === "dropdown"
                              ? null
                              : "dropdown",
                        }))
                      }
                      orientation={moreTabOrientation ?? "vertical"}
                      active={isMoreSportsActive}
                      color={moreTabColor ?? "default"}
                      darkMode={darkMode}
                      sectionName={sectionName}
                      text={text}
                      event="collapse"
                    >
                      <div key={String(input.open)}>
                        <CollapseIcon open={input.open} style={ICON_SIZE} />
                      </div>

                      <div>{text}</div>
                    </StyledSportsTab>
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
                            onSportItemClick(sport.id);
                            trackGAEvent({
                              event: "link",
                              action: "click",
                              name: "onclick",
                              type: "internal link",
                              region: "main content",
                              section: sectionName,
                              text: sport?.name ?? " ",
                              component: "text",
                            });
                          }}
                        />
                      ))}
                    </DropDownSurface>
                  );
                }}
              />
            )}
          </>
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
  maxTabCountTablet: PropTypes.number,
  maxTabCountDesktop: PropTypes.number,
  // @ts-ignore
  sectionName: PropTypes.string,
};
