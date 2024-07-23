import PropTypes from "prop-types";
import React, { useRef } from "react";
import styled from "styled-components";

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
}) => {
  const inputRef = useRef(null);
  const focused = useFocus(inputRef);

  return (
    <LabelledInputBase
      label={label}
      darkMode={darkMode}
      style={style}
      focused={focused}
      renderInput={({ id, style: inputStyle }) => (
        <InputContainer>
          <Placeholder inputStyle={inputStyle} hasValue={Boolean(value)}>
            <PlaceholderText>{placeholder}</PlaceholderText>
          </Placeholder>
          <Input
            ref={inputRef}
            style={inputStyle}
            id={id}
            type="text"
            value={value}
            onChange={e => onChange(e.target.value)}
          />
        </InputContainer>
      )}
      renderEndIcon={renderEndIcon}
    />
  );
};

TextField.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  renderEndIcon: PropTypes.func,
  darkMode: PropTypes.bool,
};
