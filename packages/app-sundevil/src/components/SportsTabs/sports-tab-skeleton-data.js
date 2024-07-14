/**
 * @type {import("./sports-tabs").Sport[]}
 */
export const sportsTabSkeletonData = Array.from({ length: 12 }, (_, index) => ({
  name: "All Sports",
  icon: "fas fa-sync-alt",
  position: index,
  id: Math.random().toString(),
}));
