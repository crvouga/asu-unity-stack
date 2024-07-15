import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { CheckboxListOption } from "./CheckboxListOption";
import { CheckboxListOptionEmpty } from "./CheckboxListOptionEmpty";

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Label = styled.div`
  font-size: 1rem;
  font-weight: bold;
  padding: 0;
  width: 100%;
  text-align: left;
  padding-bottom: 0.5rem;
`;

export const CheckboxList = ({
  label,
  style,
  onChange,
  options,
  emptyStateMessage = "No options available",
}) => {
  return (
    <Root style={style}>
      <Label>{label}</Label>
      {options.map(option => (
        <CheckboxListOption
          key={option.id ?? option.label}
          label={option.label}
          renderStart={option.renderStart}
          onClick={() => {
            onChange?.(option);
          }}
          active={Boolean(option.active)}
        />
      ))}
      {options.length === 0 && (
        <CheckboxListOptionEmpty
          label={emptyStateMessage ?? "No options available"}
        />
      )}
    </Root>
  );
};

const optionSchema = PropTypes.shape({
  id: PropTypes.string,
  label: PropTypes.string,
  active: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  payload: PropTypes.any,
  renderStart: PropTypes.func,
});

CheckboxList.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.arrayOf(optionSchema),
  emptyStateMessage: PropTypes.string,
};
