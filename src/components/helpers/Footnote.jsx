export default function Footnote({ refLabel }) {
  return (
    <span>
      {" "}
      <a className="footnote styled-link" href={`#ref-${refLabel}`}>
        {`[${refLabel}]`}
      </a>
    </span>
  );
}
