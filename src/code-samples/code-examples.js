export const index_css = `:root {
  --desktop: 960px;
  --widescreen: 1152px;
  --fullhd: 1344px;
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
    max-width: var(--desktop);
  }
}

/* Widescreen (1216px to 1407px) | 1152px wide */
@media (min-width: 1216px) and (max-width: 1407px) {
  .container {
    max-width: var(--widescreen);
  }
}

/* FullHD (>1408px) | 1344px wide */
@media (min-width: 1408px) {
  .container {
    max-width: var(--fullhd);
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

/**************************************
 * MindTheGap.jsx
 *************************************/
export const no_gap_jsx = `<div className="grid no-gap outer-border">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>`;

export const no_gap_css = ``;

/**
 * InteractiveGridCells.jsx
 */
export const css_repeat_cols_start = `.grid-columns {
    display: grid;

    /* For this example: 1 col min; 8 col max */
    grid-template-columns: repeat(`;

export const css_repeat_cols_end = `, 1fr);
    column-gap: .75rem;
}`;

/**************************************
 * FiveColsFourWide.jsx
 *************************************/
export const four_cols_wide_css = `.outer-border {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}`;

export const four_cols_wide_jsx = `<div class="outer-border">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>`;
