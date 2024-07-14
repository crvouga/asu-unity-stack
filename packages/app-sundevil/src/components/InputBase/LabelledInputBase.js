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
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  background-color: #fff;
  min-width: 150px;
`;

const InputRoot = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LabelledInputBase = forwardRef(
  ({ label, renderInput, renderEndIcon, style }, ref) => {
    const id = useId();
    return (
      <Root style={style} ref={ref}>
        {typeof label === "string" && label.length > 0 && (
          <Label htmlFor={id}>{label}</Label>
        )}
        <InputRoot>
          {renderInput({ id, style: { padding: "0.5rem" } })}
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
};
