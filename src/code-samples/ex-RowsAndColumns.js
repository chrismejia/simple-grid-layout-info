export const basicRowsCols_jsx = `<div className="basic-rows-cols">
  <div className="filled">1</div>
  <div className="filled">2</div>
  <div className="filled">3</div>
  <div className="filled">4</div>
  <div className="filled">5</div>
  <div className="filled">6</div>
  <div className="filled">7</div>
  <div className="filled">8</div>
  <div className="filled">9</div>
</div>`;

export const basicRowsCols_css = `.basic-rows-cols {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: .75rem
}

.filled {
  height: 50px;
  background-color: #9b00a3
}`;

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
