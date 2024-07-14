import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { LabelledInputBase } from "../InputBase/LabelledInputBase";

const InputContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  height: 100%;
  overflow: hidden;
`;

const Placeholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer-events: none;
  color: #999;
  padding: 8px;
  display: ${({ hasValue }) => (hasValue ? "none" : "flex")};
`;

const Input = styled.input`
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  width: 100%;
  padding: 8px; /* Adjust based on your design */
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
  return (
    <LabelledInputBase
      label={label}
      darkMode={darkMode}
      style={style}
      renderInput={({ id, style: inputStyle }) => (
        <InputContainer>
          <Placeholder hasValue={!!value}>{placeholder}</Placeholder>
          <Input
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
