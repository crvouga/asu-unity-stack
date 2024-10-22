// https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=4801-44287&node-type=canvas&t=Rka52ZSBxzrMg7eA-0
// @ts-check
import React from "react";

import { FilterFormTopBarLayout } from "../../FilterForm/FilterFormTopBarLayout";
import { configFormPropTypes } from "../config-form";
import { NewsStorySearchForm } from "./NewsStorySearchForm";

export const NewsStorySearchFormTopbar = ({
  configForm,
  configInputs,
  configLayout,
  sports,
  darkMode,
  className,
  newsStorySearchForm,
  sectionName,
}) => {
  return (
    <FilterFormTopBarLayout
      className={className}
      title={configForm?.title}
      renderForm={() => (
        <NewsStorySearchForm
          sectionName={sectionName}
          newsStorySearchForm={newsStorySearchForm}
          configInputs={configInputs}
          configLayout={configLayout}
          sports={sports}
          darkMode={darkMode}
        />
      )}
    />
  );
};

NewsStorySearchFormTopbar.propTypes = {
  ...NewsStorySearchForm.propTypes,
  configForm: configFormPropTypes,
};
