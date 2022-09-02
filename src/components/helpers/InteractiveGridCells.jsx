import { useEffect, useState, useRef } from "react";
import CodeWrapper from "./CodeWrapper";
import HighlightedCode from "./HighlightedCode";

export default function InteractiveGridCells() {
  const [demoCode, setDemoCode] = useState(`.grid-wrapper-rows-cols {
    display: grid;
    grid-template-columns: 1fr`);
  const [cols, setCols] = useState(1);
  const grid = useRef();

  const colLimiter = (currentCols) => {
    if (currentCols >= 1 && currentCols <= 6) {
      totalCols(currentCols);
    }
  };

  const totalCols = (numCols) => {
    // Edit the display code
    const fractionalCode = " 1fr".repeat(numCols);

    const updated = `${demoCode}${fractionalCode};\n};`;
    setDemoCode(updated);
  };

  useEffect(() => {
    totalCols(cols);
  }, [cols]);

  return (
    <div>
      <button
        onClick={(c) => {
          setCols((c) => c + 1);
          colLimiter(c);
        }}
      >
        Add a column
      </button>
      <div className="interactive-grid">
        <div></div>
      </div>
      <HighlightedCode
        code={demoCode}
        codeFilename={"styles/grid.css"}
        codeLang={"css"}
      />
    </div>
  );
}
