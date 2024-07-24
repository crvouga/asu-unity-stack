/**
 * @typedef {string} Time
 */
/**
 * Formats time to ASU style
 * @param {string} time
 * @returns {string}
 */
export function formatTimeAmPm(time) {
  if (!time) {
    return "";
  }
  if (time === "TBD") {
    return "Time TBD";
  }
  let amPm = time.slice(-2).toUpperCase();
  switch (amPm) {
    case "AM":
      amPm = "a.m.";
      break;
    case "PM":
      amPm = "p.m.";
      break;
    default:
      amPm = "";
      return time;
  }
  return `${time.slice(0, -2)} ${amPm}`;
}
