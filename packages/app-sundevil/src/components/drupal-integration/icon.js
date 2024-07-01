/** @type {(icon: unknown) => icon is {icon_name: string, style: string}} */
const isIcon = icon =>
  Boolean(
    icon && typeof icon === "object" && "icon_name" in icon && "style" in icon
  );

/** @type {(icon: unknown) => string} */
export const iconToFaClassName = icon => {
  if (!isIcon(icon)) {
    return "";
  }
  return `fa ${icon.style} fa-${icon.icon_name}`;
};
