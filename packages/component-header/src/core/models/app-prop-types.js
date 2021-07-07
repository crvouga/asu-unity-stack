// @ts-check
import PropTypes from "prop-types";

const LogoPropTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
  mobileSrc: PropTypes.string,
  brandLink: PropTypes.string,
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

const HeaderPropTypes = {
  isPartner: PropTypes.bool,
  navTree: PropTypes.arrayOf(PropTypes.object),
  partnerLogo: PropTypes.shape(LogoPropTypes),
  logo: PropTypes.shape(LogoPropTypes),
  title: PropTypes.string,
  parentOrg: TitlePropTypes.parentOrg,
  parentOrgUrl: TitlePropTypes.parentOrgUrl,
  baseUrl: TitlePropTypes.baseUrl,
  loggedIn: LoginPropTypes.loggedIn,
  userName: LoginPropTypes.userName,
  loginLink: LoginPropTypes.loginLink,
  logoutLink: LoginPropTypes.logoutLink,
  buttons: PropTypes.arrayOf(PropTypes.object),
  breakpoint: PropTypes.oneOf(["Lg", "Xl"]),
  animateTitle: PropTypes.bool,
  expandOnHover: PropTypes.bool,
  mobileNavTree: PropTypes.arrayOf(PropTypes.object),
};

export { HeaderPropTypes, LoginPropTypes, LogoPropTypes, TitlePropTypes };
