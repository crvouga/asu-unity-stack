import PropTypes from "prop-types";
import React from "react";

import { ISpecialEventsDataSource } from "./special-events-data-source/special-events-data-source";
import { buildSpecialEventsDataSource } from "./special-events-data-source/special-events-data-source-impl";

/** @type {React.Context<import("./special-events-data-source/special-events-data-source").ISpecialEventsDataSource | null>} */
const SpecialEventsDataSourceContext = React.createContext(null);

export const SpecialEventsDataSourceProvider = ({
  children,
  specialEventsDataSource,
}) => {
  return (
    <SpecialEventsDataSourceContext.Provider value={specialEventsDataSource}>
      {children}
    </SpecialEventsDataSourceContext.Provider>
  );
};
SpecialEventsDataSourceProvider.propTypes = {
  children: PropTypes.node.isRequired,
  specialEventsDataSource: PropTypes.instanceOf(ISpecialEventsDataSource)
    .isRequired,
};

/** @type {() => import("./special-events-data-source/special-events-data-source").ISpecialEventsDataSource} */
export const useSpecialEventsDataSource = () => {
  return (
    React.useContext(SpecialEventsDataSourceContext) ??
    buildSpecialEventsDataSource()
  );
};
