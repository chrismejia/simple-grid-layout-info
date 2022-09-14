import MDNSVG from "./MDNSVG";
export default function MDNQuote({ propName, mdnQuotes, mdnLink, defaultVal }) {
  return (
    <article className=" grid mdn-quote">
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
      <div className="mdn-logo">
        <MDNSVG />
      </div>
      <div className="mdn-body">
        {mdnQuotes.map((quote, i) => (
          <p key={`${i}-${propName}`}>{quote}</p>
        ))}
        <p>
          <b>default:</b> {defaultVal}
        </p>
      </div>
    </article>
  );
}
