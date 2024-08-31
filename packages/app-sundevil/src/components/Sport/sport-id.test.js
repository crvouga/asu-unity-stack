import { SportGender, stringToSportGender } from "./sport-gender";
import { stringToSportId } from "./sport-id";

describe("sportId", () => {
  test("stringToSportId", () => {
    expect(stringToSportId("__football__")).toBe("football");
    expect(stringToSportId("  M. Basketball ")).toBe("m-basketball");
    expect(stringToSportId("W.    Basketball  ")).toBe("w-basketball");
    expect(stringToSportId("  Lacrosse")).toBe("lacrosse");
    expect(stringToSportId("m.  Lacrosse")).toBe("m-lacrosse");

    expect(stringToSportId("W. Lacrosse")).toBe("w-lacrosse");
    expect(stringToSportId("")).toBe(null);
    expect(stringToSportId(null)).toBe(null);
    expect(stringToSportId("mens football")).toBe("m-football");
    expect(stringToSportId("women's football")).toBe("w-football");
    expect(stringToSportId("men's football")).toBe("m-football");
    expect(stringToSportId("lacrosse")).toBe("lacrosse");
    expect(stringToSportId(123)).toBe(null);
  });

  test("stringToSportId for URL structures", () => {
    // Events calendar
    expect(
      stringToSportId("athletics.edu/about/events-calendar?footballview")
    ).toBe("football");
    expect(
      stringToSportId("sports.uni.edu/about/events-calendar?m-basketballview")
    ).toBe("m-basketball");

    // News
    expect(
      stringToSportId("collegeteams.com/about/news?w-volleyballview")
    ).toBe("w-volleyball");
    expect(
      stringToSportId("university-sports.org/about/news?lacrosseview")
    ).toBe("lacrosse");

    // Tickets
    expect(stringToSportId("tickets.school.edu/tickets?baseballview")).toBe(
      "baseball"
    );
    expect(stringToSportId("sporttickets.net/tickets?w-soccerview")).toBe(
      "w-soccer"
    );

    // Schedule
    expect(
      stringToSportId("athletics.college.edu/sports/womens/basketball")
    ).toBe("w-basketball");
    expect(stringToSportId("uni-sports.com/sports/mens/tennis")).toBe(
      "m-tennis"
    );

    // Edge cases
    expect(stringToSportId("athletics.edu/about/events-calendar?view")).toBe(
      null
    );
    expect(stringToSportId("collegeteams.com/about/news")).toBe(null);
    expect(stringToSportId("tickets.school.edu/tickets")).toBe(null);
    expect(stringToSportId("uni-sports.com/sports/")).toBe(null);

    // Mixed case
    expect(
      stringToSportId(
        "Sports.University.edu/about/events-calendar?WomenS-GolfView"
      )
    ).toBe("w-golf");
    expect(stringToSportId("ATHLETICS.EDU/sports/Mens/Swimming")).toBe(
      "m-swimming"
    );
  });

  test("stringToSportId for new URLs", () => {
    expect(stringToSportId("sundevils.com/about/news?sport=football")).toBe(
      "football"
    );
    expect(
      stringToSportId("sundevils.com/about/events-calendar?sport=m-basketball")
    ).toBe("m-basketball");
    expect(stringToSportId("sundevils.com/tickets?sport=w-basketball")).toBe(
      "w-basketball"
    );
    expect(stringToSportId("sundevils.com/sports/womens/basketball")).toBe(
      "w-basketball"
    );
    expect(stringToSportId("sundevils.com/sports/mens/football")).toBe(
      "m-football"
    );
    expect(stringToSportId("sundevils.com/about/news?sport=w-lacrosse")).toBe(
      "w-lacrosse"
    );
    expect(
      stringToSportId("sundevils.com/about/events-calendar?sport=mens-soccer")
    ).toBe("m-soccer");
    expect(
      stringToSportId("sundevils.com/tickets?sport=womens-volleyball")
    ).toBe("w-volleyball");
    expect(stringToSportId("sundevils.com/sports/mens/tennis")).toBe(
      "m-tennis"
    );
    expect(stringToSportId("sundevils.com/sports/womens/golf")).toBe("w-golf");

    // Edge cases
    expect(stringToSportId("sundevils.com/about/news")).toBe(null);
    expect(stringToSportId("https://sundevils.com/about/news?sport=")).toBe(
      null
    );
    expect(stringToSportId("sundevils.com/sports/")).toBe(null);

    // Test that the function is case-insensitive
    expect(stringToSportId("sundevils.com/sports/Mens/football")).toBe(
      "m-football"
    );

    expect(stringToSportId("sundevils.com/sports/WOMENS/football")).toBe(
      "w-football"
    );
  });

  test("stringToSportId additional edge cases", () => {
    // URLs with multiple query parameters
    expect(
      stringToSportId("example.com/page?id=123&sport=tennis&date=2023")
    ).toBe("tennis");

    // URLs with fragments
    expect(stringToSportId("example.com/sports/mens/soccer#schedule")).toBe(
      "m-soccer"
    );

    // URLs with encoded characters
    expect(
      stringToSportId("example.com/sports?sport=track%20and%20field")
    ).toBe("track-and-field");

    // Malformed URLs
    expect(stringToSportId("http:////example.com/sports/womens/golf")).toBe(
      "w-golf"
    );

    // URLs with sport names containing numbers
    expect(stringToSportId("example.com/sports?sport=5k-run")).toBe("5k-run");

    // URLs with unusual capitalization
    expect(stringToSportId("example.com/sports/mEnS/bAsKeTbAlL")).toBe(
      "m-basketball"
    );

    // Sport names with apostrophes or other special characters
    expect(
      stringToSportId("example.com/sports?sport=women's-beach-volleyball")
    ).toBe("w-beach-volleyball");

    // URLs with empty segments
    expect(stringToSportId("example.com//sports///mens//swimming")).toBe(
      "m-swimming"
    );

    // Very long sport names
    expect(
      stringToSportId(
        "example.com/sports?sport=ultramarathon-long-distance-running"
      )
    ).toBe("ultramarathon-long-distance-running");

    // URLs with irrelevant query parameters
    expect(
      stringToSportId(
        "example.com/sports?id=123&category=outdoor&sport=cycling&date=2023"
      )
    ).toBe("cycling");

    // Sport names that are substrings of others
    expect(stringToSportId("example.com/sports?sport=handball")).toBe(
      "handball"
    );
    expect(stringToSportId("example.com/sports?sport=beach-handball")).toBe(
      "beach-handball"
    );
  });

  test("with sub domain", () => {
    // URLs with subdomains
    expect(stringToSportId("sports.example.com/mens/basketball")).toBe(
      "m-basketball"
    );
  });

  test("stringToSportId ip address", () => {
    // URLs with IP addresses instead of domain names
    expect(stringToSportId("http://192.168.1.1/sports/womens/volleyball")).toBe(
      "w-volleyball"
    );
  });

  test("stringToSportId additional missing cases", () => {
    // Sport names with hyphens or underscores
    expect(stringToSportId("example.com/sports?sport=track-and-field")).toBe(
      "track-and-field"
    );
    expect(stringToSportId("example.com/sports?sport=cross_country")).toBe(
      "cross-country"
    );

    // Sport names in different languages or with non-ASCII characters
    expect(stringToSportId("example.com/sports?sport=fútbol")).toBe("futbol");

    // URLs with port numbers
    expect(stringToSportId("http://example.com:8080/sports/football")).toBe(
      "football"
    );

    // URLs using different protocols
    expect(stringToSportId("ftp://example.com/sports/tennis")).toBe("tennis");

    // Extremely long URL
    const longUrl = `https://example.com/sports?${"a".repeat(
      2000
    )}&sport=marathon`;
    expect(stringToSportId(longUrl)).toBe("marathon");

    // Completely unrelated strings
    // expect(stringToSportId("This is not a sport or URL")).toBe(null);

    // URLs from unrelated domains
    // expect(stringToSportId("https://www.google.com/search?q=sports")).toBe(
    //   null
    // );

    // Malformed JSON or XML
    // expect(stringToSportId('{"sport": "basketball"}')).toBe(null);
    // expect(stringToSportId("<sport>soccer</sport>")).toBe(null);

    // Mixed case sport names with numbers and special characters
    expect(stringToSportId("example.com/sports?sport=3x3-BasKeTbaLl")).toBe(
      "3x3-basketball"
    );

    // Sport name with multiple hyphens and spaces
    expect(stringToSportId("example.com/sports?sport=table - tennis")).toBe(
      "table-tennis"
    );
  });

  test("?sport={Sport name Taxonomy term}view shape", () => {
    expect(
      stringToSportId("athletics.edu/about/events-calendar?sport=footballview")
    ).toBe("football");
    expect(
      stringToSportId(
        "sports.uni.edu/about/events-calendar?sport=m-basketballview"
      )
    ).toBe("m-basketball");
    expect(
      stringToSportId("collegeteams.com/about/news?sport=w-volleyballview")
    ).toBe("w-volleyball");
    expect(
      stringToSportId("university-sports.org/about/news?sport=lacrosseview")
    ).toBe("lacrosse");
    expect(
      stringToSportId("tickets.school.edu/tickets?sport=baseballview")
    ).toBe("baseball");
    expect(stringToSportId("sporttickets.net/tickets?sport=w-soccerview")).toBe(
      "w-soccer"
    );
  });

  test("sundevils.com/about/events-calendar?sport={Sport name Taxonomy term}view", () => {
    expect(
      stringToSportId("sundevils.com/about/events-calendar?sport=footballview")
    ).toBe("football");
    expect(
      stringToSportId(
        "sundevils.com/about/events-calendar?sport=m-basketballview"
      )
    ).toBe("m-basketball");
    expect(
      stringToSportId(
        "sundevils.com/about/events-calendar?sport=w-volleyballview"
      )
    ).toBe("w-volleyball");
    expect(
      stringToSportId("sundevils.com/about/events-calendar?sport=lacrosseview")
    ).toBe("lacrosse");
    expect(
      stringToSportId("sundevils.com/about/events-calendar?sport=baseballview")
    ).toBe("baseball");
    expect(
      stringToSportId("sundevils.com/about/events-calendar?sport=w-soccerview")
    ).toBe("w-soccer");
  });

  test("Tickets (lists only events that are games ): sundevils.com/tickets?sport={Sport name Taxonomy term}view", () => {
    expect(stringToSportId("sundevils.com/tickets?sport=footballview")).toBe(
      "football"
    );
    expect(
      stringToSportId("sundevils.com/tickets?sport=m-basketballview")
    ).toBe("m-basketball");
    expect(
      stringToSportId("sundevils.com/tickets?sport=w-volleyballview")
    ).toBe("w-volleyball");
    expect(stringToSportId("sundevils.com/tickets?sport=lacrosseview")).toBe(
      "lacrosse"
    );
    expect(stringToSportId("sundevils.com/tickets?sport=baseballview")).toBe(
      "baseball"
    );
    expect(stringToSportId("sundevils.com/tickets?sport=w-soccerview")).toBe(
      "w-soccer"
    );
  });

  test("Schedule- url : sundevils.com/sports/womens/basketball", () => {
    expect(stringToSportId("sundevils.com/sports/womens/basketball")).toBe(
      "w-basketball"
    );
    expect(stringToSportId("sundevils.com/sports/mens/football")).toBe(
      "m-football"
    );
    expect(stringToSportId("sundevils.com/sports/womens/lacrosse")).toBe(
      "w-lacrosse"
    );
    expect(stringToSportId("sundevils.com/sports/mens-soccer")).toBe(
      "m-soccer"
    );
    expect(stringToSportId("sundevils.com/sports/womens-volleyball")).toBe(
      "w-volleyball"
    );
    expect(stringToSportId("sundevils.com/sports/mens/tennis")).toBe(
      "m-tennis"
    );
    expect(stringToSportId("sundevils.com/sports/womens/golf")).toBe("w-golf");
  });

  test("real data cross country", () => {
    expect(
      stringToSportId("https://dev-web-sda.ws.asu.edu/sports/cross-country")
    ).toBe("cross-country");
  });

  test("singular woman", () => {
    expect(
      stringToSportId("https://dev-web-sda.ws.asu.edu?sport=Woman-Basketball")
    ).toBe("w-basketball");
  });

  test("camelCase WomenBasketball", () => {
    expect(
      stringToSportId("https://dev-web-sda.ws.asu.edu?sport=WomenBasketball")
    ).toBe("w-basketball");
  });

  test("camelCase MenBasketball", () => {
    expect(
      stringToSportId("https://dev-web-sda.ws.asu.edu?sport=MenBasketball")
    ).toBe("m-basketball");
  });

  test("camelCase in path MenBasketball", () => {
    expect(
      stringToSportId("https://dev-web-sda.ws.asu.edu/sports/MenBasketball")
    ).toBe("m-basketball");
  });

  test("camelCase in path WomenBasketball", () => {
    expect(
      stringToSportId("https://dev-web-sda.ws.asu.edu/sports/WomenBasketball")
    ).toBe("w-basketball");
  });

  test("Menbasketball", () => {
    expect(
      stringToSportId("https://dev-web-sda.ws.asu.edu/sports/Menbasketball")
    ).toBe("m-basketball");
  });

  test("MaleBasketball", () => {
    expect(
      stringToSportId("https://dev-web-sda.ws.asu.edu/sports/MaleBasketball")
    ).toBe("m-basketball");
  });

  test("femaleBasketball", () => {
    expect(stringToSportId("femaleBasketball")).toBe("w-basketball");
  });

  test("real data mens ice hockey", () => {
    expect(stringToSportId("/about/news?sport=mens-ice-hockeyview")).toBe(
      "m-ice-hockey"
    );
  });

  test("wrestling", () => {
    expect(stringToSportId("wrestling")).toBe("wrestling");

    expect(stringToSportId("men's wrestling")).toBe("m-wrestling");

    expect(stringToSportId("women's wrestling")).toBe("w-wrestling");
  });

  test("real world use case -- volleyball", () => {
    const url = "https://sundevils.com/sports/womens/volleyball";
    const sportTag = "Volleyball";

    const sportId = stringToSportId(sportTag, stringToSportGender(url));
    const expected = "w-volleyball";
    expect(sportId).toBe(expected);
  });

  test("real world use case -- triathlon", () => {
    const url = "https://sundevils.com/sports/womens/triathlon";
    const sportTag = "Triathlon";

    const sportId = stringToSportId(sportTag, stringToSportGender(url));
    const expected = "w-triathlon";
    expect(sportId).toBe(expected);
  });

  test("real world use case -- gender neutral triathlon", () => {
    const url = "https://sundevils.com/sports/triathlon";
    const sportTag = "Triathlon";

    const sportId = stringToSportId(sportTag, stringToSportGender(url));
    const expected = "triathlon";
    expect(sportId).toBe(expected);
  });

  test("ignore fallback gender if gender is present in string", () => {
    expect(stringToSportId("womens basketball", SportGender.MEN)).toBe(
      "w-basketball"
    );
    expect(stringToSportId("mens basketball", SportGender.WOMEN)).toBe(
      "m-basketball"
    );
  });

  test("men and women gender should be excluded", () => {
    expect(stringToSportId("basketball", SportGender.MEN_AND_WOMEN)).toBe(
      "basketball"
    );
  });

  test("basketball from url", () => {
    const sportTag = "basketball";
    const url = "https://sundevils.com/sports/mens/basketball";
    const actual = stringToSportId(sportTag, stringToSportGender(url));
    const expected = "m-basketball";
    expect(actual).toBe(expected);
  });

  test("wrestling from url", () => {
    const sportTag = "wrestling";
    const url = "https://sundevils.com/sports/mens/wrestling";
    const actual = stringToSportId(sportTag, stringToSportGender(url));
    const expected = "m-wrestling";
    expect(actual).toBe(expected);
  });

  test("sport gender mens", () => {
    const sportTag = "M. Basketball";
    const url = "https://sundevils.com/sports/mens/basketball";
    const actual = stringToSportId(sportTag, stringToSportGender(url));
    const expected = "m-basketball";
    expect(actual).toBe(expected);
  });

  test("sport gender womens", () => {
    const sportTag = "W. Basketball";
    const url = "https://sundevils.com/sports/womens/basketball";
    const actual = stringToSportId(sportTag, stringToSportGender(url));
    const expected = "w-basketball";
    expect(actual).toBe(expected);
  });

  test("sport gender  ignore mens fallback", () => {
    const sportTag = "W. Basketball";
    const url = "https://sundevils.com/sports/mens/basketball";
    const actual = stringToSportId(sportTag, stringToSportGender(url));
    const expected = "w-basketball";
    expect(actual).toBe(expected);
  });

  test("sport gender ignore womens fallback", () => {
    const sportTag = "M. Basketball";
    const url = "https://sundevils.com/sports/womens/basketball";
    const actual = stringToSportId(sportTag, stringToSportGender(url));
    const expected = "m-basketball";
    expect(actual).toBe(expected);
  });
});
