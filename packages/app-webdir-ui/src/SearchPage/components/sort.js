import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";

import { trackGAEvent } from "../../core/services/googleAnalytics";
import { SortLayout } from "./index.styles";

const SortPicker = ({ sort, onChange, customSortOptions }) => {
  const [defaultSortValue, setDefaultSortValue] = useState(sort);

  const sortOptions = customSortOptions || [
    { value: "_score_desc", label: "Relevancy" },
    { value: "last_name_asc", label: "Last Name (ascending)" },
    { value: "last_name_desc", label: "Last Name (descending)" },
  ];

  const checkIfDefaultSortInOptions = sortParam => {
    const arr = sortOptions.filter(
      option => option.value === sortParam && !option.disabled
    );
    if (arr.length >= 1) {
      setDefaultSortValue(prev => setDefaultSortValue(prev + arr[0].value));
    }
    setDefaultSortValue("");
  };

  const getSortEventText = () => {
    let text = sortOptions.find(op => {
      return op.value === sort;
    })?.label;
    if (text === "Relevancy") {
      text = "Sort by Relevancy";
    }
    return text;
  };

  const openSort = () => {
    trackGAEvent({
      event: "collapse",
      action: "open",
      name: "onclick",
      type: "click",
      section: "all asu search",
      text: getSortEventText(),
    });
  };

  const updateSort = newSort => {
    onChange(newSort);
    trackGAEvent({
      event: "collapse",
      action: "close",
      name: "onclick",
      type: "click",
      section: "all asu search",
      text: getSortEventText(),
    });
  };

  useEffect(() => {
    checkIfDefaultSortInOptions(sort);
    return () => setDefaultSortValue("");
  }, [sort]);

  return (
    <SortLayout>
      <form className="uds-form sort-form faculty-sort">
        <div className="form-group">
          <label htmlFor="sortBySelect">Sort by</label>
          <select
            className="form-control"
            id="sortBySelect"
            onChange={event => {
              updateSort(event.target.value);
              setDefaultSortValue(event.target.value);
            }}
            onClick={openSort}
            value={defaultSortValue}
          >
            {sortOptions.map(op =>
              !Object.prototype.hasOwnProperty.call(op, "disabled") ? (
                <option key={op.label} value={op.value}>
                  {op.label === "Relevancy" ? "Sort by Relevancy" : op.label}
                </option>
              ) : (
                <option key={op.label} value="">
                  {op.label}
                </option>
              )
            )}
          </select>
        </div>
      </form>
    </SortLayout>
  );
};

SortPicker.propTypes = {
  sort: PropTypes.string,
  onChange: PropTypes.func,
  customSortOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};

export { SortPicker };
