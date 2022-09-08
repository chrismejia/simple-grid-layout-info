import CodeWrapper from "../helpers/CodeWrapper";
import Footnote from "../helpers/Footnote";
import HighlightedCode from "../helpers/HighlightedCode";
import NoGaps from "../examples/NoGaps";
import {
  no_gap_jsx,
  no_gap_css,
  individual_gaps,
  same_gaps,
} from "../../code-samples/ex-MindTheGap";

export default function MindTheGap() {
  return (
    <>
      <h3>Mind The Gap</h3>
      <p>
        You might've noticed the{" "}
        <code className="inline">column-gap: .75rem</code> in the previous
        example. It's one of three <code className="inline">gap (gutter)</code>{" "}
        values we can choose to dictate when setting up a new{" "}
        <code className="inline">grid</code>.
      </p>

      <p>
        From MDN: The <code className="inline">gap</code> CSS property sets the
        gaps (gutters) between rows and columns. <Footnote refLabel={7} />
      </p>
      <p>
        There's also a <code className="inline">row-gap</code> value. Without
        gap values, each grid section would touch each other.
      </p>

      <CodeWrapper sections={2}>
        <HighlightedCode
          code={no_gap_jsx}
          codeFilename={"NoGaps.jsx"}
          codeLang={"jsx"}
        />
        <HighlightedCode
          code={no_gap_css}
          codeFilename={"no-gaps.css"}
          codeLang={"css"}
        />
      </CodeWrapper>

      <NoGaps />

      <p>
        Gap sizes can be assigned individually to{" "}
        <code className="inline">column-gap</code> or to{" "}
        <code className="inline">row-gap</code>. They can also be assigned as a
        single combined <code className="inline">gap</code> value, similar to
        how <code className="inline">padding</code> and{" "}
        <code className="inline">margin</code> can have multiple combined
        values.
      </p>

      <CodeWrapper sections={2}>
        <HighlightedCode
          code={individual_gaps}
          codeFilename={"Individual Values"}
          codeLang={"css"}
        />
        <HighlightedCode
          code={same_gaps}
          codeFilename={"Combined Values"}
          codeLang={"css"}
        />
      </CodeWrapper>
    </>
  );
}
