export const mixedRowsCols_jsx = `<div className="mixed-rows-cols">
  <div className="filled">
    <span>1fr col</span>
    <span>3fr row</span>
  </div>
  <div className="filled">
    <span>2fr col</span>
    <span>3fr row</span>
  </div>
  <div className="filled">
    <span>3fr col</span>
    <span>3fr row</span>
  </div>
  <div className="filled">
    <span>1fr col</span>
    <span>2fr row</span>
  </div>
  <div className="filled">
    <span>2fr col</span>
    <span>2fr row</span>
  </div>
  <div className="filled">
    <span>3fr col</span>
    <span>2fr row</span>
  </div>
  <div className="filled">
    <span>1fr col</span>
    <span>1fr row</span>
  </div>
  <div className="filled">
    <span>2fr col</span>
    <span>1fr row</span>
  </div>
  <div className="filled">
    <span>3fr col</span>
    <span>1fr row</span>
  </div>
</div>`;

export const mixedRowsCols_css = `.mixed-rows-cols {
  display: grid;
  grid-template-columns: 1fr 2fr 3fr;
  grid-template-rows: 3fr 2fr 1fr;
  gap: .75rem;
}

.filled {
  height: 50px;
  background-color: #9b00a3
}`;
