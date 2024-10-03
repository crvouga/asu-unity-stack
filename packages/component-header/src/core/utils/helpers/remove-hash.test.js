import { removeHash } from "./remove-hash";

describe("removeHash", () => {
  it("should remove hash from url", () => {
    expect(removeHash("/services#SomeHash")).toBe("/services");
  });

  it("should work without hash", () => {
    expect(removeHash("/services")).toBe("/services");
  });
});
