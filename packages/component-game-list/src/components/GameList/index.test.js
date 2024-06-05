// @ts-check
import { render, cleanup, act } from "@testing-library/react";
import React from "react";

import { GameList } from "./index";

import { Default } from "./index.stories";

const defaultArgs = Default.args;

describe("#Cards Carousel News", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  const renderCardsCarouselNews = async props => {
    await act(async () => {
      component = await render(<GameList {...{ ...props }} />);
    });
  };

  describe("Default", () => {
    beforeEach(async () => {
      await renderCardsCarouselNews(defaultArgs);
    });
    afterEach(cleanup);

    it("should define the component", () => {
      expect(component).toBeDefined();
    });
  });
});
