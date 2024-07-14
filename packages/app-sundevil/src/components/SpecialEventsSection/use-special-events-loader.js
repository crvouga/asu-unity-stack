// @ts-check
import { useEffect, useState } from "react";

import * as Result from "../../utils/result";
import { useSpecialEventsDataSource } from "./SpecialEventsDataSourceContext";

/**
 *
 * @returns {Result.RemoteResult<string, import("./special-events-data-source/special-events-data-source").FindManyOutput>}
 */
const initState = () => {
  return Result.NotAsked;
};

/**
 * @param {import("./special-events-data-source/special-events-data-source").FindManyInput} input
 */
export const useSpecialEventsLoader = input => {
  const dataSource = useSpecialEventsDataSource();
  const [state, setState] = useState(initState);

  const load = async () => {
    if (state.t === "loading" || state.t === "ok") {
      return;
    }

    setState(Result.Loading);

    const result = await Result.attempt(() => dataSource.findMany(input));

    setState(result);
  };

  useEffect(() => {
    load();
  }, [input]);

  const isLoading = state.t === "loading" || state.t === "not-asked";
  const specialEvents = state.t === "ok" ? state.value.rows : [];

  return {
    isLoading,
    specialEvents,
  };
};
