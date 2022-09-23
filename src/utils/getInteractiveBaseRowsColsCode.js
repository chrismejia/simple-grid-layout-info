import {
  inter_jsx_cols_start,
  inter_jsx_cols_end,
  inter_css_cols_start,
  inter_css_cols_end,
} from "../components/chapters/03-grid/ex-code/interactiveCols.code";

import {
  inter_jsx_rows_start,
  inter_jsx_rows_end,
  inter_css_rows_start,
  inter_css_rows_end,
} from "../components/chapters/03-grid/ex-code/interactiveRows.code";

export default function getInteractiveBaseRowsColsCode(type) {
  const initialCode = {};

  let baseJSX, baseCSS;

  switch (type) {
    case "column":
      baseJSX = inter_jsx_cols_start + inter_jsx_cols_end;
      baseCSS = inter_css_cols_start + inter_css_cols_end;
      break;
    case "row":
      baseJSX = inter_jsx_rows_start + inter_jsx_rows_end;
      baseCSS = inter_css_rows_start + inter_css_rows_end;
      break;
    default:
      baseJSX = "";
      baseCSS = "";
  }

  initialCode.baseJSX = baseJSX;
  initialCode.baseCSS = baseCSS;

  return initialCode;
}
