export default function ExternalLink({ url, label, description, refLabel }) {
  return (
    <li id={`ref-${refLabel}`}>
      <a className="external" target="_blank" rel="noopener" href={url}>
        {label}
      </a>
      {` - ${description}`}
    </li>
  );
}
