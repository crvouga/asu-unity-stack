// @ts-check
import { ISpecialEventsDataSource } from "./special-events-data-source";
import { SpecialEventsDataSourceStatic } from "./special-events-data-source-impl-static";

/**
 * @type {(node: unknown) => import("../special-event").SpecialEvent}
 */
const mapNodeToSpecialEvent = node => {
  return {
    // @ts-ignore
    title: node?.title ?? "",
    // @ts-ignore
    body: node?.body_summary ?? "",
    // @ts-ignore
    imageSrc: node?.image_url,
    // @ts-ignore
    imageAlt: node?.image_alt,
    buttons: [],
    // @ts-ignore
    id: node?.nid,
    // @ts-ignore
    sportName: node?.sport_tag,

    subtitles: [],
  };
};

export class SpecialEventsDataSourceAsuEvents extends ISpecialEventsDataSource {
  /**
   *
   */
  constructor({ url, timeout }) {
    super();
    this.url = url;
    this.timeout = timeout;
  }

  /**
   * @type {import("./special-events-data-source").FindMany}
   */
  // eslint-disable-next-line class-methods-use-this
  async findMany(input) {
    if (typeof this.timeout === "number") {
      await new Promise(resolve => setTimeout(resolve, this.timeout));
    }
    const fetched = await fetch(this.url);
    const json = await fetched.json();

    const specialEvents =
      json?.nodes?.map(item => mapNodeToSpecialEvent(item.node)) ?? [];

    const dataSource = new SpecialEventsDataSourceStatic({
      specialEvents,
    });
    return dataSource.findMany(input);
  }
}

// @ts-ignore
window.SpecialEventsDataSourceAsuEvents = SpecialEventsDataSourceAsuEvents;
