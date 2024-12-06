import { trackGAEvent } from "../../../../../shared";

export const HEADER_SECTION_NAME = "main navbar";
export const HEADER_REGION = "navbar";

export const DEFAULT_INTERNAL_LINK_DATA_LAYER = {
  event: "link",
  action: "click",
  name: "onclick",
  type: "internal link",
  component: "text",
  // text: "",
  // section: "",
  // region: "",
};

export const DEFAULT_HEADER_DATA_LAYER = {
  // event: "",
  // action: "",
  // name: "",
  // type: "",
  // text: "",
  // component: "",
  section: HEADER_SECTION_NAME,
  region: HEADER_REGION,
};

export const DEFAULT_HEADER_INTERNAL_LINK_DATA_LAYER = {
  ...DEFAULT_INTERNAL_LINK_DATA_LAYER,
  ...DEFAULT_HEADER_DATA_LAYER,
};

const removeFalsyValues = obj =>
  Object.fromEntries(Object.entries(obj).filter(([_, v]) => v));

export const headerInternalLinkDataLayer = ({ text, ...overrides }) => {
  return {
    ...DEFAULT_HEADER_INTERNAL_LINK_DATA_LAYER,
    text,
    ...removeFalsyValues(overrides),
  };
};

export const trackHeaderInternalLink = ({ text, ...overrides }) => {
  trackGAEvent(headerInternalLinkDataLayer({ text, ...overrides }));
};
