import { SportGender, stringToSportGender } from "./sport-gender";

describe("stringToSportGender", () => {
  test("men", () => {
    expect(stringToSportGender("men")).toBe(SportGender.MEN);
  });

  test("women", () => {
    expect(stringToSportGender("women")).toBe(SportGender.WOMEN);
  });

  test("man and woman", () => {
    expect(stringToSportGender("man and woman")).toBe(
      SportGender.MEN_AND_WOMEN
    );
  });

  test("mixed", () => {
    expect(stringToSportGender("mixed")).toBe(SportGender.MEN_AND_WOMEN);
  });

  test("MEN", () => {
    expect(stringToSportGender("MEN")).toBe(SportGender.MEN);
  });

  test("man", () => {
    expect(stringToSportGender("man")).toBe(SportGender.MEN);
  });

  test("woman", () => {
    expect(stringToSportGender("woman")).toBe(SportGender.WOMEN);
  });

  test("bad input", () => {
    expect(stringToSportGender("bad input")).toBe(SportGender.MEN_AND_WOMEN);
  });

  test("bad input null", () => {
    expect(stringToSportGender(null)).toBe(SportGender.MEN_AND_WOMEN);
  });

  test("w", () => {
    expect(stringToSportGender("w")).toBe(SportGender.WOMEN);
  });

  test("m", () => {
    expect(stringToSportGender("m")).toBe(SportGender.MEN);
  });

  test("bad input undefined", () => {
    expect(stringToSportGender(undefined)).toBe(SportGender.MEN_AND_WOMEN);
  });

  test("men_and_women", () => {
    expect(stringToSportGender("men_and_women")).toBe(
      SportGender.MEN_AND_WOMEN
    );
  });

  test("men-and-women", () => {
    expect(stringToSportGender("men-and-women")).toBe(
      SportGender.MEN_AND_WOMEN
    );
  });

  test("men-women", () => {
    expect(stringToSportGender("men-women")).toBe(SportGender.MEN_AND_WOMEN);
  });

  test("women-men", () => {
    expect(stringToSportGender("women-men")).toBe(SportGender.MEN_AND_WOMEN);
  });
});
