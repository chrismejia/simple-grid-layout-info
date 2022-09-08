export const index_css = `:root {
  /* Container Margin & Breakpoint Variables */
  /* 960, 1152, 1344 all divisible by 12 and 16 */

  --container-margin: 64px;

  --desktop: 1024px;
  --widescreen: 1216px;
  --fullhd: 1408px;
}`;

export const container_with_media = `/* Center the container by auto setting left-right margins */
.container {
  margin: 0 auto;
}

/*
 * Manage the container's width at different screen widths
 *
 * Below desktop size we want our container to be the full window width,
 * but pad the container's contents on each side by 2rem.
 *
 * Above it, we ensure a 32px space on the container, per side, per breakpoint
 */
@media (max-width: 1023px) {
  .container {
    padding: 0 2rem;
  }
}

/* Desktop (1024px to 1215px) | 960px wide */
@media (min-width: 1024px) and (max-width: 1215px) {
  .container {
    max-width: calc(var(--desktop) - var(--container-margin));
  }
}

/* laptop (1216px to 1407px) | 1152px wide */
@media (min-width: 1216px) and (max-width: 1407px) {
  .container {
    max-width: calc(var(--widescreen) - var(--container-margin));
  }
}

/* FullHD (>1408px) | 1344px wide */
@media (min-width: 1408px) {
  .container {
    max-width: calc(var(--fullhd) - var(--container-margin));
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
