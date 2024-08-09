import { toIconProps } from "./Icon";

describe("icon", () => {
  test("bugfix", () => {
    const output = toIconProps({
      icon_name: "",
      src: "/sites/default/files/2024-08/Unit%20or%20subdomain%20name_0.svg",
      style: "",
    });
    expect(output?.type).toBe("image");
  });
});
