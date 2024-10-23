import { matchSort } from "./match-sort";

describe("matchSort", () => {
  const items = [
    { name: "Apple" },
    { name: "Banana" },
    { name: "Apricot" },
    { name: "Avocado" },
    { name: "Blackberry" },
  ];

  const toText = item => item.name;

  test("should return all items if searchQuery is empty", () => {
    const result = matchSort({ items, searchQuery: "", toText });
    expect(result).toEqual(items);
  });

  test("should filter and sort items based on searchQuery", () => {
    const result = matchSort({ items, searchQuery: "Ap", toText });
    expect(result).toEqual([
      { name: "Apple" },
      { name: "Apricot" },
      // { name: "Avocado" },
    ]);
  });

  test("should sort by match position", () => {
    const result = matchSort({ items, searchQuery: "B", toText });
    expect(result).toEqual([{ name: "Banana" }, { name: "Blackberry" }]);
  });

  test("should handle case insensitivity", () => {
    const result = matchSort({ items, searchQuery: "a", toText });
    expect(result).toEqual([
      { name: "Apple" },
      { name: "Apricot" },
      { name: "Avocado" },
      { name: "Banana" },
      { name: "Blackberry" },
    ]);
  });

  test("should return an empty array when no matches are found", () => {
    const result = matchSort({ items, searchQuery: "Z", toText });
    expect(result).toEqual([]);
  });

  test("should work with an empty array", () => {
    const result = matchSort({ items: [], searchQuery: "A", toText });
    expect(result).toEqual([]);
  });

  test("it should work with an empty search query", () => {
    const result = matchSort({ items, searchQuery: "", toText });
    expect(result).toEqual(items);
  });

  test("should work substring matches", () => {
    const result = matchSort({ items, searchQuery: "ck", toText });
    expect(result).toEqual([{ name: "Blackberry" }]);
  });

  test("should work with a single item", () => {
    const result = matchSort({
      items: [{ name: "Apple" }],
      searchQuery: "A",
      toText,
    });
    expect(result).toEqual([{ name: "Apple" }]);
  });
});
