// https://docs.google.com/document/d/1vsrmv9ClEcYa25FgPHT5zl9FQW-sbcbOgAxEx3jGh6o/edit?tab=t.eu6mundvmnbh
export const GOOGLE_ADS_TEST_PROPS = {
  nonEmpty: {
    googleAdHead: `
    <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
    <script>
      console.log('googleAdHead');
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
        console.log('googleAdBody');
        googletag.cmd.push(function() { googletag.display('div-gpt-ad-1731610205689-0'); });
      </script>
    </div>
    `,
  },

  empty: {
    googleAdHead: `
    <script async src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"></script>
    <script>
    console.log('googleAdHead');
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
      console.log('googleAdBody');
        googletag.cmd.push(function() { googletag.display('div-gpt-ad-1731610274809-0'); });
      </script>
    </div>
    `,
  },
};
