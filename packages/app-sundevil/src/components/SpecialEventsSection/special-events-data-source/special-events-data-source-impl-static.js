import { ISpecialEventsDataSource } from "./special-events-data-source";

export class SpecialEventsDataSourceStatic extends ISpecialEventsDataSource {
  /**
   *
   */
  constructor({ specialEvents }) {
    super();
    this.specialEvents = Array.isArray(specialEvents) ? specialEvents : [];
  }

  /**
   * @type {import("./special-events-data-source").FindMany}
   */
  async findMany(input) {
    const offset = input.offset ?? 0;
    const limit = input.limit ?? Infinity;
    const sliced = this.specialEvents.slice(offset, offset + limit);
    const total = this.specialEvents.length;
    return {
      limit,
      offset,
      rows: sliced,
      total,
    };
  }
}

window.SpecialEventsDataSourceStatic = SpecialEventsDataSourceStatic;
