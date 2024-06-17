/**
 * @type {import(".").HeaderProps}
 */
export const testHeaderProps = {
  baseUrl: "https://web-sda.ddev.site:8443/",
  title: "Sun Devils",
  parentOrg: "",
  parentOrgUrl: "",
  expandOnHover: 0,
  loginLink: "/caslogin",
  logoutLink: "/caslogout",
  loggedIn: true,
  userName: "You are logged in",
  officialSiteHref: "#",
  navTree: [
    // Home
    {
      href: "/",
      text: "Home",
      icon: "",
      items: "",
      buttons: "",
      extra_section: "",
      is_sports_type: false,
      type: "icon-home",
      class: "home",
    },
    // Men's Sports
    {
      href: "/sports",
      text: "Men's Sports",
      icon: {
        icon_name: "baseball",
        style: "fa-fas",
        settings:
          'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
      },
      items: [
        [
          {
            href: "/sports/m-basketball",
            text: "M. Basketball",
            icon: {
              icon_name: "baseball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/rooster", text: "Rooster" },
            ],
          },
          {
            href: "/sports/m-cross-country",
            text: "M. Cross Country",
            icon: {
              icon_name: "baseball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/rooster", text: "Rooster" },
            ],
          },
          {
            href: "/sports/football",
            text: "Football",
            icon: {
              icon_name: "baseball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/rooster", text: "Rooster" },
              { href: "/rooster2", text: "Rooster" },
              { href: "/rooster3", text: "Rooster" },
              // { href: "/rooster4", text: "Rooster" },
              // { href: "/rooster5", text: "Rooster" },
            ],
          },
          {
            href: "/sports/m-golf",
            text: "M. Golf",
            icon: {
              icon_name: "baseball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/rooster", text: "Rooster" },
            ],
          },
        ],
        [
          {
            href: "/sports/ice-hockey",
            text: "Ice Hockey",
            icon: {
              icon_name: "baseball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: "column break",
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/rooster", text: "Rooster" },
            ],
          },
          {
            href: "/sports/m-swimming-and-diving",
            text: "M. Swimming and Diving",
            icon: {
              icon_name: "baseball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/rooster", text: "Rooster" },
            ],
          },
          {
            href: "/sports/m-tennis",
            text: "M. Tennis",
            icon: {
              icon_name: "baseball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/rooster", text: "Rooster" },
            ],
          },
          {
            href: "/sports/m-track-and-field",
            text: "M. Track and Field",
            icon: {
              icon_name: "baseball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/rooster", text: "Rooster" },
            ],
          },
          {
            href: "/sports/wrestling",
            text: "Wrestling",
            icon: {
              icon_name: "baseball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/rooster", text: "Rooster" },
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
          text: "ticketmaster",
          type: "text_only",
        },
        {
          button_uri: "/buy-types",
          button_text: "Buy tickets",
          extra_text: "test",
          type: "text_with_button",
        },
      ],
      is_sports_type: true,
    },
    // Woman's Sports
    {
      href: "/sports",
      text: "Woman's Sports",
      icon: {
        icon_name: "basketball",
        style: "fa-fas",
        settings:
          'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
      },
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
      items: [
        [
          {
            href: "/sports/w-basketball",
            text: "W. Basketball",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: "column break",
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/rooster", text: "Rooster" },
            ],
          },
          {
            href: "/sports/beach-volleyball",
            text: "Beach Volleyball",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/rooster", text: "Rooster" },
            ],
          },
          {
            href: "/sports/w-cross-country",
            text: "W. Cross Country",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/rooster", text: "Rooster" },
            ],
          },
          {
            href: "/sports/w-golf",
            text: "W. Golf",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/rooster", text: "Rooster" },
            ],
          },
          {
            href: "/sports/gymnastics",
            text: "Gymnastics",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/rooster", text: "Rooster" },
            ],
          },
        ],
        [
          {
            href: "/sports/lacrosse",
            text: "Lacrosse",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: "column break",
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/rooster", text: "Rooster" },
            ],
          },
          {
            href: "/sports/w-soccer",
            text: "W. Soccer",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/rooster", text: "Rooster" },
            ],
          },
          {
            href: "/sports/softball",
            text: "Softball",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/rooster", text: "Rooster" },
            ],
          },
          {
            href: "/sports/w-swimming-and-diving",
            text: "W. Swimming and Diving",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/rooster", text: "Rooster" },
            ],
          },
          {
            href: "/sports/w-tennis",
            text: "W. Tennis",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/rooster", text: "Rooster" },
            ],
          },
        ],
        [
          {
            href: "/sports/w-track-and-field",
            text: "W. Track and Field",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: "column break",
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/rooster", text: "Rooster" },
            ],
          },
          {
            href: "/sports/triathlon",
            text: "Triathlon",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/rooster", text: "Rooster" },
            ],
          },
          {
            href: "/sports/volleyball",
            text: "Volleyball",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/rooster", text: "Rooster" },
            ],
          },
          {
            href: "/sports/water-polo",
            text: "Water Polo",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/rooster", text: "Rooster" },
            ],
          },
          {
            href: "/link",
            text: "Get Tickets",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            type: null,
            extra_links: [
              { href: "/tickets", text: "Tickets" },
              { href: "/rooster", text: "Rooster" },
            ],
          },
        ],
      ],
      extra_section: "",
      is_sports_type: true,
    },
    // Tickets
    {
      text: "Tickets",
      href: "#",
      buttons: [
        {
          href: "#",
          text: "See all ticketing info",
          color: "gold",
        },
      ],
      mobile: {
        navTreeItemVariant: "none",
      },
      items: [
        [
          {
            type: "heading",
            text: "Single Game Tickets",
            size: "md",
          },
          {
            href: "#",
            text: "Football",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
            faClassName: "fas fa-basketball-ball",
          },
          {
            href: "#",
            text: "M. Basketball",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
          },
          {
            href: "#",
            text: "W. Basketball",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
          },
          {
            href: "#",
            text: "Ice Hockey",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
          },
          {
            href: "#",
            text: "Baseball",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
          },
          {
            href: "#",
            text: "Softball",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
          },
          {
            href: "#",
            text: "Volleyball",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
          },
          {
            href: "#",
            text: "Wrestling",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
          },
          {
            href: "#",
            text: "Gymnastics",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
          },
          {
            href: "#",
            text: "Soccer",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
          },
          {
            href: "#",
            text: "Lacrosse",
            icon: {
              icon_name: "basketball",
              style: "fa-fas",
              settings:
                'a:2:{s:7:"masking";a:2:{s:4:"mask";s:0:"";s:5:"style";s:6:"fa-fas";}s:16:"power_transforms";a:3:{s:5:"scale";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_y";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}s:10:"position_x";a:2:{s:4:"type";s:0:"";s:5:"value";s:0:"";}}}',
            },
          },
          {
            href: "#",
            text: "See a List of Free Sporting Events",
            variant: "muted",
          },
        ],
        [
          {
            type: "heading",
            text: "Season and Group Ticket Sales",
            size: "md",
          },
          {
            href: "#",
            text: "Season Tickets",
          },
          {
            href: "#",
            text: "Group Tickets",
          },
          {
            href: "#",
            text: "Mini Plans",
          },
        ],
        [
          {
            type: "heading",
            text: "Tickets Just for You",
            size: "md",
          },
          {
            href: "#",
            text: "ASU Students",
          },
          {
            href: "#",
            text: "ASU Young Alumni",
          },
          {
            href: "#",
            text: "ASU Faculty and Staff",
          },
          {
            href: "#",
            text: "Military and First Responders",
          },
        ],
        [
          {
            type: "heading",
            text: "Help with Tickets",
            size: "md",
          },
          {
            href: "#",
            text: "Manage Your Account",
          },
          {
            href: "#",
            text: "Transfer or Donate your Tickets",
          },
          {
            href: "#",
            text: "Ticket Policies",
          },
          {
            href: "#",
            text: "Contact the Ticket Office",
          },
        ],
      ],
    },
    // Fans and Community
    {
      text: "Fans and Community",
      href: "#",
      mobile: {
        navTreeItemVariant: "none",
      },
      extra_section: [
        {
          button_uri: "#",
          button_text: "Request now",
          extra_text:
            "Request an autograph, appearance, shoutout, social post and more from your favorite athletes.",
          type: "text_with_button",
        },
      ],
      footers: [
        {
          type: "button-with-text",
          buttonHref: "#",
          buttonText: "Request now",
          text: "Request an autograph, appearance, shoutout, social post and more from your favorite athletes.",
        },
      ],
      items: [
        [
          {
            type: "heading",
            text: "We've Got Spirit",
            size: "md",
          },
          {
            href: "#",
            text: "Shop Sun Devil Gear",
          },
          {
            href: "#",
            text: "Sparky the Sun Devil",
          },
          {
            href: "#",
            text: "Athletic Brands",
          },
          {
            href: "#",
            text: "Spirit Squad",
          },
          {
            href: "#",
            text: "Downloads",
          },
        ],
        [
          {
            type: "heading",
            text: "For Kids",
            size: "md",
          },
          {
            href: "#",
            text: "Sports Camps",
          },
          {
            href: "#",
            text: "Join Sun Devil Club",
          },
        ],
        [
          {
            type: "heading",
            text: "Game Day Logistics",
            size: "md",
          },
          {
            href: "#",
            text: "Your A-Z Guide",
          },
          {
            href: "#",
            text: "Directions",
          },
          {
            href: "#",
            text: "Parking",
          },
          {
            href: "#",
            text: "Clear Bag Policy",
          },
          {
            href: "#",
            text: "Fan Safety Protocols",
          },
          {
            href: "#",
            text: "Sun Devil Radio Network",
          },
          {
            href: "#",
            text: "Downloads",
          },
        ],
        [
          {
            type: "heading",
            text: "History and Traditions",
            size: "md",
          },
          {
            href: "#",
            text: "Sun Devil Traditions",
          },
          {
            href: "#",
            text: "Sun Devil Hall of Fame and Hall of Distinction",
          },
          {
            href: "#",
            text: "Olympians",
          },
          {
            href: "#",
            text: "Sports Hall of Fame",
          },
          {
            href: "#",
            text: "All-Americans",
          },
          {
            href: "#",
            text: "Scholar-Athletes of the Year",
          },
          {
            href: "#",
            text: "Distinguished Alumni",
          },
          {
            href: "#",
            text: "National Champions",
          },
          {
            href: "#",
            text: "Elite 90 Winners",
          },
        ],
      ],
    },
    // Ways to Support
    {
      text: "Ways to Support",
      href: "#",
      buttons: [
        {
          href: "#",
          text: "Support Sun Devils",
          color: "gold",
        },
      ],
      mobile: {
        navTreeItemVariant: "none",
      },
      items: [
        [
          {
            type: "heading",
            text: "Name, Image, Likeness (NIL)",
            size: "md",
          },
          {
            href: "#",
            text: "Request an Autograph, Photo, or Shoutout",
          },
          {
            href: "#",
            text: "Book an Appearance",
          },
          {
            href: "#",
            text: "Maximize Your Brand",
          },
        ],
        [
          {
            type: "heading",
            text: "Become Involved",
            size: "md",
          },
          {
            href: "#",
            text: "Buy Tickets to a Game",
          },
          {
            href: "#",
            text: "Join the Sun Devil Club",
          },
          {
            href: "#",
            text: "Join the Junior Sun Devil Club",
          },
          {
            href: "#",
            text: "Join the Sun Angle Collective",
          },
        ],
        [
          {
            type: "heading",
            text: "Ways To Give",
            size: "md",
          },
          {
            href: "#",
            text: "Give Now",
          },
          {
            href: "#",
            text: "Give Over Time",
          },
          {
            href: "#",
            text: "Plan Your Gift",
          },
        ],
        [
          {
            type: "heading",
            text: "Corporate Sponsorships",
            size: "md",
          },
          {
            href: "#",
            text: "Connect with Sun Devil Athletics",
          },
        ],
      ],
    },
  ],
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
    title: "Arizona State University",
    // src: "https://live-asuocms.ws.asu.edu/sites/default/files/asu-vertical-logo.png",
    src: "https://thesundevils.com/images/responsive/primary_logo.svg",
    // mobileSrc: "https://live-asuocms.ws.asu.edu/sites/default/files/asu-vertical-logo.png",
    mobileSrc: "https://thesundevils.com/images/responsive/primary_logo.svg",
    brandLink: "/",
  },
  searchUrl: "https://search.asu.edu/search",
  site: "web-sda.dev.site",
};
