/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React, { useRef } from "react";

import { Button } from "../../../../../../../components-core/src/components/Button";
import { useElementSetMaxDimensions } from "../../../../../utils/use-element-set-max-dimensions";
import { useId } from "../../../../../utils/use-id";
import {
  stringToColor,
  stringToSize,
  stringToTarget,
} from "../../../../Button/core-button-props";
import { Icon } from "../../../../Icon_";
import { Cell } from "./shared";

/**
 * @typedef {React.FC<import("../../game-table-row").GameTableRowProps>} Component
 */

/**
 * @type {import("./shared").CellComponent}
 */
export const CellButtons = props => {
  const { game, configCells, configLayout } = props;
  const componentId = useId();

  const ticketCellRef = useRef(null);
  const ticketCellMaxDimensions = useElementSetMaxDimensions({
    elementRef: ticketCellRef,
    elementSetId: "game-table-ticket-cell",
    elementId: componentId,
  });

  return (
    configLayout?.includeCellTickets && (
      <Cell
        className="btn-ticket text-center align-middle px-2"
        ref={ticketCellRef}
        style={{
          minWidth: ticketCellMaxDimensions.width,
          flexShrink: 0,
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {game?.buttons?.map(button => {
          const buttonProps = {
            ...button,
            color: stringToColor(button.color),
            target: stringToTarget(
              configCells?.cellTicketButton?.button?.target
            ),
            size: stringToSize(configCells?.cellTicketButton?.button?.size),
            icon: [],
            label: button.label,
            onClick: button.onClick,
            cardTitle: game?.title ?? " ",
          };
          return (
            <Button
              key={button.href ?? button.label}
              renderIcon={() => {
                return (
                  <Icon
                    icon={button.startIcon}
                    style={{
                      paddingRight: "4px",
                      textDecoration: "none !important",
                    }}
                  />
                );
              }}
              {...buttonProps}
            />
          );
        })}
      </Cell>
    )
  );
};
