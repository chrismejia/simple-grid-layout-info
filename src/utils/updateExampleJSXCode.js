import {
  inter_jsx_cols_start,
  inter_jsx_cols_end,
} from "../components/chapters/03-grid/ex-code/interactiveCols.code";

import {
  inter_jsx_rows_start,
  inter_jsx_rows_end,
} from "../components/chapters/03-grid/ex-code/interactiveRows.code";

export default function updateExampleJSXCode(numOfRepetitions, rowOrCol) {
  let updatedExampleJSX, jsxChildren;

  const baseColsJSX = `\n  <div className="ex-col" />`;
  const baseRowsJSX = `\n  <div className="ex-row" />`;

  if (rowOrCol === "column") {
    jsxChildren = baseColsJSX.repeat(numOfRepetitions);
    updatedExampleJSX = `${inter_jsx_cols_start}${jsxChildren}${inter_jsx_cols_end}`;
  } else {
    jsxChildren = baseRowsJSX.repeat(numOfRepetitions);
    updatedExampleJSX = `${inter_jsx_rows_start}${jsxChildren}${inter_jsx_rows_end}`;
  }

  return updatedExampleJSX;
}
