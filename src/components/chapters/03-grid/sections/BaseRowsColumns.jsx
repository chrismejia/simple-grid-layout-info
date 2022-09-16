export default function BaseRowsColumns({ isMixed }) {
  const style = isMixed
    ? "grid example outer-border mixed-rows-cols"
    : "grid example outer-border basic-rows-cols";

  return (
    <div className="resize">
      <article className={style}>
        {isMixed ? (
          <>
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
          </>
        ) : (
          <>
            <div className="filled">1</div>
            <div className="filled">2</div>
            <div className="filled">3</div>
            <div className="filled">4</div>
            <div className="filled">5</div>
            <div className="filled">6</div>
            <div className="filled">7</div>
            <div className="filled">8</div>
            <div className="filled">9</div>
          </>
        )}
      </article>
    </div>
  );
}
