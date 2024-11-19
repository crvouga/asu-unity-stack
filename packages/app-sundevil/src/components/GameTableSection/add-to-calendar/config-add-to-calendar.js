// @ts-check
// https://www.figma.com/design/PwIiWs2qYfAm73B4n5UTgU/ASU-Athletics?node-id=6146-13841&node-type=frame&t=hwMmzQHF1CbjJnXH-0
import PropTypes from "prop-types";
import { useEffect } from "react";

import { CallbackRegistry } from "../../../utils/callback-registry";
import { ensureSerializable } from "../../../utils/ensure-serializable";
import { useGameDataSource } from "../../Game/GameDataSourceContext";

/**
 * @typedef {{
 * enabled: boolean;
 * label: string;
 * onClick: (payload: unknown) => void;
 * color?: string;
 * fontWeight?: string;
 * callbackRegistry: import("../../../utils/callback-registry").CallbackRegistry;
 * }} ConfigAddToCalendar
 */

/**
 * @type {ConfigAddToCalendar}
 */
export const defaultConfigAddToCalendar = {
  enabled: false,
  label: "Add to calendar",
  onClick: () => {},
  color: "maroon",
  fontWeight: "bold",
  callbackRegistry: new CallbackRegistry(),
};

export const configAddToCalendarPropTypes = PropTypes.shape({
  label: PropTypes.string,
  onClick: PropTypes.func,
});

/**
 * @param {{
 * configAddToCalender: ConfigAddToCalendar;
 * gameDataSourceFindManyInput: import("../../Game/game-data-source/game-data-source").FindManyInput;
 * gameTableForm: import("../GameTableForm/use-game-table-form").GameTableForm;
 * }} input
 */
export const useAddToCalendarCallbackRegistry = ({
  configAddToCalender,
  gameDataSourceFindManyInput,
  gameTableForm,
}) => {
  const gameDataSource = useGameDataSource();
  useEffect(() => {
    if (
      !configAddToCalender ||
      !configAddToCalender.callbackRegistry ||
      !configAddToCalender.callbackRegistry.register ||
      typeof configAddToCalender.callbackRegistry.register !== "function"
    ) {
      return;
    }
    configAddToCalender.callbackRegistry?.register?.(async () => {
      const found = await gameDataSource.findMany({
        ...gameDataSourceFindManyInput,
        limit: Infinity,
        offset: 0,
      });
      const payload = ensureSerializable({
        found,
        games: found.rows,
        gameDataSource,
        gameDataSourceFindManyInput,
        gameTableForm,
      });
      return payload;
    });
  }, [
    configAddToCalender,
    gameDataSource,
    gameDataSourceFindManyInput,
    gameTableForm,
  ]);
};
