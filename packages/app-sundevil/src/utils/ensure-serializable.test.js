import { ensureSerializable } from "./ensure-serializable";

describe("ensureSerializable", () => {
  test("removes functions", () => {
    const input = {
      a: 1,
      b: () => {},
      c: {
        d: "test",
        e() {},
      },
    };
    const expected = { a: 1, c: { d: "test" } };
    expect(ensureSerializable(input)).toEqual(expected);
  });

  test("removes symbols", () => {
    const input = {
      a: 1,
      b: Symbol("test"),
      c: {
        d: "test",
        e: Symbol("inner"),
      },
    };
    const expected = { a: 1, c: { d: "test" } };
    expect(ensureSerializable(input)).toEqual(expected);
  });

  test("preserves null and undefined", () => {
    const input = {
      a: null,
      b: undefined,
      c: [null, undefined],
    };
    const expected = {
      a: null,
      c: [null, null], // undefined replaced with null in arrays
    };
    expect(ensureSerializable(input)).toEqual(expected);
  });

  test("handles nested objects", () => {
    const input = {
      a: 1,
      b: {
        c: {
          d: "deep",
          e: Symbol("deep"),
        },
        f: () => {},
      },
    };
    const expected = {
      a: 1,
      b: {
        c: {
          d: "deep",
        },
      },
    };
    expect(ensureSerializable(input)).toEqual(expected);
  });

  test("handles arrays with mixed values", () => {
    const input = [1, "string", null, undefined, () => {}, Symbol("test")];
    const expected = [1, "string", null, null, undefined, undefined]; // undefined replaced with null
    expect(ensureSerializable(input)).toEqual(expected);
  });

  test("removes unserializable properties from objects in arrays", () => {
    const input = [
      {
        a: 1,
        b: Symbol("test"),
        c: () => {},
      },
      {
        d: "test",
        e: null,
      },
    ];
    const expected = [
      {
        a: 1,
      },
      {
        d: "test",
        e: null,
      },
    ];
    expect(ensureSerializable(input)).toEqual(expected);
  });

  test("preserves primitives", () => {
    const input = {
      a: 1,
      b: "string",
      c: true,
      d: null,
      e: undefined,
    };
    const expected = { ...input };
    expect(ensureSerializable(input)).toEqual(expected);
  });

  test("returns primitives directly", () => {
    expect(ensureSerializable(1)).toEqual(1);
    expect(ensureSerializable("string")).toEqual("string");
    expect(ensureSerializable(null)).toEqual(null);
    expect(ensureSerializable(undefined)).toEqual(undefined);
  });

  test("returns empty object for entirely unserializable input", () => {
    const input = {
      a: Symbol("test"),
      b: () => {},
    };
    const expected = {};
    expect(ensureSerializable(input)).toEqual(expected);
  });

  test("handles empty objects and arrays", () => {
    expect(ensureSerializable({})).toEqual({});
    expect(ensureSerializable([])).toEqual([]);
  });

  test("does not modify already serializable input", () => {
    const input = {
      a: 1,
      b: "string",
      c: [1, "string", null, undefined],
    };
    const expected = {
      a: 1,
      b: "string",
      c: [1, "string", null, null], // undefined replaced with null
    };
    expect(ensureSerializable(input)).toEqual(expected);
  });
});
