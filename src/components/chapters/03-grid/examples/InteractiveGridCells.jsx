import { useState } from "react";
import CodeWrapper from "../../../helpers/CodeWrapper";
import HighlightedCode from "../../../helpers/HighlightedCode";
import addRemoveColumns from "../../../../utils/addRemoveCols";
import {
  inter_jsx_cols_start,
  inter_jsx_cols_end,
  inter_css_cols_start,
  inter_css_cols_end,
  inter_jsx_rows_start,
  inter_jsx_rows_end,
  inter_css_rows_start,
  inter_css_rows_end,
} from "../../../../code-samples/ex-interactiveGrid";
import addRemoveRows from "../../../../utils/addRemoveRows";

export default function InteractiveGridCells({ rowOrCol }) {
  let initialCSSCode, initialJSXCode;

  if (rowOrCol === "column") {
    initialCSSCode = inter_css_cols_start + inter_css_cols_end;
    initialJSXCode = inter_jsx_cols_start + inter_jsx_cols_end;
  } else {
    initialCSSCode = inter_css_rows_start + inter_css_rows_end;
    initialJSXCode = inter_jsx_rows_start + inter_jsx_rows_end;
  }

  const [cssCode, setCSSCode] = useState(initialCSSCode);
  const [jsxCode, setJSXCode] = useState(initialJSXCode);
  const [sections, setSectionCount] = useState(0);

  /**
   * Gatekeps interactive column adding/removing function to prevent
   * too many or too few columns. Hard coded limits set to 1 and 8
   * @function sectionNumChecker
   * @param {string} operation - one of "add" or "minus"
   */
  const sectionNumChecker = (operation) => {
    // prelim check to gatekeep too few/too many sections
    let nextSectionCount = operation === "add" ? sections + 1 : sections - 1;

    if (nextSectionCount >= 0 && nextSectionCount <= 7) {
      adjustExample(nextSectionCount, operation);
    }
  };

  /**
   * Does three things
   * 1. Edits the display JSX & CSS code
   * 2. Updates total column/row count based
   * 3. Adds/removes column to interactive example
   * @function adjustExample
   * @param {number} numSections - number of rows OR cols; received from {@link sectionNumChecker}
   * @param {string} operation - dictates whether to add/remove columns from .result-grid
   */
  const adjustExample = (numSections, operation) => {
    // Edit display JSX code

    let updatedJSX, jsxDivs;
    if (rowOrCol === "column") {
      jsxDivs = `\n  <div className="ex-col" />`.repeat(numSections);
      updatedJSX = `${inter_jsx_cols_start}${jsxDivs}${inter_jsx_cols_end}`;
    } else {
      jsxDivs = `\n  <div className="ex-row" />`.repeat(numSections);
      updatedJSX = `${inter_jsx_rows_start}${jsxDivs}${inter_jsx_rows_end}`;
    }
    setJSXCode(updatedJSX);

    // Edit display CSS code
    const cssFr = " 1fr".repeat(numSections);

    // Merge CSS Code based on "column" or "row" rowOrCol value:
    let updatedCSS;
    if (rowOrCol === "column") {
      updatedCSS = `${inter_css_cols_start}${cssFr}${inter_css_cols_end}`;
    } else {
      updatedCSS = `${inter_css_rows_start}${cssFr}${inter_css_rows_end}`;
    }
    setCSSCode(updatedCSS);

    // Set new col count
    setSectionCount(numSections);

    if (rowOrCol === "column") {
      addRemoveColumns(operation);
    } else {
      addRemoveRows(operation);
    }
  };

  return (
    <article className="example">
      <CodeWrapper sections={2}>
        <HighlightedCode
          code={jsxCode}
          codeFilename={"App.jsx"}
          codeLang={"jsx"}
        />
        <HighlightedCode
          code={cssCode}
          codeFilename={"styles/grid.css"}
          codeLang={"css"}
        />
      </CodeWrapper>

      <div className="grid interactive example">
        <div className="column-controls">
          <button
            onClick={() => {
              sectionNumChecker("add");
            }}
          >
            {rowOrCol === "column" ? "Add a Column" : "Add a Row"}
          </button>
          <button
            onClick={() => {
              sectionNumChecker("remove");
            }}
          >
            {rowOrCol === "column" ? "Remove a Column" : "Remove a Row"}
          </button>
        </div>
        <div
          className={
            rowOrCol === "column"
              ? "grid interactive-content ex-cols"
              : "grid interactive-content ex-rows"
          }
          style={
            rowOrCol === "column"
              ? { gridTemplateColumns: `repeat(${sections + 1}, 1fr)` }
              : {
                  gridTemplateRows: `repeat(${sections + 1}, 1fr)`,
                }
          }
        >
          {rowOrCol === "column" ? (
            <div className="ex-col" />
          ) : (
            <div className="ex-row" />
          )}
        </div>
      </div>
    </article>
  );
}
