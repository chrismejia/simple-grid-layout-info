export default function Footnote({ refLabel }) {
  return (
    <sup>
      <a className="footnote" href={`#ref-${refLabel}`}>
        <i>{`[${refLabel}]`}</i>
      </a>
    </sup>
  );
}
