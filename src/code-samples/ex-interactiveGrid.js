/**
 * COLUMN EXAMPLE CODE
 */
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

/**
 * ROW EXAMPLE CODE
 */
export const inter_css_rows_start = `.grid-columns {
  display: grid;

  /* For this example: 1 row min; 8 row max */
  grid-template-rows: 1fr`;

export const inter_css_rows_end = `;
  row-gap: .75rem;
}`;

export const inter_jsx_rows_start = `<div className="grid-rows">
  <div className="ex-row" />`;

export const inter_jsx_rows_end = `\n</div>`;
