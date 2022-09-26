export default function IndividualGridLines() {
  return (
    <div className="grid individual-lines">
      <div className="filled">1</div>
      <div className="filled">1</div>
      <div className="filled">1</div>
      <div className="filled">1</div>
      <div className="filled">1</div>

      {/* Two wide */}
      <div className="filled two-wide">
        <code className="inline">start-col to end-col 2</code>
      </div>
      <div className="filled">1</div>
      <div className="filled">1</div>
      <div className="filled">1</div>

      {/* Three-wide; three-tall */}
      <div className="filled">1</div>
      <div className="filled three-wide-tall">
        <code className="inline">grid-column: start-col 2 / end-col 4</code>
        <code className="inline">grid-row: start-row 3 / end-col 5</code>
      </div>
      <div className="filled">1</div>

      {/* Filler */}
      <div className="filled">1</div>
      <div className="filled">1</div>
      <div className="filled">1</div>
      <div className="filled">1</div>

      <div className="filled full-wide-two-tall">
        <code className="inline">grid-column: start-cols / end-cols</code>
        <code className="inline">grid-row: start-row 6 / end-rows</code>
      </div>
    </div>
  );
}
