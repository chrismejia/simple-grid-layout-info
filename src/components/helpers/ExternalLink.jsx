export default function ExternalLink({ url, label, description, refNum }) {
  return (
    <li id={`ref-${refNum}`}>
      <a className="external" target="_blank" rel="noopener" href={url}>
        {label}
      </a>
      {` - ${description}`}
    </li>
  );
}
