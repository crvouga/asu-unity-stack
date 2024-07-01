// @ts-check

/**
 * @typedef {{t: 'not-asked'}} NotAsked
 */

/**
 * @typedef {{t: 'loading'}} Loading
 */

/**
 * @template TValue
 * @typedef {{ t: "ok", value: TValue }} Ok
 */

/**
 * @template TError
 * @typedef {{ t: "error", error: TError }} Err
 */

/**
 * @template TError
 * @template TData
 * @typedef {Ok<TData> | Err<TError>} Result
 */

/**
 * @template TError
 * @template TData
 * @typedef {Ok<TData> | Err<TError> | Loading | NotAsked} RemoteResult
 */

/**
 * Creates a successful result.
 * @template TValue
 * @param {TValue} value
 * @returns {Ok<TValue>}
 */
export const Ok = value => {
  return { t: "ok", value };
};

/**
 * Creates an error result.
 * @template TError
 * @param {TError} error
 * @returns {Err<TError>}
 */
export const Err = error => {
  return { t: "error", error };
};

/**
 * @type {NotAsked}
 */
export const NotAsked = { t: "not-asked" };

/**
 * @type {Loading}
 */
export const Loading = { t: "loading" };
