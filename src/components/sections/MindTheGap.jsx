import { no_gap_jsx } from "../../code-samples/code-examples";
import CodeWrapper from "../helpers/CodeWrapper";
import HighlightedCode from "../helpers/HighlightedCode";
import HighlightedElement from "../helpers/HighlightedElement";

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
          code={no_gap_jsx}
          codeFilename={"NoGaps.jsx"}
          codeLang={"jsx"}
        />
      </CodeWrapper>

      <div className="grid no-gap outer-border">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </>
  );
}
