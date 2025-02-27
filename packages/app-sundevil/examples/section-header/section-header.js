/* eslint-disable no-console */
/* eslint-disable no-undef */
/**
 * @type {import("./props")}
 */
const baseProps = {
  title: "Upcoming Games",
  subtitle:
    "From the fall football season to the Maroon and Gold Spring game and at Camp Tontozona,\n" +
    "        there are football games and events throughout the year.",
  subtitleFontWeight: "bold",
  subtitleLinks: [
    {
      label: "See Past Game Scores",
      href: "#",
      fontWeight: "bold",
    },
  ],
  sponsorBlock: {
    text: "Presented By",
    name: "Ford",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg",
    url: "https://www.ford.com/",
  },
  tabs: [
    { label: "All Games", active: true },
    { label: "Home", active: false },
    { label: "Away", active: false },
  ],
  social: [
    { label: "Facebook", url: "https://www.facebook.com" },
    { label: "Twitter", url: "https://www.twitter.com" },
    { label: "Instagram", url: "https://www.instagram.com" },
  ],
  onTabItemClick: tabId => {
    console.log(tabId);
  },
};

initSectionHeader({
  targetSelector: "#variant-static",
  props: {
    ...baseProps,
  },
});

initSectionHeader({
  targetSelector: "#variant-google-ads",
  props: {
    ...baseProps,
    sponsorBlock: {
      text: "Presented By: ",
      googleAdHead: `
<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
<script>
window.googletag = window.googletag || {cmd: []};
googletag.cmd.push(function() {
  googletag.defineSlot('/23203588234/LSQA', [135, 38], 'div-gpt-ad-1731610205689-0').addService(googletag.pubads());
  googletag.pubads().enableSingleRequest();
  googletag.pubads().collapseEmptyDivs();
  googletag.enableServices();
});
</script>
`,
      googleAdBody: `
<!-- /23203588234/LSQA -->
<div id='div-gpt-ad-1731610205689-0' style='min-width: 135px; min-height: 38px;'>
<script>
  googletag.cmd.push(function() { googletag.display('div-gpt-ad-1731610205689-0'); });
</script>
</div>
`,
    },
  },
});
initSectionHeader({
  targetSelector: "#variant-google-ads-empty",
  props: {
    ...baseProps,
    sponsorBlock: {
      text: "Presented By: ",
      googleAdHead: `
<script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
<script>
window.googletag = window.googletag || {cmd: []};
googletag.cmd.push(function() {
  googletag.defineSlot('/23203588234/SLQA-blank', [135, 38], 'div-gpt-ad-1731610274809-0').addService(googletag.pubads());
  googletag.pubads().enableSingleRequest();
  googletag.pubads().collapseEmptyDivs();
  googletag.enableServices();
});
</script>
`,
      googleAdBody: `
<!-- /23203588234/SLQA-blank -->
<div id='div-gpt-ad-1731610274809-0' style='min-width: 135px; min-height: 38px;'>
<script>
  googletag.cmd.push(function() { googletag.display('div-gpt-ad-1731610274809-0'); });
</script>
</div>
`,
    },
  },
});
