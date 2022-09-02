export default function Footnote({ refNum }) {
  return (
    <sup>
      <a className="footnote" href={`#ref-${refNum}`}>
        <i>{`[${refNum}]`}</i>
      </a>
    </sup>
  );
}
