import { useState } from "react";

import CodeWrapper from "../../../helpers/CodeWrapper";
import HighlightedCode from "../../../helpers/HighlightedCode";
import InteractiveGridWithButtons from "../../../helpers/InteractiveGridWithButtons";

import AddRemoveDivsOnGrid from "./AddRemoveDivsOnGrid";

import addRemoveColumns from "../../../../utils/addRemoveCols";
import getInteractiveBaseRowsColsCode from "../../../../utils/getInteractiveBaseRowsColsCode";
import updateExampleCSSCode from "../../../../utils/updateExampleCSSCode";
import updateExampleJSXCode from "../../../../utils/updateExampleJSXCode";

import addRemoveRows from "../../../../utils/addRemoveRows";

export default function InteractiveRowsCols({ rowOrCol }) {
  const { baseJSX, baseCSS } = getInteractiveBaseRowsColsCode(rowOrCol);

  const [jsxCode, setJSXCode] = useState(baseJSX);
  const [cssCode, setCSSCode] = useState(baseCSS);
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

    const updatedJSX = updateExampleJSXCode(numSections, operation);
    setJSXCode(updatedJSX);

    // Merge CSS Code based on "column" or "row" rowOrCol value:
    const updatedCSS = updateExampleCSSCode(numSections, operation);
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

      <InteractiveGridWithButtons
        gridExample={
          <AddRemoveDivsOnGrid divType={rowOrCol} sectionCount={sections} />
        }
      >
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
      </InteractiveGridWithButtons>
    </article>
  );
}
