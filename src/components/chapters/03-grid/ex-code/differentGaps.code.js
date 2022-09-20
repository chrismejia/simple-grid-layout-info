export const differentGaps_jsx = `<div className="different-gaps">
  <div className="filled">
    <code className="inline">row-gap ⇅</code>
  </div>
  <div className="filled">
    <code className="inline">1rem</code>
  </div>
  <div className="filled">
    <code className="inline">column-gap ⇄</code>
  </div>
  <div className="filled">
    <code className="inline">3rem</code>
  </div>
</div>`;

export const differentGaps_css = `.different-gaps {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 100px);

  row-gap: 1rem;
  column-gap: 3rem;
}`;
