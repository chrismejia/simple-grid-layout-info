import Highlight, { defaultProps } from "prism-react-renderer";
import synthwave84 from "prism-react-renderer/themes/synthwave84";

export default function HighlightedCode({ code, codeLang, preClass }) {
  return (
    <Highlight
      {...defaultProps}
      code={code}
      language={codeLang}
      theme={synthwave84}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={`${className} ${preClass}`} style={style}>
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
  );
}
