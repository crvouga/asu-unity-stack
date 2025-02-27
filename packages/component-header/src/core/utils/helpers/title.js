// @ts-check
/**
 * Adds minutes to given date
 * @param {string | Date} date
 * @param {number} minutes
 * @returns {Date}
 */
const addMinutesToDate = (date, minutes) => {
  const dateWithMinutes = new Date(date);
  dateWithMinutes.setMinutes(dateWithMinutes.getMinutes() + minutes);
  return dateWithMinutes;
};

/**
 * Check whether this is the first page load of the site.
 * @param {string} root - The full URL of the site root, used to check against document.referrer
 */
const checkFirstLoad = root => {
  const LOCALHOST = "localhost";
  const KEY_TITLE_LOADED = "title_loaded";
  const now = new Date();

  const siteRoot = root || window.location.hostname;
  // Check if title_loaded is set
  const titleLoaded = localStorage.getItem("title_loaded");
  const titleLoadedExpired =
    titleLoaded && now.getTime() > parseInt(titleLoaded, 10);

  // Check for localhost to avoid the other validations (Storybook use case)
  const isLocalSite = siteRoot === LOCALHOST;
  // check if referrer matches site
  const hasMatchingReferrer = document.referrer.includes(siteRoot);
  // check if title is loaded and not expired
  const hasValidTitle = !titleLoaded || titleLoadedExpired;

  if (isLocalSite || (!hasMatchingReferrer && hasValidTitle)) {
    // Set 10 minutes to now date and set it as expiration time
    const expirationTime = addMinutesToDate(now, 10).getTime();
    localStorage.setItem(KEY_TITLE_LOADED, expirationTime.toString());
    return true;
  }

  return false;
};

export { checkFirstLoad };
