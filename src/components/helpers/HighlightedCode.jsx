import Highlight, { defaultProps } from "prism-react-renderer";
import synthwave84 from "prism-react-renderer/themes/synthwave84";

export default function HighlightedCode({ code, codeFilename, codeLang }) {
  return (
    <article className="single-code-block">
      <div className="example-code-label">
        <p>{codeFilename}</p>
      </div>
      <Highlight
        {...defaultProps}
        code={code}
        language={codeLang}
        theme={synthwave84}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={`${className} example-code`} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </article>
  );
}
