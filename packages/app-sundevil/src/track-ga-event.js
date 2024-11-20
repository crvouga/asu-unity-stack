const key = "shouldLogDataLayers";
const toggleLogDataLayers = () => {
  const got = localStorage.getItem(key);
  const shouldLogDataLayers = got === "true" ? "false" : "true";
  localStorage.setItem(key, shouldLogDataLayers);
  // eslint-disable-next-line no-console
  console.log("shouldLogDataLayers", shouldLogDataLayers);
};

// @ts-ignore
window.toggleLogDataLayers = toggleLogDataLayers;

export const TYPE_INTERNAL_LINK = "internal link";

function ensureString(value) {
  return typeof value === "string" ? value : "";
}

function cleanValue(value) {
  return ensureString(value).toLowerCase();
}

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
    event: cleanValue(event),
    action: cleanValue(action),
    name: cleanValue(name),
    type: cleanValue(type),
    region: cleanValue(region),
    section: cleanValue(section),
    text: cleanValue(text),
    component: cleanValue(component),
  };
  if (localStorage.getItem(key) === "true") {
    // eslint-disable-next-line no-console
    console.log("trackGAEvent", e);
  }
  if (dataLayer) {
    dataLayer.push(e);
  }
};
