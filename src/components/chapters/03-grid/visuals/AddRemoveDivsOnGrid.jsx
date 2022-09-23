export default function AddRemoveDivsOnGrid({ divType, sectionCount }) {
  const divTypeClass =
    divType === "column"
      ? "grid interactive-content ex-cols"
      : "grid interactive-content ex-rows";

  const inlineDivGridSetup =
    divType === "column"
      ? { gridTemplateColumns: `repeat(${sectionCount + 1}, 1fr)` }
      : {
          gridTemplateRows: `repeat(${sectionCount + 1}, 1fr)`,
        };

  const childrenDivType =
    divType === "column" ? (
      <div className="ex-col" />
    ) : (
      <div className="ex-row" />
    );

  return (
    <div className={divTypeClass} style={inlineDivGridSetup}>
      {childrenDivType}
    </div>
  );
}
