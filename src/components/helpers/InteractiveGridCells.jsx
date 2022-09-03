import { useState } from "react";
import CodeWrapper from "./CodeWrapper";
import HighlightedCode from "./HighlightedCode";
import {
  inter_css_cols_start,
  inter_css_cols_end,
  inter_jsx_cols_start,
  inter_jsx_cols_end,
} from "../../code-examples";

export default function InteractiveGridCells() {
  const initialCSSCode = inter_css_cols_start + inter_css_cols_end;
  const initialJSXCode = inter_jsx_cols_start + inter_jsx_cols_end;

  const [cssCode, setCSSCode] = useState(initialCSSCode);
  const [jsxCode, setJSXCode] = useState(initialJSXCode);
  const [cols, setCols] = useState(0);

  /**
   * Gatekeps interactive column adding/removing function to prevent
   * too many or too few columns. Hard coded limits set to 2 and 6
   * @function colNumChecker
   * @param {string} operation - one of "add" or "minus"
   */
  const colNumChecker = (operation) => {
    // prelim check to gatekeep too few/too many cols
    let nextCols = operation === "add" ? cols + 1 : cols - 1;

    if (nextCols >= 0 && nextCols <= 5) {
      adjustExample(nextCols, operation);
    }
  };

  /**
   * Does three things
   * 1. Edits the display JSX & CSS code
   * 2. Updates total column count
   * 3. Adds/removes column to interactive example
   * @function adjustExample
   * @param {number} numCols - number of cols; received from {@link colNumChecker}
   * @param {string} operation - dictates whether to add/remove columns from .result-grid
   */
  const adjustExample = (numCols, operation) => {
    // Edit display JSX code
    const jsxDivs = `\n  <div className="ex-col" />`.repeat(numCols);
    const updatedJSX = `${inter_jsx_cols_start}${jsxDivs}${inter_jsx_cols_end}`;
    setJSXCode(updatedJSX);

    // Edit display CSS code
    const cssFr = " 1fr".repeat(numCols);
    const updatedCSS = `${inter_css_cols_start}${cssFr}${inter_css_cols_end}`;
    setCSSCode(updatedCSS);

    // Set new col count
    setCols(numCols);

    // Grab the parent div and one of the column
    const element = document.getElementById("ex-cols");
    const col = document.getElementsByClassName("ex-col")[0];

    // Use the
    if (operation === "add") {
      element.appendChild(col.cloneNode(true));
    } else {
      element.removeChild(col);
    }
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
              colNumChecker("add");
            }}
          >
            Add a Column
          </button>
          <button
            onClick={() => {
              colNumChecker("remove");
            }}
          >
            Remove a Column
          </button>
        </div>
        <div
          id="ex-cols"
          style={{ gridTemplateColumns: `repeat(${cols + 1}, 1fr)` }}
        >
          <div className="ex-col" />
        </div>
      </div>
    </>
  );
}
