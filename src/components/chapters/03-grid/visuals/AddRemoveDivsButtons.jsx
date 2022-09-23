export default function AddRemoveDivsButtons({ currentSectionCount }) {
  return (
    <div className="column-controls">
      <button
        onClick={() => {
          sectionNumChecker(currentSectionCount, "add");
        }}
      ></button>
      <button
        onClick={() => {
          sectionNumChecker(currentSectionCount, "remove");
        }}
      ></button>
    </div>
  );
}

/**
 * Gatekeeps interactive column adding/removing function to prevent
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
