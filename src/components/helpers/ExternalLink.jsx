export default function ExternalLink({ url, label, description }) {
  return (
    <>
      <a className="external" target="_blank" rel="noopener" href={url}>
        {label}
      </a>
      {` - ${description}`}
    </>
  );
}
