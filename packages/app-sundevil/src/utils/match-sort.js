/**
 * @template {T}
 * @param {{
 * items: T[],
 * searchQuery: string,
 * toText: (item: T) => string
 * }} input
 * @returns {T[]}
 */
export const matchSort = ({ items, searchQuery, toText }) => {
  if (!searchQuery) return items;

  return items
    .filter(item =>
      toText(item).toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const aText = toText(a).toLowerCase();
      const bText = toText(b).toLowerCase();
      const aIndex = aText.indexOf(searchQuery.toLowerCase());
      const bIndex = bText.indexOf(searchQuery.toLowerCase());

      if (aIndex === bIndex) {
        return 0;
      }
      return aIndex - bIndex;
    });
};
