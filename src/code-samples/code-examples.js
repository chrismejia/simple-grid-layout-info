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
 * Below desktop size, .container is the full browser width.
 * Instead, pad .container by (½ * --container-margin), 32px
 *
 * Above it, we ensure at least 32px space per container side
 */
@media (max-width: 1023px) {
  .container {
    padding: 0 32px;
  }
}

/* Desktop (1024px to 1215px) | 960px wide */
@media (min-width: 1024px) and (max-width: 1215px) {
  .container {
    max-width: calc(var(--desktop) - var(--container-margin));
  }
}

/* Widescreen (1216px to 1407px) | 1152px wide */
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
