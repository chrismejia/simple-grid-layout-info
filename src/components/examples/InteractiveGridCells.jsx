import { useState } from "react";
import CodeWrapper from "../helpers/CodeWrapper";
import HighlightedCode from "../helpers/HighlightedCode";
import addRemoveColumns from "../../utils/addRemoveCols";
import {
  inter_jsx_cols_start,
  inter_jsx_cols_end,
  inter_css_cols_start,
  inter_css_cols_end,
} from "../../code-samples/code-examples";

export default function InteractiveGridCells({ rowOrCol, cssStart, cssEnd }) {
  let initialCSSCode, initialJSXCode;

  if (rowOrCol === "column") {
    initialCSSCode = inter_css_cols_start + inter_css_cols_end;
    initialJSXCode = inter_jsx_cols_start + inter_jsx_cols_end;
  } else {
    initialCSSCode;
    initialJSXCode;
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
   * 2. Updates total column count
   * 3. Adds/removes column to interactive example
   * @function adjustExample
   * @param {number} numSections - number of rows OR cols; received from {@link sectionNumChecker}
   * @param {string} operation - dictates whether to add/remove columns from .result-grid
   */
  const adjustExample = (numSections, operation) => {
    // Edit display JSX code
    const jsxDivs = `\n  <div className="ex-col" />`.repeat(numSections);
    const updatedJSX = `${inter_jsx_cols_start}${jsxDivs}${inter_jsx_cols_end}`;
    setJSXCode(updatedJSX);

    // Edit display CSS code
    const cssFr = " 1fr".repeat(numSections);
    const updatedCSS = `${cssStart}${cssFr}${cssEnd}`;
    setCSSCode(updatedCSS);

    // Set new col count
    setSectionCount(numSections);

    addRemoveColumns(operation);
  };

  return (
    <>
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
      <div className="result-grid">
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
          id="ex-cols"
          style={{ gridTemplateColumns: `repeat(${sections + 1}, 1fr)` }}
        >
          <div className="ex-col" />
        </div>
      </div>
    </>
  );
}
