// @ts-check
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../../config";
import { useBreakpoint } from "../../../utils/use-breakpoint";
import { Icon } from "../../Icon_";
import { Select } from "../../Select/Select";
import { sportPropTypes } from "../../SportsTabs/sports-tabs";
import { TextField } from "../../TextField/TextField";
import { configInputsPropTypes } from "../config-inputs";
import { configLayoutPropTypes } from "../config-layout";
import { newsStorySearchFormPropTypes } from "./use-news-story-search-form";

const Root = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 3rem;
  gap: 1rem;
  flex-wrap: wrap;
`;

/**
 * @type {React.FC<{
 * style?: React.CSSProperties;
 * newsStorySearchForm: import("./use-news-story-search-form").NewsStorySearchForm;
 * configLayout: import("../config-layout").ConfigLayout;
 * configInputs: import("../config-inputs").ConfigInputs;
 * sports: import("../../SportsTabs/sports-tabs").Sport[];
 * className?: string;
 * darkMode?: boolean;
 * orientation?: "horizontal" | "vertical";
 * }>}
 */
export const GameTableForm = ({
  style,
  newsStorySearchForm,
  configLayout,
  configInputs,
  sports,
  className,
  darkMode,
  orientation,
}) => {
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);

  const inputStyle = {
    flex: 1,
    width: isMobile ? "100%" : "auto",
    minWidth: isMobile ? "100%" : "auto",
  };

  const includeAny =
    configLayout.includeInputSearch ||
    configLayout.includeInputSportType ||
    configLayout.includeInputNewsType;

  if (!includeAny) {
    return null;
  }

  return (
    <Root
      style={style}
      className={className}
      // @ts-ignore
      orientation={orientation}
    >
      {configLayout.includeInputSearch && (
        <TextField
          darkMode={darkMode}
          style={{ ...inputStyle, flex: 2 }}
          label={configInputs?.search?.label ?? ""}
          placeholder={configInputs?.search?.placeholder ?? ""}
          value={newsStorySearchForm.searchQuery}
          onChange={newsStorySearchForm.setSearchQuery}
          renderEndIcon={({ style: iconStyle }) => (
            <i
              style={iconStyle}
              className="fa fas fa-solid fa-magnifying-glass"
            />
          )}
        />
      )}

      {configLayout.includeInputSportType && (
        <Select
          darkMode={darkMode}
          style={inputStyle}
          label={configInputs?.sportType?.label ?? ""}
          placeholder={configInputs?.sportType?.placeholder ?? ""}
          onChange={option =>
            newsStorySearchForm.update({
              sportId:
                option.id === newsStorySearchForm.sportId ? null : option.id,
            })
          }
          options={sports.map(sport => ({
            label: sport.name,
            id: sport.id,
            active: sport.active,
            renderStart: ({ style: iconStyle }) => (
              <Icon icon={sport.icon} style={iconStyle} />
            ),
          }))}
        />
      )}
    </Root>
  );
};

GameTableForm.propTypes = {
  // @ts-ignore
  newsStorySearchForm: newsStorySearchFormPropTypes,
  // @ts-ignore
  configLayout: configLayoutPropTypes,
  // @ts-ignore
  configInputs: configInputsPropTypes,
  className: PropTypes.string,
  // @ts-ignore
  sports: PropTypes.arrayOf(sportPropTypes),
  darkMode: PropTypes.bool,
  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
};
