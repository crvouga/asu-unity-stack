export const safeEncode = input => {
  try {
    return btoa(JSON.stringify(input));
  } catch (error) {
    try {
      return JSON.stringify(input);
    } catch (_error) {
      try {
        return String(input);
      } catch (__error) {
        return "";
      }
    }
  }
};
