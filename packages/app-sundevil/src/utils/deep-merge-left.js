function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}

export function deepMergeLeft(target, source) {
  if (!isObject(target) || !isObject(source)) {
    return target;
  }

  const result = { ...source }; // Start with a shallow copy of the source

  Object.keys(target).forEach(key => {
    if (isObject(target[key])) {
      if (!(key in source)) {
        Object.assign(result, { [key]: target[key] });
      } else {
        result[key] = deepMergeLeft(target[key], source[key]);
      }
    } else {
      Object.assign(result, { [key]: target[key] });
    }
  });

  return result;
}
