import { deepMergeLeft } from "./deep-merge-left";

describe("deepMergeLeft", () => {
  test("merges two objects with target taking precedence", () => {
    const target = { a: 1, b: { c: 2 } };
    const source = { a: 3, b: { d: 4 } };
    const result = deepMergeLeft(target, source);

    expect(result).toEqual({ a: 1, b: { c: 2, d: 4 } });
  });

  test("works when target has additional keys", () => {
    const target = { a: 1, b: { c: 2, e: 5 } };
    const source = { a: 3, b: { d: 4 } };
    const result = deepMergeLeft(target, source);

    expect(result).toEqual({ a: 1, b: { c: 2, d: 4, e: 5 } });
  });

  test("works when source has additional keys", () => {
    const target = { a: 1 };
    const source = { b: { d: 4 }, c: 3 };
    const result = deepMergeLeft(target, source);

    expect(result).toEqual({ a: 1, b: { d: 4 }, c: 3 });
  });

  test("handles nested objects", () => {
    const target = { a: { b: { c: 2 } } };
    const source = { a: { b: { d: 4 }, e: 5 } };
    const result = deepMergeLeft(target, source);

    expect(result).toEqual({ a: { b: { c: 2, d: 4 }, e: 5 } });
  });

  test("returns target when source is not an object", () => {
    const target = { a: 1, b: 2 };
    const source = null;
    const result = deepMergeLeft(target, source);

    expect(result).toEqual(target);
  });

  test("returns target when target is not an object", () => {
    const target = 42;
    const source = { a: 1 };
    const result = deepMergeLeft(target, source);

    expect(result).toEqual(target);
  });

  test("merges arrays as values", () => {
    const target = { a: [1, 2] };
    const source = { a: [3, 4], b: 5 };
    const result = deepMergeLeft(target, source);

    expect(result).toEqual({ a: [1, 2], b: 5 });
  });

  test("works with empty objects", () => {
    const target = {};
    const source = { a: 1 };
    const result = deepMergeLeft(target, source);

    expect(result).toEqual({ a: 1 });
  });

  test("preserves source structure when target is empty", () => {
    const target = {};
    const source = { a: { b: { c: 2 } } };
    const result = deepMergeLeft(target, source);

    expect(result).toEqual(source);
  });

  test("does not mutate source or target", () => {
    const target = { a: 1, b: { c: 2 } };
    const source = { a: 3, b: { d: 4 } };

    const targetCopy = JSON.parse(JSON.stringify(target));
    const sourceCopy = JSON.parse(JSON.stringify(source));

    deepMergeLeft(target, source);

    expect(target).toEqual(targetCopy);
    expect(source).toEqual(sourceCopy);
  });
});
