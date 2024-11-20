import PropTypes from "prop-types";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { ALL_ID, ALL_LABEL } from "../../select-all-option";
import { trackGAEvent } from "../../track-ga-event";
import { cleanString } from "../../utils/clean-string";
import { ensureArray } from "../../utils/ensure-array";
import { idToLabel } from "../../utils/id-to-label";
import { isEqual } from "../../utils/is-equal";
import { useFocus } from "../../utils/use-focus";
import { CollapseIcon } from "../CollapseIcon/CollapseIcon";
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
  sectionName,
}) => {
  const [open, setOpen] = useState(false);
  const active = options.find(option => option.active);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);
  const focused = useFocus([buttonRef, dropdownRef]);

  useEffect(() => {
    if (!focused) {
      setOpen(false);
    }
  }, [focused]);

  return (
    <DropDown
      open={open}
      onClose={() => setOpen(false)}
      style={style}
      renderReference={({ ref }) => (
        <LabelledInputBase
          darkMode={darkMode}
          focused={focused}
          ref={ref}
          label={label}
          style={{ ...style, cursor: "pointer" }}
          onClick={() => setOpen(openPrev => !openPrev)}
          renderInput={({ id, style: buttonStyle }) => (
            <Button ref={buttonRef} style={buttonStyle} id={id}>
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
          renderEndIcon={({ style: iconStyle }) => (
            <div key={open}>
              <CollapseIcon style={iconStyle} open={open} />
            </div>
          )}
        />
      )}
      renderContent={() => (
        <DropDownSurface ref={dropdownRef}>
          {options.map(option => (
            <SelectOption
              key={option.id ?? option.label}
              label={option.label}
              onClick={() => {
                setOpen(false);
                onChange?.(option);
                trackGAEvent({
                  event: "select",
                  action: "click",
                  name: "onclick",
                  type: `select ${label}`.toLowerCase(),
                  region: "main content",
                  section: sectionName,
                  text: option?.label ?? " ",
                  // component: "dropdown",
                  component: "text",
                });
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

const optionPropTypes = PropTypes.shape({
  id: PropTypes.string,
  label: PropTypes.string,
  active: PropTypes.bool,
  // eslint-disable-next-line react/forbid-prop-types
  payload: PropTypes.any,
  renderStart: PropTypes.func,
});

export const stringsToOptions = strings => {
  return ensureArray(strings).map(str => ({
    id: str,
    label: idToLabel(str) ?? str,
    value: str,
    active: false,
  }));
};

export const includeAllOption = (
  options,
  allId = ALL_ID,
  allLabel = ALL_LABEL
) => {
  const hasAllOption = ensureArray(options).some(option =>
    isEqual(cleanString, option.id, allId)
  );

  if (hasAllOption) {
    return ensureArray(options);
  }

  return [
    {
      id: allId,
      label: allLabel,
      value: allId,
      active: false,
    },
    ...ensureArray(options),
  ];
};

export const includeAllOptionWhen = (
  predicate,
  options,
  allId = ALL_ID,
  allLabel = ALL_LABEL
) => {
  if (predicate) {
    return includeAllOption(ensureArray(options), allId, allLabel);
  }

  return ensureArray(options);
};

Select.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  options: PropTypes.arrayOf(optionPropTypes),
  emptyStateMessage: PropTypes.string,
  darkMode: PropTypes.bool,
  sectionName: PropTypes.string,
};
