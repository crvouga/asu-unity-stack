// https://cdn-icons-png.flaticon.com/512/94/94107.png
/** @type {import("../../../../component-header/src/header").HeaderProps} */
export const testHeaderProps = {
  baseUrl: "https://web-sda.ddev.site:8443/",
  title: "Sun Devils",
  parentOrg: "",
  parentOrgUrl: "",
  expandOnHover: false,
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
  navTree: [
    {
      href: "/123",
      text: "Home",
      icon: "",
      items: "",
      buttons: "",
      extra_section: "",
      is_sports_type: false,
      type: "icon-home",
      class: "home",
      mobile: {
        hide: true,
      },
    },
    {
      href: "/sports",
      text: "Men\u0027s Sports",
      items: [
        [
          {
            href: "/sports/baseball",
            text: "Baseball",
            icon: {
              icon_name: "baseball",
              style: "fa-fas",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/schedule", text: "Schedule" },
              { href: "/roster", text: "Roster" },
              { href: "/stats", text: "Stats" },
              { href: "/news", text: "News" },
            ],
          },
          {
            href: "/sports/m-basketball",
            text: "M. Basketball",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/schedule", text: "Schedule" },
              { href: "/roster", text: "Roster" },
              { href: "/stats", text: "Stats" },
              { href: "/news", text: "News" },
            ],
          },
          {
            href: "/sports/m-cross-country",
            text: "M. Cross Country",
            icon: {
              icon_name: "person-running",
              style: "fa-fas",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: [
              { href: "/schedule", text: "Schedule" },
              { href: "/roster", text: "Roster" },
              { href: "/stats", text: "Stats" },
              { href: "/news", text: "News" },
            ],
          },
          {
            href: "/sports/football",
            text: "Football",
            icon: {
              icon_name: "football",
              style: "fa-fas",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/schedule", text: "Schedule" },
              { href: "/roster", text: "Roster" },
              { href: "/stats", text: "Stats" },
              { href: "/news", text: "News" },
            ],
          },
          {
            href: "/sports/m-golf",
            text: "M. Golf",
            icon: {
              icon_name: "golf-ball-tee",
              style: "fa-fas",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: [
              { href: "/schedule", text: "Schedule" },
              { href: "/roster", text: "Roster" },
              { href: "/stats", text: "Stats" },
              { href: "/news", text: "News" },
            ],
          },
          {
            href: "/sports/ice-hockey",
            text: "Ice Hockey",
            icon: {
              icon_name: "hockey-puck",
              style: "fa-fas",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/schedule", text: "Schedule" },
              { href: "/roster", text: "Roster" },
              { href: "/stats", text: "Stats" },
              { href: "/news", text: "News" },
            ],
          },
          {
            href: "/sports/m-swimming-and-diving",
            text: "M. Swimming and Diving",
            icon: {
              icon_name: "person-swimming",
              style: "fa-fas",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: [
              { href: "/schedule", text: "Schedule" },
              { href: "/roster", text: "Roster" },
              { href: "/stats", text: "Stats" },
              { href: "/news", text: "News" },
            ],
          },
          {
            href: "/sports/m-tennis",
            text: "M. Tennis",
            icon: {
              icon_name: "racquet",
              style: "fa-solid",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:8:\u0022fa-solid\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: [
              { href: "/schedule", text: "Schedule" },
              { href: "/roster", text: "Roster" },
              { href: "/stats", text: "Stats" },
              { href: "/news", text: "News" },
            ],
          },
          {
            href: "/sports/m-track-and-field",
            text: "M. Track and Field",
            icon: {
              icon_name: "shirt-running",
              style: "fa-solid",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:8:\u0022fa-solid\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: [
              { href: "/schedule", text: "Schedule" },
              { href: "/rooster", text: "Rooster" },
              { href: "/stats", text: "Stats" },
              { href: "/news", text: "News" },
            ],
          },
          {
            href: "/sports/wrestling",
            text: "Wrestling",
            icon: {
              icon_name: "luchador",
              style: "fa-solid",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:8:\u0022fa-solid\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: [
              { href: "/schedule", text: "Schedule" },
              { href: "/roster", text: "Roster" },
              { href: "/stats", text: "Stats" },
              { href: "/news", text: "News" },
            ],
          },
        ],
      ],
      buttons: [
        {
          href: "/tickets",
          text: "Buy tickets",
          color: "gold",

          icon: {
            icon_name: "ticket",
            style: "fa-fas",
            settings:
              'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
          },
        },
      ],
      is_sports_type: true,
      extra_section: [
        {
          url: "https://cdn.freebiesupply.com/logos/large/2x/ticketmaster-5-logo-black-and-white.png",
          type: "image_only",
          href: "#image-only",

          alt: " ",

          image_width: "175",

          image_height: "25",
        },
      ],
    },
    {
      href: "/sports",
      text: "Woman\u0027s Sports",
      items: [
        [
          {
            href: "/sports/w-basketball",
            text: "W. Basketball",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/schedule", text: "Schedule" },
              { href: "/roster", text: "Roster" },
              { href: "/stats", text: "Stats" },
              { href: "/news", text: "News" },
            ],
          },
          {
            href: "/sports/beach-volleyball",
            text: "Beach Volleyball",
            icon: {
              icon_name: "volleyball",
              style: "fa-fas",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: [
              { href: "/schedule", text: "Schedule" },
              { href: "/roster", text: "Roster" },
              { href: "/stats", text: "Stats" },
              { href: "/news", text: "News" },
            ],
          },
          {
            href: "/sports/w-cross-country",
            text: "W. Cross Country",
            icon: {
              icon_name: "person-running",
              style: "fa-fas",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: [
              { href: "/schedule", text: "Schedule" },
              { href: "/roster", text: "Roster" },
              { href: "/stats", text: "Stats" },
              { href: "/news", text: "News" },
            ],
          },
          {
            href: "/sports/w-golf",
            text: "W. Golf",
            icon: {
              icon_name: "golf-ball-tee",
              style: "fa-fas",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: [
              { href: "/schedule", text: "Schedule" },
              { href: "/roster", text: "Roster" },
              { href: "/stats", text: "Stats" },
              { href: "/news", text: "News" },
            ],
          },
          {
            href: "/sports/gymnastics",
            text: "Gymnastics",
            icon: {
              icon_name: "person-falling",
              style: "fa-fas",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: [
              { href: "/schedule", text: "Schedule" },
              { href: "/roster", text: "Roster" },
              { href: "/stats", text: "Stats" },
              { href: "/news", text: "News" },
            ],
          },
          {
            href: "/sports/lacrosse",
            text: "Lacrosse",
            icon: {
              src: "https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/lacrosse-sticks-icon.png",
            },
            type: null,
            extra_links: [
              { href: "/schedule", text: "Schedule" },
              { href: "/roster", text: "Roster" },
              { href: "/stats", text: "Stats" },
              { href: "/news", text: "News" },
            ],
          },
          {
            href: "/sports/w-soccer",
            text: "W. Soccer",
            icon: {
              icon_name: "futbol",
              style: "fa-fas",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: [
              { href: "/schedule", text: "Schedule" },
              { href: "/roster", text: "Roster" },
              { href: "/stats", text: "Stats" },
              { href: "/news", text: "News" },
            ],
          },
          {
            href: "/sports/softball",
            text: "Softball",
            icon: {
              icon_name: "baseball",
              style: "fa-fas",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/schedule", text: "Schedule" },
              { href: "/roster", text: "Roster" },
              { href: "/stats", text: "Stats" },
              { href: "/news", text: "News" },
            ],
          },
          {
            href: "/sports/w-swimming-and-diving",
            text: "W. Swimming and Diving",
            icon: {
              icon_name: "person-swimming",
              style: "fa-fas",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: [
              { href: "/schedule", text: "Schedule" },
              { href: "/roster", text: "Roster" },
              { href: "/stats", text: "Stats" },
              { href: "/news", text: "News" },
            ],
          },
          {
            href: "/sports/w-tennis",
            text: "W. Tennis",
            icon: {
              icon_name: "racquet",
              style: "fa-solid",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:8:\u0022fa-solid\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: [
              { href: "/schedule", text: "Schedule" },
              { href: "/roster", text: "Roster" },
              { href: "/stats", text: "Stats" },
              { href: "/news", text: "News" },
            ],
          },
          {
            href: "/sports/w-track-and-field",
            text: "W. Track and Field",
            icon: {
              icon_name: "shirt-running",
              style: "fa-solid",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:8:\u0022fa-solid\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: [
              { href: "/schedule", text: "Schedule" },
              { href: "/roster", text: "Roster" },
              { href: "/stats", text: "Stats" },
              { href: "/news", text: "News" },
            ],
          },
          {
            href: "/sports/triathlon",
            text: "Triathlon",
            icon: {
              icon_name: "circle-nodes",
              style: "fa-fas",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: [
              { href: "/Schedule", text: "Schedule" },
              { href: "/Roster", text: "Roster" },
              { href: "/Roster", text: "Stats" },
              { href: "/news", text: "News" },
            ],
          },
          {
            href: "/sports/volleyball",
            text: "Volleyball",
            icon: {
              icon_name: "volleyball",
              style: "fa-fas",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: [
              { href: "/sports", text: "Schedule" },
              { href: "/sports", text: "Roster" },
              { href: "/sports", text: "Stats" },
              { href: "/sports", text: "News" },
            ],
          },
          {
            href: "/sports/water-polo",
            text: "Water Polo",
            icon: {
              icon_name: "person-swimming",
              style: "fa-fas",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: [
              { href: "/sports", text: "Schedule" },
              { href: "/sports", text: "Roster" },
              { href: "/sports", text: "Stats" },
              { href: "/sports", text: "News" },
            ],
          },
        ],
      ],
      buttons: [
        {
          href: "/link",
          text: "Buy Tickets",
          color: "gold",
          icon: {
            icon_name: "ticket",
            style: "fa-fas",
            settings:
              'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
          },
        },
      ],
      extra_section: [
        {
          url: "https://cdn.freebiesupply.com/logos/large/2x/ticketmaster-5-logo-black-and-white.png",
          type: "image_only",
          href: "#image-only",

          alt: " ",

          image_width: "175",

          image_height: "25",
        },
      ],
      is_sports_type: true,
    },
    {
      href: "/tickets",
      text: "Tickets",
      items: [
        [
          {
            href: "/tickets/single-game-tickets",
            text: "Single Game Tickets",
            icon: {
              icon_name: "ticket",
              style: "fa-fas",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: "heading",
            extra_links: "",
          },
          {
            href: "/tickets/football",
            text: "Football",
            icon: {
              icon_name: "futbol",
              style: "fa-fas",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: "",
          },
          {
            href: "/tickets/m-basketball",
            text: "M. Basketball",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: "",
          },
          {
            href: "/tickets/w-basketball",
            text: "W. Basketball",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: "",
          },
          {
            href: "/tickets/ice-hockey",
            text: "Ice Hockey",
            icon: {
              icon_name: "hockey-puck",
              style: "fa-fas",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: "",
          },
          {
            href: "/tickets/baseball",
            text: "Baseball",
            icon: {
              icon_name: "baseball",
              style: "fa-fas",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: "",
          },
          {
            href: "/tickets/softball",
            text: "Softball",
            icon: {
              icon_name: "baseball",
              style: "fa-fas",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: "",
          },
          {
            href: "/tickets/volleyball",
            text: "Volleyball",
            icon: {
              icon_name: "volleyball",
              style: "fa-fas",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: "",
          },
          {
            href: "/tickets/wrestling",
            text: "Wrestling",
            icon: {
              icon_name: "luchador",
              style: "fa-solid",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:8:\u0022fa-solid\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: "",
          },
          {
            href: "/tickets/gymnastics",
            text: "Gymnastics",
            icon: {
              icon_name: "person-falling",
              style: "fa-fas",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: "",
          },
          {
            href: "/tickets/soccer",
            text: "Soccer",
            icon: {
              icon_name: "futbol",
              style: "fa-fas",
              settings:
                "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:6:\u0022fa-fas\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
            },
            type: null,
            extra_links: "",
          },
          {
            href: "/tickets/lacrosse",
            text: "Lacrosse",
            icon: {
              src: "https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/lacrosse-sticks-icon.png",
            },
            type: null,
            extra_links: "",
          },
          {
            href: "/tickets/see-a-list-of-free-sporting-events",
            text: "See a List of Free Sporting Events",

            variant: "muted",

            type: null,
            extra_links: "",
          },
        ],
        [
          {
            href: "/season-and-group-ticket-sales/season-tickets",
            text: "Season and Group Ticket Sales",

            type: "heading",
            extra_links: "",
          },
          {
            href: "/season-and-group-ticket-sales",
            text: "Season Tickets",

            type: null,
            extra_links: "",
          },
          {
            href: "/season-and-group-ticket-sales/group-tickets",
            text: "Group Tickets",

            type: null,
            extra_links: "",
          },
          {
            href: "/season-and-group-ticket-sales/mini-plans",
            text: "Mini Plans",

            type: null,
            extra_links: "",
          },
        ],
        [
          {
            href: "/tickets-just-for-you",
            text: "Tickets Just for You",

            type: "heading",
            extra_links: "",
          },
          {
            href: "/tickets-just-for-you/asu-students",
            text: "ASU Students",

            type: null,
            extra_links: "",
          },
          {
            href: "/tickets-just-for-you/asu-young-alumni",
            text: "ASU Young Alumni",

            type: null,
            extra_links: "",
          },
          {
            href: "/tickets-just-for-you/asu-faculty-and-staff",
            text: "ASU Faculty and Staff",

            type: null,
            extra_links: "",
          },
          {
            href: "/tickets-just-for-you/military-and-first-responders",
            text: "Military and First Responders",

            type: null,
            extra_links: "",
          },
        ],
        [
          {
            href: "/help-with-tickets",
            text: "Help with Tickets",

            type: "heading",
            extra_links: "",
          },
          {
            href: "/help-with-tickets/manage-your-account",
            text: "Manage Your Account",

            type: null,
            extra_links: "",
          },
          {
            href: "/help-with-tickets/transfer-or-donate-your-tickets",
            text: "Transfer or Donate your Tickets",

            type: null,
            extra_links: "",
          },
          {
            href: "/help-with-tickets/ticket-policies",
            text: "Ticket Policies",

            type: null,
            extra_links: "",
          },
          {
            href: "/help-with-tickets/contact-the-ticket-office",
            text: "Contact the Ticket Office",

            type: null,
            extra_links: "",
          },
        ],
      ],
      buttons: [
        {
          href: "/tickets",
          text: "See all ticketing info",
          color: "gold",
        },
      ],
      is_sports_type: true,
      mobile: {
        navTreeItemVariant: "none",
      },
    },
    {
      href: "/fans-and-community",
      text: "Fans and Community",
      icon: {
        icon_name: "lacrosse-stick",
        style: "fa-solid",
        settings:
          "a:2:{s:7:\u0022masking\u0022;a:2:{s:4:\u0022mask\u0022;s:0:\u0022\u0022;s:5:\u0022style\u0022;s:8:\u0022fa-solid\u0022;}s:16:\u0022power_transforms\u0022;a:3:{s:5:\u0022scale\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_y\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}s:10:\u0022position_x\u0022;a:2:{s:4:\u0022type\u0022;s:0:\u0022\u0022;s:5:\u0022value\u0022;s:0:\u0022\u0022;}}}",
      },
      items: [
        [
          {
            href: "/fans-and-community/weve-got-spirit",
            text: "We\u0027ve Got Spirit",

            type: "heading",
            extra_links: "",
          },
          {
            href: "/fans-and-community/shop-sun-devil-gear",
            text: "Shop Sun Devil Gear",

            type: null,
            extra_links: "",
          },
          {
            href: "/fans-and-community/sparky-the-sun-devil",
            text: "Sparky the Sun Devil",

            type: null,
            extra_links: "",
          },
          {
            href: "/fans-and-community/athletic-bands",
            text: "Athletic Bands",

            type: null,
            extra_links: "",
          },
          {
            href: "/fans-and-community/spirit-squad",
            text: "Spirit Squad",

            type: null,
            extra_links: "",
          },
          {
            href: "/fans-and-community/downloads",
            text: "Downloads",

            type: null,
            extra_links: "",
          },
        ],
        [
          {
            href: "/for-kids",
            text: "For Kids",

            type: "heading",
            extra_links: "",
          },
          {
            href: "/for-kids/sports-camps",
            text: "Sports Camps",

            type: null,
            extra_links: "",
          },
          {
            href: "/for-kids/junior-sun-devil-club",
            text: "Junior Sun Devil Club",

            type: null,
            extra_links: "",
          },
        ],
        [
          {
            href: "/game-day-logistics",
            text: "Game Day Logistics",

            type: "heading",
            extra_links: "",
          },
          {
            href: "/game-day-logistics/your-a-z-guide",
            text: "Your A-z Guide",

            type: null,
            extra_links: "",
          },
          {
            href: "/game-day-logistics/directions",
            text: "Directions",

            type: null,
            extra_links: "",
          },
          {
            href: "/game-day-logistics/parking",
            text: "Parking",

            type: null,
            extra_links: "",
          },
          {
            href: "/game-day-logistics/clear-bag-policy",
            text: "Clear Bag Policy",

            type: null,
            extra_links: "",
          },
          {
            href: "/game-day-logistics/fan-safety-protocols",
            text: "Fan Safety Protocols",

            type: null,
            extra_links: "",
          },
          {
            href: "/game-day-logistics/sun-devil-radio-network",
            text: "Sun Devil Radio Network",

            type: null,
            extra_links: "",
          },
          {
            href: "/game-day-logistics/downloads",
            text: "Downloads",

            type: null,
            extra_links: "",
          },
        ],
        [
          {
            href: "/history-and-traditions",
            text: "History and Traditions",

            type: "heading",
            extra_links: "",
          },
          {
            href: "/history-and-traditions/sun-devil-traditions",
            text: "Sun Devil Traditions",

            type: null,
            extra_links: "",
          },
          {
            href: "/history-and-traditions/sun-devil-hall-of-fame-and-hall-of-distinction",
            text: "Sun Devil Hall of Fame and Hall of Distinction",

            type: null,
            extra_links: "",
          },
          {
            href: "/history-and-traditions/olympians",
            text: "Olympians",

            type: null,
            extra_links: "",
          },
          {
            href: "/history-and-traditions/sports-hall-of-fame",
            text: "Sports Hall of Fame",

            type: null,
            extra_links: "",
          },
          {
            href: "/history-and-traditions/all-americans",
            text: "All-Americans",

            type: null,
            extra_links: "",
          },
          {
            href: "/history-and-traditions/scholar-athletes-of-the-year",
            text: "Scholar-Athletes of the Year",

            type: null,
            extra_links: "",
          },
          {
            href: "/history-and-traditions/distinguished-alumni",
            text: "Distinguished Alumni",

            type: null,
            extra_links: "",
          },
          {
            href: "/history-and-traditions/national-champions",
            text: "National Champions",

            type: null,
            extra_links: "",
          },
          {
            href: "/history-and-traditions/elite-90-winners",
            text: "Elite 90 Winners",

            type: null,
            extra_links: "",
          },
        ],
      ],
      buttons: "",
      extra_section: [
        {
          button_uri: "/test",
          button_text: "Request now",
          extra_text:
            "Request an autograph, appearance, shoutout, social post and more from your favorite\u00a0athletes.",
          type: "text_with_button",
        },
      ],
      is_sports_type: true,

      mobile: {
        navTreeItemVariant: "none",
        hideFooter: true,
      },
    },
    {
      href: "/ways-to-support",
      text: "Ways to Support",

      items: [
        [
          {
            href: "/ways-to-support/name-image-likeness-nil",
            text: "Name, Image, Likeness (NIL)",

            type: "heading",
            extra_links: "",
          },
          {
            href: "/ways-to-support/request-an-autograph-photo-shoutout",
            text: "Request an Autograph, Photo, Shoutout",

            type: null,
            extra_links: "",
          },
          {
            href: "/ways-to-support/book-an-appearance",
            text: "Book an Appearance",

            type: null,
            extra_links: "",
          },
          {
            href: "/ways-to-support/maximize-your-brand-through-nil",
            text: "Maximize Your Brand Through NIL",

            type: null,
            extra_links: "",
          },
        ],
        [
          {
            href: "/become-involved",
            text: "Become Involved",

            type: "heading",
            extra_links: "",
          },
          {
            href: "/become-involved/buy-tickets-to-a-game",
            text: "Buy Tickets to a Game",

            type: null,
            extra_links: "",
          },
          {
            href: "/become-involved/join-the-sun-devil-club",
            text: "Join the Sun Devil Club",

            type: null,
            extra_links: "",
          },
          {
            href: "/become-involved/join-the-junior-sun-devil-club",
            text: "Join the Junior Sun Devil Club",

            type: null,
            extra_links: "",
          },
          {
            href: "/become-involved/join-the-sun-angel-collective",
            text: "Join the Sun Angel Collective",

            type: null,
            extra_links: "",
          },
        ],
        [
          {
            href: "/ways-to-give",
            text: "Ways to Give",

            type: "heading",
            extra_links: "",
          },
          {
            href: "/ways-to-give/give-now",
            text: "Give NOW",

            type: null,
            extra_links: "",
          },
          {
            href: "/ways-to-give/give-over-time",
            text: "Give Over Time",

            type: null,
            extra_links: "",
          },
          {
            href: "/ways-to-give/plan-your-gift",
            text: "Plan Your Gift",

            type: null,
            extra_links: "",
          },
        ],
        [
          {
            href: "/corporate-sponsorships",
            text: "Corporate Sponsorships",

            type: "heading",
            extra_links: "",
          },
          {
            href: "/corporate-sponsorships/connect-your-brand-with-sun-devil-nation",
            text: "Connect Your Brand with Sun Devil Nation",

            type: null,
            extra_links: "",
          },
        ],
      ],
      buttons: [
        {
          href: "/",
          text: "Support the Sun Devils",
          color: "gold",
        },
      ],
      extra_section: "",
      is_sports_type: true,

      mobile: {
        navTreeItemVariant: "none",
      },
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
        },
      ],
      is_sports_type: true,

      mobile: {
        navTreeItemVariant: "none",
      },
    },
  ],
};
