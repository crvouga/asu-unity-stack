import React from "react";

import { htmlRootDecorator } from "../../../../../shared/components/Layout.js";
export default {
  title: "Design/Colors",
  decorators: [htmlRootDecorator],
  parameters: { controls: { disable: true } },
};

export const ColorPaletteComponent = () => (
  <>
    <div className="container-fluid mt-2">
      <div className="row">
        <div className="col-12 pb-3">
          <h3>
            <span className="highlight-black">Primary Colors</span>
          </h3>
          <h4 className="visually-hidden">Accessibility bypass</h4>
        </div>
        <div className="col-md-3">
          <div className="bg-gold p-3">
            <h5>ASU Gold</h5>
            <p>#FFC627</p>
            <p>rgb(255,198,39)</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-maroon p-3 text-white">
            <h5>ASU Maroon</h5>
            <p>#8C1D40</p>
            <p>rgb(140, 29, 64)</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-white p-3" style={{ border: "1px solid #D0D0D0" }}>
            <h5>White</h5>
            <p>#FFFFFF</p>
            <p>rgb(255, 255, 255)</p>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid mt-2">
      <div className="row">
        <div className="col-12 py-3">
          <h3>
            <span className="highlight-black">Secondary Colors</span>
          </h3>
          <h4 className="visually-hidden">Accessibility bypass</h4>
        </div>
        <div className="col-md-3">
          <div className="bg-success p-3">
            <h5>ASU Green</h5>
            <p>#78BE20</p>
            <p>rgb(120, 190, 32)</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-warning p-3">
            <h5>ASU Orange</h5>
            <p>#FF7F32</p>
            <p>rgb(255, 127, 50)</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-info p-3">
            <h5>ASU Blue</h5>
            <p>#00A3E0</p>
            <p>rgb(0, 163, 224)</p>
          </div>
        </div>
      </div>
    </div>

    <div className="container-fluid mt-2">
      <div className="row">
        <div className="col-12 py-3">
          <h3>
            <span className="highlight-black">Grayscale</span>
          </h3>
          <h4 className="visually-hidden">Accessibility bypass</h4>
        </div>
        <div className="col-md-3">
          <div className="bg-gray-1 p-3">
            <h5>Gray 1</h5>
            <p>#FAFAFA</p>
            <p>rgb(250, 250, 250)</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-gray-2 p-3">
            <h5>Gray 2</h5>
            <p>#E8E8E8</p>
            <p>rgb(232, 232, 232)</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-gray-3 p-3">
            <h5>Gray 3</h5>
            <p>#D0D0D0</p>
            <p>rgb(209, 209, 209)</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-gray-4 p-3">
            <h5>Gray 4</h5>
            <p>#BFBFBF</p>
            <p>rgb(191, 191, 191)</p>
          </div>
        </div>
      </div>
      <div className="row py-md-3">
        <div className="col-md-3">
          <div className="bg-gray-5 p-3 text-light">
            <h5>Gray 5</h5>
            <p>#747474</p>
            <p>rgb(116, 116, 116)</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-gray-6 p-3 text-light">
            <h5>Gray 6</h5>
            <p>#484848</p>
            <p>rgb(72, 72, 72)</p>
          </div>
        </div>
        <div className="col-md-3">
          <div className="bg-gray-7 p-3 text-light">
            <h5 className="">Gray 7</h5>
            <p>#191919</p>
            <p>rgb(25, 25, 25)</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export const CombinationsComponent = () => (
  <div className="container-fluid mt-2">
    <div className="row">
      <div className="col-12 pb-3">
        <h3>
          <span className="highlight-black">
            Background and Foreground Color Combinations
          </span>
        </h3>
      </div>
      <div className="col-sm-6">
        <div className="p-3" style={{ border: "1px solid #d0d0d0" }}>
          <h3>This is a tertiary headline</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
            <a href="#">sed do eiusmod tempor incididunt</a> ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim venia.
          </p>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="bg-gray-1 p-3">
          <h3>This is a tertiary headline</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
            <a href="#">sed do eiusmod tempor incididunt</a> ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim venia.
          </p>
        </div>
      </div>
    </div>

    <div className="row pt-3">
      <div className="col-sm-6">
        <div className="bg-gray-2 p-3">
          <h3>This is a tertiary headline</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
            <a href="#">sed do eiusmod tempor incididunt</a> ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim venia.
          </p>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="bg-gray-7 text-white p-3">
          <h3>This is a tertiary headline</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,{" "}
            <a className="text-gold" href="#">
              sed do eiusmod tempor incididunt
            </a>{" "}
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim venia.
          </p>
        </div>
      </div>
    </div>
  </div>
);
