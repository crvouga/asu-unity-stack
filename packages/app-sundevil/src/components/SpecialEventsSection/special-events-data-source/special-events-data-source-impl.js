import PropTypes from "prop-types";

import { specialEventSchema } from "../special-event";
import { ISpecialEventsDataSource } from "./special-events-data-source";
import { SpecialEventsDataSourceAsuEvents } from "./special-events-data-source-impl-asu-events";
import { SpecialEventsDataSourceStatic } from "./special-events-data-source-impl-static";

export const specialEventsDataSourceSchema = PropTypes.oneOfType([
  PropTypes.shape({
    type: PropTypes.oneOf(["static"]),
    specialEvents: PropTypes.arrayOf(specialEventSchema),
  }),
  PropTypes.shape({
    type: PropTypes.oneOf(["asu-events"]),
    url: PropTypes.string,
  }),
  PropTypes.shape({
    type: PropTypes.oneOf(["custom"]),
    specialEventsDataSource: PropTypes.instanceOf(ISpecialEventsDataSource),
  }),
]);

/**
 * @returns {import("./special-events-data-source").ISpecialEventsDataSource}
 */
export const buildSpecialEventsDataSource = input => {
  switch (input?.type) {
    case "static": {
      return new SpecialEventsDataSourceStatic(input);
    }
    case "asu-events": {
      return new SpecialEventsDataSourceAsuEvents(input);
    }
    case "custom": {
      return input.specialEventsDataSource;
    }
    default: {
      return new SpecialEventsDataSourceStatic({ specialEvents: [] });
    }
  }
};
