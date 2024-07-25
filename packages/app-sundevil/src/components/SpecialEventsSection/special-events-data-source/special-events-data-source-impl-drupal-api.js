// @ts-check
import { SpecialEventsDataSourceStatic } from "./special-events-data-source-impl-static";

/*

    {
        "id": "102650",
        "title": "Sun Devil Volleyball: Maroon and Gold Scrimmage",
        "created": "1721736539",
        "body_summary": "<p>Catch a preview of the 2024 season with the Maroon vs. Gold intrasquad scrimmage. ASU will look to build off of a successful 2023 campaign under first-year coach JJ Van Niel where they went 28-7 and reached the NCAA tournament for the first time since 2015. </p>",
        "image_url": {
            "src": "https://web-sda.ddev.site:8443/sites/default/files/womens-volleyball-2024_256.jpg",
            "alt": "Image from ASU News",
            "title": "Image from ASU News"
        },
        "start_date": "1724504400",
        "field_cost_value": "free",
        "field_cta": "https://asuevents.asu.edu/event/sun-devil-volleyball-maroon-and-gold-scrimmage",
        "field_cta_text": "Learn more"
    },

*/

/**
 * @type {(node: unknown) => import("../special-event").SpecialEvent}
 */
const itemToSpecialEvent = item => {
  // @ts-ignore
  const buttonHref = item?.field_cta;
  // @ts-ignore
  const buttonLabel = item?.field_cta_text;
  return {
    // @ts-ignore
    title: item?.title ?? "",
    // @ts-ignore
    body: item?.body_summary ?? "",
    // @ts-ignore
    imageSrc: item?.image_url?.src,
    // @ts-ignore
    imageAlt: item?.image_url?.alt,
    buttons:
      typeof buttonHref === "string" && typeof buttonLabel === "string"
        ? [
            {
              color: "maroon",
              href: buttonHref,
              label: buttonLabel,
            },
          ]
        : [],
    // @ts-ignore
    id: item?.id,
    // @ts-ignore
    sportName: item?.sport_tag,

    subtitles: item?.subtitles ?? [],
  };
};

const jsonToItems = json => {
  if (Array.isArray(json)) {
    return json;
  }

  const nodes = json?.nodes ?? [];

  if (Array.isArray(nodes)) {
    return nodes;
  }

  return [];
};

export class SpecialEventsDataSourceDrupalAPI {
  /**
   *
   */
  constructor({ url, timeout }) {
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

    const items = jsonToItems(json);

    const specialEvents = items?.map(itemToSpecialEvent) ?? [];

    const dataSource = new SpecialEventsDataSourceStatic({
      specialEvents,
    });
    return dataSource.findMany(input);
  }
}

// @ts-ignore
window.SpecialEventsDataSourceAsuEvents = SpecialEventsDataSourceDrupalAPI;
