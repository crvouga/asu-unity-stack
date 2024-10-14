/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React from "react";

import { Button } from "../../../../../../../components-core/src";
import {
  stringToColor,
  stringToSize,
  stringToTarget,
} from "../../../../Button/core-button-props";
import { Icon } from "../../../../Icon_";

/**
 * @typedef {React.FC<import("../../game-table-row").GameTableRowProps>} Component
 */

/**
 * @type {import("./shared").RowComponent}
 */
export const RowButtons = props => {
  const { game, configCells } = props;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "8px",
        padding: "16px 0",
      }}
    >
      {game?.buttons.map(button => {
        const buttonProps = {
          ...configCells?.cellTicketButton?.button,
          color: stringToColor(button.color),
          target: stringToTarget(configCells?.cellTicketButton?.button?.target),
          size: stringToSize(configCells?.cellTicketButton?.button?.size),
          icon: [],
          label: button.label,
        };
        return (
          <Button
            key={button.href}
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
            href={game?.ticketLink}
            cardTitle={game?.title ?? " "}
            {...buttonProps}
          />
        );
      })}
    </div>
  );
};
