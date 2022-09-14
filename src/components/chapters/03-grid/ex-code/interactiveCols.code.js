export const inter_css_cols_start = `.grid-columns {
  display: grid;

  /* For this example: 1 col min; 8 col max */
  grid-template-columns: 1fr`;

export const inter_css_cols_end = `;
  column-gap: .75rem;
}`;

export const inter_jsx_cols_start = `<div className="grid-columns">
  <div className="ex-col" />`;

export const inter_jsx_cols_end = `\n</div>`;
