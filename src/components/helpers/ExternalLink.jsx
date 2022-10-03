export default function ExternalLink({ externalURL, linkLabel }) {
  return (
    <a
      className="styled-link"
      target="_blank"
      rel="noopener"
      href={externalURL}
    >
      {linkLabel}
    </a>
  );
}
