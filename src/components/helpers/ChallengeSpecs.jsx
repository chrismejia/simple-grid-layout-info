export default function ChallengeSpecs({
  details,
  cols,
  width,
  rows,
  height,
  children,
}) {
  return (
    <div className="grid challenge-specs">
      <div className="challenge-details">
        <p>{details}</p>
        <p>{`Width: ${width}px | Height: ${height}px`}</p>
      </div>
      <div className="challenge-width">{`${cols} cols`}</div>
      <div className="challenge-height">{`${rows} rows`}</div>
      <div className="challenge">{children}</div>
    </div>
  );
}
