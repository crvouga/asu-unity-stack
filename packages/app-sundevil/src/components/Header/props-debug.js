// https://cdn-icons-png.flaticon.com/512/94/94107.png
/** @type {import("../../../../component-header/src/header").HeaderProps} */
export const testHeaderProps = {
  baseUrl: "https://sundevils.com",
  title: "ASU Sun Devil Athletics",
  parentOrg: "",
  parentOrgUrl: "",
  expandOnHover: 0,
  loginLink: "/caslogin",
  logoutLink: "/caslogout",
  officialSiteHref: "https://www.asu.edu/",
  loggedIn: false,
  userName: "",
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
      href: "/sports",
      text: "Men's Sports",
      icon: "",
      items: [
        [
          {
            href: "/sports/mens/baseball",
            text: "Baseball",
            icon: {
              icon_name: "baseball-bat-ball",
              style: "fa-fa-fa-fa-fa-fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:21:"fa-fa-fa-fa-fa-fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              {
                href: "/tickets/baseball",
                text: "Tickets",
              },
              {
                href: "https://thesundevils.com/sports/baseball/schedule",
                text: "Schedule",
              },
              {
                href: "https://thesundevils.com/sports/baseball/roster",
                text: "Roster",
              },
              {
                href: "https://thesundevils.com/sports/baseball/stats/",
                text: "Stats",
              },
              {
                href: "/about/news?sport=baseballview",
                text: "News",
              },
            ],
          },
          {
            href: "/sports/mens/basketball",
            text: "Basketball",
            icon: {
              svg_icon:
                "https://sundevils.com//sites/default/files/2024-07/basketball_2.svg",
              svg_icon_name: "Basketball hoop",
            },
            type: null,
            extra_links: [
              {
                href: "/tickets/mens-basketball",
                text: "Tickets",
              },
              {
                href: "https://thesundevils.com/sports/mens-basketball/schedule",
                text: "Schedule",
              },
              {
                href: "https://thesundevils.com/sports/mens-basketball/roster",
                text: "Roster",
              },
              {
                href: "https://thesundevils.com/sports/mens-basketball/stats",
                text: "Stats",
              },
              {
                href: "/about/news?sport=mens-basketballview",
                text: "News",
              },
            ],
          },
          {
            href: "/sports/cross-country",
            text: "Cross Country",
            icon: {
              icon_name: "person-running",
              style: "fa-fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:9:"fa-fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              {
                href: "https://thesundevils.com/sports/cross-country/schedule",
                text: "Schedule",
              },
              {
                href: "https://thesundevils.com/sports/cross-country/roster",
                text: "Roster",
              },
              {
                href: "https://thesundevils.com/sports/2018/11/20/past-results.aspx",
                text: "Stats",
              },
              {
                href: "/about/news?sport=cross-countryview",
                text: "News",
              },
            ],
          },
          {
            href: "/sports/mens/football",
            text: "Football",
            icon: {
              icon_name: "football",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              {
                href: "/tickets/football",
                text: "Tickets",
              },
              {
                href: "https://thesundevils.com/sports/football/schedule",
                text: "Schedule",
              },
              {
                href: "https://thesundevils.com/sports/football/roster",
                text: "Roster",
              },
              {
                href: "https://thesundevils.com/sports/football/stats/2024",
                text: "Stats",
              },
              {
                href: "/about/news?sport=footballview",
                text: "News",
              },
            ],
          },
          {
            href: "/sports/mens/golf",
            text: "Golf",
            icon: {
              svg_icon:
                "https://sundevils.com//sites/default/files/2024-07/golf_0.svg",
              svg_icon_name: "Golf club",
            },
            type: null,
            extra_links: [
              {
                href: "https://thesundevils.com/sports/mens-golf/schedule",
                text: "Schedule",
              },
              {
                href: "https://thesundevils.com/sports/mens-golf/roster",
                text: "Roster",
              },
              {
                href: "https://thesundevils.com/sports/mens-golf/results",
                text: "Stats",
              },
              {
                href: "/about/news?sport=mens-golfview",
                text: "News",
              },
            ],
          },
          {
            href: "/sports/mens/ice-hockey",
            text: "Ice Hockey",
            icon: {
              svg_icon:
                "https://sundevils.com//sites/default/files/2024-07/ice-hockey_0.svg",
              svg_icon_name: "Hockey puck and stick",
            },
            type: null,
            extra_links: [
              {
                href: "/tickets/ice-hockey",
                text: "Tickets",
              },
              {
                href: "https://thesundevils.com/sports/mens-ice-hockey/schedule",
                text: "Schedule",
              },
              {
                href: "https://thesundevils.com/sports/mens-ice-hockey/roster",
                text: "Roster",
              },
              {
                href: "https://thesundevils.com/sports/mens-ice-hockey/stats",
                text: "Stats",
              },
              {
                href: "/about/news?sport=ice-hockeyview",
                text: "News",
              },
            ],
          },
          {
            href: "/sports/mens/swimming-diving",
            text: "Swimming and Diving",
            icon: {
              icon_name: "person-swimming",
              style: "fa-fa-fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:12:"fa-fa-fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              {
                href: "https://thesundevils.com/sports/mens-swimming-and-diving/schedule",
                text: "Schedule",
              },
              {
                href: "https://thesundevils.com/sports/mens-swimming-and-diving/roster",
                text: "Roster",
              },
              {
                href: "https://thesundevils.com/sports/mens-swimming-and-diving/results",
                text: "Stats",
              },
              {
                href: "/about/news?sport=mens-swimming-divingview",
                text: "News",
              },
            ],
          },
          {
            href: "/sports/mens/tennis",
            text: "Tennis",
            icon: {
              svg_icon:
                "https://sundevils.com//sites/default/files/2024-07/tennis.svg",
              svg_icon_name: "Tennis racket",
            },
            type: null,
            extra_links: [
              {
                href: "https://thesundevils.com/sports/mens-tennis/schedule",
                text: "Schedule",
              },
              {
                href: "https://thesundevils.com/sports/mens-tennis/roster",
                text: "Roster",
              },
              {
                href: "https://thesundevils.com/sports/mens-tennis/stats/",
                text: "Stats",
              },
              {
                href: "/about/news?sport=mens-tennisview",
                text: "News",
              },
            ],
          },
          {
            href: "/sports/track-field",
            text: "Track and Field",
            icon: {
              svg_icon:
                "https://sundevils.com//sites/default/files/2024-07/track-and-field.svg",
              svg_icon_name: "Jersey",
            },
            type: null,
            extra_links: [
              {
                href: "https://thesundevils.com/sports/track-and-field/schedule",
                text: "Schedule",
              },
              {
                href: "https://thesundevils.com/sports/track-and-field/roster",
                text: "Roster",
              },
              {
                href: "https://thesundevils.com/sports/track-and-field/results",
                text: "Stats",
              },
              {
                href: "/about/news?sport=track-fieldview",
                text: "News",
              },
            ],
          },
          {
            href: "/sports/mens/wrestling",
            text: "Wrestling",
            icon: {
              svg_icon:
                "https://sundevils.com//sites/default/files/2024-07/wrestling.svg",
              svg_icon_name: "Two people grappling",
            },
            type: null,
            extra_links: [
              {
                href: "/tickets/wrestling",
                text: "Tickets",
              },
              {
                href: "https://thesundevils.com/sports/wrestling/schedule",
                text: "Schedule",
              },
              {
                href: "https://thesundevils.com/sports/wrestling/roster",
                text: "Roster",
              },
              {
                href: "https://thesundevils.com/sports/wrestling/results",
                text: "Stats",
              },
              {
                href: "/about/news?sport=wrestlingview",
                text: "News",
              },
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
      extra_section: [
        {
          url: "/sites/default/files/2024-06/ticketmaster-5-logo-black-and-white.png",
          image_width: "175",
          type: "image_only",
          href: "https://www.ticketmaster.com/arizona-state-sun-devils-football-tickets/artist/5807",
          text: "Ticketmaster",
          alt: "Sponsor Image",
        },
      ],
      is_sports_type: true,
      mobile: "",
    },
    {
      href: "/sports",
      text: "Women's Sports",
      icon: "",
      items: [
        [
          {
            href: "/sports/womens/basketball",
            text: "Basketball",
            icon: {
              svg_icon:
                "https://sundevils.com//sites/default/files/2024-07/basketball_4.svg",
              svg_icon_name: "Basketball hoop",
            },
            type: null,
            extra_links: [
              {
                href: "/tickets/womens-basketball",
                text: "Tickets",
              },
              {
                href: "https://thesundevils.com/sports/womens-basketball/schedule",
                text: "Schedule",
              },
              {
                href: "https://thesundevils.com/sports/womens-basketball/roster",
                text: "Roster",
              },
              {
                href: "https://thesundevils.com/sports/womens-basketball/stats/",
                text: "Stats",
              },
              {
                href: "/about/news?sport=womens-basketballview",
                text: "News",
              },
            ],
          },
          {
            href: "/sports/womens/beach-volleyball",
            text: "Beach Volleyball",
            icon: {
              svg_icon:
                "https://sundevils.com//sites/default/files/2024-07/beach-volleyball_0.svg",
              svg_icon_name: "Volleyball above water",
            },
            type: null,
            extra_links: [
              {
                href: "https://thesundevils.com/sports/wbvball/schedule",
                text: "Schedule",
              },
              {
                href: "https://thesundevils.com/sports/wbvball/roster",
                text: "Roster",
              },
              {
                href: "https://thesundevils.com/sports/wbvball/results",
                text: "Stats",
              },
              {
                href: "/about/news?sport=beach-volleyballview",
                text: "News",
              },
            ],
          },
          {
            href: "/sports/cross-country",
            text: "Cross Country",
            icon: {
              icon_name: "person-running",
              style: "fa-fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:9:"fa-fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              {
                href: "https://thesundevils.com/sports/cross-country/schedule",
                text: "Schedule",
              },
              {
                href: "https://thesundevils.com/sports/cross-country/roster",
                text: "Roster",
              },
              {
                href: "https://thesundevils.com/sports/2018/11/20/past-results.aspx",
                text: "Stats",
              },
              {
                href: "/about/news?sport=cross-countryview",
                text: "News",
              },
            ],
          },
          {
            href: "/sports/womens/golf",
            text: "Golf",
            icon: {
              svg_icon:
                "https://sundevils.com//sites/default/files/2024-07/golf_1.svg",
              svg_icon_name: "Golf club",
            },
            type: null,
            extra_links: [
              {
                href: "https://thesundevils.com/sports/womens-golf/schedule",
                text: "Schedule",
              },
              {
                href: "https://thesundevils.com/sports/womens-golf/roster",
                text: "Roster",
              },
              {
                href: "https://thesundevils.com/sports/2024/9/16/2024-25-sun-devil-womens-golf-statistics-homepage.aspx",
                text: "Stats",
              },
              {
                href: "/about/news?sport=womens-golfview",
                text: "News",
              },
            ],
          },
          {
            href: "/sports/womens/gymnastics",
            text: "Gymnastics",
            icon: {
              svg_icon:
                "https://sundevils.com//sites/default/files/2024-07/gymnastics.svg",
              svg_icon_name: "Person twirling",
            },
            type: null,
            extra_links: [
              {
                href: "/tickets/gymnastics",
                text: "Tickets",
              },
              {
                href: "https://thesundevils.com/sports/womens-gymnastics/schedule",
                text: "Schedule",
              },
              {
                href: "https://thesundevils.com/sports/womens-gymnastics/roster",
                text: "Roster",
              },
              {
                href: "https://thesundevils.com/sports/womens-gymnastics/results",
                text: "Stats",
              },
              {
                href: "/about/news?sport=gymnasticsview",
                text: "News",
              },
            ],
          },
          {
            href: "/sports/womens/lacrosse",
            text: "Lacrosse",
            icon: {
              svg_icon:
                "https://sundevils.com//sites/default/files/2024-07/lacrosse_1.svg",
              svg_icon_name: "Lacrosse stick and ball",
            },
            type: null,
            extra_links: [
              {
                href: "/tickets/lacrosse",
                text: "Tickets",
              },
              {
                href: "https://thesundevils.com/sports/womens-lacrosse/schedule",
                text: "Schedule",
              },
              {
                href: "https://thesundevils.com/sports/womens-lacrosse/roster",
                text: "Roster",
              },
              {
                href: "https://thesundevils.com/sports/womens-lacrosse/stats",
                text: "Stats",
              },
              {
                href: "/about/news?sport=lacrosseview",
                text: "News",
              },
            ],
          },
          {
            href: "/sports/womens/soccer",
            text: "Soccer",
            icon: {
              icon_name: "futbol",
              style: "fa-fa-fa-fa-fa-fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:21:"fa-fa-fa-fa-fa-fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              {
                href: "/tickets/soccer",
                text: "Tickets",
              },
              {
                href: "https://thesundevils.com/sports/womens-soccer/schedule",
                text: "Schedule",
              },
              {
                href: "https://thesundevils.com/sports/womens-soccer/roster",
                text: "Roster",
              },
              {
                href: "https://thesundevils.com/sports/womens-soccer/stats",
                text: "Stats",
              },
              {
                href: "/about/news?sport=soccerview",
                text: "News",
              },
            ],
          },
          {
            href: "/sports/womens/softball",
            text: "Softball",
            icon: {
              icon_name: "baseball",
              style: "fa-fa-fa-fa-fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:18:"fa-fa-fa-fa-fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              {
                href: "/tickets/softball",
                text: "Tickets",
              },
              {
                href: "https://thesundevils.com/sports/softball/schedule",
                text: "Schedule",
              },
              {
                href: "https://thesundevils.com/sports/softball/roster",
                text: "Roster",
              },
              {
                href: "https://thesundevils.com/sports/softball/stats",
                text: "Stats",
              },
              {
                href: "/about/news?sport=softballview",
                text: "News",
              },
            ],
          },
          {
            href: "/sports/womens/swimming-diving",
            text: "Swimming and Diving",
            icon: {
              icon_name: "person-swimming",
              style: "fa-fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:9:"fa-fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              {
                href: "https://thesundevils.com/sports/womens-swimming-and-diving/schedule",
                text: "Schedule",
              },
              {
                href: "https://thesundevils.com/sports/womens-swimming-and-diving/roster",
                text: "Roster",
              },
              {
                href: "https://thesundevils.com/sports/womens-swimming-and-diving/results",
                text: "Stats",
              },
              {
                href: "/about/news?sport=womens-swimming-divingview",
                text: "News",
              },
            ],
          },
          {
            href: "/sports/womens/tennis",
            text: "Tennis",
            icon: {
              svg_icon:
                "https://sundevils.com//sites/default/files/2024-07/tennis_2.svg",
              svg_icon_name: "Tennis racket",
            },
            type: null,
            extra_links: [
              {
                href: "https://thesundevils.com/sports/womens-tennis/schedule",
                text: "Schedule",
              },
              {
                href: "https://thesundevils.com/sports/womens-tennis/roster",
                text: "Roster",
              },
              {
                href: "https://thesundevils.com/sports/womens-tennis/stats",
                text: "Stats",
              },
              {
                href: "/about/news?sport=womens-tennisview",
                text: "News",
              },
            ],
          },
          {
            href: "/sports/track-field",
            text: "Track and Field",
            icon: {
              svg_icon:
                "https://sundevils.com//sites/default/files/2024-07/track-and-field_2.svg",
              svg_icon_name: "Jersey",
            },
            type: null,
            extra_links: [
              {
                href: "https://thesundevils.com/sports/track-and-field/schedule",
                text: "Schedule",
              },
              {
                href: "https://thesundevils.com/sports/track-and-field/roster",
                text: "Roster",
              },
              {
                href: "https://thesundevils.com/sports/track-and-field/results",
                text: "Stats",
              },
              {
                href: "/about/news?sport=track-fieldview",
                text: "News",
              },
            ],
          },
          {
            href: "/sports/womens/triathalon",
            text: "Triathlon",
            icon: {
              icon_name: "circle-nodes",
              style: "fa-fa-fa-fa-fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:18:"fa-fa-fa-fa-fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              {
                href: "https://thesundevils.com/sports/triathlon/schedule",
                text: "Schedule",
              },
              {
                href: "https://thesundevils.com/sports/triathlon/roster",
                text: "Roster",
              },
              {
                href: "/about/news?sport=triathlonview",
                text: "News",
              },
            ],
          },
          {
            href: "/sports/womens/volleyball",
            text: "Volleyball",
            icon: {
              icon_name: "volleyball",
              style: "fa-fa-fa-fa-fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:18:"fa-fa-fa-fa-fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              {
                href: "/tickets/volleyball",
                text: "Tickets",
              },
              {
                href: "https://thesundevils.com/sports/womens-volleyball/schedule",
                text: "Schedule",
              },
              {
                href: "https://thesundevils.com/sports/womens-volleyball/roster",
                text: "Roster",
              },
              {
                href: "https://thesundevils.com/sports/womens-volleyball/stats",
                text: "Stats",
              },
              {
                href: "/about/news?sport=volleyballview",
                text: "News",
              },
            ],
          },
          {
            href: "/sports/womens/water-polo",
            text: "Water Polo",
            icon: {
              svg_icon:
                "https://sundevils.com//sites/default/files/2024-07/water-polo.svg",
              svg_icon_name: "Person in water hitting ball",
            },
            type: null,
            extra_links: [
              {
                href: "https://thesundevils.com/sports/womens-water-polo/schedule",
                text: "Schedule",
              },
              {
                href: "https://thesundevils.com/sports/womens-water-polo/roster",
                text: "Roster",
              },
              {
                href: "https://thesundevils.com/sports/womens-water-polo/stats",
                text: "Stats",
              },
              {
                href: "/about/news?sport=water-poloview",
                text: "News",
              },
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
      extra_section: [
        {
          url: "/sites/default/files/2024-06/ticketmaster-5-logo-black-and-white.png",
          image_width: "175",
          type: "image_only",
          href: "https://www.ticketmaster.com/arizona-state-sun-devils-football-tickets/artist/5807",
          text: "Ticketmaster",
          alt: "Sponsor Image",
        },
      ],
      is_sports_type: true,
      mobile: "",
    },
    {
      href: "/tickets",
      text: "Tickets",
      icon: "",
      items: [
        [
          {
            href: "/tickets/single-game-tickets",
            text: "Tickets by Sport",
            icon: "",
            type: "heading",
            extra_links: "",
          },
          {
            href: "/tickets/football",
            text: "Football",
            icon: {
              icon_name: "football",
              style: "fa-fa-fa-fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:15:"fa-fa-fa-fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: "",
          },
          {
            href: "/tickets/mens-basketball",
            text: "M. Basketball",
            icon: {
              svg_icon:
                "https://sundevils.com//sites/default/files/2024-07/basketball_5.svg",
              svg_icon_name: "Basketball hoop",
            },
            type: null,
            extra_links: "",
          },
          {
            href: "/tickets/womens-basketball",
            text: "W. Basketball",
            icon: {
              svg_icon:
                "https://sundevils.com//sites/default/files/2024-07/basketball_6.svg",
              svg_icon_name: "Basketball hoop",
            },
            type: null,
            extra_links: "",
          },
          {
            href: "/tickets/ice-hockey",
            text: "Ice Hockey",
            icon: {
              svg_icon:
                "https://sundevils.com//sites/default/files/2024-07/ice-hockey_3.svg",
              svg_icon_name: "Hockey puck and stick",
            },
            type: null,
            extra_links: "",
          },
          {
            href: "/tickets/baseball",
            text: "Baseball",
            icon: {
              icon_name: "baseball-bat-ball",
              style: "fa-fa-fa-fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:15:"fa-fa-fa-fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: "",
          },
          {
            href: "/tickets/softball",
            text: "Softball",
            icon: {
              icon_name: "baseball",
              style: "fa-fa-fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:12:"fa-fa-fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: "",
          },
          {
            href: "/tickets/volleyball",
            text: "Volleyball",
            icon: {
              icon_name: "volleyball",
              style: "fa-fa-fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:12:"fa-fa-fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: "",
          },
          {
            href: "/tickets/wrestling",
            text: "Wrestling",
            icon: {
              svg_icon:
                "https://sundevils.com//sites/default/files/2024-07/wrestling_1.svg",
              svg_icon_name: "Two people grappling",
            },
            type: null,
            extra_links: "",
          },
          {
            href: "/tickets/gymnastics",
            text: "Gymnastics",
            icon: {
              svg_icon:
                "https://sundevils.com//sites/default/files/2024-07/gymnastics_1.svg",
              svg_icon_name: "Person twirling",
            },
            type: null,
            extra_links: "",
          },
          {
            href: "/tickets/soccer",
            text: "Soccer",
            icon: {
              icon_name: "futbol",
              style: "fa-fa-fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:12:"fa-fa-fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: "",
          },
          {
            href: "/tickets/lacrosse",
            text: "Lacrosse",
            icon: {
              svg_icon:
                "https://sundevils.com//sites/default/files/2024-07/lacrosse_2.svg",
              svg_icon_name: "Lacrosse stick and ball",
            },
            type: null,
            extra_links: "",
          },
          {
            href: "/tickets/non-ticketed",
            text: "Non-Ticketed Sports",
            icon: "",
            variant: "muted",
            type: "variant muted",
            extra_links: "",
          },
        ],
        [
          {
            href: "/tickets/season-tickets",
            text: "Season and Group Ticket Sales",
            icon: "",
            type: "heading",
            extra_links: "",
          },
          {
            href: "/tickets/season-tickets",
            text: "Season Tickets",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "/tickets/group-tickets",
            text: "Group Tickets",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "/tickets/season-tickets#mini-plans",
            text: "Mini Plans",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://am.ticketmaster.com/sundevils?CAMEFROM=CFC_SUNDEVILS_WEB_SUNDEVILS_GENERAL&brand=sundevils",
            text: "Access Your Ticket Account",
            icon: "",
            type: null,
            extra_links: "",
          },
        ],
        [
          {
            href: "/tickets-just-for-you",
            text: "Tickets Just for You",
            icon: "",
            type: "heading",
            extra_links: "",
          },
          {
            href: "/tickets/community-tickets#current-asu-students",
            text: "ASU Students",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "/tickets/community-tickets#young-alumni-program",
            text: "ASU Young Alumni",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "/tickets/community-tickets#asu-faculty-staff",
            text: "ASU Faculty and Staff",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "/tickets/community-tickets#military-first-responders",
            text: "Military and First Responders",
            icon: "",
            type: null,
            extra_links: "",
          },
        ],
        [
          {
            href: "/help-with-tickets",
            text: "Help with Tickets",
            icon: "",
            type: "heading",
            extra_links: "",
          },
          {
            href: "https://am.ticketmaster.com/sundevils/",
            text: "Manage Your Account",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "/tickets/mobile-ticketing",
            text: "Mobile Ticketing",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://thesundevils.com/sports/2013/4/17/208252607.aspx",
            text: "Transfer or Donate your Tickets",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://asu.co1.qualtrics.com/jfe/form/SV_bJazkU0uenxaeTY?source=sundevils_com",
            text: "Request a Donation",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://thesundevils.com/sports/2014/4/30/209485283.aspx",
            text: "Ticket Policies",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://thesundevils.com/sports/2013/8/12/209109460.aspx",
            text: "Contact the Ticket Office",
            icon: "",
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
          icon: [],
        },
      ],
      extra_section: [
        {
          url: "/sites/default/files/2024-06/ticketmaster-5-logo-black-and-white.png",
          image_width: "175",
          type: "image_only",
          href: "https://www.ticketmaster.com/arizona-state-sun-devils-football-tickets/artist/5807",
          text: "Ticketmaster",
          alt: "Sponsor Image",
        },
      ],
      is_sports_type: true,
      mobile: "",
    },
    {
      href: "/fans-and-community",
      text: "Fans and Community",
      icon: "",
      items: [
        [
          {
            href: "/shop",
            text: "We've Got Spirit",
            icon: "",
            type: "heading",
            extra_links: "",
          },
          {
            href: "/shop",
            text: "Shop Sun Devil Gear",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://thesundevils.com/sports/2013/4/17/208256866.aspx",
            text: "Sparky the Sun Devil",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://sundevilband.asu.edu/",
            text: "Athletic Bands",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://thesundevils.com/sports/2013/4/17/208253530",
            text: "Spirit Squad",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://thesundevils.com/sports/2021/11/17/2021-22-arizona-state-posters-phone-wallpapers-and-desktop-backgrounds.aspx",
            text: "Downloads",
            icon: "",
            type: null,
            extra_links: "",
          },
        ],
        [
          {
            href: "/for-kids",
            text: "For Kids",
            icon: "",
            type: "heading",
            extra_links: "",
          },
          {
            href: "/fans-community/for-kids#SunDevilCamps",
            text: "Sports Camps",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "/fans-community/for-kids#JuniorSunDevilClub",
            text: "Junior Sun Devil Club",
            icon: "",
            type: null,
            extra_links: "",
          },
        ],
        [
          {
            href: "",
            text: "Game Day Logistics",
            icon: "",
            type: "heading",
            extra_links: "",
          },
          {
            href: "/fans-community/game-day/gameday-guide",
            text: "Your Game Day Guide",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "/fans-community/game-day/tailgates",
            text: "Tailgates",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "/fans-community/game-day/gameday-guide#getting-here",
            text: "Directions",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://thesundevils.com/sports/2024/2/15/gameday-parking.aspx",
            text: "Parking",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "/fans-community/game-day/clear-bag-policy",
            text: "Clear Bag Policy",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "/fans-community/game-day/gameday-guide#emergency-safety",
            text: "Fan Safety Protocols",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://thesundevils.com/sports/2018/9/13/sun-devil-radio-network",
            text: "Sun Devil Radio Network",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://thesundevils.com/sports/2021/11/17/2021-22-arizona-state-posters-phone-wallpapers-and-desktop-backgrounds.aspx",
            text: "Downloads",
            icon: "",
            type: null,
            extra_links: "",
          },
        ],
        [
          {
            href: "/history-and-traditions",
            text: "History and Traditions",
            icon: "",
            type: "heading",
            extra_links: "",
          },
          {
            href: "https://thesundevils.com/sports/2013/4/17/208257019",
            text: "Sun Devil Traditions",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://thesundevils.com/sports/2013/4/17/208257058.aspx",
            text: "Sun Devil Hall of Fame and Hall of Distinction",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://thesundevils.com/sports/2016/6/20/asu-olympian-history",
            text: "Olympians",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://thesundevils.com/sports/2013/4/17/208257030.aspx",
            text: "Sports Hall of Fame",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://thesundevils.com/sports/2013/4/17/208257058",
            text: "All-Americans",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://thesundevils.com/sports/2022/3/3/arizona-state-pac-12-scholar-athletes-of-the-year.aspx",
            text: "Scholar-Athletes of the Year",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://thesundevils.com/sports/2013/4/17/208257049.aspx",
            text: "Distinguished Alumni",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://thesundevils.com/sports/2013/4/17/208257030.aspx",
            text: "National Champions",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://thesundevils.com/sports/2018/5/15/elite-90-winners.aspx",
            text: "Elite 90 Winners",
            icon: "",
            type: null,
            extra_links: "",
          },
        ],
      ],
      buttons: "",
      extra_section: [
        {
          button_uri: "/support-donate/NIL",
          button_text: "Request now",
          extra_text:
            "Request an autograph, appearance, shoutout, social post and more from your favorite athletes.",
          type: "text_with_button",
        },
        {
          url: "/sites/default/files/2024-08/Omni-tempe.png",
          image_width: "203",
          type: "image_only",
          href: "https://www.omnihotels.com/hotels/tempe-asu/specials/asu-special-event-rate",
          text: "Omni Tempe at Asu",
          alt: "Sponsor Image",
        },
      ],
      is_sports_type: true,
      mobile: "",
    },
    {
      href: "/ways-to-support",
      text: "Ways to Support",
      icon: "",
      items: [
        [
          {
            href: "/ways-to-support/name-image-likeness-nil",
            text: "Name, Image, Likeness (NIL)",
            icon: "",
            type: "heading",
            extra_links: "",
          },
          {
            href: "/support-donate/NIL",
            text: "Request an Autograph, Photo, Shoutout",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "/support-donate/NIL#NILInAction",
            text: "Book an Appearance",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "/support-donate/NIL#ConnectWithUs",
            text: "Maximize Your Brand Through NIL",
            icon: "",
            type: null,
            extra_links: "",
          },
        ],
        [
          {
            href: "/become-involved",
            text: "Become Involved",
            icon: "",
            type: "heading",
            extra_links: "",
          },
          {
            href: "/tickets",
            text: "Buy Tickets to a Game",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "/support-donate#SunDevilClub",
            text: "Join the Sun Devil Club",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "/fans-community/for-kids#JuniorSunDevilClub",
            text: "Join the Junior Sun Devil Club",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "/support-donate#SunAngelCollective",
            text: "Join the Sun Angel Collective",
            icon: "",
            type: null,
            extra_links: "",
          },
        ],
        [
          {
            href: "/ways-to-give",
            text: "Ways to Give",
            icon: "",
            type: "heading",
            extra_links: "",
          },
          {
            href: "/support-donate#MakeADonation",
            text: "Make a Donation",
            icon: "",
            type: null,
            extra_links: "",
          },
        ],
        [
          {
            href: "/corporate-partnerships",
            text: "Corporate Partnerships",
            icon: "",
            type: "heading",
            extra_links: "",
          },
          {
            href: "/support-donate/corporate-partnerships",
            text: "Connect Your Brand with Sun Devil Nation",
            icon: "",
            type: null,
            extra_links: "",
          },
        ],
      ],
      buttons: [
        {
          href: "/support-donate",
          text: "Support the Sun Devils",
          color: "gold",
          icon: [],
        },
      ],
      extra_section: "",
      is_sports_type: true,
      mobile: "",
    },
    {
      href: "/about",
      text: "About",
      icon: "",
      items: [
        [
          {
            href: "/about",
            text: "About Sun Devil Athletics",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "/about/events-calendar",
            text: "Events Calendar",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "/about/news",
            text: "News",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://sundevilcompliance.asu.edu/prospective-student-athletes/key-questions/what-should-a-prospective-student-athlete-do-to-get",
            text: "Play for ASU",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://thesundevils.com/facilities",
            text: "Facilities and Venues",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://thesundevils.com/sports/2022/7/11/208253785.aspx",
            text: "Media Relations",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://thesundevils.com/staff-directory",
            text: "Staff Directory",
            icon: "",
            type: null,
            extra_links: "",
          },
        ],
        [
          {
            href: "https://thesundevils.com/sports/2013/4/17/208256802",
            text: "Jobs and Internships",
            icon: "",
            type: "column break",
            extra_links: "",
          },
          {
            href: "https://www.teamworksapp.com/ext2/faa64ff6-b994-4dbd-93c1-178ea52f2b7e",
            text: "Request a Speaking Engagement or Appearance",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://asu.co1.qualtrics.com/jfe/form/SV_bJazkU0uenxaeTY?source=sundevils_com",
            text: "Request a Donation",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://thesundevils.com/sports/sustainability",
            text: "Sustainability Efforts",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://sundevilcompliance.asu.edu/",
            text: "Compliance",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://www.ncaa.org/news/2024/10/3/media-center-former-arizona-state-football-associate-head-coach-noncoaching-staff-member-violated-recruiting-rules.aspx",
            text: "NCAA Resolution",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://big12sports.com/",
            text: "Big 12 Conference",
            icon: "",
            type: null,
            extra_links: "",
          },
          {
            href: "https://thesundevils.com/sports/2013/8/12/209109460.aspx",
            text: "Contact Us",
            icon: "",
            type: null,
            extra_links: "",
          },
        ],
      ],
      buttons: "",
      extra_section: [
        {
          url: "/sites/default/files/2024-06/c1583b04098111219796c2407d53f3c9.png",
          image_width: "213",
          type: "image_only",
          href: "https://thesundevils.com/common/controls/adhandler.aspx?ad_id=109&target=https%3A//playatgila.com/",
          text: "Extra section",
          alt: "Sponsor Image",
        },
      ],
      is_sports_type: true,
      mobile: "",
    },
  ],
  isSponsor: true,
  sponsorLogo: {
    brandLink: "https://www.adidas.com/us",
    src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Adidas_2022_logo.svg",
    alt: "Adidas US",
    mobileSrc:
      "https://upload.wikimedia.org/wikipedia/commons/1/1b/Adidas_2022_logo.svg",
    title: "Adidas US",
    adId: "Adidas static logo",
  },
  logo: {
    alt: "Arizona State University",
    title: "Sun Devil Athletics home page",
    src: "/modules/custom/sun_devils_react_integration/assets/img/pitchfork.svg",
    mobileSrc:
      "/modules/custom/sun_devils_react_integration/assets/img/pitchfork.svg",
    brandLink: "https://sundevils.com",
    width: "45",
    height: "74",
    mobileWidth: "25",
    mobileHeight: "47",
  },
  searchUrl: "https://search.asu.edu/search",
  site: "sundevils.com",
  stickyPortalEntranceId: "navbar-portal",
};
