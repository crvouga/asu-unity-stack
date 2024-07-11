// @ts-check
import PropTypes from "prop-types";
import React from "react";

import { DropDown } from "../DropDown/DropDown";
import { DropDownSurface } from "../DropDown/DropDownSurface";
import { Icon } from "../Icon_";
import { SelectBase } from "../Select/SelectBase";
import { Skeleton } from "../Skeleton";
import { basePropTypes } from "./sports-tabs";
import { SportsTabDropDownItem } from "./SportsTabDropDownItem";

/**
 * @typedef {import("./sports-tabs").Sport} Sport
 * @typedef {import("./sports-tabs").BaseProps} BaseProps
 * @typedef {BaseProps & {skeleton?: boolean; variant?: "bottom-bordered" | "borderless" | null | undefined; className?: string}} Props
 */

/**
 * @type {React.FC<Props>}
 * */
export const SportsTabsMobile = ({
  sports = [],
  onSportItemClick,
  skeleton,
  variant,
  className,
}) => {
  sports?.sort((a, b) => a.position - b.position);
  const activeSport = sports.find(sport => Boolean(sport.active));
  if (!activeSport) return null;

  /** @type {Record<string, unknown>} */
  const initialState = {
    opened: null,
  };
  const [state, setState] = React.useState(initialState);

  return (
    <Skeleton skeleton={Boolean(skeleton)} className={className}>
      <DropDown
        open={state.opened === "dropdown"}
        onClose={() =>
          setState(currentState => ({ ...currentState, opened: null }))
        }
        renderReference={input => {
          return (
            <SelectBase
              // @ts-ignore
              ref={input.ref}
              variant={variant}
              renderIcon={props => (
                <Icon style={props?.style} icon={activeSport.icon} />
              )}
              name={activeSport.name}
              open={input.open}
              onClick={() =>
                setState(currentState => ({
                  ...currentState,
                  opened:
                    currentState.opened === "dropdown" ? null : "dropdown",
                }))
              }
            />
          );
        }}
        renderContent={input => {
          return (
            <DropDownSurface style={{ width: input.referenceWidth }}>
              {sports.map(sport => (
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
    </Skeleton>
  );
};

// @ts-ignore
SportsTabsMobile.propTypes = {
  ...basePropTypes,
  skeleton: PropTypes.bool,
  variant: PropTypes.oneOf(["bottom-bordered", "borderless"]),
  className: PropTypes.string,
};
