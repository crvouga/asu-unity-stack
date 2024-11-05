// https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4801-44287&node-type=canvas&t=Rka52ZSBxzrMg7eA-0
// @ts-check
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { APP_CONFIG } from "../../../config";
import { cleanString } from "../../../utils/clean-string";
import { firstNonEmpty } from "../../../utils/first-non-empty";
import { useBreakpoint } from "../../../utils/use-breakpoint";
import { ApplyClearButtons } from "../../ApplyClearButtons";
import { Icon } from "../../Icon_";
import { useNewsTypesLoader } from "../../NewsStory/use-news-types-loader";
import { Select, stringsToOptions } from "../../Select/Select";
import { stringToSportId } from "../../Sport/sport-id";
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

const RootInputs = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 1rem;
  flex-wrap: wrap;
`;

/**
 * @type {React.FC<{
 * style?: React.CSSProperties;
 * newsStorySearchForm: import("./use-news-story-search-form").NewsStorySearchForm;
 * configLayout: import("../config-layout").ConfigLayout;
 * configInputs: import("../config-inputs").ConfigInputs;
 * sports: (import("../../SportsTabs/sports-tabs").Sport)[];
 * className?: string;
 * darkMode?: boolean;
 * orientation?: "horizontal" | "vertical";
 * sectionName: string;
 * }>}
 */
export const NewsStorySearchForm = ({
  style,
  newsStorySearchForm,
  configLayout,
  configInputs,
  sports,
  className,
  darkMode,
  orientation,
  sectionName,
}) => {
  const isMobile = useBreakpoint(APP_CONFIG.breakpointMobile);

  const { allNewsTypes } = useNewsTypesLoader();
  const newsTypeOptions = firstNonEmpty(
    configInputs?.newsType?.options,
    stringsToOptions(allNewsTypes),
    []
  );

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
      <RootInputs>
        {configLayout.includeInputSearch && (
          <TextField
            darkMode={darkMode}
            style={{ ...inputStyle, flex: 2 }}
            label={configInputs?.search?.label ?? ""}
            placeholder={configInputs?.search?.placeholder ?? ""}
            value={newsStorySearchForm.state.searchQuery}
            onChange={searchQueryNew =>
              newsStorySearchForm.update({ searchQuery: searchQueryNew })
            }
            sectionName={sectionName}
            debounce={500}
            uncontrolled
            renderEndIcon={({ style: iconStyle }) => (
              <i
                style={iconStyle}
                className="fa fas fa-solid fa-magnifying-glass"
              />
            )}
          />
        )}

        {configLayout.includeInputNewsType && (
          <Select
            darkMode={darkMode}
            style={inputStyle}
            label={configInputs?.newsType?.label ?? ""}
            sectionName={sectionName}
            placeholder={configInputs?.newsType?.placeholder ?? ""}
            onChange={option =>
              newsStorySearchForm.update({
                newsType:
                  cleanString(option.id) ===
                  cleanString(newsStorySearchForm.state.newsType)
                    ? null
                    : option.id,
              })
            }
            options={newsTypeOptions.map(option => ({
              ...option,
              active:
                cleanString(option.id) ===
                cleanString(newsStorySearchForm.state.newsType),
            }))}
          />
        )}

        {configLayout.includeInputSportType && (
          <Select
            darkMode={darkMode}
            style={inputStyle}
            label={configInputs?.sportType?.label ?? ""}
            placeholder={configInputs?.sportType?.placeholder ?? ""}
            sectionName={sectionName}
            onChange={option =>
              newsStorySearchForm.update({
                sportId:
                  stringToSportId(option.id) ===
                  stringToSportId(newsStorySearchForm.state.sportId)
                    ? null
                    : option.id,
              })
            }
            options={sports.map(sport => ({
              label: sport.name,
              id: sport.id,
              active:
                stringToSportId(sport.id) ===
                stringToSportId(newsStorySearchForm.state.sportId),
              renderStart: ({ style: iconStyle }) => (
                <Icon icon={sport.icon} style={iconStyle} />
              ),
            }))}
          />
        )}
      </RootInputs>

      {newsStorySearchForm.mode === "draft" && (
        <ApplyClearButtons
          canApply={newsStorySearchForm.canApply}
          onApply={newsStorySearchForm.apply}
          canClear={newsStorySearchForm.canClear}
          onClear={newsStorySearchForm.clear}
        />
      )}
    </Root>
  );
};

NewsStorySearchForm.propTypes = {
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
  // @ts-ignore
  sectionName: PropTypes.string,
};
