export const pushDataLayer = event => {
  if (
    typeof window !== "undefined" &&
    typeof window.dataLayer !== "undefined" &&
    typeof window.dataLayer.push === "function"
  ) {
    window.dataLayer.push(event);
  } else {
    // eslint-disable-next-line no-console
    console.warn(
      "pushing data layer event failed. window.dataLayer.push is not a function",
      event
    );
  }
};
