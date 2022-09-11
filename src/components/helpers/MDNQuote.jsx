export default function MDNQuote({ propName, mdnQuotes, mdnLink, defaultVal }) {
  return (
    <article className="mdn-quote">
      <h4>
        <a
          className="styled-link"
          target="_blank"
          rel="noopener"
          href={mdnLink}
        >
          {`${propName} `}
          <span className="material-symbols-rounded">link</span>
        </a>
      </h4>
      {mdnQuotes.map((quote, i) => (
        <p key={`${i}-${propName}`}>{quote}</p>
      ))}
      <p>
        <b>default:</b> {defaultVal}
      </p>
    </article>
  );
}
