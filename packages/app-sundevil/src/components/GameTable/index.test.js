// @ts-check
import { act, cleanup, render } from "@testing-library/react";
import React from "react";

import { GameTable } from "./index";

import { Default } from "./index.stories";

const defaultArgs = Default.args;

describe("#Cards Carousel News", () => {
  /** @type {import("@testing-library/react").RenderResult} */
  let component;

  const renderCardsCarouselNews = async props => {
    await act(async () => {
      component = await render(<GameTable {...{ ...props }} />);
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
