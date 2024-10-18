import React, { useEffect } from "react";

export const AdUnit = () => {
  useEffect(() => {
    if (window && "googletag" in window && window.googletag.cmd) {
      window.googletag.cmd.push(() => {
        window.googletag.display("div-gpt-ad-1729113360808-0");
      });
      window.googletag.cmd.push(() => {
        window.googletag.display("div-gpt-ad-1729113295920-0");
      });
    }
  }, []);

  return (
    <div className="text-center">
      <div className="d-lg-block d-md-none d-none">
        {/* <!-- /23203588234/FY25_SDA_all_ads_970x66_universal_nav --> */}
        <div
          // style="min-height:66px;min-width:970px;"
          style={{
            minHeight: "66px",
            minWidth: "970px",
          }}
          id="div-gpt-ad-1729113360808-0"
        >
          {/* <script>
                googletag.cmd.push(function() { googletag.display("div-gpt-ad-1729113360808-0"); });
              </script> */}
        </div>
      </div>
      <div className="d-lg-none d-md-block d-block">
        {/* <!-- /23203588234/FY25_SDA_all_ads_320x50_universal-nav --> */}
        <div
          // style="min-height:50px;min-width:300px;"
          style={{
            minHeight: "50px",
            minWidth: "300px",
          }}
          id="div-gpt-ad-1729113295920-0"
        >
          {/* <script>
                googletag.cmd.push(function() { googletag.display("div-gpt-ad-1729113295920-0"); });
              </script> */}
        </div>
      </div>
    </div>
  );
};
