import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { LabelledInputBase } from "../InputBase/LabelledInputBase";

const Input = styled.input`
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  &:focus {
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
  }
  width: 100%;
`;

export const TextField = ({
  label,
  value,
  placeholder,
  onChange,
  renderEndIcon,
  style,
}) => {
  return (
    <LabelledInputBase
      label={label}
      style={style}
      renderInput={({ id, style: inputStyle }) => (
        <Input
          style={inputStyle}
          id={id}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
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
};
