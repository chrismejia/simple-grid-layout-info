export default function SeeingTheGridLines({ linesAreVisible }) {
  const classStyles = linesAreVisible
    ? "grid grid-lines visible-lines"
    : "grid grid-lines";

  return (
    <div className={classStyles}>
      <div className="filled">1</div>
      <div className="filled">2</div>
      <div className="filled">3</div>
      <div className="filled">4</div>
      <div className="filled">5</div>
      <div className="filled">6</div>
      <div className="filled">7</div>
      <div className="filled">8</div>
      <div className="filled">9</div>
    </div>
  );
}
