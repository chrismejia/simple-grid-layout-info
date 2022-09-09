/**
 * Adds/removes columns from {@link InteractiveGridCells}
 * @function addRemoveRows
 * @param {string} operation - one of "add" or "remove"
 */
export default function addRemoveRows(operation) {
  /**
   * NB: Rows example is the bottom (last) in the {@link RowsAndColumns} component!
   * Grab the parent div and one of the column
   */
  const element = document.getElementsByClassName("interactive-content")[1];
  const col = document.getElementsByClassName("ex-row")[0];

  // Use the operation to determine what action is taken.
  if (operation === "add") {
    element.appendChild(col.cloneNode(true));
  } else {
    element.removeChild(col);
  }
}
