/**
 * Adds/removes columns from {@link InteractiveGridCells}
 * @function addRemoveColumns
 * @param {string} operation - one of "add" or "remove"
 */
export default function addRemoveColumns(operation) {
  // Grab the parent div and one of the column
  const element = document.getElementById("ex-cols");
  const col = document.getElementsByClassName("ex-col")[0];

  // Use the operation to determine what action is taken.
  if (operation === "add") {
    element.appendChild(col.cloneNode(true));
  } else {
    element.removeChild(col);
  }
}
