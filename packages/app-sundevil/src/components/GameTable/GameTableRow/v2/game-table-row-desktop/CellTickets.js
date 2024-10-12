/* eslint-disable react/prop-types */
/* eslint-disable react/no-danger */
// @ts-check
import React, { useRef } from "react";

import { Button } from "../../../../../../../components-core/src/components/Button";
import { useElementSetMaxDimensions } from "../../../../../utils/use-element-set-max-dimensions";
import { useId } from "../../../../../utils/use-id";
import { isGameNonTicketed, isGameTicketed } from "../../../../Game/game";
import { Icon } from "../../../../Icon_";
import { INFO_ICON_CLASS_NAME, TICKET_ICON_CLASS_NAME } from "../icon";
import { Cell } from "./shared";

/**
 * @typedef {React.FC<import("../../game-table-row").GameTableRowProps>} Component
 */

/**
 * @type {import("./shared").CellComponent}
 */
export const CellTickets = props => {
  const { game, configCells, configLayout } = props;
  const componentId = useId();

  const ticketCellRef = useRef(null);
  const ticketCellMaxDimensions = useElementSetMaxDimensions({
    elementRef: ticketCellRef,
    elementSetId: "game-table-ticket-cell",
    elementId: componentId,
  });

  const ticketButtonLabel =
    configCells?.cellTicketButton?.label ?? game?.ticketText;

  return (
    configLayout?.includeCellTickets && (
      <Cell
        className="btn-ticket text-center align-middle px-2"
        ref={ticketCellRef}
        style={{ minWidth: ticketCellMaxDimensions.width }}
      >
        {/* @ts-ignore */}
        <Button
          label={ticketButtonLabel}
          renderIcon={() => {
            const iconStyle = {
              paddingRight: "10px",
              textDecoration: "none !important",
            };

            if (game?.buttonIcon) {
              return <Icon icon={game?.buttonIcon} style={iconStyle} />;
            }

            if (game && isGameTicketed(game)) {
              return <i className={TICKET_ICON_CLASS_NAME} style={iconStyle} />;
            }

            if (game && isGameNonTicketed(game)) {
              return <i className={INFO_ICON_CLASS_NAME} style={iconStyle} />;
            }

            return null;
          }}
          href={game?.ticketLink}
          cardTitle={game?.title ?? " "}
          {...configCells?.cellTicketButton?.button}
        />
      </Cell>
    )
  );
};
