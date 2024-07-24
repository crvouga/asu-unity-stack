import PropTypes from "prop-types";
import React from "react";

import { Button } from "../../../../components-core/src/index";
import { mergeIconProps } from "../Icon_";
import { Skeleton } from "../Skeleton";
import { buttonPropTypes } from "./button-prop";

/**
 * @type {React.FC<{button: import("./button-prop").ButtonProp}>}
 */
const EndIcon = ({ button }) => {
  if (
    typeof button?.target === "string" &&
    button?.target?.toLowerCase?.().trim?.() === "_blank"
  ) {
    return (
      <i
        style={{ marginLeft: "8px" }}
        className="fa fas fa-solid fa-arrow-up-right-from-square"
      />
    );
  }

  if (button?.endIcon) {
    const iconProps = mergeIconProps(
      { style: { marginLeft: "8px" } },
      button.endIcon
    );
    return (
      <i
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...iconProps}
      />
    );
  }

  return null;
};
EndIcon.propTypes = {
  button: buttonPropTypes,
};

/**
 * @type {React.FC<{buttons: import("./button-prop").ButtonProp[]; skeleton?: boolean}>}
 */
export const BottomButtons = ({ buttons, skeleton }) => {
  return (
    <>
      {buttons.map(button => (
        <Skeleton skeleton={Boolean(skeleton)} fitContent key={button?.label}>
          <Button
            ariaLabel={button?.label}
            classes={button.class ? [button.class] : []}
            color={button?.color}
            size={button.size ?? "small"}
            label={button?.label}
            href={button?.href}
            target={button?.target}
            renderEndIcon={() => <EndIcon button={button} />}
          />
        </Skeleton>
      ))}
    </>
  );
};
BottomButtons.propTypes = {
  buttons: PropTypes.arrayOf(buttonPropTypes),
  skeleton: PropTypes.bool,
};
