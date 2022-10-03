import InlineFootnote from "../../../helpers/InlineFootnote";

export default function IntroToRowsColumns({ footnoteRefs }) {
  const { ref5, ref6 } = footnoteRefs;

  return (
    <section className="container">
      <article className="text">
        <h3 id="rows-and-columns">Rows, Columns, All at Once.</h3>
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
          <InlineFootnote refLabel={5} refLocation={ref5} />.
        </p>
        <p>
          CSS Grid also provides the <code className="inline">fr</code> unit,
          which allows for fractional divisions of an area
          <InlineFootnote refLabel={6} refLocation={ref6} />. The neat thing
          about the <code className="inline">fr</code> unit is that it saves you
          the hassle of having to manually calculate the percentage for a grid
          space.
        </p>
      </article>
    </section>
  );
}
