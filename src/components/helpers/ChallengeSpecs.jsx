export default function ChallengeSpecs({
  cols,
  width,
  rows,
  height,
  example,
  children,
}) {
  return (
    <div className="grid challenge-specs">
      <div className="challenge-details">
        {children}
        {children && <hr />}
        <p className="centered-text">{`Width: ${width}px | Height: ${height}px`}</p>
      </div>
      <div className="challenge-width">{`${cols} cols`}</div>
      <div className="challenge-height">{`${rows} rows`}</div>
      <div className="challenge">{example}</div>
    </div>
  );
}
