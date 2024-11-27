/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-undef */

const VARIANT = {
  HEADER_SPONSOR: "HEADER_SPONSOR",
  HEADER_DROPDOWN_FOOTER: "HEADER_DROPDOWN_FOOTER",
  LINKS_TAB_BAR: "LINKS_TAB_BAR",
  LINKS_TAB_BAR_STICKY: "LINKS_TAB_BAR_STICKY",
  SECTION_HEADER: "SECTION_HEADER",
};

function initExample({ variant = VARIANT.SECTION_HEADER } = {}) {
  console.log("initExample", variant);
  // https://docs.google.com/document/d/1vsrmv9ClEcYa25FgPHT5zl9FQW-sbcbOgAxEx3jGh6o/edit?tab=t.eu6mundvmnbh
  const GOOGLE_ADS_TEST_PROPS = {
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

  const STICKY_PORTAL_ENTRANCE_ID = "sticky-portal-entrance";
  const HEADER_PROPS = {
    baseUrl: "https://web-sda.ddev.site:8443/",
    title: "Sun Devils",
    parentOrg: "",
    parentOrgUrl: "",
    expandOnHover: false,
    stickyPortalEntranceId: STICKY_PORTAL_ENTRANCE_ID,
    loginLink: "/caslogin",
    logoutLink: "/caslogout",
    loggedIn: true,
    userName: "You are logged in",
    isSponsor: true,
    sponsorLogo: {
      brandLink: "https://upload.wikimedia.org/",
      src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Adidas_2022_logo.svg",
      alt: "Test",
      mobileSrc:
        "https://upload.wikimedia.org/wikipedia/commons/1/1b/Adidas_2022_logo.svg",

      ...(variant === VARIANT.HEADER_SPONSOR
        ? {
            // NEW PROP,
            googleAdHead: GOOGLE_ADS_TEST_PROPS.nonEmpty.googleAdHead,
            // NEW PROP
            googleAdBody: GOOGLE_ADS_TEST_PROPS.nonEmpty.googleAdBody,
          }
        : {}),
    },
    logo: {
      alt: "Arizona State University",
      title: "ASU home page",
      brandLink: "https://www.asu.edu",
      src: "https://thesundevils.com/images/responsive/primary_logo.svg",
      mobileSrc: "https://thesundevils.com/images/responsive/primary_logo.svg",
      width: "107",
      height: "74",
      mobileWidth: "67",
      mobileHeight: "47",
    },
    searchUrl: "https://search.asu.edu/search",
    site: "web-sda.ddev.site",
    officialSiteHref: "#",
    officialSite: {
      href: "#",
      hrefStyle: {
        // color: "black",
      },
      hrefText: "Arizona State University",
      text: "The official athletics site of",
    },
    mobile: {
      title: "Sun Devil Athletics",
    },
    universalNavbar: {
      hideMobile: false,
    },
    navTree: [
      {
        href: "/",
        text: "Home",
        icon: "",
        items: "",
        buttons: "",
        extra_section: "",
        is_sports_type: false,
        mobile: {
          hide: false,
        },
        type: "icon-home",
        class: "home",
      },

      {
        href: "/about",
        text: "About",
        items: [
          [
            {
              href: "/about/about-sun-devil-athletics",
              text: "About Sun Devil Athletics",

              type: null,
              extra_links: "",
            },
            {
              href: "/about/play-for-asu",
              text: "Play for ASU",

              type: null,
              extra_links: "",
            },
            {
              href: "/about/facilities-and-venues",
              text: "Facilities and Venues",

              type: null,
              extra_links: "",
            },
            {
              href: "/about/media-relations",
              text: "Media Relations",

              type: null,
              extra_links: "",
            },
            {
              href: "/about/staff-directory",
              text: "Staff Directory",

              type: null,
              extra_links: "",
            },
            {
              href: "/about/jobs-and-internships",
              text: "Jobs and Internships",

              type: null,
              extra_links: "",
            },
            {
              href: "/about/donation-requests",
              text: "Donation Requests",

              type: null,
              extra_links: "",
            },
            {
              href: "/about/sustainability-efforts",
              text: "Sustainability Efforts",

              type: null,
              extra_links: "",
            },
            {
              href: "/about/big-xii-conference",
              text: "Big XII Conference",

              type: null,
              extra_links: "",
            },
            {
              href: "/about/contact-us",
              text: "Contact Us",

              type: null,
              extra_links: "",
            },
          ],
        ],
        buttons: "",
        extra_section: [
          {
            url: "https://redpeg.com/wp-content/uploads/2022/09/GRRC-Logo.png",
            type: "image_only",
            href: "#image-only",
            alt: " ",
            image_width: "203",
            image_height: "64",
            ...(variant === VARIANT.HEADER_DROPDOWN_FOOTER
              ? {
                  // NEW PROP
                  googleAdHead: GOOGLE_ADS_TEST_PROPS.nonEmpty.googleAdHead,
                  // NEW PROP
                  googleAdBody: GOOGLE_ADS_TEST_PROPS.nonEmpty.googleAdBody,
                }
              : {}),
          },
        ],
        is_sports_type: true,
      },
    ],
  };

  const LINKS_TAB_BAR_PROPS = {
    sponsorHref: "#",
    sponsorLogoSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfbwJU0mLkyyoKkok_jMppnBtEbsWNYJja3A&s",
    sponsorLogoAlt: " ",

    ...(variant === VARIANT.LINKS_TAB_BAR
      ? {
          // NEW PROP
          sponsorGoogleAdHead: GOOGLE_ADS_TEST_PROPS.nonEmpty.googleAdHead,
          // NEW PROP
          sponsorGoogleAdBody: GOOGLE_ADS_TEST_PROPS.nonEmpty.googleAdBody,
        }
      : {}),

    ...(variant === VARIANT.LINKS_TAB_BAR_STICKY
      ? {
          // NEW PROP
          sponsorGoogleAdHeadSticky:
            GOOGLE_ADS_TEST_PROPS.nonEmpty.googleAdHead,
          // NEW PROP
          sponsorGoogleAdBodySticky:
            GOOGLE_ADS_TEST_PROPS.nonEmpty.googleAdBody,
        }
      : {}),

    stickyPosition: {
      navbarPortalSelector: `#${STICKY_PORTAL_ENTRANCE_ID}`, // The selector of the navbar that the sticky element should be aligned with
      stickyElementSelector: "#link-tabs-bar", // The selector of the element that should be sticky
    },
    disableActiveFromUrl: false,
    links: [
      {
        label: "Roster",
        href: "#football-roster",
        active: false,
      },
      {
        label: "News",
        href: "#football-news",
      },
      {
        label: "Coaches",
        href: "#football-coaches",
      },
      {
        label: "Stats",
        href: "#football-stats",
      },
    ],
  };

  const SECTION_HEADER_PROPS = {
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

    sponsorBlock: {
      text: "Presented By",
      name: "Ford",
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg",
      url: "https://www.ford.com/",
      ...(variant === VARIANT.SECTION_HEADER
        ? {
            // NEW PROP
            googleAdHead: GOOGLE_ADS_TEST_PROPS.nonEmpty.googleAdHead,
            // NEW PROP
            googleAdBody: GOOGLE_ADS_TEST_PROPS.nonEmpty.googleAdBody,
          }
        : {}),
    },
  };

  setTimeout(() => {
    initSunDevilsHeader({
      targetSelector: "#header",
      props: HEADER_PROPS,
    });

    initLinkTabsBar({
      targetSelector: "#link-tabs-bar",
      props: LINKS_TAB_BAR_PROPS,
    });

    initSectionHeader({
      targetSelector: "#section-header",
      props: SECTION_HEADER_PROPS,
    });
  }, 0);
}
