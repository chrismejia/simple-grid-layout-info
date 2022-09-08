import CodeWrapper from "../helpers/CodeWrapper";
import HighlightedCode from "../helpers/HighlightedCode";

import { grid_base } from "../../code-samples/code-examples";

export default function GridFirstDeclaration() {
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
    </section>
  );
}
