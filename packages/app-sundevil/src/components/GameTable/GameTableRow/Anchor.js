/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from "react";

export const Anchor = props => {
  const { href, children } = props;

  if (typeof href !== "string") {
    return <div {...props}>{children}</div>;
  }

  return <a {...props}>{children}</a>;
};
