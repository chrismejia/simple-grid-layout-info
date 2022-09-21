export const mdnQuoteData = {
  grid_auto_flow: {
    propName: "grid-auto-flow",
    mdnQuotes: [
      "The grid-auto-flow CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.",
    ],
    mdnLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow",
    defaultVal: "'row' (horizontal)",
  },
  gap: {
    propName: "gap (grid-gap)",
    mdnQuotes: [
      "The gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap and column-gap.",
      "This property is specified as a value for <'row-gap'> followed optionally by a value for <'column-gap'>. If <'column-gap'> is omitted, it's set to the same value as <'row-gap'>.",
      "<'row-gap'> and <'column-gap'> are each specified as a <length> or a <percentage>.",
    ],
    mdnLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/gap",
    defaultVal: "none (0 row-gap, 0 column-gap)",
  },
  repeat: {
    propName: "repeat()",
    mdnQuotes: [
      "The repeat() CSS function represents a repeated fragment of the track list, allowing a large number of columns or rows that exhibit a recurring pattern to be written in a more compact form.",
      "This function can be used in the CSS Grid properties 'grid-template-columns' and 'grid-template-rows'.",
      "The repeat() function takes two arguments: <repeat count>, <tracks>",
    ],
    mdnLink: "https://developer.mozilla.org/en-US/docs/Web/CSS/repeat",
  },
};
