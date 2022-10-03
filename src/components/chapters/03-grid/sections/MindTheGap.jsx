import CodeWrapper from "../../../helpers/CodeWrapper";
import HighlightedCode from "../../../helpers/HighlightedCode";
import MDNQuote from "../../../helpers/MDNQuote";
import ShowExampleCode from "../../../helpers/ShowExampleCode";

import NoGaps from "../visuals/NoGaps";

import {
  no_gap_jsx,
  no_gap_css,
  individual_gaps,
  same_gaps,
} from "../ex-code/mindTheGap.code";
import { mdnQuoteData } from "../../../../data/mdnQuote.data";

export default function MindTheGap() {
  return (
    <section className="container">
      <article className="text">
        <h3>Mind The Gap</h3>
        <p>
          You might've noticed the <code className="inline">gap: .75rem</code>{" "}
          in the previous example. It's one of three{" "}
          <code className="inline">gap (gutter)</code> CSS properties we can
          choose to dictate when setting up a new{" "}
          <code className="inline">grid</code>. Without gap values, each grid
          section would touch each other.
        </p>

        <MDNQuote {...mdnQuoteData.gap} />
      </article>

      <NoGaps />

      <ShowExampleCode exampleLabel={"No Gaps"}>
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
      </ShowExampleCode>

      <article className="text">
        <p>
          Gap sizes can be assigned individually to{" "}
          <code className="inline">column-gap</code> or to{" "}
          <code className="inline">row-gap</code>. They can also be assigned as
          a single combined <code className="inline">gap</code> value, similar
          to how <code className="inline">padding</code> and{" "}
          <code className="inline">margin</code> can have multiple combined
          values.
        </p>
      </article>

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
    </section>
  );
}
