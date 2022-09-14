import CodeWrapper from "../../../helpers/CodeWrapper";
import HighlightedCode from "../../../helpers/HighlightedCode";
import TwoEvenColumns from "./TwoEvenColumns";
import InteractiveGridCells from "./InteractiveGridCells";

import { grid_cols_base } from "../../../../code-samples/code-examples";

export default function WorkingWithColumns() {
  return (
    <section className="container">
      <article className="text">
        <h4>Working with Columns</h4>
        <p>
          If you wanted two even columns, you could write{" "}
          <code className="inline">grid-template-columns: 50% 50%;</code>, which
          gives each column half the grid's width, but you could also write{" "}
          <code className="inline">grid-template-columns: 1fr 1fr;</code>, which
          does the same thing: divides the grid's width into two parts and
          allocates 1 part to each.
        </p>
      </article>

      <CodeWrapper sections={1}>
        <HighlightedCode
          code={grid_cols_base}
          codeFilename={"styles/two-cols.css"}
          codeLang={"css"}
        />
      </CodeWrapper>

      <TwoEvenColumns />

      <article className="text">
        <p>
          Want more columns? Just keep adding on widths or fractional parts to
          the <code className="inline">grid-template-columns</code>! Make these
          columns visible by spacing them out by setting a gap,{" "}
          <code className="inline">column-gap: .75rem</code>.
        </p>
      </article>

      <InteractiveGridCells rowOrCol={"column"} />
    </section>
  );
}
