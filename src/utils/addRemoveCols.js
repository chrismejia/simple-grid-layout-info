/**
 * Adds/removes columns from {@link InteractiveRowsCols}
 * @function addRemoveColumns
 * @param {string} operation - one of "add" or "remove"
 */
export default function addRemoveColumns(operation) {
  /**
   * NB: Columns example is the top (first) in the {@link RowsAndColumns} component!
   * Grab the parent div and one of the column
   */
  const element = document.getElementsByClassName("interactive-content")[0];
  const col = document.getElementsByClassName("ex-col")[0];

  // Use the operation to determine what action is taken.
  if (operation === "add") {
    element.appendChild(col.cloneNode(true));
  } else {
    element.removeChild(col);
  }
}
