// @ts-check
import PropTypes from "prop-types";

const LogoPropTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
  src: PropTypes.string,
  mobileSrc: PropTypes.string,
  brandLink: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mobileWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  mobileHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

const TitlePropTypes = {
  baseUrl: PropTypes.string,
  parentOrg: PropTypes.string,
  parentOrgUrl: PropTypes.string,
  animate: PropTypes.bool,
};

const LoginPropTypes = {
  loggedIn: PropTypes.bool,
  loginLink: PropTypes.string,
  logoutLink: PropTypes.string,
  userName: PropTypes.string,
};

const ButtonPropTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.oneOf(["gold", "maroon", "light", "dark"]),
  href: PropTypes.string.isRequired,
  classes: PropTypes.string,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  faClassName: PropTypes.string,
};

const NavTreeItemsConfig = PropTypes.shape({
  navTreeItemVariant: PropTypes.oneOf(["underline", "none"]),
  hideFooter: PropTypes.bool,
});

const NavTreePropTypes = PropTypes.shape({
  id: PropTypes.number,
  href: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  selected: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
  renderContent: PropTypes.func,
  buttons: PropTypes.arrayOf(PropTypes.shape(ButtonPropTypes)),
  class: PropTypes.string,
  mobile: NavTreeItemsConfig,
});

const UniversalNavbarPropTypes = PropTypes.shape({
  renderStart: PropTypes.func,
  hideMobile: PropTypes.bool,
});

const NavTreePropFooter = PropTypes.shape({
  type: PropTypes.oneOf(["button-with-text", "image-only"]),
  text: PropTypes.string,
  imageSrc: PropTypes.string,
  imageAlt: PropTypes.string,
  imageWidth: PropTypes.string,
  imageHeight: PropTypes.string,
  buttonHref: PropTypes.string,
  buttonText: PropTypes.string,
});

const HamburgerPropTypes = PropTypes.shape({
  renderOpen: PropTypes.func,
  renderClose: PropTypes.func,
});

const MobilePropTypes = PropTypes.shape({
  hamburger: HamburgerPropTypes,
});

const HeaderPropTypes = {
  isPartner: PropTypes.bool,
  navTree: PropTypes.arrayOf(NavTreePropTypes),
  partnerLogo: PropTypes.shape(LogoPropTypes),
  logo: PropTypes.shape(LogoPropTypes),
  sponsorLogo: PropTypes.shape(LogoPropTypes),
  title: PropTypes.string,
  parentOrg: TitlePropTypes.parentOrg,
  parentOrgUrl: TitlePropTypes.parentOrgUrl,
  baseUrl: TitlePropTypes.baseUrl,
  loggedIn: LoginPropTypes.loggedIn,
  userName: LoginPropTypes.userName,
  loginLink: LoginPropTypes.loginLink,
  onLoginClick: PropTypes.func,
  logoutLink: LoginPropTypes.logoutLink,
  onLogoutClick: PropTypes.func,
  buttons: PropTypes.arrayOf(PropTypes.shape(ButtonPropTypes)),
  breakpoint: PropTypes.oneOf(["Lg", "Xl"]),
  animateTitle: PropTypes.bool,
  expandOnHover: PropTypes.bool,
  mobileNavTree: PropTypes.arrayOf(NavTreePropTypes),
  hasNavigation: PropTypes.bool,
  searchUrl: PropTypes.string,
  site: PropTypes.string,
  renderDiv: PropTypes.oneOf(["true", "false"]),
  mobile: MobilePropTypes,
  universalNavbar: UniversalNavbarPropTypes,
  footers: PropTypes.arrayOf(NavTreePropFooter),
};

export {
  ButtonPropTypes,
  HeaderPropTypes,
  LoginPropTypes,
  LogoPropTypes,
  NavTreeItemsConfig,
  NavTreePropFooter,
  NavTreePropTypes,
  TitlePropTypes,
};
