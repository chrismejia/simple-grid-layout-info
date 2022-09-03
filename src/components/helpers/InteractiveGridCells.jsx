import { useEffect, useState, useRef } from "react";
import CodeWrapper from "./CodeWrapper";
import HighlightedCode from "./HighlightedCode";

export default function InteractiveGridCells() {
  const baseCode = `.grid-wrapper-rows-cols {
    display: grid;

    /* For this example: 2 col min; 6 col max*/
    grid-template-columns: 1fr`;

  const codeEnd = "\n}";
  const initialCode = baseCode + codeEnd;

  const [demoCode, setDemoCode] = useState(initialCode);
  const [cols, setCols] = useState(1);

  /**
   * Gatekeesp interactive column adding/removing function to prevent
   * too many or too few columns. Hard coded limits set to 2 and 6
   * @function colNumChecker
   * @param {string} operation - one of "add" or "minus"
   */
  const colNumChecker = (operation) => {
    // prelim check to gatekeep too few/too many cols
    let nextCols = operation === "add" ? cols + 1 : cols - 1;

    if (nextCols >= 1 && nextCols <= 5) {
      adjustExample(nextCols, operation);
    }
  };

  /**
   * Does three things
   * 1.
   * 2. Edits the display code
   * 3. Updates total column count
   * @function adj
   * @param {number} numCols - number of cols; received from {@link colNumChecker}
   * @param {string} operation - dictates whether to add/remove columns from .result-grid
   */
  const adjustExample = (numCols, operation) => {
    // Edit the display code
    const fractionalCode = " 1fr".repeat(numCols);
    const updated = `${baseCode}${fractionalCode};\n};`;
    setDemoCode(updated);

    // Set new col count
    setCols(numCols);

    const element = document.getElementById("all-example-cols");
    const col = singleCol();
    if (operation === "add") {
      element.appendChild(col);
    }
  };

  const singleCol = () => <div className="ex-col" />;

  return (
    <div className="grid interactive">
      <div className="result-grid">
        <div className="column-controls">
          <button
            onClick={() => {
              colNumChecker("add");
            }}
          >
            Add a column
          </button>
          <button
            onClick={() => {
              colNumChecker("remove");
            }}
          >
            Remove a column
          </button>
        </div>
        <div
          id="all-example-cols"
          style={{ gridTemplateColumns: `repeat(${cols + 1}, 1fr)` }}
        >
          <div className="ex-col" />
          <div className="ex-col" />
        </div>
      </div>
      <HighlightedCode
        code={demoCode}
        codeFilename={"styles/grid.css"}
        codeLang={"css"}
      />
    </div>
  );
}
