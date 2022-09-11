import CodeWrapper from "../helpers/CodeWrapper";
import Divider from "../helpers/Divider";
import Footnote from "../helpers/Footnote";
import HighlightedCode from "../helpers/HighlightedCode";
import MDNQuote from "../helpers/MDNQuote";

import BasicEvenColumns from "../examples/BasicEvenColumns";
import BasicRowsColumns from "../examples/BasicRowsColumns";
import InteractiveGridCells from "../examples/InteractiveGridCells";

import { grid_cols_base } from "../../code-samples/code-examples";
import { mdnQuoteData } from "../../data/mdnQuote.data";

export default function RowsAndColumns() {
  return (
    <section className="container">
      <article className="text">
        <h3>Rows, Columns, All at Once.</h3>
        <p>
          The simplest grid is one that has just 1 column or 1 row; essentially
          just one cell on the grid. We can dictate the grid's breakdown using{" "}
          <code className="inline">grid-template-rows</code>,{" "}
          <code className="inline">grid-template-columns</code>, explicitly
          defining both, or by using{" "}
          <code className="inline">grid-template</code>.
        </p>
        <p>
          Just like other CSS, you can use units like{" "}
          <code className="inline">px/pt</code>,{" "}
          <code className="inline">em/rem</code>, and{" "}
          <code className="inline">vw/vh</code> to set the size of the grid's
          rows or columns
          <Footnote refLabel={5} />.
        </p>
        <p>
          CSS Grid also provides the <code className="inline">fr</code> unit,
          which allows for fractional divisions of an area
          <Footnote refLabel={6} />. The neat thing about the{" "}
          <code className="inline">fr</code> unit is that it saves you the
          hassle of having to manually calculate the percentage for a grid
          space.
        </p>
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

      <BasicEvenColumns />

      <article className="text">
        <p>
          Want more columns? Just keep adding on widths or fractional parts to
          the <code className="inline">grid-template-columns</code>! Make these
          columns visible by spacing them out by setting a gap,{" "}
          <code className="inline">column-gap: .75rem</code>.
        </p>
      </article>

      <InteractiveGridCells rowOrCol={"column"} />

      <article className="text">
        <h4>Working with Rows</h4>
        <p>
          Creating rows works pretty much the same way, just using{" "}
          <code className="inline">grid-template-rows</code>.
        </p>
      </article>

      <InteractiveGridCells rowOrCol={"row"} />

      <article className="text">
        <h4>Putting It All Together</h4>
        <p>
          If you want both columns and rows, you can declare both{" "}
          <code className="inline">grid-template-columns</code> and{" "}
          <code className="inline">grid-template-rows</code>.
        </p>

        <p>
          Let's say we want 3 columns and 3 rows; that's 9 grid areas available.
          Thanks to the <code className="inline">grid-auto-flow</code> property,
          we don't have to worry about <b>HOW</b> to fill the next
        </p>

        <MDNQuote {...mdnQuoteData.grid_auto_flow} />
      </article>

      <BasicRowsColumns />

      <article className="text">
        <h4>Heights & Widths of All Sizes (mixed sizings)</h4>
        <p>
          Using <code className="inline">fr</code> values makes it easy to
          assign column and row sizes relative to the grid's area. You can also
          mix different
        </p>
      </article>

      <Divider />
    </section>
  );
}
