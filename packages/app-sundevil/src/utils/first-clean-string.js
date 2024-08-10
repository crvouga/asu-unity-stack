export const firstCleanString = (...strings) => {
  return (
    strings.find(
      string => typeof string === "string" && string.trim().length > 0
    ) ?? null
  );
};
