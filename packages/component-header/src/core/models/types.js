// @ts-check

// @ts-check

/**
 * @typedef {object} Logo
 * @property {string} alt
 * @property {string} title
 * @property {string} src
 * @property {string} mobileSrc
 * @property {string} brandLink
 * @property {string | number} [width]
 * @property {string | number} [height]
 * @property {string | number} [mobileWidth]
 * @property {string | number} [mobileHeight]
 */

/**
 * @typedef {object} Button
 * @property {string} href
 * @property {("gold"|"maroon"|"light"|"dark")} [color]
 * @property {string} text
 * @property {string} [classes]
 * @property {string} [faClassName]
 * @property {function} [onClick]
 * @property {function} [onFocus]
 */

/**
 * @typedef {object} NavTreeItemsConfig
 * @property {"underline" | "none"} [navTreeItemVariant]
 * @property {boolean} [hideFooter]
 */

/**
 * @typedef {object} NavTreePropFooter
 * @property {"button-with-text" | "image-only"} [type]
 * @property {string} [text]
 * @property {string} [imageSrc]
 * @property {string} [imageAlt]
 * @property {string} [imageHeight]
 * @property {string} [imageWidth]
 * @property {string} [buttonHref]
 * @property {string} [buttonText]
 */

/**
 * @typedef {object} NavTreeProps
 * @property {number} id
 * @property {string} [href]
 * @property {string} [text]
 * @property {string} [type]
 * @property {boolean} [selected]
 * @property {object[]} [items]
 * @property {function} [renderContent]
 * @property {boolean} [isMega]
 * @property {Button[]} [buttons]
 * @property {NavTreePropFooter[]} [footers]
 * @property {string} [class]
 * @property {function} [onClick]
 * @property {NavTreeItemsConfig | null} [mobile]
 */

/**
 * @typedef {object} UniversalNavBarProps
 * @property {function} [renderStart]
 * @property {boolean} [hideMobile]
 */

/**
 * @typedef {object} HamburgerProps
 * @property {function} [renderOpen]
 * @property {function} [renderClose]
 */

/**
 * @typedef {object} MobileProps
 * @property {HamburgerProps} [hamburger]
 */
/**
 * @typedef {object} HeaderProps
 * @property {boolean} isPartner
 * @property {NavTreeProps[]} navTree
 * @property {string} [title]
 * @property {string} [baseUrl]
 * @property {string} [parentOrg]
 * @property {string} [parentOrgUrl]
 * @property {Logo} partnerLogo
 * @property {Logo} logo
 * @property {Logo} sponsorLogo
 * @property {boolean} loggedIn
 * @property {string} userName
 * @property {string} loginLink
 * @property {function} [onLoginClick]
 * @property {string} logoutLink
 * @property {function} [onLogoutClick]
 * @property {Button[]} buttons
 * @property {("Lg"|"Xl")} breakpoint
 * @property {boolean} animateTitle
 * @property {boolean} expandOnHover
 * @property {MobileProps} [mobile]
 * @property {NavTreeProps[]} mobileNavTree
 * @property {string} searchUrl
 * @property {string} site
 * @property {string} renderDiv - Can be either "true" or "false".
 * @property {UniversalNavBarProps | null} [universalNavbar]
 */

export const JSDOC = "jsdoc";
