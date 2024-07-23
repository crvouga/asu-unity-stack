import PropTypes from "prop-types";
import React, { forwardRef } from "react";
import styled from "styled-components";

import { useId } from "../../utils/use-id";

const Label = styled.label`
  display: block;
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-size: 16px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: inherit;
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  background-color: transparent;
  color: ${({ darkMode }) => (darkMode ? "#fff" : "#191919")};
  min-width: 150px;
`;

const InputRoot = styled.div`
  border: 1px solid #ccc;
  border-radius: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  color: #191919;
  box-sizing: content-box;
  ${({ focused }) => {
    if (focused) {
      return `
        border: 1px solid #000;
      `;
    }
    return "";
  }}
`;

export const LabelledInputBase = forwardRef(
  ({ label, renderInput, renderEndIcon, style, darkMode, focused }, ref) => {
    const id = useId();
    return (
      <Root style={style} ref={ref} darkMode={darkMode}>
        {typeof label === "string" && label.length > 0 && (
          <Label htmlFor={id}>{label}</Label>
        )}
        <InputRoot focused={focused}>
          {renderInput({
            id,
            style: {
              padding: "0.75rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            },
          })}
          {renderEndIcon?.({
            style: {
              paddingRight: "0.75rem",
              fontSize: "0.8rem",
              color: "inherit",
              opacity: 0.9,
            },
          })}
        </InputRoot>
      </Root>
    );
  }
);
LabelledInputBase.propTypes = {
  label: PropTypes.string.isRequired,
  renderInput: PropTypes.func.isRequired,
  renderEndIcon: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  darkMode: PropTypes.bool,
  focused: PropTypes.bool,
};
