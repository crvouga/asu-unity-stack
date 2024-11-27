import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import styled from "styled-components";

import { trackGAEvent } from "../../track-ga/track-ga-event";
import { ensureNormalNumber } from "../../utils/ensure-number";
import { useFocus } from "../../utils/use-focus";
import { LabelledInputBase } from "../InputBase/LabelledInputBase";

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  color: #999;
  display: ${({ hasValue }) => (hasValue ? "none" : "flex")};
  padding: ${({ inputStyle }) => inputStyle.padding || "0"};
`;

const PlaceholderText = styled.span`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Input = styled.input`
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  width: 100%;
  background: transparent;
  &:focus {
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
  }
`;

export const TextField = ({
  label,
  value,
  placeholder,
  onChange,
  renderEndIcon,
  style,
  darkMode,
  uncontrolled,
  sectionName,
  debounce,
}) => {
  const inputRef = useRef(null);
  const focused = useFocus(inputRef);
  const timeoutRef = useRef(null);
  const [hasValue, setHasValue] = useState(Boolean(value));
  const hasValueFinal = Boolean(value) || hasValue;

  const onChangeFinal = e => {
    const valueNew = e.target.value;
    setHasValue(Boolean(valueNew));

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      trackGAEvent({
        event: "search",
        action: "type",
        name: "onenter",
        type: label,
        region: "main content",
        section: sectionName,
        text: valueNew,
        // component: "search bar",
        component: "text",
      });
      onChange(valueNew);
    }, ensureNormalNumber(debounce));
  };
  return (
    <LabelledInputBase
      label={label}
      darkMode={darkMode}
      style={{ ...style, cursor: "pointer" }}
      focused={focused}
      onClick={() => inputRef.current.focus()}
      renderInput={({ id, style: inputStyle }) => (
        <InputContainer>
          <Placeholder inputStyle={inputStyle} hasValue={hasValueFinal}>
            <PlaceholderText>{placeholder}</PlaceholderText>
          </Placeholder>
          <Input
            ref={inputRef}
            style={inputStyle}
            id={id}
            type="text"
            value={uncontrolled ? undefined : value}
            onChange={onChangeFinal}
          />
        </InputContainer>
      )}
      renderEndIcon={renderEndIcon}
    />
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  sectionName: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  renderEndIcon: PropTypes.func,
  darkMode: PropTypes.bool,
  uncontrolled: PropTypes.bool,
  debounce: PropTypes.number,
};
