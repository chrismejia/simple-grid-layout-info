export const pageNavFlow = {
  base: {
    back: undefined,
    next: { linkText: "Container", linkURL: "/container#" },
  },
  container: {
    back: { linkText: "Intro", linkURL: "/#" },
    next: { linkText: "Grid", linkURL: "/grid#" },
  },
  grid: {
    back: { linkText: "Container", linkURL: "/container#" },
    next: { linkText: "Templating", linkURL: "/templating#" },
  },
  templating: {
    back: { linkText: "Grid", linkURL: "/grid#" },
    next: { linkText: "Layouts", linkURL: "/layouts#" },
  },
  layouts: {
    back: { linkText: "Templating", linkURL: "/templating#" },
    next: { linkText: "Challenges", linkURL: "/challenges#" },
  },
  challenges: {
    back: { linkText: "Layouts", linkURL: "/layouts#" },
    next: undefined,
  },
};
