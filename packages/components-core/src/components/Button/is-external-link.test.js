import { isExternalLink } from "./is-external-link";

describe("isExternalLink", () => {
  test("false", () => {
    expect(isExternalLink("/about/news?newsType=featured")).toBe(false);
  });
  test("true", () => {
    expect(isExternalLink("https://www.youtube.com/user/ASUAthletics")).toBe(
      true
    );
  });
});
