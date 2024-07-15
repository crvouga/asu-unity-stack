import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";

import { DropDown, DropDownSurface } from "../DropDown";
import { LabelledInputBase } from "../InputBase/LabelledInputBase";
import { SelectOption } from "./SelectOption";
import { SelectOptionEmpty } from "./SelectOptionEmpty";

const Button = styled.button`
  border: none !important;
  outline: none !important;
  box-shadow: none !important;
  &:focus {
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
  }
  width: 100%;
  background-color: transparent;
  text-align: left;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ChevronIcon = styled.span`
  font-size: 16px;
  color: #191919;
`;

const Value = styled.span`
  font-size: 16px;
  color: #191919;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

const Placeholder = styled.span`
  font-size: 16px;
  color: #191919;
  opacity: 0.5;
`;

export const Select = ({
  label,
  placeholder,
  style,
  onChange,
  options,
  emptyStateMessage = "No options available",
  darkMode,
}) => {
  const [open, setOpen] = useState(false);
  const active = options.find(option => option.active);
  return (
    <DropDown
      open={open}
      onClose={() => setOpen(false)}
      renderReference={({ ref }) => (
        <LabelledInputBase
          darkMode={darkMode}
          ref={ref}
          label={label}
          style={style}
          renderInput={({ id, style: buttonStyle }) => (
            <Button
              style={buttonStyle}
              id={id}
              onClick={() => setOpen(openPrev => !openPrev)}
            >
              {active ? (
                <>
                  {active.renderStart?.({ style: { paddingRight: "0.5rem" } })}
                  <Value>{active.label}</Value>
                </>
              ) : (
                <Placeholder>{placeholder}</Placeholder>
              )}
            </Button>
          )}
          renderEndIcon={({ style: iconStyle }) =>
            open ? (
              <ChevronIcon style={iconStyle} className="fas fa-chevron-up" />
            ) : (
              <ChevronIcon style={iconStyle} className="fas fa-chevron-down" />
            )
          }
        />
      )}
      renderContent={() => (
        <DropDownSurface>
          {options.map(option => (
            <SelectOption
              key={option.id ?? option.label}
              label={option.label}
              onClick={() => {
                setOpen(false);
                onChange?.(option);
              }}
              active={Boolean(option.active)}
            />
          ))}
          {options.length === 0 && (
            <SelectOptionEmpty
              label={emptyStateMessage ?? "No options available"}
            />
          )}
        </DropDownSurface>
      )}
    />
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

Select.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.arrayOf(optionSchema),
  emptyStateMessage: PropTypes.string,
  darkMode: PropTypes.bool,
};
