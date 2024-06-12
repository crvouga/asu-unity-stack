// @ts-check

import { ASUHeader } from "../../../../component-header/src";
import { RenderReact } from "../../utils/react-render";

export const SunDevilsHeader = ASUHeader;

export const initSunDevilsHeader = ({ targetSelector, props }) => {
  RenderReact(SunDevilsHeader, props, document.querySelector(targetSelector));
};
