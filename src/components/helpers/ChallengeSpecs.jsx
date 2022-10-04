export default function ChallengeSpecs({
  cols,
  rows,
  width,
  height,
  gap,
  example,
  children,
}) {
  return (
    <div className="grid challenge-specs">
      <div className="challenge-details">
        {children}
        {children && <hr />}
        <p className="centered-text">
          {`Width: ${width}px | Height: ${height}px`}
          {gap && ` | Gap: ${gap}`}
        </p>
      </div>
      <div className="challenge-width">{`${cols} cols`}</div>
      <div className="challenge-height">{`${rows} rows`}</div>
      <div className="challenge">{example}</div>
    </div>
  );
}
