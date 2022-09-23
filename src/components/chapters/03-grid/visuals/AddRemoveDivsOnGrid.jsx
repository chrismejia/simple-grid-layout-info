export default function AddRemoveDivsOnGrid({ divType }) {
  const divTypeClass =
    divType === "column"
      ? "grid interactive-content ex-cols"
      : "grid interactive-content ex-rows";

  const inlineDivGridSetup =
    divType === "column"
      ? { gridTemplateColumns: `repeat(${sections + 1}, 1fr)` }
      : {
          gridTemplateRows: `repeat(${sections + 1}, 1fr)`,
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
