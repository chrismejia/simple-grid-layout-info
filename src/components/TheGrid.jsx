import CodeWrapper from "./helpers/CodeWrapper";
import ExternalLink from "./helpers/ExternalLink";
import Footnote from "./helpers/Footnote";
import HighlightedCode from "./helpers/HighlightedCode";
import SectionReferences from "./helpers/SectionReferences";
import {
  grid_base,
  grid_cols_base,
  inter_css_cols_start,
  inter_css_cols_end,
  css_repeat_cols_start,
  css_repeat_cols_end,
} from "../code-examples";
import InteractiveGridCells from "./helpers/InteractiveGridCells";

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
        The simplest grid is one that has just 1 column or 1 row; essentially
        just one cell on the grid. We can dictate the grid's breakdown using{" "}
        <code className="inline">grid-template-rows</code>,{" "}
        <code className="inline">grid-template-columns</code>, or a combination
        of both.
      </p>

      <p>
        Just like other CSS, you can use units like{" "}
        <code className="inline">px/pt</code>,{" "}
        <code className="inline">em/rem</code>, and{" "}
        <code className="inline">vw/vh</code> to designate the size of the
        grid's rows or columns
        <Footnote refLabel={5} />.
      </p>

      <p>
        CSS Grid also provides the <code className="inline">fr</code> unit,
        which allows for fractional divisions of an area
        <Footnote refLabel={6} />. The neat thing about the{" "}
        <code className="inline">fr</code> unit is that it saves you the hassle
        of having to manually calculate the percentage for a grid space.
      </p>

      <p>
        If you want two even columns, you could write{" "}
        <code className="inline">grid-template-columns: 50% 50%;</code>, which
        gives each column half the grid's width, but you could also write{" "}
        <code className="inline">grid-template-columns: 1fr 1fr;</code>, which
        does the same thing: divides the grid's width into two parts and
        allocates 1 part to each.
      </p>

      <CodeWrapper sections={1}>
        <HighlightedCode
          code={grid_cols_base}
          codeFilename={"styles/grid.css"}
          codeLang={"css"}
        />
      </CodeWrapper>

      <p>
        Want more columns? Just keep adding on widths or fractional parts to the{" "}
        <code className="inline">grid-template-columns</code>! Space out these
        columns with <code className="inline">column-gap: 1rem</code>.
      </p>

      <InteractiveGridCells
        cssStart={inter_css_cols_start}
        cssEnd={inter_css_cols_end}
      />

      <h3>
        <del>Don't</del> Repeat Yourself
      </h3>

      <p>
        Remember how we made our{" "}
        <a className="external" href="#breakpoints">
          container widths divisible by 12
        </a>
        ? Well, to have 12 columns, we'd need 12{" "}
        <code className="inline">1fr</code>, like so:
      </p>

      <p className="centered-text">
        <code className="inline">
          grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr
        </code>
      </p>

      <p>
        This isn't ideal as it's a pain to write that all out, and it's not easy
        to understand how many columns you've got in your grid at a glance.
        Thankfully, you can just <code className="inline">repeat</code>{" "}
        yourself.
      </p>

      <p className="centered-text">
        <code className="inline">grid-template-columns: repeat(12, 1fr)</code>
      </p>

      <InteractiveGridCells
        cssStart={css_repeat_cols_start}
        cssEnd={css_repeat_cols_end}
      />

      <h3>Who Needs Code When You Have Eyes?</h3>
      <p>
        In what's arguably one of the coolest features that CSS Grid offers, you
        can dictate a <code className="inline">grid-template</code> just by
        creating a simple text "array" representing each{" "}
        <code className="inline">grid-area</code>.
      </p>

      <SectionReferences startrefLabel={5}>
        <ExternalLink
          url={
            "https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units"
          }
          label={"[MDN] CSS values and units"}
          description={"Official reference docs"}
          refLabel={5}
        />
        <ExternalLink
          url={"https://css-tricks.com/introduction-fr-css-unit/"}
          label={"[CSS-Tricks] An Introduction to the `fr` CSS Unit"}
          description={"Has useful examples and links to more articles"}
          refLabel={6}
        />
        <ExternalLink url={""} label={""} description={""} />
        <ExternalLink url={""} label={""} description={""} />
      </SectionReferences>
    </section>
  );
}
