import {
  inter_css_cols_start,
  inter_css_cols_end,
} from "../components/chapters/03-grid/ex-code/interactiveCols.code";

import {
  inter_css_rows_start,
  inter_css_rows_end,
} from "../components/chapters/03-grid/ex-code/interactiveRows.code";

export default function updateExampleCSSCode(numOfRepetitions, rowOrCol) {
  let updatedExampleCSS;

  const cssFr = " 1fr".repeat(numOfRepetitions);

  if (rowOrCol === "column") {
    updatedExampleCSS = `${inter_css_cols_start}${cssFr}${inter_css_cols_end}`;
  } else {
    updatedExampleCSS = `${inter_css_rows_start}${cssFr}${inter_css_rows_end}`;
  }

  return updatedExampleCSS;
}
