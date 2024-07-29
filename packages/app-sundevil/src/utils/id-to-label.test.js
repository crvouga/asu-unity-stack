import { idToLabel } from "./id-to-label";

describe("idToLabel", () => {
  test("simple id", () => {
    expect(idToLabel("test")).toBe("Test");
  });

  test("with separator _", () => {
    expect(idToLabel("test_test")).toBe("Test test");
  });

  test("with separator -", () => {
    expect(idToLabel("test_test")).toBe("Test test");
  });

  test("with separator .", () => {
    expect(idToLabel("test.test")).toBe("Test test");
  });

  test("with separator /", () => {
    expect(idToLabel("test/test")).toBe("Test test");
  });

  test("remove duplicate separators", () => {
    expect(idToLabel("test__test")).toBe("Test test");
  });

  test("single character", () => {
    expect(idToLabel("t")).toBe("T");
  });

  test("bad input undefined", () => {
    expect(idToLabel(undefined)).toBe("");
  });

  test("bad input null", () => {
    expect(idToLabel(null)).toBe("");
  });
});
