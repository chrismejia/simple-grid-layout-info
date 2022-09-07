import CodeWrapper from "../helpers/CodeWrapper";
import HighlightedCode from "../helpers/HighlightedCode";
import NoGaps from "../examples/NoGaps";
import { no_gap_jsx, no_gap_css } from "../../code-samples/code-examples";

export default function MindTheGap() {
  return (
    <>
      <h3>Mind The Gap</h3>
      <p>
        The example above features the CSS value{" "}
        <code className="inline">column-gap: .75rem</code>. There's also a{" "}
        <code className="inline">row-gap</code> value. Without gap values, each
        grid section would touch each other.
      </p>

      <CodeWrapper sections={2}>
        <HighlightedCode
          code={no_gap_jsx}
          codeFilename={"NoGaps.jsx"}
          codeLang={"jsx"}
        />
        <HighlightedCode
          code={no_gap_css}
          codeFilename={"styles/examples.css"}
          codeLang={"css"}
        />
      </CodeWrapper>

      <NoGaps />
    </>
  );
}
