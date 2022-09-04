export const container_jsx = `import "./styles/container.css"

export default function App() {
  return (
    <section className="container">
      This is our container.
    </section>
  )
}`;

export const container_css = `.container {
  /* 0 top-bottom margin */
  /* auto set equal left-right margin */
  margin: 0 auto;

  /* to help visualize */
  background-color: #9600a3;
  height: 100px;
}`;

export const index_css = `:root {
  /* Useful Spacing Variable */
  --gap: 32px;

  /* Container width breakpoints */
  --desktop: 960px + (2 * var(--gap));
  --widescreen: 1152px + (2 * var(--gap));
  --fullhd: 1344px + (2 * var(--gap));
}`;

export const container_with_media = `.container {
  /* 0 top-bottom margin */
  /* equal left-right margin */
  margin: 0 auto;

  /* visual aid */
  background-color: #9600a3;
  height: 100px;
}

/* Touch (<1024px) | full window width; automatic */
@media (max-width: 1023px) {
  .container {
    padding: 0 2rem;
  }
}

/* Desktop (1024px to 1215px) | 960px wide */
@media (min-width: 1024px) and (max-width: 1215px) {
  .container {
    max-width: calc(var(--desktop) - 2 * var(--gap));
  }
}

/* Widescreen (1216px to 1407px) | 1152px wide */
@media (min-width: 1216px) and (max-width: 1407px) {
  .container {
    max-width: calc(var(--widescreen) - 2 * var(--gap));
  }
}

/* FullHD (>1408px) | 1344px wide */
@media (min-width: 1408px) {
  .container {
    max-width: calc(var(--fullhd) - 2 * var(--gap));
  }
}`;

export const grid_base = `.grid-wrapper {
  display: grid;
}`;

export const grid_cols_base = `.grid-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
}`;

export const inter_css_cols_start = `.grid-columns {
    display: grid;

    /* For this example: 1 col min; 8 col max */
    grid-template-columns: 1fr`;

export const inter_css_cols_end = `;\n    column-gap: .75rem;\n}`;

export const inter_jsx_cols_start = `<div className="grid-columns">
  <div className="ex-col" />`;

export const inter_jsx_cols_end = `\n</div>`;

export const css_repeat_cols_start = `.grid-columns {
    display: grid;

    /* For this example: 1 col min; 8 col max */
    grid-template-columns: repeat(`;

export const css_repeat_cols_end = `, 1fr);
    column-gap: .75rem;
}`;
