export default function MixingSizingUnits() {
  return (
    <section className="container">
      <article className="text">
        <h3>Mixing Size Units Works Too</h3>
        <p>
          Using <code className="inline">fr</code> values makes it easy to
          assign column and row sizes relative to the grid's area. You can also
          define different sizes for each row, or column, independently.
        </p>
        <p>
          fr is calculated based on the remaining space when combined with other
          length values. In this example, 3rem and 25% would be subtracted from
          the available space before the size of fr is calculated: 1fr = ((width
          of grid) - (3rem) - (25% of width of grid)) / 3{" "}
        </p>
      </article>
    </section>
  );
}
