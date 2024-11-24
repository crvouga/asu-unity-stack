/* eslint-disable react/prop-types */
import React, { forwardRef, useRef } from "react";

import { useGoogleAds } from "./use-google-ads";

export const GoogleAd = forwardRef(
  (
    /**
     * @type {{ googleAdBody: string, googleAdHead: string, style: React.CSSProperties }}
     */
    props,
    propsRef
  ) => {
    /** @type {React.MutableRefObject<HTMLDivElement | undefined>} */
    const rootRef = useRef();
    const ref = propsRef ?? rootRef;

    useGoogleAds({
      ref,
      googleAdBody: props?.googleAdBody,
      googleAdHead: props?.googleAdHead,
    });

    return <div ref={ref} style={props.style} />;
  }
);
