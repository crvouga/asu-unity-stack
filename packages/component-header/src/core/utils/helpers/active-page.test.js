import { tryAddActivePage } from "./active-page";

describe("tryAddActivePage", () => {
  let originalLocation;

  beforeAll(() => {
    originalLocation = window.location;
  });

  afterEach(() => {
    // Reset mock after each test
    delete window.location;
    window.location = originalLocation;
  });

  it("should return the same navTree if it is not an array", () => {
    expect(tryAddActivePage(null)).toBe(null);
    expect(tryAddActivePage({})).toEqual({});
  });

  it("should return the same navTree if it is empty", () => {
    expect(tryAddActivePage([])).toEqual([]);
  });

  it("should return the same navTree if selected prop is already present", () => {
    const navTree = [{ href: "/home", selected: true }];
    expect(tryAddActivePage(navTree)).toEqual(navTree);
  });

  it("should return the same navTree if currentPath is undefined", () => {
    delete window.location;
    expect(tryAddActivePage([{ href: "/home" }])).toEqual([{ href: "/home" }]);
  });

  it("should add selected prop to the matching top level item", () => {
    delete window.location;
    window.location = { pathname: "/home", search: "" };
    const navTree = [{ href: "/home" }, { href: "/about" }];
    const expectedTree = [
      { href: "/home", selected: true },
      { href: "/about" },
    ];
    expect(tryAddActivePage(navTree)).toEqual(expectedTree);
  });

  it("should add selected prop to the matching submenu item", () => {
    delete window.location;
    window.location = { pathname: "/services", search: "" };
    const navTree = [
      { href: "/home" },
      {
        href: "/about",
        items: [{ href: "/services" }],
      },
    ];
    const expectedTree = [
      { href: "/home" },
      {
        href: "/about",
        items: [{ href: "/services" }],
        selected: true,
      },
    ];
    expect(tryAddActivePage(navTree)).toEqual(expectedTree);
  });

  it("should return the same navTree if no match is found", () => {
    delete window.location;
    window.location = { pathname: "/unknown", search: "" };
    const navTree = [{ href: "/home" }, { href: "/about" }];
    expect(tryAddActivePage(navTree)).toEqual(navTree);
  });
});
