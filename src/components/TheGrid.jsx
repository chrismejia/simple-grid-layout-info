import CodeWrapper from "./helpers/CodeWrapper";
import HighlightedCode from "./helpers/HighlightedCode";
import { grid_base, grid_cols_base } from "../code-examples";

export default function TheGrid() {
  return (
    <section className="container">
      <h2>Enter The Grid</h2>
      <p>
        CSS Grid Layout is a two-dimensional layout system for the web. It lets
        you lay content out in rows and columns. It has many features that make
        building complex layouts straightforward.
      </p>

      <h3>What is Grid Layout?</h3>
      <p>
        A grid is a collection of horizontal and vertical lines creating a
        pattern against which we can line up our design elements. They help us
        to create layouts in which our elements won't jump around or change
        width as we move from page to page, providing greater consistency on our
        websites.
      </p>
      <p>
        A grid will typically have columns, rows, and then gaps between each row
        and column. The gaps are commonly referred to as gutters.
      </p>

      <h3>Building A Grid</h3>
      <p>
        Start with the grid wrapper. <code className="inline">grid</code> itself
        is a <code className="inline">display</code> CSS value, like{" "}
        <code className="inline">flex</code>, for flexbox is.
      </p>

      <CodeWrapper sections={1}>
        <HighlightedCode
          code={grid_base}
          codeFilename={"styles/grid.css"}
          codeLang={"css"}
        />
      </CodeWrapper>

      <h4>Rows, Columns, All at Once.</h4>
      <p>
        The simplest grid is one that has just 1 column and 1 row. Let's instead
        make one with 2 columns.
      </p>
      <p>
        Each of these columns <code className="inline">fraction (fr)</code> of
        the full wrapper's width.
      </p>

      <CodeWrapper sections={1}>
        <HighlightedCode
          code={grid_cols_base}
          codeFilename={"styles/grid.css"}
          codeLang={"css"}
        />
      </CodeWrapper>
      {/* <p>
            Remember the width variables from earlier? That{" "}
            <code className="inline">12</code> comes into play here; this grid will
            have 12 columns.
          </p> */}
      <h4>Who Needs Code When You Have Eyes?</h4>
      <p>
        In what's arguably one of the coolest features that CSS Grid offers, you
        can dictate your <code className="inline">grid-template</code> just by
        creating a simple text "array" representing each{" "}
        <code className="inline">grid-area</code>.
      </p>
    </section>
  );
}
