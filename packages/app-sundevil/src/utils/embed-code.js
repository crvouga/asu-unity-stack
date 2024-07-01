import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";

export const useEmbeddedCode = ({ embedCode, ref }) => {
  useEffect(() => {
    const embedContainer = ref.current;

    if (!embedContainer) return;

    embedContainer.innerHTML = embedCode;

    const script = embedContainer.querySelector("script");
    const newScript = document.createElement("script");
    newScript.src = script.src;
    newScript.async = script.async;

    script.parentNode.replaceChild(newScript, script);
  }, [embedCode]);
};

export const EmbeddedCode = ({ embedCode }) => {
  const ref = useRef();
  useEmbeddedCode({ embedCode, ref });
  return <div ref={ref} />;
};
EmbeddedCode.propTypes = {
  embedCode: PropTypes.string,
};
