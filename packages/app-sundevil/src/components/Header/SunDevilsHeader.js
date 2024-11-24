// @ts-check
import React from "react";

import { ASUHeader } from "../../../../component-header/src";
import { headerPropTypes } from "./props";
import { mapProps } from "./props-map";

export const SunDevilsHeader = props => {
  const mappedProps = { ...mapProps(props) };
  return <ASUHeader {...mappedProps} />;
};
SunDevilsHeader.propTypes = headerPropTypes;
