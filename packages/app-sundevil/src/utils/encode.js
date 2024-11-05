export const safeEncode = input => {
  try {
    const json = JSON.stringify(input);
    try {
      return btoa(json);
    } catch (error) {
      return json;
    }
  } catch (error) {
    try {
      return String(input);
    } catch (__error) {
      return "";
    }
  }
};
