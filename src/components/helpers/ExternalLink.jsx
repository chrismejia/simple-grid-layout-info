export default function ExternalLink({ linkUrl, linkText }) {
  return (
    <a className="external" target="_blank" rel="noopener" href={linkUrl}>
      {linkText}
    </a>
  );
}
