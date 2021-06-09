// @ts-check

import PropTypes from "prop-types";
import React from "react";

import { idGenerator } from "../../../core/utils";

/**
 *
 * @param {{
 *  appliedFilters: string []
 * }} props
 * @returns
 */
function FilterSummary({ appliedFilters = [] }) {
  const genFilterId = idGenerator("filter-");
  return (
    <div>
      <header>
        <strong>Applied filters</strong>
      </header>
      <div>
        {appliedFilters.map(filterValue => (
          <span key={genFilterId.next().value}>
            <span className="badge rounded-pill bg-secondary mr-1 pr-1">
              <span>{filterValue}</span>
              <i className="fas fa-times pl-1" />
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

FilterSummary.propTypes = {
  appliedFilters: PropTypes.arrayOf(PropTypes.string),
};

export default FilterSummary;
