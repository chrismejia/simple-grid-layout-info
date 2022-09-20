import CodeWrapper from "../../../helpers/CodeWrapper";
import HighlightedCode from "../../../helpers/HighlightedCode";
import ShowExampleCode from "../../../helpers/ShowExampleCode";

import DifferentGaps from "../visuals/DifferentGaps";

import {
  differentGaps_jsx,
  differentGaps_css,
} from "../ex-code/differentGaps.code";

export default function DifferentGapSizing() {
  return (
    <section className="container">
      <article className="text">
        <h4>Differing Gap Sizes</h4>
        <p>
          As shown above, you <b>can</b> define different individual{" "}
          <code className="inline">gap</code> values for{" "}
          <code className="inline">column-gap</code> and{" "}
          <code className="inline">row-gap</code>.
        </p>
        <p>
          However, you can only assign a single value per{" "}
          <code className="inline">row-gap</code> or{" "}
          <code className="inline">column-gap</code>.
        </p>
      </article>

      <DifferentGaps />

      <ShowExampleCode exampleLabel={"Different Gap Sizes"}>
        <CodeWrapper sections={2}>
          <HighlightedCode
            code={differentGaps_jsx}
            codeLang={"jsx"}
            codeFilename={"DifferentGaps.jsx"}
          />
          <HighlightedCode
            code={differentGaps_css}
            codeLang={"css"}
            codeFilename={"different-gaps.css"}
          />
        </CodeWrapper>
      </ShowExampleCode>
    </section>
  );
}
