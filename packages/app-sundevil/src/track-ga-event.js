const key = "shouldLogDataLayers";
const toggleLogDataLayers = () => {
  const got = localStorage.getItem(key);
  const shouldLogDataLayers = got === "true" ? "false" : "true";
  localStorage.setItem(key, shouldLogDataLayers);
};

// @ts-ignore
window.toggleLogDataLayers = toggleLogDataLayers;

/**
 * @param {{
 *  event?: string
 *  action?: string
 *  name?: string
 *  type?: string
 *  section?: string
 *  text?: string
 *  region?:string
 *  component?: string
 * }} args
 */
export const trackGAEvent = ({
  event = "",
  action = "",
  name = "",
  type = "",
  section = "",
  text = "",
  region = "",
  component = "",
  ...rest
}) => {
  const { dataLayer } = window;
  const e = {
    ...rest,
    event: event.toLowerCase(),
    action: action.toLowerCase(),
    name: name.toLowerCase(),
    type: type.toLowerCase(),
    region: region.toLowerCase(),
    section: section.toLowerCase(),
    text: text.toLowerCase(),
    component: component.toLowerCase(),
  };
  if (localStorage.getItem(key) === "true") {
    // eslint-disable-next-line no-console
    console.log("trackGAEvent", e);
  }
  if (dataLayer) {
    dataLayer.push(e);
  }
};
