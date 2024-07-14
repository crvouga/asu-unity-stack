import { SpecialEventsDataSourceStatic } from "./special-events-data-source-impl-static";

export class SpecialEventsDataSourceAsuEvents {
  /**
   *
   */
  constructor({ url }) {
    this.url = url;
  }

  /**
   * @type {import("./special-events-data-source").FindMany}
   */
  // eslint-disable-next-line class-methods-use-this
  async findMany(input) {
    const dataSource = new SpecialEventsDataSourceStatic({
      specialEvents: [],
    });
    return dataSource.findMany(input);
  }
}

window.SpecialEventsDataSourceAsuEvents = SpecialEventsDataSourceAsuEvents;
